
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import PersonalInfoFields from './PersonalInfoFields';
import ServicesCheckboxes from './ServicesCheckboxes';
import MessageField from './MessageField';
import ContactFormSubmit from './ContactFormSubmit';

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
        <PersonalInfoFields
          name={formData.name}
          email={formData.email}
          contactNumber={formData.contactNumber}
          handleChange={handleChange}
        />
        
        <ServicesCheckboxes
          services={formData.services}
          handleCheckboxChange={handleCheckboxChange}
        />
        
        <MessageField
          message={formData.message}
          handleChange={handleChange}
        />
        
        <ContactFormSubmit isSubmitting={isSubmitting} />
      </form>
    </div>
  );
};

export default ContactForm;
