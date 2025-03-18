
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-heading animate-fade-up">What Our Clients Say</h2>
        <div className="section-heading-divider animate-fade-up animate-delay-100"></div>
        
        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-hosting-light-gray rounded-lg p-8 shadow-md animate-fade-up animate-delay-200">
            <div className="flex justify-center mb-4">
              <img 
                src="public/lovable-uploads/30f887f0-20c2-40da-86f4-3f26a932e2f9.png" 
                alt="Testimonial Icon" 
                className="w-16 h-16"
              />
            </div>
            <blockquote className="text-center text-hosting-dark-gray">
              <p className="text-lg italic">
                "Hosting KZN transformed our business. Their solutions are top-notch and their support is exceptional!"
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
