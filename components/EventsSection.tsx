import { Music, Code, Trophy, Gamepad2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EventsSection = () => {
  const events = [
    {
      icon: Music,
      category: 'CULTURAL',
      title: 'Dance & Music',
      description: 'Showcase your talents in solo and group performances, battle competitions, and live concerts.',
      gradient: 'from-primary to-red-600',
    },
    {
      icon: Code,
      category: 'TECHNICAL',
      title: 'Tech Competitions',
      description: 'Coding challenges, hackathons, robotics, and AI workshops for the tech-savvy heroes.',
      gradient: 'from-accent to-blue-600',
    },
    {
      icon: Trophy,
      category: 'SPORTS',
      title: 'Athletic Events',
      description: 'Cricket, football, basketball, athletics, and more. Compete for glory and prizes.',
      gradient: 'from-gold to-yellow-500',
    },
    {
      icon: Gamepad2,
      category: 'INFORMAL',
      title: 'Fun & Games',
      description: 'Treasure hunts, gaming tournaments, cosplay contests, and surprise celebrity appearances.',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="events" className="relative py-24 px-4 overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-slide-in">
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl text-gradient">
            EPIC EVENTS
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-20 bg-primary rounded-full" />
            <p className="text-secondary text-sm tracking-widest">CHOOSE YOUR ADVENTURE</p>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-glow transition-all duration-500 hover:scale-105 animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <CardContent className="relative p-8 space-y-6">
                {/* Icon */}
                <div className="relative">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${event.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <event.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <p className="text-muted-foreground text-sm font-semibold tracking-widest">
                    {event.category}
                  </p>
                  <h3 className="font-heading text-2xl text-foreground group-hover:text-gradient transition-all duration-300">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Power-up indicator */}
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 w-8 rounded-full bg-gradient-to-r ${event.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-4">
            More events to be announced soon. Stay tuned for updates!
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full border-glow-accent">
            <div className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" />
            <span className="text-sm font-semibold text-accent">Registration Opens Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
