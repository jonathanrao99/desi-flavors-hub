
import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import MenuDisplay from '@/components/MenuDisplay';
import MenuNotes from '@/components/MenuNotes';

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
        console.log('Fetching menu items...');
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
          console.log('Menu items fetched:', data);
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
          <MenuDisplay 
            menuItems={menuItems}
            categories={categories}
            isLoading={isLoading}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </section>
      
      {/* Menu Notes */}
      <MenuNotes />
    </main>
  );
};

export default Menu;
