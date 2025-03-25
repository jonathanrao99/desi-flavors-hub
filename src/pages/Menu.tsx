
import { useState, useEffect } from 'react';
import { ChevronDown, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  isvegetarian?: boolean;
  isspicy?: boolean;
  category: string;
  imagesrc?: string;
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Biryani');
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();

  // Fetch menu items from Supabase
  useEffect(() => {
    const fetchMenuItems = async () => {
      setIsLoading(true);
      try {
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
          // Transform database fields to match our interface
          const transformedData = data.map(item => ({
            id: item.id,
            name: item.name,
            description: item.description || '',
            price: item.price,
            isvegetarian: item.isvegetarian,
            isspicy: item.isspicy,
            category: item.category,
            imagesrc: item.imagesrc
          }));
          
          // Extract unique categories
          const uniqueCategories = Array.from(new Set(transformedData.map(item => item.category)));
          setCategories(uniqueCategories);
          
          // Set initial active category if available
          if (uniqueCategories.length > 0 && !uniqueCategories.includes(activeCategory)) {
            setActiveCategory(uniqueCategories[0]);
          }
          
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

  // Filter menu items by active category
  useEffect(() => {
    if (menuItems.length > 0) {
      const filteredItems = menuItems.filter(item => item.category === activeCategory);
      setMenuItems(filteredItems);
    }
  }, [activeCategory]);

  // Reset scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart`,
    });
  };

  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Menu Header */}
      <section className="bg-desi-cream py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 animate-fade-in">
            Our Menu
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
            Discover our authentic Indian dishes made with traditional recipes and fresh ingredients. 
            All served with love, directly from our food truck.
          </p>
          <div className="mt-4 inline-flex items-center justify-center">
            <span className="bg-green-100 text-green-800 text-sm rounded-full px-3 py-1 font-medium mr-2">
              100% Halal Certified
            </span>
          </div>
        </div>
      </section>
      
      {/* Menu Categories - Updated to be more transparent and stick closer to header */}
      <section className="bg-white/80 backdrop-blur-md py-4 border-b border-gray-100 sticky top-16 z-10 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6">
          {/* Mobile Category Dropdown */}
          <div className="md:hidden mb-4">
            <div className="relative">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="appearance-none w-full bg-white/90 border border-gray-300 px-4 py-3 rounded-lg shadow-sm 
                  focus:outline-none focus:ring-2 focus:ring-desi-orange focus:border-desi-orange"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <ChevronDown size={20} className="absolute right-4 top-3.5 text-gray-500 pointer-events-none" />
            </div>
          </div>
          
          {/* Desktop Categories */}
          <div className="hidden md:flex justify-center space-x-2 overflow-x-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
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
        </div>
      </section>
      
      {/* Menu Items */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">
            {activeCategory}
          </h2>
          
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-desi-orange"></div>
            </div>
          ) : menuItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No menu items found for this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {menuItems.map((item, index) => (
                <div 
                  key={item.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  style={{ 
                    opacity: 0, 
                    animation: 'fade-in 0.5s ease-out forwards', 
                    animationDelay: `${index * 100}ms` 
                  }}
                >
                  {item.imagesrc && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.imagesrc} 
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
                          {item.isvegetarian && (
                            <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">
                              Veg
                            </span>
                          )}
                          {item.isspicy && (
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
                          onClick={() => handleAddToCart(item)}
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
          )}
        </div>
      </section>
      
      {/* Menu Notes */}
      <section className="bg-desi-cream py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-display font-medium mb-4 text-desi-black">
              Menu Notes
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="bg-green-100 text-green-800 text-xs rounded-full px-2 py-0.5 mt-0.5 mr-2">
                  Veg
                </span>
                <span>Vegetarian dishes</span>
              </li>
              <li className="flex items-start">
                <span className="bg-red-100 text-red-800 text-xs rounded-full px-2 py-0.5 mt-0.5 mr-2">
                  Spicy
                </span>
                <span>Spicy dishes that pack some heat</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-100 text-green-800 text-xs rounded-full px-2 py-0.5 mt-0.5 mr-2">
                  Halal
                </span>
                <span>All our meat dishes are certified Halal</span>
              </li>
              <li className="mt-4">
                All dishes are prepared fresh daily. Menu items may vary based on availability.
              </li>
              <li>
                Please inform us of any allergies or dietary restrictions when ordering.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
