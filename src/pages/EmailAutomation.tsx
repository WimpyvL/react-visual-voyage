
import React from 'react';
import Layout from '../components/layout/Layout';
import ServiceCard from '../components/common/ServiceCard';
import Button from '../components/ui/Button';
import { Mail, MessageSquare, Send, Cog, Code, FileText, Bell, Mic } from 'lucide-react';

const EmailAutomation: React.FC = () => {
  const services = [
    {
      title: 'Email Marketing',
      description: 'Efficient lead-generation and follow-up campaigns with minimizing POPI violations.',
      icon: <Mail size={36} />
    },
    {
      title: 'SMS Marketing',
      description: 'Engage your audience directly through SMS marketing using the same platform as email marketing.',
      icon: <MessageSquare size={36} />
    },
    {
      title: 'Transactional Messaging',
      description: 'Send automated order confirmations, delivery notifications, OTPs, shipping reports, and system-based messages.',
      icon: <Send size={36} />
    },
    {
      title: 'Automation',
      description: 'Facilitate workflows and auto-respond to messages, simplifying lead nurturing and onboarding.',
      icon: <Cog size={36} />
    },
    {
      title: 'API Communicator',
      description: 'Offers a customizable method to streamline event integration and analytical capabilities.',
      icon: <Code size={36} />
    },
    {
      title: 'Landing Pages',
      description: 'Provide a simple page builder for quick creation of marketable, goal-oriented pages.',
      icon: <FileText size={36} />
    },
    {
      title: 'Push Notifications',
      description: 'Allows businesses to send messages to subscribers via a web browser.',
      icon: <Bell size={36} />
    },
    {
      title: 'Voice Broadcasting',
      description: "Enables sending recorded voice messages directly to subscribers' phones within minutes.",
      icon: <Mic size={36} />
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-hosting-dark-gray pt-32 pb-16 text-white text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">Email & Automation Solutions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-up animate-delay-100">
            Streamline your business communications and workflows with intelligent automation
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading animate-fade-up">Our Email & Automation Services</h2>
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
          
          <div className="text-center mt-16">
            <img 
              src="public/lovable-uploads/e6baa995-cea2-4923-ac5e-0f4202c04a38.png" 
              alt="Everlytic Partnership" 
              className="mx-auto h-12 object-contain"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-hosting-dark-gray text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Automate Your Business?
            </h2>
            <p className="text-gray-300 mb-8">
              Contact us today to discuss your email and automation needs.
            </p>
            <Button 
              href="/contact" 
              variant="primary" 
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EmailAutomation;
