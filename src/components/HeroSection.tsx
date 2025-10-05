import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToEvents = () => {
    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
  };

  const title = "ALEGRIA";
  const letters = title.split('');

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
        {/* Main Logo/Title with Letter Animation */}
        <div className="space-y-4">
          <h1 className="font-heading text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] leading-none tracking-wider">
            {letters.map((letter, index) => (
              <span
                key={index}
                className="inline-block text-gradient animate-scale-in"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both',
                }}
              >
                {letter}
              </span>
            ))}
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <p className="font-heading text-4xl sm:text-5xl md:text-6xl text-metallic animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
              2025
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl md:text-3xl text-secondary tracking-widest max-w-3xl mx-auto animate-slide-in" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
          UNLEASH THE HERO WITHIN
        </p>

        {/* CTA Button */}
        <div className="pt-8 animate-scale-in" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
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
