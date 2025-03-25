
import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { toast } from '@/components/ui/use-toast';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  isvegetarian?: boolean;
  isspicy?: boolean;
  category: string;
  imagesrc?: string;
}

interface MenuDisplayProps {
  menuItems: MenuItem[];
  categories: string[];
  isLoading: boolean;
  handleAddToCart: (item: MenuItem) => void;
}

const MenuDisplay = ({ 
  menuItems, 
  categories, 
  isLoading, 
  handleAddToCart 
}: MenuDisplayProps) => {
  // Group menu items by category
  const groupedItems = categories.reduce((acc, category) => {
    acc[category] = menuItems.filter(item => item.category === category);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-desi-orange"></div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {categories.map(category => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-center">
            {category}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {groupedItems[category]?.map(item => (
              <div key={item.id} className="flex justify-between items-start border-b border-gray-100 pb-4">
                <div>
                  <h3 className="font-display font-medium text-lg text-desi-black">
                    {item.name}
                    {item.isvegetarian && (
                      <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">
                        Veg
                      </span>
                    )}
                    {item.isspicy && (
                      <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-800 text-xs rounded-full">
                        Spicy
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-medium text-desi-orange">{item.price}</span>
                  <button 
                    onClick={() => handleAddToCart(item)}
                    className="mt-2 flex items-center text-sm text-desi-orange hover:text-desi-orange/80 transition-colors"
                  >
                    <ShoppingCart size={16} className="mr-1" />
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuDisplay;
