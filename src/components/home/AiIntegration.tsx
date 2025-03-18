
import React from 'react';
import { Button } from "@/components/ui/button";

const AiIntegration: React.FC = () => {
  return (
    <section className="py-20 bg-hosting-dark-gray text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Empowering Businesses with<br />
              <span className="text-hosting-orange">AI Integration</span>
            </h2>
            <div className="w-16 h-1 bg-hosting-orange mb-6"></div>
            <p className="text-gray-300 mb-6">
              Our company is dedicated to delivering cutting-edge AI solutions to businesses. From advanced data analytics to innovative AI strategies, we have become a trusted partner for numerous organizations. Thanks to our commitment to personalized, high-quality work, and our focus on client success.
            </p>
            
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <span className="text-hosting-orange font-medium">Customer Satisfaction:</span>
                <span className="ml-2 text-gray-300">We prioritize our clients' needs, always.</span>
              </li>
              <li className="flex items-start">
                <span className="text-hosting-orange font-medium">Years of Experience:</span>
                <span className="ml-2 text-gray-300">Certified in AI integration built over the years.</span>
              </li>
              <li className="flex items-start">
                <span className="text-hosting-orange font-medium">Industry Expertise:</span>
                <span className="ml-2 text-gray-300">Having domain expertise with tailored AI solutions.</span>
              </li>
            </ul>
            
            <Button asChild className="bg-hosting-orange text-white hover:bg-opacity-90 px-6 py-3 rounded-md font-medium">
              <a href="/services">LEARN MORE</a>
            </Button>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-up animate-delay-200">
            <img 
              src="public/lovable-uploads/74007c39-f013-4b76-85bd-127009c0fb8d.png" 
              alt="AI Integration" 
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiIntegration;
