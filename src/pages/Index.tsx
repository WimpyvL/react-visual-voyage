
import React from 'react';
import Layout from '../components/layout/Layout';
import BannerCarousel from '../components/home/BannerCarousel';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import FindService from '../components/home/FindService';
import AiIntegration from '../components/home/AiIntegration';
import SecuritySection from '../components/home/SecuritySection';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';
import { Helmet } from 'react-helmet-async';

const Index: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Host Africa | IT Solutions and Digital Services</title>
        <meta name="description" content="Comprehensive IT solutions including web design, hosting, connectivity, and solar solutions for businesses of all sizes." />
      </Helmet>
      <BannerCarousel />
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
