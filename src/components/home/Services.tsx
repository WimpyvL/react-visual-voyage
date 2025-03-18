
import React from 'react';
import ServiceCard from '../common/ServiceCard';
import { Monitor, WifiIcon, Mail, Server, Shield, Sun, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Services: React.FC = () => {
  const services = [
    {
      title: 'Web Design',
      description: 'Creative web design to enhance your online presence.',
      longDescription: 'Professional, responsive designs that capture your brand essence and provide seamless user experiences across all devices. Our web designs are optimized for conversions and built with the latest technologies.',
      icon: <Monitor size={36} />,
      link: '/web-design'
    },
    {
      title: 'Connectivity',
      description: 'Seamless connections free to the home/business/LTE.',
      longDescription: 'High-speed, reliable internet connectivity solutions for homes and businesses. We offer fiber, LTE, and wireless options customized to your specific needs and location requirements.',
      icon: <WifiIcon size={36} />,
      link: '/connectivity'
    },
    {
      title: 'Email & Automation',
      description: 'Efficient email systems and automation tools.',
      longDescription: 'Enterprise-grade email solutions with advanced security features. Our automation workflows streamline your business processes and increase productivity while reducing manual tasks.',
      icon: <Mail size={36} />,
      link: '/email-automation'
    },
    {
      title: 'Hosting',
      description: 'Reliable hosting services to keep your website online.',
      longDescription: 'Scalable, secure hosting solutions with 99.9% uptime guarantee. Our hosting packages include regular backups, security monitoring, and expert technical support available 24/7.',
      icon: <Server size={36} />,
      link: '/hosting'
    },
    {
      title: 'Cloud Services',
      description: 'Reliable cloud solutions to manage and maintain your business.',
      longDescription: 'Comprehensive cloud infrastructure that scales with your business. Our cloud services include virtual servers, storage solutions, backup systems, and disaster recovery planning.',
      icon: <Globe size={36} />,
      link: '/cloud-services'
    },
    {
      title: 'Security',
      description: 'Comprehensive security solutions for peace of mind.',
      longDescription: 'Multi-layered security approach to protect your digital assets. We provide firewall protection, intrusion detection, vulnerability assessments, and employee security awareness training.',
      icon: <Shield size={36} />,
      link: '/security'
    },
    {
      title: 'Solar Solutions',
      description: 'Innovative solar solutions for energy efficiency.',
      longDescription: 'Sustainable energy alternatives that reduce your carbon footprint and electricity costs. Our solar solutions are custom-designed for both residential and commercial properties.',
      icon: <Sun size={36} />,
      link: '/solar-solutions'
    },
    {
      title: 'Fibre Prepaid',
      description: 'High-speed fibre solutions for your internet needs.',
      longDescription: 'Flexible, no-contract fiber options with pay-as-you-go convenience. Get high-speed internet access without long-term commitments or hidden fees.',
      icon: <WifiIcon size={36} />,
      link: '/fibre-prepaid'
    }
  ];

  return (
    <section className="py-20 bg-hosting-light-gray">
      <div className="container-custom">
        <h2 className="section-heading animate-fade-up">THIS IS HOW WE GET YOU THERE</h2>
        <div className="section-heading-divider animate-fade-up animate-delay-100"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={service.title} className="flex flex-col h-full">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="flex-grow">
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                      className="animate-fade-up"
                      containerClassName="h-full"
                    />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 p-4 bg-white shadow-lg border border-gray-200">
                  <div className="flex justify-between items-start">
                    <div className="text-hosting-orange mb-2">
                      {service.icon}
                    </div>
                    <span className="text-xs font-medium bg-hosting-orange text-white px-2 py-1 rounded-full">Premium Service</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{service.longDescription}</p>
                  <div className="text-sm text-hosting-orange flex items-center">
                    <span>View service details</span>
                    <ArrowRight size={14} className="ml-1" />
                  </div>
                </HoverCardContent>
              </HoverCard>
              
              <div className="mt-4 text-center flex-shrink-0">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link 
                        to={service.link}
                        className="group inline-flex items-center text-hosting-orange text-sm font-medium group-hover:underline"
                      >
                        Learn More <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent className="bg-hosting-orange text-white">
                      <p>Discover our {service.title.toLowerCase()} solutions!</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
