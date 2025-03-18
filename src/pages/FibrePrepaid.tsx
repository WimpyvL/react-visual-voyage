
import React from 'react';
import Layout from '../components/layout/Layout';
import ServiceCard from '../components/common/ServiceCard';
import { Button } from '@/components/ui/button';
import { CreditCard, Zap, Sliders, Clock, AlertTriangle } from 'lucide-react';

const FibrePrepaid: React.FC = () => {
  const benefits = [
    {
      title: 'No Contracts',
      description: 'Enjoy the freedom of no long-term commitments or credit checks.',
      icon: <CreditCard size={36} />
    },
    {
      title: 'High-Speed',
      description: 'Experience lightning-fast internet speeds.',
      icon: <Zap size={36} />
    },
    {
      title: 'Flexible Plans',
      description: 'Choose from top-up packages that suit your needs.',
      icon: <Sliders size={36} />
    },
    {
      title: 'Instant Activation',
      description: 'Get connected immediately after topping up your account.',
      icon: <Clock size={36} />
    },
    {
      title: 'Subject to Availability',
      description: 'Please note that prepaid fibre services are only available in select areas. Check our coverage checker to see if fibre is available in your area.',
      icon: <AlertTriangle size={36} />
    }
  ];

  const steps = [
    {
      step: 1,
      title: 'Check Coverage',
      description: 'Verify if fibre is available in your area using our coverage checker.'
    },
    {
      step: 2,
      title: 'Choose Package',
      description: 'Select the prepaid package that best suits your needs.'
    },
    {
      step: 3,
      title: 'Get Connected',
      description: "We'll install your fibre connection and provide your router."
    },
    {
      step: 4,
      title: 'Top Up & Enjoy',
      description: 'Load credit and start enjoying high-speed internet instantly.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-hosting-dark-gray pt-32 pb-16 text-white text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">Fibre Prepaid Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-up animate-delay-100">
            Flexible, high-speed internet without long-term commitments
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading animate-fade-up">Why Choose Prepaid Fibre?</h2>
          <div className="section-heading-divider animate-fade-up animate-delay-100"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <ServiceCard
                key={benefit.title}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
                className="animate-fade-up"
                containerClassName="h-full"
                hoverEffect={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-hosting-light-gray">
        <div className="container-custom">
          <h2 className="section-heading animate-fade-up">How It Works</h2>
          <div className="section-heading-divider animate-fade-up animate-delay-100"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {steps.map((step) => (
              <div key={step.step} className="bg-white rounded-lg p-6 text-center shadow-md animate-fade-up">
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

      {/* CTA */}
      <section className="py-16 bg-hosting-dark-gray text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-8">
              Experience the freedom of prepaid fibre internet today.
            </p>
            <Button 
              asChild
              variant="default" 
            >
              <a href="/contact">Check Coverage</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FibrePrepaid;
