
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

  const isHomePage = location.pathname === '/';

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      {!hideHeader && !isHomePage && <PageHeader />}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
