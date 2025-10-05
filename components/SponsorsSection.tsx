import { Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SponsorsSection = () => {
  const sponsorTiers = [
    {
      tier: 'TITLE SPONSOR',
      sponsors: ['Stark Industries'],
    },
    {
      tier: 'PLATINUM SPONSORS',
      sponsors: ['Wayne Enterprises', 'Oscorp', 'Pym Technologies'],
    },
    {
      tier: 'GOLD SPONSORS',
      sponsors: ['S.H.I.E.L.D.', 'Rand Corporation', 'Nelson & Murdock', 'Damage Control'],
    },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 via-transparent to-card/20" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-slide-in">
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl text-gradient">
            OUR SPONSORS
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-20 bg-primary rounded-full" />
            <p className="text-secondary text-sm tracking-widest">POWERED BY HEROES</p>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>
        </div>

        {/* Sponsors by Tier */}
        <div className="space-y-12">
          {sponsorTiers.map((tier, tierIndex) => (
            <div
              key={tierIndex}
              className="animate-scale-in"
              style={{ animationDelay: `${tierIndex * 0.2}s` }}
            >
              {/* Tier Title */}
              <h3 className="font-heading text-2xl text-center text-muted-foreground mb-8 tracking-wider">
                {tier.tier}
              </h3>

              {/* Sponsors Grid */}
              <div className={`grid gap-6 ${
                tier.sponsors.length <= 2 ? 'sm:grid-cols-2 max-w-3xl mx-auto' : 
                tier.sponsors.length <= 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 
                'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
              }`}>
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <div
                    key={sponsorIndex}
                    className="group glass rounded-xl p-8 flex flex-col items-center justify-center gap-4 hover:border-glow transition-all duration-300 hover:scale-105 cursor-pointer min-h-[150px]"
                  >
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Building2 className="w-8 h-8 text-primary-foreground" />
                    </div>

                    {/* Sponsor Name */}
                    <h4 className="font-heading text-lg text-center text-foreground group-hover:text-gradient transition-all duration-300">
                      {sponsor}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <div className="mt-20 text-center space-y-6 animate-fade-in">
          <div className="inline-block glass rounded-2xl p-8 border-glow-accent">
            <h3 className="font-heading text-2xl text-foreground mb-3">
              Want to Sponsor Alegria 2025?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join us in creating an unforgettable experience for thousands of students.
            </p>
            <Button className="bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent text-primary-foreground font-semibold px-8 py-6 rounded-xl border-glow transition-all duration-300 hover:scale-105">
              Contact Us for Sponsorship
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
