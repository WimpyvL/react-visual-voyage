
import React from 'react';
import Layout from '../components/layout/Layout';
import ServiceCard from '../components/common/ServiceCard';
import { Button } from '@/components/ui/button';
import { Layers, Server, HardDrive, Clock } from 'lucide-react';

const Hosting: React.FC = () => {
  const features = [
    {
      title: '99.9% Uptime Guarantee',
      description: 'State-of-the-art infrastructure ensuring your website stays online 24/7/365.',
      icon: <Layers size={36} />
    },
    {
      title: 'Advanced Security',
      description: 'DDoS protection, SSL certificates, and daily backups to keep your data safe.',
      icon: <Server size={36} />
    },
    {
      title: 'Lightning Fast Performance',
      description: 'SSD storage and optimized servers for faster loading and improved user experience.',
      icon: <HardDrive size={36} />
    },
    {
      title: '24/7 Expert Support',
      description: 'Dedicated technical support team ready to assist you anytime.',
      icon: <Clock size={36} />
    }
  ];

  const hostingSolutions = [
    {
      title: 'Shared Hosting',
      description: 'Perfect for small to medium websites with moderate traffic.',
      icon: '1'
    },
    {
      title: 'VPS Hosting',
      description: 'Dedicated resources for growing businesses requiring more control.',
      icon: '2'
    },
    {
      title: 'Dedicated Servers',
      description: 'Maximum performance and control for high-traffic websites.',
      icon: '3'
    },
    {
      title: 'Cloud Hosting',
      description: 'Scalable solutions with pay-as-you-go flexibility.',
      icon: '4'
    }
  ];

  const hostingPlans = [
    {
      title: 'Essential Host',
      price: 'R99',
      period: 'pm',
      features: [
        '5GB SSD Storage',
        '10 Email Accounts',
        'Free Basic SSL Cert'
      ],
      popular: false
    },
    {
      title: 'Enhanced Host',
      price: 'R275',
      period: 'pm',
      features: [
        '20GB SSD Storage',
        'Unlimited Bandwidth',
        'Free Basic SSL Cert'
      ],
      popular: true
    },
    {
      title: 'Comprehensive Host',
      price: 'R575',
      period: 'pm',
      features: [
        '100GB SSD Storage',
        'Unlimited Bandwidth',
        'Free Basic SSL Cert'
      ],
      popular: false
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-hosting-dark-gray pt-32 pb-16 text-white text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">Professional Web Hosting Solutions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-up animate-delay-100">
            Experience enterprise-grade hosting with unmatched reliability, speed, and support
          </p>
          <div className="mt-8 animate-fade-up animate-delay-200">
            <Button asChild variant="default">
              <a href="/contact">Start Your Journey</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-hosting-light-gray">
        <div className="container-custom">
          <h2 className="section-heading animate-fade-up">Why Choose Our Hosting Services?</h2>
          <div className="section-heading-divider animate-fade-up animate-delay-100"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
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

      {/* Find Service */}
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
              <Button asChild variant="default">
                <a href="/service-wizard">USE OUR SERVICE WIZARD</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Solutions */}
      <section className="py-16 bg-hosting-light-gray">
        <div className="container-custom">
          <h2 className="section-heading animate-fade-up">Hosting Solutions</h2>
          <div className="section-heading-divider animate-fade-up animate-delay-100"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {hostingSolutions.map((solution, index) => (
              <div 
                key={solution.title} 
                className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-md animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="bg-hosting-orange text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl font-semibold">
                  {solution.icon}
                </div>
                <h3 className="text-hosting-dark-gray text-xl font-medium mb-2">{solution.title}</h3>
                <p className="text-hosting-medium-gray text-sm">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hosting Plans */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading animate-fade-up">Hosting Plans</h2>
          <div className="section-heading-divider animate-fade-up animate-delay-100"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {hostingPlans.map((plan, index) => (
              <div 
                key={plan.title} 
                className={`bg-white rounded-lg p-6 flex flex-col text-center shadow-md border-2 ${
                  plan.popular ? 'border-hosting-orange relative' : 'border-transparent'
                } animate-fade-up`}
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-hosting-orange text-white text-xs font-semibold py-1 px-3 rounded-bl-lg rounded-tr-lg">
                    Most Popular
                  </div>
                )}
                <h3 className="text-hosting-dark-gray text-xl font-medium mb-2">{plan.title}</h3>
                <div className="my-4">
                  <span className="text-3xl font-bold text-hosting-orange">{plan.price}</span>
                  <span className="text-hosting-medium-gray">{plan.period}</span>
                </div>
                <ul className="mb-6 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="py-2 border-t border-gray-100 text-hosting-medium-gray flex items-center justify-center">
                      <span className="text-hosting-orange mr-2">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="default" className={plan.popular ? 'bg-hosting-orange hover:bg-opacity-90' : ''}>
                  <a href="/contact">Get Started</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-hosting-dark-gray text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-8">
              Join thousands of satisfied customers who trust us with their hosting needs.
            </p>
            <Button asChild variant="default">
              <a href="/contact">Contact Us Today</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Hosting;
