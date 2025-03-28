import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";

interface CartSummaryProps {
  items: any[];
}

const CartSummary = ({ items }: CartSummaryProps) => {
  const { getCartTotal } = useCart();
  const navigate = useNavigate();
  const subtotal = getCartTotal();
  const tax = subtotal * 0.0825; // 8.25% tax rate
  const deliveryFee = 3.99; // Fixed delivery fee
  const total = subtotal + tax + deliveryFee;

  const handleCheckout = () => {
    if (items.length === 0) {
      return;
    }
    navigate('/payment');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
      <h2 className="font-display font-medium text-lg mb-4">Order Summary</h2>
      
      <div className="space-y-3 border-t border-gray-200 pt-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax (8.25%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Delivery Fee</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-t border-gray-200 pt-3 font-medium text-lg">
          <span>Total</span>
          <span className="text-desi-orange">${total.toFixed(2)}</span>
        </div>
      </div>
      
      <Button
        onClick={handleCheckout}
        disabled={items.length === 0}
        className="w-full mt-6 bg-desi-orange hover:bg-desi-orange/90 text-white py-3 px-4 rounded-lg font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        Proceed to Checkout
      </Button>
      
      <p className="text-xs text-gray-500 mt-4 text-center">
        Delivery orders typically arrive within 30-45 minutes.
      </p>
    </div>
  );
};

export default CartSummary; 