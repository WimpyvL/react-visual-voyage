
import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import FindService from '../components/home/FindService';
import AiIntegration from '../components/home/AiIntegration';
import SecuritySection from '../components/home/SecuritySection';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <FindService />
      <AiIntegration />
      <SecuritySection />
      <Stats />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default Index;
