'use client'

import { useState, useEffect } from 'react';
import CustomCursor from '@/components/CustomCursor';
import LoadingScreen from '@/components/LoadingScreen';
import AnimatedBackground from '@/components/AnimatedBackground';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EventsSection from '@/components/EventsSection';
import ScheduleSection from '@/components/ScheduleSection';
import RegistrationSection from '@/components/RegistrationSection';
import SponsorsSection from '@/components/SponsorsSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <>
      <CustomCursor />
      <AnimatedBackground />
      
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}
      
      <main className={`relative transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <ScheduleSection />
        <RegistrationSection />
        <SponsorsSection />
        <Footer />
      </main>
    </>
  );
}
