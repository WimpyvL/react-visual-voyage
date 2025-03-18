
import React from 'react';
import { Button } from "@/components/ui/button";

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-hosting-orange text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's build your digital future together. Get in touch today!
          </h2>
          <div className="mt-8">
            <Button 
              asChild
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-hosting-orange"
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
