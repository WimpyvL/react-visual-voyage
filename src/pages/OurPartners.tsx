import React from 'react';
import Layout from '../components/layout/Layout';
import { Button } from "@/components/ui/button";
import { Shield, Cloud, MessageSquare, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
const OurPartners: React.FC = () => {
  return <Layout>
      <Helmet>
        <title>Our Partners | Hosting KZN</title>
        <meta name="description" content="Discover our strategic partnerships that enhance our service offerings to deliver the best solutions for your business." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-hosting-dark-gray pt-32 pb-16 text-white text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">Our Partners</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-up animate-delay-100">
            Strategic alliances that enhance our service offerings to deliver the best solutions for your business
          </p>
        </div>
      </section>

      {/* Microsoft 365 */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl font-bold mb-4 text-hosting-dark-gray">Microsoft 365 Business</h2>
              <div className="w-16 h-1 bg-hosting-orange mb-6"></div>
              <p className="text-hosting-medium-gray mb-6">
                As a Microsoft Partner, we offer Microsoft 365 for Business, empowering you to achieve your goals and bring your ideas to life. With the latest AI-powered innovations and Microsoft 365 Copilot, you'll have the tools you need to succeed.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-hosting-dark-gray">Streamline Your Operations</h3>
              <ul className="list-disc pl-5 mb-6 text-hosting-medium-gray space-y-2">
                <li>Manage content and tools in one place</li>
                <li>Boost productivity with Microsoft apps</li>
                <li>Enhance communication with email, video meetings, and chat</li>
                <li>Protect your business with enterprise-grade security</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3 text-hosting-dark-gray">Reach New Heights</h3>
              <p className="text-hosting-medium-gray mb-6">
                Contact us to discover the best Microsoft 365 Business plan for your company. Please note that pricing is subject to the current Rate of Exchange to USD.
              </p>
              
              <Button asChild className="bg-hosting-orange text-white hover:bg-opacity-90">
                <Link to="/contact">Get Microsoft 365</Link>
              </Button>
            </div>
            
            <div className="animate-fade-up animate-delay-200 flex justify-center">
              <img src="public/lovable-uploads/5dbc5e7e-9dcd-4df6-a2da-06776d143f49.png" alt="Microsoft 365" className="max-w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Kaspersky */}
      <section className="py-16 bg-hosting-light-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-up animate-delay-200 flex justify-center">
              <img alt="Kaspersky Security" className="max-w-full h-auto object-contain" src="/lovable-uploads/278dc575-9b73-4fed-ab9f-ec312b6af425.jpg" />
            </div>
            
            <div className="order-1 md:order-2 animate-fade-up">
              <h2 className="text-3xl font-bold mb-4 text-hosting-dark-gray">Kaspersky Small Business Security</h2>
              <div className="w-16 h-1 bg-hosting-orange mb-6"></div>
              <p className="text-hosting-medium-gray mb-6">
                As a Kaspersky Partner, we offer next-level cybersecurity that safeguards your business against evolving threats.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-hosting-dark-gray">Key Benefits</h3>
              <ul className="list-disc pl-5 mb-6 text-hosting-medium-gray space-y-2">
                <li>Protects any device (Windows, Mac, iOS, Android)</li>
                <li>Secures Microsoft Office 365 communication and collaboration</li>
                <li>Combats evasive threats with EDR capabilities</li>
                <li>Cloud-based solution for easy management and scalability</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3 text-hosting-dark-gray">Break Free from On-Premise Burden</h3>
              <ul className="list-disc pl-5 mb-6 text-hosting-medium-gray space-y-2">
                <li>Hosted solution with web-based management</li>
                <li>No capital investment or 'patching Fridays'</li>
                <li>Pay-as-you-grow flexibility</li>
              </ul>
              
              <p className="text-hosting-medium-gray mb-6">
                Kaspersky Endpoint Security Cloud provides comprehensive IT security, blocking ransomware, malware, and zero-day attacks. Our cloud-based approach ensures secure collaboration and device protection, anytime, anywhere.
              </p>
              
              <p className="text-hosting-medium-gray mb-6">
                Get started quickly and easily, with no server setup or security policy configuration required. Focus on your business priorities while Kaspersky handles your IT security.
              </p>
              
              <Button asChild className="bg-hosting-orange text-white hover:bg-opacity-90">
                <Link to="/contact">Secure Your Business</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Paid Fibre */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading animate-fade-up">Pre-Paid Fibre Packages</h2>
          <div className="section-heading-divider animate-fade-up animate-delay-100"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-3xl mx-auto">
            <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200 hover:border-hosting-orange transition-colors animate-fade-up">
              <h3 className="text-2xl font-bold mb-4 text-center text-hosting-dark-gray">20/10 Mbps</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-hosting-orange">R390</span>
                <span className="text-hosting-medium-gray">/month</span>
              </div>
              <ul className="mb-8 space-y-2">
                <li className="flex items-center">
                  <span className="text-hosting-orange mr-2">✓</span> 
                  <span>20 Mbps Download</span>
                </li>
                <li className="flex items-center">
                  <span className="text-hosting-orange mr-2">✓</span> 
                  <span>10 Mbps Upload</span>
                </li>
                <li className="flex items-center">
                  <span className="text-hosting-orange mr-2">✓</span> 
                  <span>Pre-paid flexibility</span>
                </li>
                <li className="flex items-center">
                  <span className="text-hosting-orange mr-2">✓</span> 
                  <span>No contracts</span>
                </li>
              </ul>
              <div className="text-center">
                <Button asChild className="bg-hosting-orange text-white hover:bg-opacity-90 w-full">
                  <Link to="/contact">Check Availability</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200 hover:border-hosting-orange transition-colors animate-fade-up animate-delay-200">
              <h3 className="text-2xl font-bold mb-4 text-center text-hosting-dark-gray">40/20 Mbps</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-hosting-orange">R460</span>
                <span className="text-hosting-medium-gray">/month</span>
              </div>
              <ul className="mb-8 space-y-2">
                <li className="flex items-center">
                  <span className="text-hosting-orange mr-2">✓</span> 
                  <span>40 Mbps Download</span>
                </li>
                <li className="flex items-center">
                  <span className="text-hosting-orange mr-2">✓</span> 
                  <span>20 Mbps Upload</span>
                </li>
                <li className="flex items-center">
                  <span className="text-hosting-orange mr-2">✓</span> 
                  <span>Pre-paid flexibility</span>
                </li>
                <li className="flex items-center">
                  <span className="text-hosting-orange mr-2">✓</span> 
                  <span>No contracts</span>
                </li>
              </ul>
              <div className="text-center">
                <Button asChild className="bg-hosting-orange text-white hover:bg-opacity-90 w-full">
                  <Link to="/contact">Check Availability</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 text-hosting-medium-gray animate-fade-up">
            <p>Only available in selected areas, please contact us with your address to verify availability.</p>
          </div>
        </div>
      </section>

      {/* Vox Voice Solutions */}
      <section className="py-16 bg-hosting-light-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl font-bold mb-4 text-hosting-dark-gray">Vox Voice Solutions</h2>
              <div className="w-16 h-1 bg-hosting-orange mb-6"></div>
              <p className="text-hosting-medium-gray mb-6">
                Discover endless conversations with Vox Vobi Unlimited. Choose from:
              </p>
              
              <ul className="list-disc pl-5 mb-6 text-hosting-medium-gray space-y-2">
                <li>Per Minute Calling Package: Pay-as-you-go flexibility</li>
                <li>Unlimited Calling Packages: Uncapped calling, locally and internationally</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3 text-hosting-dark-gray">Benefits</h3>
              <ul className="list-disc pl-5 mb-6 text-hosting-medium-gray space-y-2">
                <li>Quality calls over Wi-Fi, 3G, 4G, and LTE</li>
                <li>Low call rates across all South African networks</li>
                <li>Port your landline number or get a new one</li>
                <li>Cost management and fixed monthly billing</li>
              </ul>
              
              <Button asChild className="bg-hosting-orange text-white hover:bg-opacity-90">
                <Link to="/contact">Get Voice Solutions</Link>
              </Button>
            </div>
            
            <div className="animate-fade-up animate-delay-200 flex justify-center">
              <img src="public/lovable-uploads/076af7fb-31b5-49b6-8145-7451f87b7a16.png" alt="Vox Voice Solutions" className="max-w-full h-auto object-contain" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-up">
              <Phone className="text-hosting-orange mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-3 text-hosting-dark-gray">Business Voice Solutions</h3>
              <ul className="list-disc pl-5 mb-4 text-hosting-medium-gray space-y-2 text-sm">
                <li>MS Operator Connect: Low-latency, quality-controlled voice network with Teams</li>
                <li>Business Voice: Tailored voice and unified communication solutions</li>
                <li>Cristal Voice: High-volume, low-cost, post-paid voice plans</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-up animate-delay-100">
              <MessageSquare className="text-hosting-orange mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-3 text-hosting-dark-gray">PBX Solutions</h3>
              <ul className="list-disc pl-5 mb-4 text-hosting-medium-gray space-y-2 text-sm">
                <li>Private Telephone Network: Seamless communication for your company</li>
                <li>Cloud-based or On-premises: Flexible solutions for your business</li>
                <li>3CX: All-in-one managed Cloud PBX solution</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-up animate-delay-200">
              <Cloud className="text-hosting-orange mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-3 text-hosting-dark-gray">Contact Centre Solutions</h3>
              <ul className="list-disc pl-5 mb-4 text-hosting-medium-gray space-y-2 text-sm">
                <li>O!Connect: Hassle-free, cloud-based contact center solution</li>
                <li>Interactive Voice Response (IVR): Basic to advanced IVR capabilities</li>
                <li>Multi-channel Self-service: Engage with customers anywhere, anytime</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-hosting-orange text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Take Your Business to New Heights
            </h2>
            <p className="text-white mb-8">
              Our partnerships allow us to offer comprehensive solutions that help your business thrive in the digital landscape.
            </p>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-hosting-orange">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
};
export default OurPartners;