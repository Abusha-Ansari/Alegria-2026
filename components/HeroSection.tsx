import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const heroBackground = '/assets/hero-background.jpg';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const scrollToEvents = () => {
    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
  };

  const title = "ALEGRIA";

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let isPaused = false;

    const animationCycle = () => {
      const typingInterval = setInterval(() => {
        if (!isPaused && !isDeleting) {
          // Typing phase
          if (currentIndex <= title.length) {
            setDisplayedText(title.slice(0, currentIndex));
            currentIndex++;
          } else {
            // Pause after typing complete
            isPaused = true;
            setTimeout(() => {
              isPaused = false;
              isDeleting = true;
            }, 2000); // 2 second pause
          }
        } else if (isDeleting && !isPaused) {
          // Deleting phase
          if (currentIndex > 0) {
            currentIndex--;
            setDisplayedText(title.slice(0, currentIndex));
          } else {
            // Reset for next cycle
            isDeleting = false;
            setTimeout(() => {
              // Start next cycle
              animationCycle();
            }, 1000); // 1 second pause before restarting
            clearInterval(typingInterval);
          }
        }
      }, isDeleting ? 100 : 300); // Faster deletion (100ms) vs typing (300ms)

      return typingInterval;
    };

    const interval = animationCycle();
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          transform: 'scale(1.1)',
        }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
      
      {/* Animated Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 space-y-8 animate-slide-in">
        {/* Main Logo/Title with Typing Animation */}
        <div className="space-y-4">
          <h1 className="font-heading text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] leading-none tracking-wider relative">
            <span className="text-gradient">
              {displayedText}
            </span>
            <span 
              className={`inline-block w-2 h-[0.9em] bg-primary ml-2 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 align-bottom`}
            />
          </h1>
          <div className="flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '3s', animationFillMode: 'both' }}>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <p className="font-heading text-4xl sm:text-5xl md:text-6xl text-metallic">
              2025
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl md:text-3xl text-secondary tracking-widest max-w-3xl mx-auto animate-slide-in" style={{ animationDelay: '3.3s', animationFillMode: 'both' }}>
          UNLEASH THE HERO WITHIN
        </p>

        {/* CTA Button */}
        <div className="pt-8 animate-scale-in" style={{ animationDelay: '3.6s', animationFillMode: 'both' }}>
          <Button
            onClick={scrollToEvents}
            size="lg"
            className="group relative bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground font-heading text-2xl px-12 py-8 rounded-xl border-glow transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">ENTER THE FEST</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-glow-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
