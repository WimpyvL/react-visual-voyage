
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
      image: "public/lovable-uploads/cc5a2576-c1e7-4f41-95b3-0c097c3eed87.png",
    },
    {
      id: 2,
      image: "public/lovable-uploads/60d97b9b-0b6d-4741-8412-58e4d5ca12aa.png",
    },
    {
      id: 3,
      image: "public/lovable-uploads/9bbf696f-10d8-4c67-a83c-094082328af0.png",
    },
    {
      id: 4,
      image: "public/lovable-uploads/a1404c56-4425-4cdd-b4bd-1aecc74a29cc.png",
    }
  ];

  // Auto-advance the carousel every 5 seconds
  useInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  }, 5000);

  return (
    <section className="w-full relative h-auto mt-16">
      <Carousel 
        className="w-full" 
        opts={{
          startIndex: currentIndex,
          loop: true
        }}
        setApi={(api) => {
          if (api) {
            api.on('select', () => {
              setCurrentIndex(api.selectedScrollSnap());
            });
          }
        }}
      >
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id} className="w-full">
              <div className="relative w-full overflow-hidden">
                <img 
                  src={banner.image} 
                  alt={`Banner ${banner.id}`} 
                  className="w-full object-cover object-center"
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
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-hosting-orange w-6" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
    </section>
  );
};

export default BannerCarousel;
