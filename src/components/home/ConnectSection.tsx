import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';

const ConnectSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subscribedToNewsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      console.log('Form submitted:', formData);
      toast({
        title: "Message Sent",
        description: "Thank you! We'll get back to you soon."
      });
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
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-desi-cream">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
          Connect With Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-2xl font-display font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you! Whether you have a question about our food, catering options, 
                or would like to share your feedback, reach out and we'll get back to you soon.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="text-desi-orange mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Food Truck Location</h4>
                    <p className="text-gray-600">20607 Westheimer PKWY<br />Katy, Texas, 77450</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-desi-orange mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:desiflavorskaty@gmail.com" className="hover:text-desi-orange">desiflavorskaty@gmail.com</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-desi-orange mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">WhatsApp</h4>
                    <p className="text-gray-600">
                      <a href="https://wa.me/13468244212" className="hover:text-desi-orange">346-824-4212</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="text-desi-orange mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Operating Hours</h4>
                    <p className="text-gray-600">
                      Mon - Thurs: 4PM - 11PM<br />
                      Fri - Sun: 1PM - 11PM
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-3">Follow Us</h4>
                <SocialLinks iconSize={24} spacing="space-x-5" />
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-display font-bold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name*</Label>
                  <Input id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address*</Label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="(123) 456-7890" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message*</Label>
                  <Textarea id="message" name="message" placeholder="How can we help you?" className="min-h-32" value={formData.message} onChange={handleChange} required />
                </div>
                <div className="flex items-start space-x-2">
                  <input type="checkbox" id="subscribedToNewsletter" name="subscribedToNewsletter" checked={formData.subscribedToNewsletter} onChange={handleCheckboxChange} className="mt-1" />
                  <label htmlFor="subscribedToNewsletter" className="text-sm text-gray-600">
                    Subscribe to our newsletter to receive updates on specials and promotions
                  </label>
                </div>
                <Button type="submit" className="w-full bg-desi-orange hover:bg-desi-orange/90 text-white" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;