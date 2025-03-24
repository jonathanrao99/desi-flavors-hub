
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-desi-black text-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-display font-bold">
                Desi <span className="text-desi-orange">Flavors Katy</span>
              </h2>
            </Link>
            <p className="text-gray-300 max-w-xs">
              Authentic Indian cuisine on wheels. Specializing in homestyle 
              biryani and traditional favorites made with love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-medium mb-4 text-desi-orange">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-desi-orange transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-desi-orange transition-colors duration-200">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-desi-orange transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/order" className="text-gray-300 hover:text-desi-orange transition-colors duration-200">
                  Order Online
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-desi-orange transition-colors duration-200">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-medium mb-4 text-desi-orange">Get in Touch</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <MapPin size={18} className="text-desi-orange mr-2 flex-shrink-0" />
                <span>20607 Westheimer PKWY, Katy, Texas, 77450</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-desi-orange mr-2 flex-shrink-0" />
                <a href="mailto:desiflavorskaty@gmail.com" className="hover:text-desi-orange transition-colors">desiflavorskaty@gmail.com</a>
              </li>
              <li className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-desi-orange mr-2 flex-shrink-0"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
                </svg>
                <a href="https://wa.me/13468244212" className="hover:text-desi-orange transition-colors">346-824-4212</a>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="text-desi-orange mr-2 flex-shrink-0" />
                <span>
                  Mon-Thurs: 4PM-11PM<br/>
                  Fri-Sun: 1PM-11PM
                </span>
              </li>
              <li className="pt-2 flex space-x-4">
                <a href="https://facebook.com/desiflavors" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-desi-orange transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com/desiflavors" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-desi-orange transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://twitter.com/desiflavors" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-desi-orange transition-colors" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="https://youtube.com/desiflavors" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-desi-orange transition-colors" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
                <a href="https://wa.me/13468244212" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-desi-orange transition-colors" aria-label="WhatsApp">
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
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Desi Flavors Katy. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
