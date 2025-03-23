
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BestsellerCardProps {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  isSpecial?: boolean;
  delay?: number;
}

const BestsellerCard = ({ 
  title, 
  description, 
  price, 
  imageSrc, 
  isSpecial = false,
  delay = 0 
}: BestsellerCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 ${
        isSpecial ? 'border-2 border-desi-orange' : ''
      }`}
      style={{ 
        opacity: 0, 
        animation: 'fade-in 0.5s ease-out forwards', 
        animationDelay: `${delay}ms` 
      }}
    >
      <div className="relative h-48 overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img 
          src={imageSrc} 
          alt={title} 
          className={`w-full h-full object-cover transition-opacity ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {isSpecial && (
          <div className="absolute top-3 right-3 bg-desi-orange text-white text-xs font-bold px-2 py-1 rounded-full">
            Bestseller
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="font-display font-medium text-xl mb-2">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="font-medium text-desi-orange">{price}</span>
          <Link 
            to="/menu" 
            className="inline-flex items-center text-desi-black hover:text-desi-orange transition-colors text-sm"
          >
            <span>Order Now</span>
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BestsellerCard;
