import { Shield, Zap, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  const features = [
    {
      icon: Shield,
      title: 'EPIC THEME',
      description: 'Experience the Marvel Universe come to life with immersive decorations, superhero vibes, and cinematic experiences.',
    },
    {
      icon: Zap,
      title: 'POWER-PACKED EVENTS',
      description: 'From cultural performances to technical competitions, sports, and informal games - unleash your superpowers.',
    },
    {
      icon: Users,
      title: 'UNITE AS HEROES',
      description: 'Join thousands of students in celebrating creativity, talent, and the spirit of heroism at our greatest fest yet.',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 px-4 overflow-hidden">
      {/* Cursor Glow Effect */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(226, 54, 54, 0.15), transparent 40%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 127, 255, 0.1), transparent 40%)`,
        }}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      {/* Floating Circles Animation */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-primary/20 rounded-full animate-spin-slow" />
      <div className="absolute top-20 left-20 w-24 h-24 border border-accent/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
      <div className="absolute bottom-10 right-10 w-40 h-40 border border-gold/20 rounded-full animate-spin-slow" style={{ animationDuration: '25s' }} />
      <div className="absolute bottom-20 right-20 w-28 h-28 border border-primary/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      
      {/* Pulsing Dots */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
      <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-accent rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-gold rounded-full animate-glow-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-glow-pulse" style={{ animationDelay: '0.5s' }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-slide-in">
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl text-gradient">
            ABOUT ALEGRIA
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-20 bg-primary rounded-full" />
            <p className="text-secondary text-sm tracking-widest">THE MARVEL EXPERIENCE</p>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>
        </div>

        {/* Main Description */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6 animate-fade-in">
          <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed">
            Welcome to <span className="text-primary font-semibold">Alegria 2025</span> - where the extraordinary 
            meets the exceptional. This year, we&apos;re bringing the <span className="text-accent font-semibold">Marvel Universe</span> to 
            life in the most spectacular college fest you&apos;ve ever witnessed.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Get ready for three days of non-stop action, creativity, and celebration as we transform our campus 
            into a superhero headquarters. Whether you&apos;re a performer, competitor, or spectator - 
            your hero&apos;s journey begins here.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass rounded-2xl p-8 hover:border-glow transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow group-hover:glow-accent transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-20 blur-xl" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-2xl text-foreground mb-3 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
