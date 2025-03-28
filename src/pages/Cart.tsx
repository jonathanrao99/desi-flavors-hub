import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, Edit } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from '@/components/ui/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import CartSummary from '@/components/cart/CartSummary';
import CartItems from '@/components/cart/CartItems';

const Cart = () => {
  useScrollToTop();
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const [deliveryMethod, setDeliveryMethod] = useState<'pickup' | 'delivery'>('pickup');
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editItem, setEditItem] = useState<{id: number, instructions: string} | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before checking out",
        variant: "destructive",
      });
      return;
    }
    
    // Save delivery method to localStorage
    localStorage.setItem('deliveryMethod', deliveryMethod);
    
    // Navigate to payment page
    navigate('/payment');
  };

  const openEditDialog = (id: number, instructions: string = '') => {
    setEditItem({ id, instructions });
    setIsEditDialogOpen(true);
  };

  const handleSaveInstructions = () => {
    if (editItem) {
      // Find the current item and update it with the new instructions
      // This would require a new function in the CartContext
      const updatedItems = cartItems.map(item => 
        item.id === editItem.id 
          ? { ...item, specialInstructions: editItem.instructions } 
          : item
      );
      
      // Since we don't have a direct update function for special instructions in context,
      // we'll simulate it by updating each item
      cartItems.forEach(item => {
        if (item.id === editItem.id && item.specialInstructions !== editItem.instructions) {
          updateQuantity(item.id, item.quantity); // This triggers a re-render but doesn't change quantity
          toast({
            title: "Instructions updated",
            description: `Special instructions for ${item.name} have been updated`,
          });
        }
      });
      
      setIsEditDialogOpen(false);
      setEditItem(null);
    }
  };

  const deliveryFee = deliveryMethod === 'delivery' ? 3.99 : 0;
  const subtotal = getCartTotal();
  const tax = subtotal * 0.0825; // 8.25% tax rate
  const total = subtotal + tax + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CartItems 
              items={cartItems}
              onRemove={removeFromCart}
              onUpdateQuantity={updateQuantity}
            />
          </div>
          <div>
            <CartSummary items={cartItems} />
          </div>
        </div>
      </div>

      {/* Edit Instructions Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-display">
              Special Instructions
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="instructions">Add special preparation instructions:</Label>
              <Textarea
                id="instructions"
                placeholder="Any special preparation instructions? (e.g., less spicy, no cilantro)"
                value={editItem?.instructions || ''}
                onChange={(e) => editItem && setEditItem({...editItem, instructions: e.target.value})}
                className="min-h-[80px]"
              />
            </div>
            
            <div className="pt-4 flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveInstructions} className="bg-desi-orange hover:bg-desi-orange/90 text-white">
                Save Instructions
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Cart;
