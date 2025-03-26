
import { Dispatch, SetStateAction } from 'react';
import { Plus, Minus } from 'lucide-react';
import { MenuItem } from '@/types/menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface OrderDialogProps {
  isDialogOpen: boolean;
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
  selectedItem: MenuItem | null;
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  specialInstructions: string;
  setSpecialInstructions: Dispatch<SetStateAction<string>>;
  handleAddToCart: () => void;
}

const OrderDialog = ({
  isDialogOpen,
  setIsDialogOpen,
  selectedItem,
  quantity,
  setQuantity,
  specialInstructions,
  setSpecialInstructions,
  handleAddToCart
}: OrderDialogProps) => {
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="sm:max-w-lg w-[95vw] max-h-[90vh] overflow-y-auto">
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
              <div className="absolute bottom-2 right-2 bg-desi-orange text-white px-2 py-1 rounded-md text-sm font-medium shadow">
                {selectedItem.price}
              </div>
            </div>
          )}
          <p className="text-gray-600">{selectedItem?.description}</p>
          
          <div className="flex items-center justify-between">
            <p className="font-medium text-desi-orange text-lg">{selectedItem?.price}</p>
            
            <div className="flex items-center">
              <Label htmlFor="quantity" className="mr-2 hidden sm:inline">Quantity</Label>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button 
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                >
                  <Minus size={16} />
                </button>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                  className="w-12 text-center border-0 focus:ring-0"
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
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
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
