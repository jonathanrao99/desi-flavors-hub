
import { ShoppingCart } from 'lucide-react';
import { MenuItem } from '@/types/menu';

interface OrderItemCardProps {
  item: MenuItem;
  openOrderDialog: (item: MenuItem) => void;
}

const OrderItemCard = ({ item, openOrderDialog }: OrderItemCardProps) => {
  return (
    <div 
      key={item.id}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      onClick={() => openOrderDialog(item)}
    >
      {item.imageSrc && (
        <div className="h-48 overflow-hidden">
          <img 
            src={item.imageSrc} 
            alt={item.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="font-display font-medium text-xl text-desi-black mb-1 flex items-center">
              {item.name}
              {item.isVegetarian && (
                <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">
                  Veg
                </span>
              )}
              {item.isSpicy && (
                <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-800 text-xs rounded-full">
                  Spicy
                </span>
              )}
            </h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-medium text-desi-orange">{item.price}</span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                openOrderDialog(item);
              }}
              className="mt-2 flex items-center text-sm text-desi-orange hover:text-desi-orange/80 transition-colors"
            >
              <ShoppingCart size={16} className="mr-1" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItemCard;
