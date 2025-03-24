
import { Phone, Mail, MapPin } from 'lucide-react';
import SocialLinks from './SocialLinks';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
          Contact Us
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-display font-bold mb-6">Get In Touch</h3>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you! Whether you have a question about our food, catering options, 
              or would like to share your feedback, fill out the form and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Phone className="text-desi-orange mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">
                    <a href="tel:+13468244212" className="hover:text-desi-orange">346-824-4212</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-desi-orange mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:info@desiflavors.com" className="hover:text-desi-orange">info@desiflavors.com</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-desi-orange mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Food Truck Location</h4>
                  <p className="text-gray-600">
                    20607 WestHeimer PKWY<br />
                    Katy, Texas, 77450
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Follow Us</h4>
              <SocialLinks iconSize={24} spacing="space-x-4" />
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-display font-bold mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
