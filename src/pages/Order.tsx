import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, AlertCircle, ShoppingCart, Plus, Minus, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SocialLinks from '@/components/SocialLinks';
import { useCart } from '@/context/CartContext';
import { toast } from '@/components/ui/use-toast';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  category: string;
}

const Order = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Biryani');
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const { addToCart } = useCart();

  const allMenuItems: MenuItem[] = [
    // Biryani
    {
      id: 1,
      name: 'Chicken Biryani',
      description: 'Fragrant basmati rice cooked with tender chicken, aromatic spices, and herbs.',
      price: '$14.99',
      isSpicy: true,
      category: 'Biryani'
    },
    {
      id: 2,
      name: 'Vegetable Biryani',
      description: 'Basmati rice cooked with mixed vegetables, aromatic spices, and herbs.',
      price: '$12.99',
      isVegetarian: true,
      category: 'Biryani'
    },
    {
      id: 3,
      name: 'Lamb Biryani',
      description: 'Basmati rice cooked with tender lamb, aromatic spices, and herbs.',
      price: '$16.99',
      isSpicy: true,
      category: 'Biryani'
    },
    {
      id: 4,
      name: 'Egg Biryani',
      description: 'Basmati rice cooked with boiled eggs, aromatic spices, and herbs.',
      price: '$13.99',
      category: 'Biryani'
    },
    // Curries
    {
      id: 5,
      name: 'Butter Chicken',
      description: 'Tender chicken pieces in a creamy, tomato-based curry with a hint of butter.',
      price: '$13.99',
      category: 'Curries'
    },
    {
      id: 6,
      name: 'Paneer Tikka Masala',
      description: 'Cubes of paneer cheese in a rich, spiced tomato sauce.',
      price: '$12.99',
      isVegetarian: true,
      category: 'Curries'
    },
    {
      id: 7,
      name: 'Chana Masala',
      description: 'Chickpeas cooked in a spiced tomato and onion sauce.',
      price: '$11.99',
      isVegetarian: true,
      isSpicy: true,
      category: 'Curries'
    },
    // Appetizers
    {
      id: 8,
      name: 'Vegetable Samosas',
      description: 'Crispy pastry triangles filled with spiced potatoes, peas, and vegetables.',
      price: '$6.99',
      isVegetarian: true,
      category: 'Appetizers'
    },
    {
      id: 9,
      name: 'Onion Bhaji',
      description: 'Crispy, deep-fried onion fritters made with chickpea flour and spices.',
      price: '$5.99',
      isVegetarian: true,
      category: 'Appetizers'
    },
    // Breads & Sides
    {
      id: 10,
      name: 'Garlic Naan',
      description: 'Soft bread topped with garlic and butter, baked in a tandoor.',
      price: '$3.99',
      isVegetarian: true,
      category: 'Breads & Sides'
    },
    {
      id: 11,
      name: 'Raita',
      description: 'Yogurt mixed with cucumber, tomatoes, and spices.',
      price: '$3.49',
      isVegetarian: true,
      category: 'Breads & Sides'
    },
    // Desserts
    {
      id: 12,
      name: 'Gulab Jamun',
      description: 'Soft milk solids balls soaked in rose-flavored sugar syrup.',
      price: '$4.99',
      isVegetarian: true,
      category: 'Desserts'
    },
    {
      id: 13,
      name: 'Kheer',
      description: 'Creamy rice pudding flavored with cardamom, saffron, and topped with nuts.',
      price: '$4.99',
      isVegetarian: true,
      category: 'Desserts'
    },
  ];

  const categories = Array.from(new Set(allMenuItems.map(item => item.category)));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setMenuItems(allMenuItems);
  }, []);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    if (category === 'All') {
      setMenuItems(allMenuItems);
    } else {
      setMenuItems(allMenuItems.filter(item => item.category === category));
    }
  };

  const openOrderDialog = (item: MenuItem) => {
    setSelectedItem(item);
    setQuantity(1);
    setSpecialInstructions('');
    setIsDialogOpen(true);
  };

  const handleAddToCart = () => {
    if (selectedItem && quantity > 0) {
      addToCart({
        ...selectedItem,
        quantity,
        specialInstructions
      });
      setIsDialogOpen(false);
      toast({
        title: "Added to cart",
        description: `${quantity} x ${selectedItem.name} added to your cart`,
      });
    }
  };

  return <main className="min-h-screen pt-24 pb-20">
      <section className="bg-desi-cream py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 animate-fade-in">
            Order Online
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
            Browse our menu, select your items, and checkout securely. Choose between pickup or delivery.
          </p>
          <div className="mt-6">
            <Link to="/cart" className="inline-flex items-center bg-desi-orange hover:bg-desi-orange/90 text-white px-6 py-3 rounded-full transition-colors">
              <ShoppingCart size={18} className="mr-2" />
              View Cart
            </Link>
          </div>
        </div>
      </section>
      
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-center flex-wrap gap-2 mb-8">
            <button
              onClick={() => handleCategoryClick('All')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeCategory === 'All'
                  ? 'bg-desi-orange text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Items
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  category === activeCategory
                    ? 'bg-desi-orange text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <div 
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => openOrderDialog(item)}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-display font-medium text-xl text-desi-black mb-1 flex items-center">
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
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="font-medium text-desi-orange">{item.price}</span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          openOrderDialog(item);
                        }}
                        className="mt-2 flex items-center text-sm text-desi-orange hover:text-desi-orange/80 transition-colors"
                      >
                        <ShoppingCart size={16} className="mr-1" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
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
            <p className="text-gray-600">{selectedItem?.description}</p>
            <p className="font-medium text-desi-orange text-lg">{selectedItem?.price}</p>
            
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <div className="flex items-center w-36 border border-gray-300 rounded-md">
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
                  className="w-full text-center border-0 focus:ring-0"
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
      
      <section className="py-16 bg-desi-cream">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-10 text-center">
            Other Ways to Enjoy Our Food
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-desi-orange/10 mb-6">
                <Calendar className="text-desi-orange" size={24} />
              </div>
              <h3 className="font-display font-medium text-xl mb-3">
                Visit Our Food Truck
              </h3>
              <p className="text-gray-600 mb-4">20607 WestHeimer PKWY
Katy, Texas, 77450</p>
              <div className="flex mt-6">
                <SocialLinks spacing="space-x-4" iconSize={20} />
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-desi-orange/10 mb-6">
                <Phone className="text-desi-orange" size={24} />
              </div>
              <h3 className="font-display font-medium text-xl mb-3">
                Phone Orders
              </h3>
              <p className="text-gray-600 mb-4">
                Call us directly to place your order for pickup. We'll have it ready when you arrive at 
                our food truck.
              </p>
              <a href="tel:+13468244212" className="inline-block mt-4 px-6 py-3 bg-desi-orange hover:bg-desi-orange/90 
                  text-white rounded-full font-medium transition-colors">346-824-4212</a>
            </div>
          </div>
        </div>
      </section>
    </main>;
};

export default Order;
