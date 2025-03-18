
import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = heroRef.current;
    if (!element) return;

    // Simple parallax effect
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (element) {
        element.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gray-100 mt-20"
      style={{
        background: 'linear-gradient(rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(public/lovable-uploads/96118922-4731-4dcc-a501-91620d979f63.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container-custom z-10 relative">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-hosting-dark-gray mb-6 animate-fade-up">
            <span className="block">READY TO</span> 
            <span className="text-hosting-orange">GO</span>
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-hosting-dark-gray mb-8 animate-fade-up animate-delay-200">
            ONLINE
          </h2>
          <p className="text-xl text-hosting-medium-gray mb-8 max-w-xl mx-auto animate-fade-up animate-delay-300">
            Elevate your digital presence with our comprehensive range of web services
          </p>
          <div className="animate-fade-up animate-delay-400">
            <Button href="/services" size="lg">
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
