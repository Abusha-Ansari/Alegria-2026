import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { useState } from 'react';

const RegistrationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    category: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Registration submitted! Check your email for confirmation.', {
      description: 'Welcome to Alegria 2025, hero!',
    });
    setFormData({ name: '', email: '', phone: '', college: '', category: '' });
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-slide-in">
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl text-gradient">
            REGISTER NOW
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-20 bg-primary rounded-full" />
            <p className="text-secondary text-sm tracking-widest">JOIN THE ADVENTURE</p>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Early bird registrations open now! Secure your spot and unlock exclusive perks for Alegria 2025.
          </p>
        </div>

        {/* Registration Form */}
        <div className="glass rounded-2xl p-8 sm:p-12 border-glow animate-scale-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-semibold">
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Tony Stark"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background/50 border-border/50 focus:border-primary transition-colors"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-semibold">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="tony@starkindustries.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background/50 border-border/50 focus:border-primary transition-colors"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground font-semibold">
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="bg-background/50 border-border/50 focus:border-primary transition-colors"
              />
            </div>

            {/* College */}
            <div className="space-y-2">
              <Label htmlFor="college" className="text-foreground font-semibold">
                College/University *
              </Label>
              <Input
                id="college"
                type="text"
                placeholder="MIT"
                value={formData.college}
                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                required
                className="bg-background/50 border-border/50 focus:border-primary transition-colors"
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label htmlFor="category" className="text-foreground font-semibold">
                Event Category *
              </Label>
              <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cultural">Cultural Events</SelectItem>
                  <SelectItem value="technical">Technical Events</SelectItem>
                  <SelectItem value="sports">Sports Events</SelectItem>
                  <SelectItem value="informal">Informal Events</SelectItem>
                  <SelectItem value="all">All Events</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground font-heading text-xl py-6 rounded-xl border-glow transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">REGISTER NOW</span>
            </Button>

            {/* Terms */}
            <p className="text-xs text-muted-foreground text-center">
              By registering, you agree to our terms and conditions. 
              Registration fee: ₹500 (covers all 3 days)
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
