import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('scroll', resizeCanvas);

    // Particle system
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      pulseSpeed: number;
      pulsePhase: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        
        // Random colors matching theme
        const colors = [
          'rgba(226, 54, 54, ', // primary red
          'rgba(0, 127, 255, ', // accent blue
          'rgba(255, 215, 0, ', // gold
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.5 + 0.2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around screen
        if (this.x > canvasWidth) this.x = 0;
        if (this.x < 0) this.x = canvasWidth;
        if (this.y > canvasHeight) this.y = 0;
        if (this.y < 0) this.y = canvasHeight;

        // Pulse effect
        this.pulsePhase += this.pulseSpeed;
      }

      draw() {
        if (!ctx) return;
        const pulseFactor = Math.sin(this.pulsePhase) * 0.3 + 0.7;
        const currentOpacity = this.opacity * pulseFactor;
        
        ctx.fillStyle = this.color + currentOpacity + ')';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * pulseFactor, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color + currentOpacity + ')';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Create particles
    const particles: Particle[] = [];
    const particleCount = 150;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    // Connection lines between nearby particles
    const drawConnections = () => {
      if (!ctx) return;
      const maxDistance = 150;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.15;
            ctx.strokeStyle = `rgba(226, 54, 54, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Hexagonal grid pattern
    const drawHexGrid = () => {
      if (!ctx) return;
      const hexSize = 80;
      const rows = Math.ceil(canvas.height / (hexSize * 1.5)) + 1;
      const cols = Math.ceil(canvas.width / (hexSize * Math.sqrt(3))) + 1;

      ctx.strokeStyle = 'rgba(226, 54, 54, 0.03)';
      ctx.lineWidth = 1;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * hexSize * Math.sqrt(3) + (row % 2) * hexSize * Math.sqrt(3) / 2;
          const y = row * hexSize * 1.5;

          // Draw hexagon
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const hx = x + hexSize * Math.cos(angle);
            const hy = y + hexSize * Math.sin(angle);
            if (i === 0) {
              ctx.moveTo(hx, hy);
            } else {
              ctx.lineTo(hx, hy);
            }
          }
          ctx.closePath();
          ctx.stroke();
        }
      }
    };

    // Floating energy orbs
    class EnergyOrb {
      x: number;
      y: number;
      radius: number;
      speed: number;
      angle: number;
      color: string;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.radius = Math.random() * 40 + 20;
        this.speed = Math.random() * 0.5 + 0.2;
        this.angle = Math.random() * Math.PI * 2;
        
        const colors = [
          'rgba(226, 54, 54, 0.1)',
          'rgba(0, 127, 255, 0.1)',
          'rgba(255, 215, 0, 0.1)',
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.angle += this.speed * 0.01;
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        if (this.x > canvasWidth + this.radius) this.x = -this.radius;
        if (this.x < -this.radius) this.x = canvasWidth + this.radius;
        if (this.y > canvasHeight + this.radius) this.y = -this.radius;
        if (this.y < -this.radius) this.y = canvasHeight + this.radius;
      }

      draw() {
        if (!ctx) return;
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const orbs: EnergyOrb[] = [];
    for (let i = 0; i < 8; i++) {
      orbs.push(new EnergyOrb(canvas.width, canvas.height));
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw hex grid
      drawHexGrid();

      // Draw and update energy orbs
      orbs.forEach(orb => {
        orb.update(canvas.width, canvas.height);
        orb.draw();
      });

      // Draw and update particles
      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height);
        particle.draw();
      });

      // Draw connections
      drawConnections();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default AnimatedBackground;
