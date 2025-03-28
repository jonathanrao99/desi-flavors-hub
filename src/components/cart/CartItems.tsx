import { Trash2, Plus, Minus, Edit } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
  specialInstructions?: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

interface CartItemsProps {
  items: CartItem[];
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

const CartItems = ({ items, onRemove, onUpdateQuantity }: CartItemsProps) => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editItem, setEditItem] = useState<{id: number, instructions: string} | null>(null);

  const openEditDialog = (id: number, instructions: string = '') => {
    setEditItem({ id, instructions });
    setIsEditDialogOpen(true);
  };

  const handleSaveInstructions = () => {
    if (editItem) {
      // Find the current item and update it with the new instructions
      const item = items.find(i => i.id === editItem.id);
      if (item) {
        // Update the item with new instructions
        // This would require a new function in the CartContext
        setIsEditDialogOpen(false);
        setEditItem(null);
      }
    }
  };

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <p className="text-gray-500">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <h2 className="font-display font-medium">Item Details</h2>
      </div>
      
      <div className="divide-y divide-gray-200">
        {items.map((item) => (
          <div key={item.id} className="p-4 flex flex-col sm:flex-row justify-between">
            <div className="flex-1 mb-2 sm:mb-0">
              <div className="flex flex-col">
                <div className="flex items-start">
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
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-3 py-1 border-x border-gray-300">
                  {item.quantity}
                </span>
                <button 
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
              
              <button 
                onClick={() => onRemove(item.id)}
                className="text-gray-500 hover:text-red-500 transition-colors"
                aria-label="Remove item"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
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

export default CartItems; 