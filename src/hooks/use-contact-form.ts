
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface FormServices {
  webDevelopment: boolean;
  appDevelopment: boolean;
  fibreLte: boolean;
  securitySolutions: boolean;
  solarSolutions: boolean;
  aiIntegration: boolean;
}

interface ContactFormData {
  name: string;
  email: string;
  contactNumber: string;
  services: FormServices;
  message: string;
}

interface UseContactFormReturn {
  formData: ContactFormData;
  isSubmitting: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

export const useContactForm = (): UseContactFormReturn => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
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

  return {
    formData,
    isSubmitting,
    handleChange,
    handleCheckboxChange,
    handleSubmit
  };
};
