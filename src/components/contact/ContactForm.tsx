
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    services: {
      webDevelopment: false,
      appDevelopment: false,
      fibreLte: false,
      securitySolutions: false,
      solarSolutions: false,
      aiIntegration: false,
    },
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      services: {
        ...formData.services,
        [name]: checked,
      },
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      contactNumber: '',
      services: {
        webDevelopment: false,
        appDevelopment: false,
        fibreLte: false,
        securitySolutions: false,
        solarSolutions: false,
        aiIntegration: false,
      },
      message: '',
    });
    // Show success message or redirect
    alert('Message sent successfully!');
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md animate-fade-up">
      <h2 className="text-2xl font-bold mb-6 text-hosting-orange text-center">Contact Us Today</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-hosting-dark-gray mb-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hosting-orange"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-hosting-dark-gray mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hosting-orange"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="contactNumber" className="block text-hosting-dark-gray mb-2">Contact Number:</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hosting-orange"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-hosting-dark-gray mb-2">Select Services:</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="webDevelopment"
                name="webDevelopment"
                checked={formData.services.webDevelopment}
                onChange={handleCheckboxChange}
                className="mr-2 h-4 w-4 text-hosting-orange focus:ring-hosting-orange"
              />
              <label htmlFor="webDevelopment" className="text-hosting-medium-gray">Web Development</label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="appDevelopment"
                name="appDevelopment"
                checked={formData.services.appDevelopment}
                onChange={handleCheckboxChange}
                className="mr-2 h-4 w-4 text-hosting-orange focus:ring-hosting-orange"
              />
              <label htmlFor="appDevelopment" className="text-hosting-medium-gray">App Development</label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="fibreLte"
                name="fibreLte"
                checked={formData.services.fibreLte}
                onChange={handleCheckboxChange}
                className="mr-2 h-4 w-4 text-hosting-orange focus:ring-hosting-orange"
              />
              <label htmlFor="fibreLte" className="text-hosting-medium-gray">Fibre/LTE</label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="securitySolutions"
                name="securitySolutions"
                checked={formData.services.securitySolutions}
                onChange={handleCheckboxChange}
                className="mr-2 h-4 w-4 text-hosting-orange focus:ring-hosting-orange"
              />
              <label htmlFor="securitySolutions" className="text-hosting-medium-gray">Security Solutions</label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="solarSolutions"
                name="solarSolutions"
                checked={formData.services.solarSolutions}
                onChange={handleCheckboxChange}
                className="mr-2 h-4 w-4 text-hosting-orange focus:ring-hosting-orange"
              />
              <label htmlFor="solarSolutions" className="text-hosting-medium-gray">Solar Solutions</label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="aiIntegration"
                name="aiIntegration"
                checked={formData.services.aiIntegration}
                onChange={handleCheckboxChange}
                className="mr-2 h-4 w-4 text-hosting-orange focus:ring-hosting-orange"
              />
              <label htmlFor="aiIntegration" className="text-hosting-medium-gray">AI Integration</label>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-hosting-dark-gray mb-2">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hosting-orange"
            required
          ></textarea>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center justify-center">
            <div className="border border-gray-300 rounded p-3 w-full max-w-xs text-center text-sm text-hosting-medium-gray">
              reCAPTCHA verification
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            type="submit" 
            className="bg-hosting-orange hover:bg-hosting-orange/90 text-white px-8"
          >
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
