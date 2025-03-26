
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const OrderHeader = () => {
  return (
    <section className="bg-desi-cream py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 animate-fade-in">
          Order Online
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
          Browse our menu, select your items, and checkout securely. Choose between pickup or delivery from our 
          location at 1989 North Fry RD, Katy, TX 77449.
        </p>
        <div className="mt-6">
          <Link to="/cart" className="inline-flex items-center bg-desi-orange hover:bg-desi-orange/90 text-white px-6 py-3 rounded-full transition-colors shadow-md hover:shadow-lg">
            <ShoppingCart size={18} className="mr-2" />
            View Cart
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderHeader;
