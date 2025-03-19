
import React from 'react';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { 
  BrainCircuit, 
  BarChart3, 
  Database, 
  Sparkles, 
  Bot, 
  Share2, 
  FileCheck,
  ArrowRight
} from "lucide-react";

const AiIntegration: React.FC = () => {
  const aiFeatures = [
    { 
      icon: <BrainCircuit className="w-8 h-8 text-hosting-orange" />,
      title: "Machine Learning",
      description: "Custom ML models that adapt to your business needs"
    },
    { 
      icon: <BarChart3 className="w-8 h-8 text-hosting-orange" />,
      title: "Predictive Analytics",
      description: "Forecast trends and make data-driven decisions"
    },
    { 
      icon: <Database className="w-8 h-8 text-hosting-orange" />,
      title: "Big Data Processing",
      description: "Handle massive datasets with efficient architecture"
    },
    { 
      icon: <Sparkles className="w-8 h-8 text-hosting-orange" />,
      title: "Natural Language Processing",
      description: "Extract insights from text data automatically"
    },
    { 
      icon: <Bot className="w-8 h-8 text-hosting-orange" />,
      title: "Chatbots & Automation",
      description: "24/7 customer service with intelligent responses"
    },
    { 
      icon: <Share2 className="w-8 h-8 text-hosting-orange" />,
      title: "Integration Services",
      description: "Seamlessly connect AI with your existing systems"
    }
  ];

  return (
    <section className="py-20 bg-hosting-dark-gray text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Empowering Businesses with<br />
              <span className="text-hosting-orange">AI Integration</span>
            </h2>
            <div className="w-16 h-1 bg-hosting-orange mb-6"></div>
            <p className="text-gray-300 mb-6">
              Our company is dedicated to delivering cutting-edge AI solutions to businesses. From advanced data analytics to innovative AI strategies, we have become a trusted partner for numerous organizations. Thanks to our commitment to personalized, high-quality work, and our focus on client success.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <FileCheck className="text-hosting-orange mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-hosting-orange font-medium">Customer Trust:</span>
                  <span className="ml-2 text-gray-300">We prioritize our clients' needs, always ensuring they receive solutions tailored to their unique requirements.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FileCheck className="text-hosting-orange mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-hosting-orange font-medium">Years of Experience:</span>
                  <span className="ml-2 text-gray-300">Our team holds multiple certifications in AI integration with expertise built over years of successful implementations.</span>
                </div>
              </li>
              <li className="flex items-start">
                <FileCheck className="text-hosting-orange mr-2 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-hosting-orange font-medium">Industry Expertise:</span>
                  <span className="ml-2 text-gray-300">We bring deep domain knowledge across multiple sectors, allowing us to create AI solutions that address industry-specific challenges.</span>
                </div>
              </li>
            </ul>
            
            <Popover>
              <PopoverTrigger asChild>
                <Button className="bg-hosting-orange text-white hover:bg-opacity-90 px-6 py-3 rounded-md font-medium">
                  <a href="/services">LEARN MORE</a>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-4 bg-white text-hosting-dark-gray">
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-hosting-orange">Transform Your Business with AI</h3>
                  <p className="text-sm">Our AI solutions have helped businesses increase efficiency by up to 40% and reduce operational costs by 25% on average.</p>
                  <Button asChild variant="outline" className="w-full mt-2 border-hosting-orange text-hosting-orange hover:bg-hosting-orange hover:text-white">
                    <a href="/services">View Our AI Services <ArrowRight className="ml-2 w-4 h-4" /></a>
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-up animate-delay-200">
            <div className="relative">
              <div className="flex justify-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=160&h=160" 
                  alt="AI Integration" 
                  className="w-40 h-40 object-contain"
                />
              </div>
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600"
                alt="AI Integration" 
                className="w-full max-w-md mx-auto rounded-lg shadow-xl"
              />
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                {aiFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800 p-4 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-lg transform hover:-translate-y-1"
                  >
                    <div className="flex flex-col items-center text-center">
                      {feature.icon}
                      <h3 className="text-white font-medium mt-2 mb-1">{feature.title}</h3>
                      <p className="text-gray-400 text-xs">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiIntegration;
