
import React from 'react';
import { MenuItem } from '@/hooks/useOrderMenu';
import OrderItemCard from '@/components/OrderItemCard';
import MenuLoading from '@/components/MenuLoading';

interface OrderItemsProps {
  isLoading: boolean;
  filteredItems: MenuItem[];
  openOrderDialog: (item: MenuItem) => void;
}

const OrderItems = ({ isLoading, filteredItems, openOrderDialog }: OrderItemsProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        {isLoading ? (
          <MenuLoading />
        ) : filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No items found. Try changing your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <OrderItemCard 
                key={item.id} 
                item={item} 
                openOrderDialog={openOrderDialog} 
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderItems;
