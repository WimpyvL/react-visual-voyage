
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactForm: React.FC = () => {
  const { toast } = useToast();
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
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Format selected services
      const selectedServices = Object.entries(formData.services)
        .filter(([_, isSelected]) => isSelected)
        .map(([service]) => {
          // Convert camelCase to readable format
          return service
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, (str) => str.toUpperCase());
        });

      // Prepare email content
      const emailContent = {
        to: "info@hostingkzn.com",
        subject: `Contact Form Submission from ${formData.name}`,
        message: `
Name: ${formData.name}
Email: ${formData.email}
Contact Number: ${formData.contactNumber}
Services: ${selectedServices.join(', ') || 'None selected'}
Message: ${formData.message}
        `,
      };

      // Send the form data to our email endpoint
      const response = await fetch('https://formsubmit.co/info@hostingkzn.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailContent),
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you for contacting us. We'll get back to you soon!",
        });
        
        // Reset form after successful submission
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
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
        
        <div className="text-center">
          <Button 
            type="submit" 
            className="bg-hosting-orange hover:bg-hosting-orange/90 text-white px-8"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
