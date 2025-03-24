
import { Phone, Mail, MapPin } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';
import ContactForm from '@/components/ContactForm';

const ConnectSection = () => {
  return (
    <section id="contact" className="py-16 bg-desi-cream">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
          Connect With Us
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-display font-bold mb-6">Get In Touch</h3>
            <p className="text-gray-600 mb-8">
              Follow us on social media to stay updated with our latest specials, locations, 
              and mouthwatering food photos. We'd love to hear from you!
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
                    <a href="mailto:desiflavorskaty@gmail.com" className="hover:text-desi-orange">desiflavorskaty@gmail.com</a>
                  </p>
                </div>
              </div>
              
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
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium mb-2">Follow Us</h4>
              <SocialLinks iconSize={28} spacing="space-x-4" />
            </div>
            
            <div className="mt-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-display font-medium mb-4">
                  Join Our Mailing List
                </h3>
                <p className="text-gray-600 mb-4">
                  Subscribe to receive updates on specials, new menu items, and truck locations.
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

export default ConnectSection;
