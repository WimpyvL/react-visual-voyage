
import React from 'react';
import ServiceCard from '../common/ServiceCard';
import { Monitor, WifiIcon, Mail, Server, Shield, Sun, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    }
  ];

  return (
    <section className="py-20 bg-hosting-light-gray">
      <div className="container-custom">
        <h2 className="section-heading animate-fade-up">THIS IS HOW WE GET YOU THERE</h2>
        <div className="section-heading-divider animate-fade-up animate-delay-100"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
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
  );
};

export default Services;
