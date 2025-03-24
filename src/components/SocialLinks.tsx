
import { Facebook, Instagram, Twitter, Youtube, Phone } from 'lucide-react';

interface SocialLinksProps {
  iconSize?: number;
  spacing?: string;
  iconColor?: string;
}

const SocialLinks = ({ iconSize = 18, spacing = "space-x-2", iconColor = "text-gray-600" }: SocialLinksProps) => {
  return (
    <div className={`flex ${spacing}`}>
      <a
        href="https://facebook.com/desiflavors"
        target="_blank"
        rel="noopener noreferrer"
        className={`${iconColor} hover:text-desi-orange transition-colors`}
        aria-label="Facebook"
      >
        <Facebook size={iconSize} />
      </a>
      <a
        href="https://instagram.com/desiflavors"
        target="_blank"
        rel="noopener noreferrer"
        className={`${iconColor} hover:text-desi-orange transition-colors`}
        aria-label="Instagram"
      >
        <Instagram size={iconSize} />
      </a>
      <a
        href="https://twitter.com/desiflavors"
        target="_blank"
        rel="noopener noreferrer"
        className={`${iconColor} hover:text-desi-orange transition-colors`}
        aria-label="Twitter"
      >
        <Twitter size={iconSize} />
      </a>
      <a
        href="https://youtube.com/desiflavors"
        target="_blank"
        rel="noopener noreferrer"
        className={`${iconColor} hover:text-desi-orange transition-colors`}
        aria-label="YouTube"
      >
        <Youtube size={iconSize} />
      </a>
      <a
        href="https://wa.me/13468244212"
        target="_blank"
        rel="noopener noreferrer"
        className={`${iconColor} hover:text-desi-orange transition-colors`}
        aria-label="WhatsApp"
      >
        <Phone size={iconSize} />
      </a>
    </div>
  );
};

export default SocialLinks;
