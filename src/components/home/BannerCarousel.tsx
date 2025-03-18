
import React, { useEffect, useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import Button from "@/components/ui/Button";
import { Phone, Globe } from "lucide-react";
import { useInterval } from '@/hooks/use-interval';

interface Banner {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string[];
  partnerLogo?: string;
  partnerText: string;
  cta: string;
  theme: {
    textColor: string;
    headingColor: string;
  }
}

const BannerCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const banners: Banner[] = [
    {
      id: 1,
      image: "public/lovable-uploads/cc5a2576-c1e7-4f41-95b3-0c097c3eed87.png",
      title: "Reach New Heights",
      subtitle: "Microsoft 365 Business",
      description: [
        "Manage content and tools in one place",
        "Boost productivity with Microsoft apps",
        "Enhance communication with email, video meetings, and chat",
        "Protect your business with enterprise-grade security"
      ],
      partnerLogo: "",
      partnerText: "Proudly Partnered",
      cta: "Contact Us Now",
      theme: {
        textColor: "text-white",
        headingColor: "text-white"
      }
    },
    {
      id: 2,
      image: "public/lovable-uploads/60d97b9b-0b6d-4741-8412-58e4d5ca12aa.png",
      title: "Break Free Stay Safe",
      subtitle: "Protect Your Business",
      description: [
        "Protects any device (Windows, Mac, iOS, Android)",
        "Secures Microsoft Office 365 communication and collaboration",
        "Combats evasive threats with EDR capabilities",
        "Cloud-based solution for easy management and scalability"
      ],
      partnerLogo: "",
      partnerText: "Proudly Partnered",
      cta: "Contact Us Now",
      theme: {
        textColor: "text-white",
        headingColor: "text-white"
      }
    },
    {
      id: 3,
      image: "public/lovable-uploads/9bbf696f-10d8-4c67-a83c-094082328af0.png",
      title: "Endless conversations",
      subtitle: "Prepaid fiber & LTE",
      description: [
        "Quality calls over Wi-Fi, 3G, 4G, and LTE",
        "Low call rates across all South African networks",
        "Port your landline number or get a new one",
        "Cost management and fixed monthly billing"
      ],
      partnerLogo: "",
      partnerText: "Proudly Partnered",
      cta: "Contact Us Now",
      theme: {
        textColor: "text-white",
        headingColor: "text-white"
      }
    },
    {
      id: 4,
      image: "public/lovable-uploads/a1404c56-4425-4cdd-b4bd-1aecc74a29cc.png",
      title: "Save on Energy",
      subtitle: "Maximise your energy savings",
      description: [
        "Real-time municipal rate calculations to ensure accurate savings",
        "Solutions tailored to your energy needs",
        "No hidden fees, no surprises"
      ],
      partnerLogo: "",
      partnerText: "Proudly Partnered",
      cta: "Contact Us Now",
      theme: {
        textColor: "text-white",
        headingColor: "text-white"
      }
    }
  ];

  // Auto-advance the carousel every 5 seconds
  useInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  }, 5000);

  return (
    <section className="w-full bg-black relative h-screen">
      <Carousel 
        className="w-full h-full" 
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
        <CarouselContent className="h-full">
          {banners.map((banner) => (
            <CarouselItem key={banner.id} className="w-full h-full">
              <div className="relative w-full h-full overflow-hidden">
                <img 
                  src={banner.image} 
                  alt={banner.title} 
                  className="w-full h-full object-cover object-center"
                />
                
                <div className="absolute inset-0 flex items-center">
                  <div className="container-custom">
                    <div className="max-w-2xl animate-fade-up">
                      <h3 className={`text-2xl font-semibold mb-1 ${banner.theme.textColor}`}>
                        {banner.subtitle}
                      </h3>
                      <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${banner.theme.headingColor}`}>
                        {banner.title}
                      </h2>
                      
                      <ul className="space-y-2 mb-8">
                        {banner.description.map((item, index) => (
                          <li key={index} className={`${banner.theme.textColor} text-lg`}>
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-start sm:items-center">
                        <Button className="bg-hosting-orange hover:bg-hosting-orange/90">
                          {banner.cta}
                        </Button>
                        
                        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                          <a href="tel:+27827770331" className="flex items-center text-white hover:text-hosting-orange transition-colors">
                            <Phone className="mr-2" size={18} />
                            <span>+27 82 777 0331</span>
                          </a>
                          
                          <a href="https://www.hostingkzn.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-hosting-orange transition-colors">
                            <Globe className="mr-2" size={18} />
                            <span>www.hostingkzn.com</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
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
