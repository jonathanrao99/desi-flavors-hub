
import { useState } from 'react';

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
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className={`group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 
        hover:shadow-lg ${isSpecial ? 'ring-2 ring-desi-orange' : ''}`}
      style={{ 
        animationDelay: `${delay}ms`, 
        opacity: 0, 
        animation: 'fade-in 0.7s ease-out forwards', 
        animationDelay: `${delay}ms` 
      }}
    >
      {/* Image */}
      <div className="relative h-48 w-full blur-load" style={{ backgroundColor: '#f8f8f8' }}>
        <img
          src={imageSrc}
          alt={title}
          className={`h-full w-full object-cover transition-transform duration-700 
            group-hover:scale-105 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
        
        {/* Special Label */}
        {isSpecial && (
          <div className="absolute top-2 right-2 bg-desi-orange text-white text-xs font-bold 
            px-3 py-1 rounded-full shadow-md animate-pulse-subtle">
            SPECIAL
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="px-4 py-5 bg-white">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display font-medium text-lg text-desi-black">{title}</h3>
          <span className="font-medium text-desi-orange">{price}</span>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default BestsellerCard;
