
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuGroup, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceLinks = [
    { name: 'All Services', path: '/services' },
    { name: 'Web Design', path: '/web-design' },
    { name: 'Hosting', path: '/hosting' },
    { name: 'Cloud Services', path: '/cloud-services' },
    { name: 'Connectivity', path: '/connectivity' },
    { name: 'Email & Automation', path: '/email-automation' },
    { name: 'Fibre Prepaid', path: '/fibre-prepaid' },
    { name: 'Security', path: '/security' },
    { name: 'VPN Services', path: '/vpn-services' },
    { name: 'Solar Solutions', path: '/solar-solutions' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-custom mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-hosting-orange ${
                  location.pathname === link.path
                    ? 'text-hosting-orange'
                    : 'text-hosting-dark-gray'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-hosting-orange text-hosting-dark-gray flex items-center">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white w-56 z-[100]">
                <DropdownMenuGroup>
                  {serviceLinks.map((service) => (
                    <DropdownMenuItem key={service.path} asChild>
                      <Link 
                        to={service.path}
                        className={`w-full px-2 py-2 hover:bg-gray-100 ${
                          location.pathname === service.path
                            ? 'text-hosting-orange'
                            : 'text-hosting-dark-gray'
                        }`}
                      >
                        {service.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-hosting-dark-gray" />
            ) : (
              <Menu className="h-6 w-6 text-hosting-dark-gray" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md animate-fade-in">
          <div className="container mx-auto py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base py-2 px-4 transition-colors ${
                    location.pathname === link.path
                      ? 'text-hosting-orange font-medium'
                      : 'text-hosting-dark-gray'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Services section for mobile */}
              <div className="px-4 py-2">
                <h3 className="text-base font-medium text-hosting-dark-gray mb-2">Services</h3>
                <div className="pl-4 flex flex-col space-y-2">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className={`text-sm py-1 transition-colors ${
                        location.pathname === service.path
                          ? 'text-hosting-orange font-medium'
                          : 'text-hosting-dark-gray'
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
