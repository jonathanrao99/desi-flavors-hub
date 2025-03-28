import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMenuItems, MenuItem } from '@/hooks/useMenuItems';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import MenuHeader from '@/components/menu/MenuHeader';
import MenuCategories from '@/components/menu/MenuCategories';
import MenuItemCard from '@/components/menu/MenuItemCard';
import MenuNotes from '@/components/menu/MenuNotes';

export default function Menu() {
  useScrollToTop();
  const { menuItems, loading, error, selectedCategory, setSelectedCategory, categories } = useMenuItems();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    console.log('Menu items in component:', menuItems);
    console.log('Categories in component:', categories);
  }, [menuItems, categories]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = (item: MenuItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1
    });
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-desi-orange"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">Error loading menu: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Menu Header */}
      <MenuHeader />
      
      {/* Category Navigation */}
      <div className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-2">
          <div className="flex overflow-x-auto space-x-2 pb-1 scrollbar-hide">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-1.5 rounded-full whitespace-nowrap transition-all flex items-center space-x-1 text-sm ${
                selectedCategory === 'All'
                  ? 'bg-desi-orange text-white shadow-md shadow-desi-orange/20'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              <span>All Items</span>
              {selectedCategory === 'All' && <ChevronRight className="w-3 h-3" />}
            </motion.button>
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full whitespace-nowrap transition-all flex items-center space-x-1 text-sm ${
                  selectedCategory === category
                    ? 'bg-desi-orange text-white shadow-md shadow-desi-orange/20'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }`}
              >
                <span>{category}</span>
                {selectedCategory === category && <ChevronRight className="w-3 h-3" />}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Menu Items Grid */}
      <div className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {menuItems && menuItems.length > 0 ? (
              menuItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                      <span className="text-desi-orange font-medium">{item.price}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex items-center space-x-2 mb-4">
                      {item.isvegetarian && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          Vegetarian
                        </span>
                      )}
                      {item.isspicy && (
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                          Spicy
                        </span>
                      )}
                    </div>
                    <Button
                      onClick={() => handleAddToCart(item)}
                      className="w-full bg-desi-orange hover:bg-desi-orange/90 text-white"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500">No items found in this category.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Menu Notes */}
      <MenuNotes />
    </div>
  );
}
