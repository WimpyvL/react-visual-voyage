
import React from 'react';
import Button from '../ui/Button';

const FindService: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading animate-fade-up">Find Your Perfect Service</h2>
          <div className="section-heading-divider animate-fade-up animate-delay-100"></div>
          <p className="text-hosting-medium-gray mb-8 animate-fade-up animate-delay-200">
            Not sure which service fits your needs? Let our wizard guide you through the process and recommend 
            the best options for your specific requirements.
          </p>
          <div className="animate-fade-up animate-delay-300">
            <Button>
              USE OUR SERVICE WIZARD
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindService;
