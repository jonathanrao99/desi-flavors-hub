
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-desi-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-display font-bold">
                Desi <span className="text-desi-orange">Flavors</span>
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
                <Link to="/gallery" className="text-gray-300 hover:text-desi-orange transition-colors duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/order" className="text-gray-300 hover:text-desi-orange transition-colors duration-200">
                  Order Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-medium mb-4 text-desi-orange">Get in Touch</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Katy, Texas</li>
              <li>info@desiflavors.com</li>
              <li>(123) 456-7890</li>
              <li className="pt-2 flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-desi-orange transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-desi-orange transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-desi-orange transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Desi Flavors Katy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
