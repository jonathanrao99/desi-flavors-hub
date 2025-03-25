
import { useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { toast } from '@/components/ui/use-toast';
import MenuHeader from '@/components/MenuHeader';
import MenuNotes from '@/components/MenuNotes';
import MenuItemsByCategory from '@/components/MenuItemsByCategory';
import MenuLoading from '@/components/MenuLoading';
import { useMenuItems } from '@/hooks/useMenuItems';

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
  const { isLoading, categories, groupedItems } = useMenuItems();
  const { addToCart } = useCart();

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
      <MenuHeader />
      
      {/* Menu Items in Two Columns */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          {isLoading ? (
            <MenuLoading />
          ) : (
            <MenuItemsByCategory 
              categories={categories}
              groupedItems={groupedItems}
              handleAddToCart={handleAddToCart}
            />
          )}
        </div>
      </section>
      
      {/* Menu Notes */}
      <MenuNotes />
    </main>
  );
};

export default Menu;
