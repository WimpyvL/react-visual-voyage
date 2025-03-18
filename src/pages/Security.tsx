import React from 'react';
import Layout from '../components/layout/Layout';
import ServiceCard from '../components/common/ServiceCard';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Bell, FileText } from 'lucide-react';

const Security: React.FC = () => {
  const services = [
    {
      title: 'Network Security',
      description: 'Protect your network from unauthorized access and cyber threats with our advanced security solutions.',
      icon: <Shield size={36} />
    },
    {
      title: 'Endpoint Protection',
      description: 'Secure your devices and data with our comprehensive endpoint protection services.',
      icon: <Lock size={36} />
    },
    {
      title: 'Security Audits',
      description: 'Identify vulnerabilities and improve your security posture with our thorough security audits.',
      icon: <Bell size={36} />
    },
    {
      title: 'Compliance Solutions',
      description: 'Ensure your business meets industry regulations and standards with our compliance solutions.',
      icon: <FileText size={36} />
    }
  ];

  return (
    <Layout>
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading animate-fade-up">Our Security Solutions</h2>
          <div className="section-heading-divider animate-fade-up animate-delay-100"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                className="animate-fade-up"
                containerClassName="h-full"
                hoverEffect={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-hosting-dark-gray text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Secure Your Digital Assets?
            </h2>
            <p className="text-gray-300 mb-8">
              Contact us today to discuss your security needs and ensure your business is protected.
            </p>
            <Button asChild variant="default">
              <a href="/contact">Get Started</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Security;
