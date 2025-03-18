
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const exploreLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Logo className="mb-4" />
            <p className="text-hosting-medium-gray mb-4 text-sm">
              Empowering your digital journey with reliable, secure, and innovative solutions.
            </p>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-hosting-orange text-sm hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-hosting-orange text-sm hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Explore Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-hosting-orange">Explore</h3>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-hosting-dark-gray text-sm hover:text-hosting-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Connect With Us */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-hosting-dark-gray">Connect With Us</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-transparent border border-hosting-dark-gray text-hosting-dark-gray hover:bg-hosting-orange hover:border-hosting-orange hover:text-white p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-hosting-medium-gray">
          <p>© {currentYear} Hosting KZN. All rights reserved | Designed with ♥ by Hosting KZN Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
