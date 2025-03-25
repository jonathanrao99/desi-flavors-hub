
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Clock } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import OrderItemCard from '@/components/OrderItemCard';
import OrderDialog from '@/components/OrderDialog';
import VegToggle from '@/components/VegToggle';
import SocialLinks from '@/components/SocialLinks';

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
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch menu items from Supabase
  useEffect(() => {
    const fetchMenuItems = async () => {
      setIsLoading(true);
      try {
        console.log('Fetching menu items for order page...');
        const { data, error } = await supabase
          .from('menu_items')
          .select('*');
        
        if (error) {
          console.error('Error fetching menu items:', error);
          toast({
            title: "Error",
            description: "Failed to load menu items",
            variant: "destructive"
          });
          return;
        }
        
        if (data) {
          console.log('Menu items fetched for order page:', data);
          // Transform database fields to match our interface
          const transformedData = data.map(item => ({
            id: item.id,
            name: item.name,
            description: item.description || '',
            price: item.price,
            isVegetarian: item.isvegetarian,
            isSpicy: item.isspicy,
            category: item.category,
            imageSrc: item.imagesrc
          }));
          
          // Extract unique categories
          const uniqueCategories = Array.from(new Set(transformedData.map(item => item.category)));
          setCategories(['All', ...uniqueCategories]);
          setMenuItems(transformedData);
        }
      } catch (err) {
        console.error('Failed to fetch menu items:', err);
        toast({
          title: "Error",
          description: "Failed to load menu items",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  // Handle filtering for both category and vegetarian toggle
  useEffect(() => {
    let filtered = [...menuItems];
    
    // Filter by category if not "All"
    if (activeCategory !== 'All') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }
    
    // Filter by vegetarian if the toggle is on
    if (showVegOnly) {
      filtered = filtered.filter(item => item.isVegetarian);
    }
    
    setFilteredItems(filtered);
  }, [activeCategory, showVegOnly, menuItems]);

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
            
            {/* Moved VegToggle outside category section */}
            <VegToggle showVegOnly={showVegOnly} setShowVegOnly={setShowVegOnly} />
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-desi-orange"></div>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No items found. Try changing your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <OrderItemCard 
                  key={item.id} 
                  item={item} 
                  openOrderDialog={openOrderDialog} 
                />
              ))}
            </div>
          )}
        </div>
      </section>

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
      
      <section className="py-12 bg-desi-cream">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-10 text-center">
            Other Ways to Enjoy Our Food
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
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
