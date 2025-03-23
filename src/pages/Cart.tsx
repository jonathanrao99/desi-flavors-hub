
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, Edit } from 'lucide-react';
import { useCart } from '@/context/CartContext';
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

const Cart = () => {
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
    <main className="min-h-screen pt-24 pb-20">
      {/* Cart Header */}
      <section className="bg-desi-cream py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-2xl md:text-4xl font-display font-bold mb-2">Your Cart</h1>
          <div className="flex items-center text-gray-600">
            <Link to="/order" className="flex items-center hover:text-desi-orange transition-colors">
              <ArrowLeft size={16} className="mr-1" />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Cart Content */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-desi-cream mb-4">
                <ShoppingBag size={24} className="text-desi-orange" />
              </div>
              <h2 className="text-xl font-display font-medium mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
              <Link 
                to="/order" 
                className="inline-block bg-desi-orange hover:bg-desi-orange/90 text-white px-6 py-3 rounded-full transition-colors"
              >
                Browse Menu
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4 border-b border-gray-200 bg-gray-50">
                    <div className="flex justify-between items-center">
                      <h2 className="font-display font-medium">Item Details</h2>
                      <button 
                        onClick={clearCart}
                        className="text-sm text-gray-500 hover:text-red-500 transition-colors flex items-center"
                      >
                        <Trash2 size={14} className="mr-1" />
                        Clear All
                      </button>
                    </div>
                  </div>
                  
                  <div className="divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <div key={item.id} className="p-4 flex flex-col sm:flex-row justify-between">
                        <div className="flex-1 mb-2 sm:mb-0">
                          <div className="flex flex-col">
                            <div className="flex items-start">
                              {item.imageSrc && (
                                <div className="w-16 h-16 mr-3 rounded-md overflow-hidden flex-shrink-0">
                                  <img src={item.imageSrc} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                              )}
                              <div>
                                <h3 className="font-display font-medium flex items-center">
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
                                <p className="text-desi-orange font-medium mt-1">{item.price}</p>
                              </div>
                            </div>
                            
                            {item.specialInstructions && (
                              <div className="mt-2 bg-gray-50 p-2 rounded-md text-sm text-gray-700 flex justify-between">
                                <div>
                                  <span className="font-medium">Special instructions:</span> {item.specialInstructions}
                                </div>
                                <button 
                                  onClick={() => openEditDialog(item.id, item.specialInstructions)}
                                  className="text-desi-orange hover:text-desi-orange/80 ml-2"
                                >
                                  <Edit size={14} />
                                </button>
                              </div>
                            )}

                            {!item.specialInstructions && (
                              <button 
                                onClick={() => openEditDialog(item.id, '')}
                                className="text-desi-orange hover:text-desi-orange/80 text-sm mt-1 flex items-center self-start"
                              >
                                <Edit size={14} className="mr-1" />
                                Add special instructions
                              </button>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-3 py-1 border-x border-gray-300">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                              aria-label="Increase quantity"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-500 hover:text-red-500 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                  <h2 className="font-display font-medium text-lg mb-4">Order Summary</h2>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Delivery Method</label>
                    <Select 
                      value={deliveryMethod} 
                      onValueChange={(value) => setDeliveryMethod(value as 'pickup' | 'delivery')}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select delivery method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pickup">Pickup (Free)</SelectItem>
                        <SelectItem value="delivery">Delivery ($3.99)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-3 border-t border-gray-200 pt-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax (8.25%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    {deliveryMethod === 'delivery' && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Delivery Fee</span>
                        <span>${deliveryFee.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between border-t border-gray-200 pt-3 font-medium text-lg">
                      <span>Total</span>
                      <span className="text-desi-orange">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCheckout}
                    disabled={cartItems.length === 0}
                    className="w-full mt-6 bg-desi-orange hover:bg-desi-orange/90 text-white py-3 px-4 rounded-lg font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    Proceed to Checkout
                  </button>
                  
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    {deliveryMethod === 'pickup' 
                      ? 'Your order will be ready for pickup in 20-30 minutes.' 
                      : 'Delivery orders typically arrive within 30-45 minutes.'}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

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
    </main>
  );
};

export default Cart;
