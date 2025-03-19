
import React from 'react';
import ContactForm from './ContactForm';

const ContactFormSection: React.FC = () => {
  return (
    <section className="py-16 bg-hosting-light-gray">
      <div className="container-custom">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactFormSection;
