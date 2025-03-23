
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import OrderPlatform from '@/components/OrderPlatform';
import SocialLinks from '@/components/SocialLinks';
import { Phone, Calendar, AlertCircle, ShoppingCart } from 'lucide-react';

const Order = () => {
  // Order platforms data
  const platforms = [{
    name: 'Uber Eats',
    logo: '',
    description: 'Order with Uber Eats for quick delivery. Enjoy our full menu from the comfort of your home.',
    link: 'https://ubereats.com',
    backgroundColor: 'bg-white',
    textColor: 'text-desi-black'
  }, {
    name: 'DoorDash',
    logo: '',
    description: 'Get your favorite Indian dishes delivered through DoorDash. Fast delivery for all menu items.',
    link: 'https://doordash.com',
    backgroundColor: 'bg-desi-orange',
    textColor: 'text-white'
  }, {
    name: 'Grubhub',
    logo: '',
    description: 'Find us on Grubhub for easy ordering and reliable delivery. All your favorites one click away.',
    link: 'https://grubhub.com',
    backgroundColor: 'bg-desi-gray',
    textColor: 'text-white'
  }];

  // Reset scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return <main className="min-h-screen pt-24 pb-20">
      {/* Order Header */}
      <section className="bg-desi-cream py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 animate-fade-in">
            Order Online
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
            Craving our delicious Indian food? Order online through our website or your favorite delivery platform.
          </p>
        </div>
      </section>
      
      {/* Direct Ordering */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-10 text-center">
            Order Directly From Us
          </h2>
          
          <div className="max-w-3xl mx-auto bg-desi-cream rounded-xl p-8 shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="md:flex-1">
                <h3 className="text-xl font-display font-medium mb-3">
                  Customize Your Order
                </h3>
                <p className="text-gray-600 mb-6">
                  Browse our menu, select your favorite dishes, and checkout securely. Choose between pickup or delivery.
                </p>
                <Link
                  to="/menu"
                  className="inline-flex items-center justify-center px-6 py-3 bg-desi-orange text-white rounded-full font-medium transition-all hover:bg-desi-orange/90"
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Start Your Order
                </Link>
              </div>
              
              <div className="md:flex-1 w-full max-w-xs">
                <img 
                  src="/lovable-uploads/0e914dde-161a-4d12-bd85-4803d3a6dca2.png" 
                  alt="Desi Flavors Food Truck" 
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Order Platforms */}
      <section className="py-16 bg-desi-cream">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-10 text-center">
            Delivery Partners
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {platforms.map((platform, index) => <OrderPlatform key={index} name={platform.name} logo={platform.logo} description={platform.description} link={platform.link} backgroundColor={platform.backgroundColor} textColor={platform.textColor} delay={index * 100} />)}
          </div>
          
          <div className="bg-white rounded-xl p-6 mt-12 max-w-3xl mx-auto shadow-md">
            <div className="flex items-start space-x-4">
              <AlertCircle className="text-desi-orange flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-display font-medium text-lg mb-2">
                  Delivery Information
                </h3>
                <p className="text-gray-600">
                  Delivery times and availability may vary based on your location and the delivery 
                  platform. Delivery fees are set by our partners and may vary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Alternative Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-10 text-center">
            Other Ways to Enjoy Our Food
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Visit Us */}
            <div className="bg-desi-cream rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-desi-orange/10 mb-6">
                <Calendar className="text-desi-orange" size={24} />
              </div>
              <h3 className="font-display font-medium text-xl mb-3">
                Visit Our Food Truck
              </h3>
              <p className="text-gray-600 mb-4">20607 WestHeimer PKWY
Katy, Texas, 77450</p>
              <div className="flex mt-6">
                <SocialLinks spacing="space-x-4" iconSize={20} />
              </div>
            </div>
            
            {/* Call Directly */}
            <div className="bg-desi-cream rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-desi-orange/10 mb-6">
                <Phone className="text-desi-orange" size={24} />
              </div>
              <h3 className="font-display font-medium text-xl mb-3">
                Phone Orders
              </h3>
              <p className="text-gray-600 mb-4">
                Call us directly to place your order for pickup. We'll have it ready when you arrive at 
                our food truck.
              </p>
              <a href="tel:+13468244212" className="inline-block mt-4 px-6 py-3 bg-desi-orange hover:bg-desi-orange/90 
                  text-white rounded-full font-medium transition-colors">346-824-4212</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Catering */}
      <section className="py-16 bg-desi-black text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Catering Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Planning an event? Let us cater your next party, corporate function, or special occasion 
            with our delicious Indian cuisine.
          </p>
          <a href="mailto:desiflavorskaty@gmail.com" className="inline-block px-8 py-3 bg-desi-orange hover:bg-desi-orange/90 
              text-white rounded-full font-medium transition-colors shadow-lg">
            Contact for Catering
          </a>
        </div>
      </section>
    </main>;
};

export default Order;
