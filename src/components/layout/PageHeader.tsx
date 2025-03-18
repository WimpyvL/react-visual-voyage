
import React from 'react';
import { useLocation } from 'react-router-dom';

const PageHeader: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;
  
  // Define patterns for different routes
  const getPattern = () => {
    const patterns = [
      'public/lovable-uploads/cc5a2576-c1e7-4f41-95b3-0c097c3eed87.png',
      'public/lovable-uploads/60d97b9b-0b6d-4741-8412-58e4d5ca12aa.png',
      'public/lovable-uploads/9bbf696f-10d8-4c67-a83c-094082328af0.png',
      'public/lovable-uploads/a1404c56-4425-4cdd-b4bd-1aecc74a29cc.png'
    ];
    
    // Use path to determine pattern (simple hash function)
    const index = Math.abs(path.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % patterns.length;
    return patterns[index];
  };
  
  return (
    <div className="relative w-full h-32 md:h-40 overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url(${getPattern()})`,
          opacity: 0.6
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-hosting-dark-gray/60 to-hosting-orange/60"></div>
      
      {/* Abstract elements */}
      <div className="absolute inset-0">
        <div className="container-custom h-full relative">
          <div className="absolute -bottom-4 md:-bottom-6 left-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/10"></div>
          <div className="absolute top-4 right-8 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10"></div>
          <div className="absolute -top-10 left-1/3 w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/5"></div>
          <div className="absolute bottom-8 right-1/4 w-12 h-12 rounded-full bg-white/10"></div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
