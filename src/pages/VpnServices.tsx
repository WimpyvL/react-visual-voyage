
import React from 'react';
import Layout from '../components/layout/Layout';
import ServiceCard from '../components/common/ServiceCard';
import { Button } from "@/components/ui/button";
import { Zap, MapPin, Shield, Eye, HeadphonesIcon, Globe } from 'lucide-react';

const VpnServices: React.FC = () => {
  const features = [
    {
      title: 'High-Speed Connections',
      description: 'Experience fast and reliable VPN connections.',
      icon: <Zap size={36} />
    },
    {
      title: 'Multiple Server Locations',
      description: 'Connect to servers worldwide for optimal performance.',
      icon: <MapPin size={36} />
    },
    {
      title: 'Strong Encryption Protocols',
      description: 'Protect your data with advanced encryption.',
      icon: <Shield size={36} />
    },
    {
      title: 'No Logs Policy',
      description: 'We do not track or store your browsing activity.',
      icon: <Eye size={36} />
    },
    {
      title: '24/7 Customer Support',
      description: 'Get assistance whenever you need it.',
      icon: <HeadphonesIcon size={36} />
    },
    {
      title: 'Global Network',
      description: 'Access content from anywhere in the world.',
      icon: <Globe size={36} />
    }
  ];

  const steps = [
    {
      step: 1,
      title: 'Consultation',
      description: 'Discuss your VPN needs with our experts.'
    },
    {
      step: 2,
      title: 'Setup',
      description: "We'll guide you through the setup process."
    },
    {
      step: 3,
      title: 'Secure Connection',
      description: 'Start browsing securely and privately.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-hosting-dark-gray pt-32 pb-16 text-white text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">VPN Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-up animate-delay-100">
            Secure and private internet browsing with our VPN services.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading animate-fade-up">Our VPN Service Features</h2>
          <div className="section-heading-divider animate-fade-up animate-delay-100"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <ServiceCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                className="animate-fade-up"
                containerClassName="h-full"
                hoverEffect={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-hosting-light-gray">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-hosting-dark-gray">
              Ready to Secure Your Connection?
            </h2>
            <p className="text-hosting-medium-gray mb-8">
              Contact us today to learn more about our VPN services.
            </p>
            <Button 
              asChild 
              variant="default"
              className="bg-hosting-orange hover:bg-hosting-orange/90 text-white"
            >
              <span>Get Started</span>
            </Button>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading animate-fade-up">How to Get Started</h2>
          <div className="section-heading-divider animate-fade-up animate-delay-100"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {steps.map((step) => (
              <div key={step.step} className="text-center animate-fade-up">
                <div className="bg-hosting-orange text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-semibold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-hosting-medium-gray text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Info CTA */}
      <section className="py-16 bg-hosting-dark-gray text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need More Information?
            </h2>
            <p className="text-gray-300 mb-8">
              Contact us for a free consultation and quote.
            </p>
            <Button 
              asChild
              variant="default"
              className="bg-hosting-orange hover:bg-hosting-orange/90 text-white"
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VpnServices;
