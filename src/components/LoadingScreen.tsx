import { useEffect, useState } from 'react';
import loaderIcon from '@/assets/loader-icon.png';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center space-y-8 animate-fade-in">
        {/* Logo/Icon */}
        <div className="relative mx-auto w-32 h-32">
          <img 
            src={loaderIcon} 
            alt="Loading" 
            className="w-full h-full object-contain animate-spin-slow glow"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50 animate-glow-pulse" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="font-heading text-6xl md:text-8xl text-gradient tracking-wider">
            ALEGRIA 2025
          </h1>
          <p className="text-secondary text-lg tracking-widest">
            UNLEASH THE HERO WITHIN
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto space-y-2">
          <div className="h-1 bg-muted rounded-full overflow-hidden border-glow">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-muted-foreground text-sm font-mono">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
