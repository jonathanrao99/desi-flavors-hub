
import { Facebook, Instagram, Twitter } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  iconColor?: string;
  spacing?: string;
}

const SocialLinks = ({ 
  className = '', 
  iconSize = 24, 
  iconColor = 'text-desi-black',
  spacing = 'space-x-6'
}: SocialLinksProps) => {
  return (
    <div className={`flex items-center ${spacing} ${className}`}>
      <a 
        href="https://facebook.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${iconColor} hover:text-desi-orange transition-colors duration-200`}
        aria-label="Facebook"
      >
        <Facebook size={iconSize} />
      </a>
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${iconColor} hover:text-desi-orange transition-colors duration-200`}
        aria-label="Instagram"
      >
        <Instagram size={iconSize} />
      </a>
      <a 
        href="https://twitter.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${iconColor} hover:text-desi-orange transition-colors duration-200`}
        aria-label="Twitter"
      >
        <Twitter size={iconSize} />
      </a>
    </div>
  );
};

export default SocialLinks;
