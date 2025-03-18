
import React from 'react';
import Button from '../ui/Button';

const SecuritySection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <img 
              src="public/lovable-uploads/89dd90dc-9542-4135-8036-cca5e2a522a8.png" 
              alt="Security Services" 
              className="w-full max-w-md mx-auto"
            />
          </div>
          
          <div className="animate-fade-up animate-delay-200">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Securing Your Digital World<br />
              <span className="text-hosting-orange">with Expertise</span>
            </h2>
            <div className="w-16 h-1 bg-hosting-orange mb-6"></div>
            <p className="text-hosting-medium-gray mb-6">
              HOSTING KZN is dedicated to delivering world-class online security solutions. From our humble beginnings, we have evolved into a trusted partner for numerous businesses, thanks to our commitment to safeguarding digital assets, our expert team, and our client-focused approach.
            </p>
            
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <span className="text-hosting-orange font-medium">Customer Trust:</span>
                <span className="ml-2 text-hosting-medium-gray">We prioritize the security of our clients' data, always.</span>
              </li>
              <li className="flex items-start">
                <span className="text-hosting-orange font-medium">Years of Experience:</span>
                <span className="ml-2 text-hosting-medium-gray">Proven expertise in online security built over the years.</span>
              </li>
              <li className="flex items-start">
                <span className="text-hosting-orange font-medium">Local Expertise:</span>
                <span className="ml-2 text-hosting-medium-gray">Proudly using KZN with a deep understanding of local security needs.</span>
              </li>
            </ul>
            
            <Button variant="primary">
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
