
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SocialLinks from './SocialLinks';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 pt-16 pb-8 bg-gray-50">
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
                <MapPin className="text-desi-orange mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Food Truck Location</h4>
                  <p className="text-gray-600">
                    20607 Westheimer PKWY<br />
                    Katy, Texas, 77450
                  </p>
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
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-desi-orange mr-4 mt-1"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
                </svg>
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
            
            <div className="mb-8">
              <h4 className="font-medium mb-3">Follow Us</h4>
              <SocialLinks iconSize={24} spacing="space-x-4" />
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-display font-medium mb-4">
                Join Our Mailing List
              </h3>
              <p className="text-gray-600 mb-4">
                Subscribe to receive updates on specials, new menu items, and food truck locations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="Your email address" className="px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none 
                    focus:ring-2 focus:ring-desi-orange w-full" />
                <button className="bg-desi-orange hover:bg-desi-orange/90 text-white px-6 py-3 
                  rounded-lg font-medium transition-all whitespace-nowrap">
                  Subscribe
                </button>
              </div>
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
