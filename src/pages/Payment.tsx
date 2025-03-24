
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CreditCard, 
  CheckCircle, 
  ArrowLeft, 
  Lock,
  Calendar,
  CreditCardIcon,
  User
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from '@/context/CartContext';
import { toast } from '@/components/ui/use-toast';
import { submitOrder } from '@/services/orderService';

const Payment = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [deliveryMethod] = useState(localStorage.getItem('deliveryMethod') || 'pickup');
  
  // Form state
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [billingZip, setBillingZip] = useState('');
  
  // Customer info state
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');

  // Calculate order totals
  const subtotal = getCartTotal();
  const tax = subtotal * 0.0825; // 8.25% tax rate
  const deliveryFee = deliveryMethod === 'delivery' ? 3.99 : 0;
  const total = subtotal + tax + deliveryFee;

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Redirect if cart is empty
    if (cartItems.length === 0 && !paymentSuccess) {
      navigate('/cart');
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before proceeding to payment",
        variant: "destructive",
      });
    }
  }, [cartItems.length, navigate, paymentSuccess]);

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    
    return v;
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiryDate(e.target.value);
    setExpiryDate(formatted);
  };

  const formatPhoneNumber = (value: string) => {
    const v = value.replace(/\D/g, '');
    
    if (v.length <= 3) {
      return v;
    } else if (v.length <= 6) {
      return `(${v.slice(0, 3)}) ${v.slice(3)}`;
    } else {
      return `(${v.slice(0, 3)}) ${v.slice(3, 6)}-${v.slice(6, 10)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setCustomerPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate customer info
    if (!customerName || !customerEmail || !customerPhone) {
      toast({
        title: "Missing information",
        description: "Please fill in all customer information",
        variant: "destructive",
      });
      return;
    }
    
    // Validate delivery address for delivery orders
    if (deliveryMethod === 'delivery' && !deliveryAddress) {
      toast({
        title: "Missing address",
        description: "Please provide your delivery address",
        variant: "destructive",
      });
      return;
    }
    
    // Validate payment info
    if (!cardName || !cardNumber || !expiryDate || !cvv || !billingZip) {
      toast({
        title: "Missing information",
        description: "Please fill in all payment details",
        variant: "destructive",
      });
      return;
    }
    
    if (cardNumber.replace(/\s/g, '').length < 16) {
      toast({
        title: "Invalid card number",
        description: "Please enter a valid card number",
        variant: "destructive",
      });
      return;
    }
    
    // Process payment
    setIsProcessing(true);
    
    try {
      // In a real implementation, this would process payment through Stripe or Square
      // For now, we'll simulate payment processing
      
      // Create order object for Supabase
      const orderData = {
        customer_name: customerName,
        customer_email: customerEmail,
        customer_phone: customerPhone.replace(/\D/g, ''), // Strip non-digits
        items: cartItems,
        total_amount: total,
        delivery_address: deliveryMethod === 'delivery' ? deliveryAddress : undefined,
        special_instructions: cartItems.some(item => item.specialInstructions) 
          ? cartItems.map(item => item.specialInstructions && `${item.name}: ${item.specialInstructions}`).filter(Boolean).join('; ')
          : undefined,
        order_type: deliveryMethod as 'pickup' | 'delivery',
        payment_id: `sim_${Date.now()}` // Simulated payment ID
      };
      
      // Save order to Supabase
      const result = await submitOrder(orderData);
      
      if (!result.success) {
        throw new Error('Failed to save order');
      }
      
      // Clear cart and show success
      clearCart();
      setPaymentSuccess(true);
      
      // Clear delivery method from localStorage
      localStorage.removeItem('deliveryMethod');
      
      // Redirect to home after delay
      setTimeout(() => {
        navigate('/');
        toast({
          title: "Order placed successfully!",
          description: "Thank you for your order. Your food will be ready soon!",
        });
      }, 3000);
    } catch (error) {
      console.error('Payment processing error:', error);
      toast({
        title: "Payment failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
      setIsProcessing(false);
    }
  };

  if (paymentSuccess) {
    return (
      <main className="min-h-screen pt-24 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 pt-10">
          <div className="max-w-md mx-auto text-center bg-white p-8 rounded-xl shadow-md">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
              <CheckCircle className="text-green-600" size={32} />
            </div>
            <h1 className="text-2xl font-display font-bold mb-4">Payment Successful!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for your order. Your food will be prepared {deliveryMethod === 'pickup' ? 'for pickup' : 'for delivery'} shortly.
            </p>
            <p className="text-gray-600 mb-6">
              A confirmation has been sent to your email address.
            </p>
            <Button 
              onClick={() => navigate('/')}
              className="bg-desi-orange hover:bg-desi-orange/90 text-white"
            >
              Return to Home
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 pt-4">
        <button 
          onClick={() => navigate('/cart')}
          className="flex items-center text-gray-600 hover:text-desi-orange transition-colors mb-6"
        >
          <ArrowLeft size={16} className="mr-1" />
          <span>Back to Cart</span>
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
              <h1 className="text-2xl font-display font-bold mb-6">Payment Details</h1>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h2 className="font-medium text-lg mb-4">Customer Information</h2>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="customerName">Full Name</Label>
                        <Input 
                          id="customerName"
                          placeholder="John Smith"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="customerEmail">Email Address</Label>
                        <Input 
                          id="customerEmail"
                          type="email"
                          placeholder="john@example.com"
                          value={customerEmail}
                          onChange={(e) => setCustomerEmail(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="customerPhone">Phone Number</Label>
                        <Input 
                          id="customerPhone"
                          placeholder="(123) 456-7890"
                          value={customerPhone}
                          onChange={handlePhoneChange}
                          required
                        />
                      </div>
                      
                      {deliveryMethod === 'delivery' && (
                        <div className="space-y-2">
                          <Label htmlFor="deliveryAddress">Delivery Address</Label>
                          <Input 
                            id="deliveryAddress"
                            placeholder="123 Main St, City, State, ZIP"
                            value={deliveryAddress}
                            onChange={(e) => setDeliveryAddress(e.target.value)}
                            required
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cardName">Name on Card</Label>
                    <div className="relative">
                      <Input 
                        id="cardName"
                        placeholder="John Smith"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        className="pl-10"
                        required
                      />
                      <User size={16} className="absolute left-3 top-3 text-gray-500" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <div className="relative">
                      <Input 
                        id="cardNumber"
                        placeholder="4242 4242 4242 4242"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        maxLength={19}
                        className="pl-10"
                        required
                      />
                      <CreditCardIcon size={16} className="absolute left-3 top-3 text-gray-500" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2 col-span-1">
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <div className="relative">
                        <Input 
                          id="expiryDate"
                          placeholder="MM/YY"
                          value={expiryDate}
                          onChange={handleExpiryDateChange}
                          maxLength={5}
                          className="pl-10"
                          required
                        />
                        <Calendar size={16} className="absolute left-3 top-3 text-gray-500" />
                      </div>
                    </div>
                    
                    <div className="space-y-2 col-span-1">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input 
                        id="cvv"
                        placeholder="123"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                        maxLength={4}
                        type="password"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2 col-span-1">
                      <Label htmlFor="billingZip">Billing Zip</Label>
                      <Input 
                        id="billingZip"
                        placeholder="12345"
                        value={billingZip}
                        onChange={(e) => setBillingZip(e.target.value.replace(/\D/g, ''))}
                        maxLength={5}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center pt-4">
                    <Lock size={16} className="text-gray-500 mr-2" />
                    <p className="text-sm text-gray-500">
                      Your payment information is secure and encrypted
                    </p>
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-desi-orange hover:bg-desi-orange/90 text-white py-6 text-lg"
                  >
                    {isProcessing ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : `Pay $${total.toFixed(2)}`}
                  </Button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="font-display font-medium text-lg mb-4 pb-2 border-b">Order Summary</h2>
              
              <div className="space-y-3 mb-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between">
                    <span className="text-gray-600">
                      {item.quantity} x {item.name}
                    </span>
                    <span>
                      ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3 border-t border-gray-200 pt-4 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (8.25%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                {deliveryMethod === 'delivery' && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                )}
              </div>
              
              <div className="flex justify-between border-t border-gray-200 pt-4 font-medium text-lg">
                <span>Total</span>
                <span className="text-desi-orange">${total.toFixed(2)}</span>
              </div>
              
              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 rounded-full bg-desi-orange/20 flex items-center justify-center mr-2">
                    <CheckCircle size={14} className="text-desi-orange" />
                  </div>
                  <p className="text-sm font-medium">
                    {deliveryMethod === 'pickup' ? 'Pickup' : 'Delivery'}
                  </p>
                </div>
                <p className="text-xs text-gray-500">
                  {deliveryMethod === 'pickup' 
                    ? 'Your order will be ready for pickup in 20-30 minutes.' 
                    : 'Your order will be delivered in 30-45 minutes.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Payment;
