import { useOrderMenu } from '@/hooks/useOrderMenu';
import OrderHeader from '@/components/order/OrderHeader';
import OrderCategories from '@/components/order/OrderCategories';
import OrderItemCard from '@/components/order/OrderItemCard';
import OrderDialog from '@/components/order/OrderDialog';
import OtherWaysSection from '@/components/order/OtherWaysSection';

const Order = () => {
  const {
    activeCategory,
    menuItems,
    isScrolled,
    categories,
    isDialogOpen,
    setIsDialogOpen,
    selectedItem,
    quantity,
    setQuantity,
    specialInstructions,
    setSpecialInstructions,
    handleCategoryClick,
    openOrderDialog,
    handleAddToCart
  } = useOrderMenu();

  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Order Header */}
      <OrderHeader />
      
      {/* Categories */}
      <OrderCategories 
        activeCategory={activeCategory}
        categories={categories}
        handleCategoryClick={handleCategoryClick}
        isScrolled={isScrolled}
      />
      
      {/* Menu Items */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <OrderItemCard 
                key={item.id}
                item={item} 
                openOrderDialog={openOrderDialog} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Order Dialog */}
      <OrderDialog 
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        selectedItem={selectedItem}
        quantity={quantity}
        setQuantity={setQuantity}
        specialInstructions={specialInstructions}
        setSpecialInstructions={setSpecialInstructions}
        handleAddToCart={handleAddToCart}
      />
      
      {/* Other Ways Section */}
      <OtherWaysSection />
    </main>
  );
};

export default Order;
