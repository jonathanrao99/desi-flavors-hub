
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Clock, MapPin } from 'lucide-react';
import BestsellerCard from '@/components/BestsellerCard';
import SocialLinks from '@/components/SocialLinks';

const Index = () => {
  // Sample bestsellers data
  const bestsellers = [
    {
      title: 'Chicken Biryani',
      description: 'Fragrant basmati rice cooked with tender chicken, aromatic spices, and herbs.',
      price: '$14.99',
      imageSrc: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=600',
      isSpecial: true
    },
    {
      title: 'Butter Chicken',
      description: 'Tender chicken pieces in a creamy, tomato-based curry with a hint of butter.',
      price: '$13.99',
      imageSrc: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Vegetable Samosas',
      description: 'Crispy pastry triangles filled with spiced potatoes, peas, and vegetables.',
      price: '$6.99',
      imageSrc: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=600',
    },
  ];

  // Reset scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-desi-black text-white py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-desi-black/70 to-desi-black/95"></div>
          <img 
            src="/lovable-uploads/0e914dde-161a-4d12-bd85-4803d3a6dca2.png" 
            alt="Desi Flavors Food Truck" 
            className="h-full w-full object-cover opacity-60"
          />
        </div>
        
        <div className="container mx-auto relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          <div className="w-full max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4 animate-fade-in text-balance">
              Authentic Indian Flavors <span className="text-desi-orange">On Wheels</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-in-delay max-w-2xl mx-auto text-balance">
              Experience homestyle Indian cuisine with our specialty biryanis and 
              traditional favorites, made with authentic recipes and fresh ingredients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay">
              <Link 
                to="/menu" 
                className="bg-desi-orange hover:bg-desi-orange/90 text-white px-8 py-3 rounded-full 
                  font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                View Menu
              </Link>
              <Link 
                to="/order" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-3 
                  rounded-full font-medium transition-all border border-white/30"
              >
                Order Online
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-desi-orange/10 mb-5">
                <MapPin className="text-desi-orange" size={28} />
              </div>
              <h3 className="text-xl font-display font-medium mb-3">Food Truck Location</h3>
              <p className="text-gray-600">
                Find us at popular spots around Katy, TX. Check our social media for daily locations.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="text-center p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-desi-orange/10 mb-5">
                <Star className="text-desi-orange" size={28} />
              </div>
              <h3 className="text-xl font-display font-medium mb-3">Authentic Recipes</h3>
              <p className="text-gray-600">
                Family recipes passed down through generations, bringing you the true taste of India.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="text-center p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-desi-orange/10 mb-5">
                <Clock className="text-desi-orange" size={28} />
              </div>
              <h3 className="text-xl font-display font-medium mb-3">Fresh Ingredients</h3>
              <p className="text-gray-600">
                We use only the freshest ingredients and authentic spices to create our flavorful dishes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bestsellers Section */}
      <section className="py-20 bg-desi-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Bestsellers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Try our crowd favorites, featuring our signature biryanis and flavorful curries 
              that have made us a local favorite.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestsellers.map((item, index) => (
              <BestsellerCard
                key={index}
                title={item.title}
                description={item.description}
                price={item.price}
                imageSrc={item.imageSrc}
                isSpecial={item.isSpecial}
                delay={index * 100}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/menu" 
              className="inline-flex items-center text-desi-orange hover:text-desi-orange/80 font-medium transition-colors"
            >
              <span>View Full Menu</span>
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-desi-black text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Connect With Us
              </h2>
              <p className="text-gray-300 mb-6">
                Follow us on social media to stay updated with our latest specials, locations, 
                and mouthwatering food photos.
              </p>
              <SocialLinks iconColor="text-white" iconSize={28} />
            </div>
            
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="bg-desi-gray/30 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <h3 className="text-xl font-display font-medium mb-4">
                  Join Our Mailing List
                </h3>
                <p className="text-gray-300 mb-4">
                  Subscribe to receive updates on specials, new menu items, and truck locations.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none 
                      focus:ring-2 focus:ring-desi-orange text-white w-full"
                  />
                  <button className="bg-desi-orange hover:bg-desi-orange/90 text-white px-6 py-3 
                    rounded-lg font-medium transition-all whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
