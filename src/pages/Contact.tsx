
import React from 'react';
import Layout from '../components/layout/Layout';
import ContactInfo from '../components/contact/ContactInfo';
import LocationMap from '../components/contact/LocationMap';
import ContactForm from '../components/contact/ContactForm';

const Contact: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <ContactInfo />
            
            {/* Map */}
            <LocationMap />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-hosting-light-gray">
        <div className="container-custom">
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
