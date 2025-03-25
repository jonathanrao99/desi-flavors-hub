
import { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';
import { toast } from '@/components/ui/use-toast';
import { useOrderMenu, MenuItem } from '@/hooks/useOrderMenu';
import OrderDialog from '@/components/OrderDialog';
import OrderHeader from '@/components/order/OrderHeader';
import FilterBar from '@/components/order/FilterBar';
import OrderItems from '@/components/order/OrderItems';
import OtherOrderOptions from '@/components/order/OtherOrderOptions';

const Order = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const { addToCart } = useCart();
  
  const { 
    filteredItems, 
    isLoading, 
    categories, 
    activeCategory, 
    setActiveCategory,
    showVegOnly,
    setShowVegOnly
  } = useOrderMenu();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const openOrderDialog = (item: MenuItem) => {
    setSelectedItem(item);
    setQuantity(1);
    setSpecialInstructions('');
    setIsDialogOpen(true);
  };

  const handleAddToCart = () => {
    if (selectedItem && quantity > 0) {
      const itemToAdd = {
        ...selectedItem,
        quantity: quantity,
        specialInstructions: specialInstructions.trim() || undefined
      };
      
      addToCart(itemToAdd);
      setIsDialogOpen(false);
      
      toast({
        title: "Added to cart",
        description: `${quantity} x ${selectedItem.name} added to your cart`,
      });
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-20">
      <OrderHeader />
      
      <FilterBar 
        categories={categories}
        activeCategory={activeCategory}
        handleCategoryClick={handleCategoryClick}
        showVegOnly={showVegOnly}
        setShowVegOnly={setShowVegOnly}
      />
      
      <OrderItems 
        isLoading={isLoading}
        filteredItems={filteredItems}
        openOrderDialog={openOrderDialog}
      />

      <OrderDialog 
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        selectedItem={selectedItem}
        quantity={quantity}
        setQuantity={setQuantity}
        specialInstructions={specialInstructions}
        setSpecialInstructions={setSpecialInstructions}
        handleAddToCart={handleAddToCart}
      />
      
      <OtherOrderOptions />
    </main>
  );
};

export default Order;
