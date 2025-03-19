
import React, { useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { useInterval } from '@/hooks/use-interval';

interface Banner {
  id: number;
  image: string;
}

const BannerCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const banners: Banner[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1200&h=500",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&h=500",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=500",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=500",
    }
  ];

  // Auto-advance the carousel every 5 seconds
  useInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  }, 5000);

  return (
    <section className="w-full relative h-auto mt-0"> {/* Changed mt-16 to mt-0 to remove space */}
      <Carousel 
        className="w-full" 
        opts={{
          startIndex: currentIndex,
          loop: true,
          align: "center",
          dragFree: false,
          skipSnaps: false,
          inViewThreshold: 0.7,
          duration: 30,
        }}
        setApi={(api) => {
          if (api) {
            api.on('select', () => {
              setCurrentIndex(api.selectedScrollSnap());
            });
          }
        }}
      >
        <CarouselContent className="transition-transform duration-700 ease-in-out">
          {banners.map((banner) => (
            <CarouselItem key={banner.id} className="w-full">
              <div className="relative w-full overflow-hidden">
                <img 
                  src={banner.image} 
                  alt={`Banner ${banner.id}`} 
                  className="w-full object-cover object-center transition-all duration-500 h-[500px]"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-hosting-orange w-6" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/60 transition-colors duration-300" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/60 transition-colors duration-300" />
      </Carousel>
    </section>
  );
};

export default BannerCarousel;
