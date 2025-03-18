
import React, { useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { useInterval } from '@/hooks/use-interval';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface Banner {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const BannerCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const banners: Banner[] = [
    {
      id: 1,
      image: "public/lovable-uploads/cc5a2576-c1e7-4f41-95b3-0c097c3eed87.png",
      title: "Transforming Businesses with Technology",
      subtitle: "Innovative IT solutions to drive your success",
      ctaText: "Explore Our Services",
      ctaLink: "/services"
    },
    {
      id: 2,
      image: "public/lovable-uploads/60d97b9b-0b6d-4741-8412-58e4d5ca12aa.png",
      title: "Secure & Reliable Hosting",
      subtitle: "99.9% uptime guarantee with 24/7 expert support",
      ctaText: "View Hosting Plans",
      ctaLink: "/hosting"
    },
    {
      id: 3,
      image: "public/lovable-uploads/9bbf696f-10d8-4c67-a83c-094082328af0.png",
      title: "Fast & Reliable Internet Connectivity",
      subtitle: "High-speed solutions for homes and businesses",
      ctaText: "Check Coverage",
      ctaLink: "/connectivity"
    },
    {
      id: 4,
      image: "public/lovable-uploads/a1404c56-4425-4cdd-b4bd-1aecc74a29cc.png",
      title: "Harness the Power of Solar Energy",
      subtitle: "Sustainable solutions to reduce costs and carbon footprint",
      ctaText: "Solar Solutions",
      ctaLink: "/solar-solutions"
    },
    {
      id: 5,
      image: "public/lovable-uploads/44098d1d-943c-4c35-b66f-53846424051d.png",
      title: "Comprehensive Security Solutions",
      subtitle: "Protect your digital assets with our advanced security",
      ctaText: "Learn About Security",
      ctaLink: "/security"
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
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                  <div className="container-custom">
                    <div className="max-w-lg text-white p-8 bg-black/30 backdrop-blur-sm rounded-lg">
                      <h2 className="text-3xl md:text-4xl font-bold mb-3 animate-fade-up">{banner.title}</h2>
                      <p className="text-lg md:text-xl mb-6 text-white/80 animate-fade-up animate-delay-100">{banner.subtitle}</p>
                      <Button asChild className="bg-hosting-orange hover:bg-opacity-90 animate-fade-up animate-delay-200">
                        <Link to={banner.ctaLink}>{banner.ctaText}</Link>
                      </Button>
                    </div>
                  </div>
                </div>
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
