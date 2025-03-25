
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, ShoppingCart, Plus, Minus, Star, Clock } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
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
  imageSrc?: string;
}

const Order = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [showVegOnly, setShowVegOnly] = useState(false);
  const { addToCart } = useCart();

  const allMenuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Chicken Biryani',
      description: 'Fragrant basmati rice cooked with tender chicken, aromatic spices, and herbs.',
      price: '$14.99',
      isSpicy: true,
      category: 'Biryani',
      imageSrc: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 2,
      name: 'Vegetable Biryani',
      description: 'Basmati rice cooked with mixed vegetables, aromatic spices, and herbs.',
      price: '$12.99',
      isVegetarian: true,
      category: 'Biryani',
      imageSrc: 'https://images.unsplash.com/photo-1645177628472-9771f5797883?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 3,
      name: 'Lamb Biryani',
      description: 'Basmati rice cooked with tender lamb, aromatic spices, and herbs.',
      price: '$16.99',
      isSpicy: true,
      category: 'Biryani',
      imageSrc: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 4,
      name: 'Egg Biryani',
      description: 'Basmati rice cooked with boiled eggs, aromatic spices, and herbs.',
      price: '$13.99',
      category: 'Biryani',
      imageSrc: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 5,
      name: 'Butter Chicken',
      description: 'Tender chicken pieces in a creamy, tomato-based curry with a hint of butter.',
      price: '$13.99',
      category: 'Curries',
      imageSrc: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 6,
      name: 'Paneer Tikka Masala',
      description: 'Cubes of paneer cheese in a rich, spiced tomato sauce.',
      price: '$12.99',
      isVegetarian: true,
      category: 'Curries',
      imageSrc: 'https://images.unsplash.com/photo-1567188040759-fb8a3d42c3b3?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 7,
      name: 'Chana Masala',
      description: 'Chickpeas cooked in a spiced tomato and onion sauce.',
      price: '$11.99',
      isVegetarian: true,
      isSpicy: true,
      category: 'Curries',
      imageSrc: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 8,
      name: 'Vegetable Samosas',
      description: 'Crispy pastry triangles filled with spiced potatoes, peas, and vegetables.',
      price: '$6.99',
      isVegetarian: true,
      category: 'Appetizers',
      imageSrc: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 9,
      name: 'Onion Bhaji',
      description: 'Crispy, deep-fried onion fritters made with chickpea flour and spices.',
      price: '$5.99',
      isVegetarian: true,
      category: 'Appetizers',
      imageSrc: 'https://images.unsplash.com/photo-1606755456614-b3875c86b45e?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 10,
      name: 'Garlic Naan',
      description: 'Soft bread topped with garlic and butter, baked in a tandoor.',
      price: '$3.99',
      isVegetarian: true,
      category: 'Breads & Sides',
      imageSrc: 'https://images.unsplash.com/photo-1579630941914-0b1729bfc78d?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 11,
      name: 'Raita',
      description: 'Yogurt mixed with cucumber, tomatoes, and spices.',
      price: '$3.49',
      isVegetarian: true,
      category: 'Breads & Sides',
      imageSrc: 'https://images.unsplash.com/photo-1590779033965-9a6e5be8ef87?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 12,
      name: 'Gulab Jamun',
      description: 'Soft milk solids balls soaked in rose-flavored sugar syrup.',
      price: '$4.99',
      isVegetarian: true,
      category: 'Desserts',
      imageSrc: 'https://images.unsplash.com/photo-1586954451116-17a1255a45cb?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 13,
      name: 'Kheer',
      description: 'Creamy rice pudding flavored with cardamom, saffron, and topped with nuts.',
      price: '$4.99',
      isVegetarian: true,
      category: 'Desserts',
      imageSrc: 'https://images.unsplash.com/photo-1605195340090-9ae03a3cde34?auto=format&fit=crop&q=80&w=600'
    },
  ];

  const categories = Array.from(new Set(allMenuItems.map(item => item.category)));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setMenuItems(allMenuItems);
  }, []);

  // Handle filtering for both category and vegetarian toggle
  useEffect(() => {
    let filtered = [...allMenuItems];
    
    // Filter by category if not "All"
    if (activeCategory !== 'All') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }
    
    // Filter by vegetarian if the toggle is on
    if (showVegOnly) {
      filtered = filtered.filter(item => item.isVegetarian);
    }
    
    setFilteredItems(filtered);
  }, [activeCategory, showVegOnly, allMenuItems]);

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

  const getItemPrice = (basePrice: string, qty: number) => {
    const price = parseFloat(basePrice.replace('$', ''));
    return `$${(price * qty).toFixed(2)}`;
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
            <Link to="/cart" className="inline-flex items-center bg-desi-orange hover:bg-desi-orange/90 text-white px-6 py-3 rounded-full transition-colors shadow-md hover:shadow-lg">
              <ShoppingCart size={18} className="mr-2" />
              View Cart
            </Link>
          </div>
        </div>
      </section>
      
      <section className="bg-white/80 backdrop-blur-md py-4 border-b border-gray-100 sticky top-16 z-10 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex justify-center flex-wrap gap-2">
              <button
                onClick={() => handleCategoryClick('All')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === 'All'
                    ? 'bg-desi-orange text-white shadow-md'
                    : 'bg-gray-100/80 text-gray-700 hover:bg-gray-200/80'
                }`}
              >
                All Items
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    category === activeCategory
                      ? 'bg-desi-orange text-white shadow-md'
                      : 'bg-gray-100/80 text-gray-700 hover:bg-gray-200/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-2">
              <ToggleGroup type="single" defaultValue="non-veg">
                <ToggleGroupItem 
                  value="non-veg" 
                  className={!showVegOnly ? "bg-red-100 data-[state=on]:bg-red-200" : ""}
                  onClick={() => setShowVegOnly(false)}
                >
                  All
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="veg" 
                  className={showVegOnly ? "bg-green-100 data-[state=on]:bg-green-200" : ""}
                  onClick={() => setShowVegOnly(true)}
                >
                  Veg Only
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => openOrderDialog(item)}
              >
                {item.imageSrc && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.imageSrc} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}
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
                <span className="font-medium text-desi-orange text-lg mr-6">
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
      
      <section className="py-12 bg-desi-cream">
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
              <p className="text-gray-600 mb-4">
                20607 Westheimer PKWY<br />
                Katy, Texas, 77450
              </p>
              <div className="flex items-start mt-4 mb-6">
                <Clock className="text-desi-orange mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-medium">Operating Hours</h4>
                  <p className="text-gray-600">
                    Mon - Thurs: 4PM - 11PM<br />
                    Fri - Sun: 1PM - 11PM
                  </p>
                </div>
              </div>
              <div className="flex mt-4">
                <SocialLinks spacing="space-x-4" iconSize={20} />
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-desi-orange/10 mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-desi-orange"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
                </svg>
              </div>
              <h3 className="font-display font-medium text-xl mb-3">
                WhatsApp Orders
              </h3>
              <p className="text-gray-600 mb-4">
                Message us directly on WhatsApp to place your order for pickup. We'll have it ready when you arrive at 
                our food truck.
              </p>
              <a href="https://wa.me/13468244212" className="inline-block mt-4 px-6 py-3 bg-desi-orange hover:bg-desi-orange/90 
                  text-white rounded-full font-medium transition-colors">
                <span className="flex items-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
                  </svg>
                  346-824-4212
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>;
};

export default Order;
