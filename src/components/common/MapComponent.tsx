
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapComponentProps {
  address: string;
  className?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ address, className = "w-full h-64" }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  
  // The coordinates for 28 Fancidale Heights, Marina Dr, Ramsgate, 4285
  // These are approximate coordinates for Ramsgate, South Africa
  const [lng, setLng] = useState(30.3450);
  const [lat, setLat] = useState(-30.5830);
  const [zoom, setZoom] = useState(14);

  useEffect(() => {
    if (!mapContainer.current) return;
    
    // Check if token is already in localStorage
    const storedToken = localStorage.getItem('mapbox_token');
    if (storedToken) {
      setMapboxToken(storedToken);
      initializeMap(storedToken);
    }
  }, [mapContainer.current]);

  useEffect(() => {
    if (mapboxToken && !map.current) {
      initializeMap(mapboxToken);
    }
  }, [mapboxToken]);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || map.current) return;
    
    mapboxgl.accessToken = token;
    
    const newMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    // Add marker for the location
    const marker = new mapboxgl.Marker({ color: '#f97316' })
      .setLngLat([lng, lat])
      .setPopup(new mapboxgl.Popup().setHTML(`<p>${address}</p>`))
      .addTo(newMap);
    
    // Add navigation controls
    newMap.addControl(new mapboxgl.NavigationControl(), 'top-right');
    
    map.current = newMap;

    // Clean up on unmount
    return () => {
      newMap.remove();
    };
  };

  const handleTokenSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const token = formData.get('token') as string;
    
    if (token) {
      localStorage.setItem('mapbox_token', token);
      setMapboxToken(token);
    }
  };

  if (!mapboxToken) {
    return (
      <div className={`${className} flex flex-col items-center justify-center bg-gray-100 rounded-lg p-4`}>
        <p className="mb-4 text-center text-hosting-dark-gray">
          Please enter your Mapbox token to view the interactive map.
          <br />
          <a 
            href="https://account.mapbox.com/access-tokens/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-hosting-orange hover:underline"
          >
            Get a token from Mapbox
          </a>
        </p>
        <form onSubmit={handleTokenSubmit} className="w-full max-w-md">
          <div className="flex flex-col md:flex-row gap-2">
            <input 
              type="text" 
              name="token" 
              placeholder="Enter your Mapbox token" 
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hosting-orange"
              required
            />
            <button 
              type="submit" 
              className="bg-hosting-orange text-white px-4 py-2 rounded-md hover:bg-hosting-orange/90"
            >
              Load Map
            </button>
          </div>
        </form>
      </div>
    );
  }

  return <div ref={mapContainer} className={`${className} rounded-lg`} />;
};

export default MapComponent;
