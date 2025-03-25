
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  category: string;
  imageSrc?: string;
}

interface OrderDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedItem: MenuItem | null;
  quantity: number;
  setQuantity: (quantity: number) => void;
  specialInstructions: string;
  setSpecialInstructions: (instructions: string) => void;
  handleAddToCart: () => void;
}

const OrderDialog = ({
  isOpen,
  onOpenChange,
  selectedItem,
  quantity,
  setQuantity,
  specialInstructions,
  setSpecialInstructions,
  handleAddToCart
}: OrderDialogProps) => {
  const getItemPrice = (basePrice: string, qty: number) => {
    const price = parseFloat(basePrice.replace('$', ''));
    return `$${(price * qty).toFixed(2)}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md w-[95vw] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-display">
            {selectedItem?.name}
            {selectedItem?.isVegetarian && (
              <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">
                Veg
              </span>
            )}
            {selectedItem?.isSpicy && (
              <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-800 text-xs rounded-full">
                Spicy
              </span>
            )}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-2">
          {selectedItem?.imageSrc && (
            <div className="relative h-44 w-full overflow-hidden rounded-md">
              <img 
                src={selectedItem.imageSrc} 
                alt={selectedItem.name} 
                className="h-full w-full object-cover"
              />
            </div>
          )}
          <p className="text-gray-600">{selectedItem?.description}</p>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="font-medium text-desi-orange text-lg">
                {selectedItem && getItemPrice(selectedItem.price, quantity)}
              </span>
            </div>
            
            <div className="flex items-center border border-gray-300 rounded-md">
              <button 
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 text-gray-600 hover:bg-gray-100"
              >
                <Minus size={16} />
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value || "1")))}
                className="w-16 text-center border-0 focus:ring-0"
              />
              <button 
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 text-gray-600 hover:bg-gray-100"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="instructions">Special Instructions</Label>
            <Textarea
              id="instructions"
              placeholder="Any special preparation instructions? (e.g., less spicy, no cilantro)"
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              className="min-h-[80px]"
            />
          </div>
          
          <div className="pt-4 flex justify-end space-x-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddToCart} className="bg-desi-orange hover:bg-desi-orange/90 text-white">
              Add to Cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDialog;
