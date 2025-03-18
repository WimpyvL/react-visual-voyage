
import React, { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import PageHeader from './PageHeader';

interface LayoutProps {
  children: ReactNode;
  hideHeader?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, hideHeader = false }) => {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Only show PageHeader on non-homepage routes
  const isHomePage = location.pathname === '/' || location.pathname === '/index';

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      {!isHomePage && <PageHeader />}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
