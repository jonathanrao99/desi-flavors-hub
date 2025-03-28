
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subscribedToNewsletter: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Insert data to Supabase
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData]);
      
      if (error) throw error;
      
      toast({
        title: "Message Sent",
        description: "Thank you! We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        message: '', 
        subscribedToNewsletter: false 
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Your Name*</Label>
        <Input 
          id="name"
          name="name" 
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email Address*</Label>
        <Input 
          id="email"
          name="email" 
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number (Optional)</Label>
        <Input 
          id="phone"
          name="phone" 
          type="tel"
          placeholder="(123) 456-7890"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Your Message*</Label>
        <Textarea 
          id="message"
          name="message"
          placeholder="How can we help you?"
          className="min-h-32"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          id="subscribedToNewsletter"
          name="subscribedToNewsletter"
          checked={formData.subscribedToNewsletter}
          onChange={handleCheckboxChange}
          className="mt-1"
        />
        <label htmlFor="subscribedToNewsletter" className="text-sm text-gray-600">
          Subscribe to our newsletter to receive updates on specials and promotions
        </label>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-desi-orange hover:bg-desi-orange/90 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
