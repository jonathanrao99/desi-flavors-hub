
import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ShoppingCart } from 'lucide-react';

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
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);
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

  // Group menu items by category
  const groupedItems = categories.reduce((acc, category) => {
    acc[category] = menuItems.filter(item => item.category === category);
    return acc;
  }, {} as Record<string, MenuItem[]>);

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
      
      {/* Menu Items in Two Columns */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-desi-orange"></div>
            </div>
          ) : (
            <div className="space-y-12">
              {categories.map(category => (
                <div key={category} className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-center">
                    {category}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {groupedItems[category]?.map(item => (
                      <div key={item.id} className="flex justify-between items-start border-b border-gray-100 pb-4">
                        <div>
                          <h3 className="font-display font-medium text-lg text-desi-black">
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
                          <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="font-medium text-desi-orange">{item.price}</span>
                          <button 
                            onClick={() => handleAddToCart(item)}
                            className="mt-2 flex items-center text-sm text-desi-orange hover:text-desi-orange/80 transition-colors"
                          >
                            <ShoppingCart size={16} className="mr-1" />
                            Add
                          </button>
                        </div>
                      </div>
                    ))}
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
