
import { useCart } from '@/context/CartContext';
import { useMenuItems } from '@/hooks/useMenuItems';
import MenuHeader from '@/components/menu/MenuHeader';
import MenuCategories from '@/components/menu/MenuCategories';
import MenuItemCard from '@/components/menu/MenuItemCard';
import MenuNotes from '@/components/menu/MenuNotes';
import { MenuItem } from '@/types/menu';
import { toast } from '@/components/ui/use-toast';

const Menu = () => {
  const { 
    activeCategory,
    setActiveCategory,
    menuItems,
    isScrolled,
    categories
  } = useMenuItems('Biryani');
  const { addToCart } = useCart();

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
  };

  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Menu Header */}
      <MenuHeader />
      
      {/* Menu Categories */}
      <MenuCategories 
        activeCategory={activeCategory}
        categories={categories}
        setActiveCategory={setActiveCategory}
        isScrolled={isScrolled}
      />
      
      {/* Menu Items */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">
            {activeCategory}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {menuItems.map((item, index) => (
              <MenuItemCard 
                key={item.id}
                item={item}
                handleAddToCart={handleAddToCart}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Menu Notes */}
      <MenuNotes />
    </main>
  );
};

export default Menu;
