import React from 'react';
import Layout from '../components/layout/Layout';
import ServiceCard from '../components/common/ServiceCard';
import { Button } from '@/components/ui/button';
import { Globe, Shield, Users, Zap, Lock, Laptop } from 'lucide-react';

const VpnServices: React.FC = () => {
  const services = [
    {
      title: 'Personal VPN',
      description: 'Secure your personal devices and data with our easy-to-use VPN service.',
      icon: <Globe size={36} />
    },
    {
      title: 'Business VPN',
      description: 'Protect your business communications and data with our secure and reliable VPN service.',
      icon: <Shield size={36} />
    },
    {
      title: 'Remote Access VPN',
      description: 'Enable secure remote access to your network for employees and contractors.',
      icon: <Users size={36} />
    },
    {
      title: 'High-Speed VPN',
      description: 'Experience lightning-fast VPN speeds with our optimized servers.',
      icon: <Zap size={36} />
    },
    {
      title: 'Secure Encryption',
      description: 'Protect your data with our advanced encryption protocols.',
      icon: <Lock size={36} />
    },
    {
      title: 'Multi-Device Support',
      description: 'Use our VPN service on all your devices, including laptops, desktops, and mobile devices.',
      icon: <Laptop size={36} />
    }
  ];

  return (
    <Layout>
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading animate-fade-up">Our VPN Services</h2>
          <div className="section-heading-divider animate-fade-up animate-delay-100"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
              Ready to Secure Your Online Activities?
            </h2>
            <p className="text-gray-300 mb-8">
              Contact us today to discuss your VPN needs and ensure your digital privacy.
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

export default VpnServices;
