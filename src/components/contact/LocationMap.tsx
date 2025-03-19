
import React from 'react';
import MapComponent from '../common/MapComponent';

const LocationMap: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md animate-fade-up animate-delay-200">
      <h2 className="text-2xl font-bold mb-6 text-hosting-dark-gray">Our Location</h2>
      <div className="rounded-lg overflow-hidden">
        <MapComponent 
          address="28 Fancidale Heights, Marina Dr, Ramsgate, 4285" 
          className="w-full h-64 object-cover"
          coordinates={[30.8914, -30.3378]} // Corrected coordinates for Ramsgate
        />
      </div>
    </div>
  );
};

export default LocationMap;
