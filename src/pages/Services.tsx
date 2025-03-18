
import React from 'react';
import Layout from '../components/layout/Layout';
import ServiceCard from '../components/common/ServiceCard';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  WifiIcon, 
  Mail, 
  Server, 
  Shield, 
  Sun, 
  Globe,
  ArrowRight
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Web Design',
      description: 'Creative web design to enhance your online presence.',
      icon: <Monitor size={36} />,
      link: '/web-design'
    },
    {
      title: 'Connectivity',
      description: 'Seamless connections free to the home/business/LTE.',
      icon: <WifiIcon size={36} />,
      link: '/connectivity'
    },
    {
      title: 'Email & Automation',
      description: 'Efficient email systems and automation tools.',
      icon: <Mail size={36} />,
      link: '/email-automation'
    },
    {
      title: 'Hosting',
      description: 'Reliable hosting services to keep your website online.',
      icon: <Server size={36} />,
      link: '/hosting'
    },
    {
      title: 'Cloud Services',
      description: 'Reliable cloud solutions to manage and maintain your business.',
      icon: <Globe size={36} />,
      link: '/cloud-services'
    },
    {
      title: 'Security',
      description: 'Comprehensive security solutions for peace of mind.',
      icon: <Shield size={36} />,
      link: '/security'
    },
    {
      title: 'Solar Solutions',
      description: 'Innovative solar solutions for energy efficiency.',
      icon: <Sun size={36} />,
      link: '/solar-solutions'
    },
    {
      title: 'Fibre Prepaid',
      description: 'High-speed fibre solutions for your internet needs.',
      icon: <WifiIcon size={36} />,
      link: '/fibre-prepaid'
    },
    {
      title: 'VPN Services',
      description: 'Secure and private internet browsing solutions.',
      icon: <Shield size={36} />,
      link: '/vpn-services'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-hosting-dark-gray pt-32 pb-16 text-white text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-up animate-delay-100">
            Comprehensive digital solutions to drive your business forward
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                to={service.link} 
                key={service.title}
                className="group"
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  className="animate-fade-up"
                  containerClassName="h-full"
                  hoverEffect={true}
                />
                <div className="mt-3 text-center">
                  <span className="text-hosting-orange text-sm font-medium inline-flex items-center group-hover:underline">
                    Learn More <ArrowRight size={14} className="ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Wizard */}
      <section className="py-16 bg-hosting-light-gray">
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

      {/* CTA Section */}
      <section className="py-16 bg-hosting-orange text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to get started with our services?
            </h2>
            <div className="mt-8">
              <Button 
                href="/contact" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-hosting-orange"
              >
                Contact Us Today
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
