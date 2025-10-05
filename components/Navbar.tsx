'use client'

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList
} from '@/components/ui/navigation-menu';
import { Menu, X, Shield, Zap, Calendar, Users, Trophy, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Shield },
    { id: 'about', label: 'About', icon: Zap },
    { id: 'events', label: 'Events', icon: Trophy },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'sponsors', label: 'Sponsors', icon: Users },
    { id: 'contact', label: 'Contact', icon: Phone },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/10' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <div 
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => scrollToSection('home')}
            >
              <div className="relative">
                <Shield className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-accent/20 transition-colors duration-300" />
              </div>
              <span className="font-heading text-2xl font-bold text-gradient group-hover:scale-105 transition-transform duration-300">
                ALEGRIA
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <NavigationMenu>
                <NavigationMenuList className="space-x-2">
                  {navItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <NavigationMenuItem key={item.id}>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => scrollToSection(item.id)}
                            className="group flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-secondary hover:text-primary transition-all duration-300 hover:bg-primary/10 border border-transparent hover:border-primary/20 hover:glow"
                          >
                            <IconComponent className="h-4 w-4 group-hover:text-accent transition-colors duration-300" />
                            <span className="group-hover:text-gradient transition-colors duration-300">
                              {item.label}
                            </span>
                          </button>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Button
                onClick={() => scrollToSection('events')}
                className="group relative bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground font-heading px-6 py-2 rounded-lg border-glow transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Zap className="h-4 w-4" />
                  <span>Join Event</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-primary hover:text-accent hover:bg-primary/10 border border-primary/20 hover:border-accent/20"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-16 left-0 right-0 glass border-b border-primary/20 shadow-xl">
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-4">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="group flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-left text-secondary hover:text-primary transition-all duration-300 hover:bg-primary/10 border border-transparent hover:border-primary/20"
                    >
                      <IconComponent className="h-5 w-5 group-hover:text-accent transition-colors duration-300" />
                      <span className="font-medium group-hover:text-gradient transition-colors duration-300">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
                
                {/* Mobile CTA Button */}
                <div className="pt-4 border-t border-primary/20">
                  <Button
                    onClick={() => scrollToSection('events')}
                    className="w-full group relative bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground font-heading py-3 rounded-lg border-glow transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <Zap className="h-4 w-4" />
                      <span>Join Event</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
