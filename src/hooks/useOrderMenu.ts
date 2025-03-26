
import { useState, useEffect } from 'react';
import { MenuItem } from '@/types/menu';
import { useMenuItems } from './useMenuItems';
import { toast } from '@/components/ui/use-toast';
import { useCart } from '@/context/CartContext';

export const useOrderMenu = () => {
  const {
    activeCategory,
    setActiveCategory,
    menuItems,
    isScrolled,
    categories,
    allMenuItems
  } = useMenuItems('All');
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');
  
  const { addToCart } = useCart();

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
  
  return {
    activeCategory,
    menuItems,
    isScrolled,
    categories,
    isDialogOpen,
    setIsDialogOpen,
    selectedItem,
    quantity,
    setQuantity,
    specialInstructions,
    setSpecialInstructions,
    handleCategoryClick,
    openOrderDialog,
    handleAddToCart
  };
};
