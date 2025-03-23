
import { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from '@/components/ui/use-toast';

export interface CartItem {
  id: number;
  name: string;
  price: string;
  description?: string;
  quantity: number;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  specialInstructions?: string;
  imageSrc?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Partial<CartItem> & { id: number; name: string; price: string; }) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Partial<CartItem> & { id: number; name: string; price: string; }) => {
    setCartItems(prevItems => {
      // Check if item already exists in cart
      const existingItemIndex = prevItems.findIndex(i => i.id === item.id);
      
      if (existingItemIndex >= 0) {
        // Item exists, update quantity and any other changes
        const updatedItems = [...prevItems];
        const existingItem = updatedItems[existingItemIndex];
        
        // Set quantity (either add to existing or use the provided quantity)
        if (item.quantity) {
          updatedItems[existingItemIndex].quantity = item.quantity;
        } else {
          updatedItems[existingItemIndex].quantity += 1;
        }
        
        // If there are special instructions, update them
        if (item.specialInstructions) {
          updatedItems[existingItemIndex].specialInstructions = item.specialInstructions;
        }
        
        toast({
          title: 'Item quantity updated',
          description: `${item.name} quantity updated to ${updatedItems[existingItemIndex].quantity}`,
        });
        
        return updatedItems;
      } else {
        // Item doesn't exist, add new item with quantity specified or default to 1
        const newItem: CartItem = {
          id: item.id,
          name: item.name,
          price: item.price,
          description: item.description,
          quantity: item.quantity || 1,
          isVegetarian: item.isVegetarian,
          isSpicy: item.isSpicy,
          specialInstructions: item.specialInstructions,
          imageSrc: item.imageSrc
        };
        
        toast({
          title: 'Item added to cart',
          description: `${item.name} has been added to your cart`,
        });
        
        return [...prevItems, newItem];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prevItems => {
      const itemToRemove = prevItems.find(item => item.id === id);
      if (itemToRemove) {
        toast({
          title: 'Item removed',
          description: `${itemToRemove.name} has been removed from your cart`,
        });
      }
      return prevItems.filter(item => item.id !== id);
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    toast({
      title: 'Cart cleared',
      description: 'All items have been removed from your cart',
    });
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      // Extract numeric price from string (e.g., "$14.99" -> 14.99)
      const itemPrice = parseFloat(item.price.replace('$', ''));
      return total + (itemPrice * item.quantity);
    }, 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
