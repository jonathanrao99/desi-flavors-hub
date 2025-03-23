import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Clock, MapPin, Utensils, Heart, Award, Check, Bookmark } from 'lucide-react';
import BestsellerCard from '@/components/BestsellerCard';
import SocialLinks from '@/components/SocialLinks';

const Index = () => {
  // Sample bestsellers data
  const bestsellers = [{
    title: 'Chicken Biryani',
    description: 'Fragrant basmati rice cooked with tender chicken, aromatic spices, and herbs.',
    price: '$14.99',
    imageSrc: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=600',
    isSpecial: true
  }, {
    title: 'Butter Chicken',
    description: 'Tender chicken pieces in a creamy, tomato-based curry with a hint of butter.',
    price: '$13.99',
    imageSrc: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=600'
  }, {
    title: 'Vegetable Samosas',
    description: 'Crispy pastry triangles filled with spiced potatoes, peas, and vegetables.',
    price: '$6.99',
    imageSrc: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=600'
  }];

  // Reset scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-desi-black text-white py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-desi-black/70 to-desi-black/95"></div>
          <img src="/lovable-uploads/0e914dde-161a-4d12-bd85-4803d3a6dca2.png" alt="Desi Flavors Food Truck" className="h-full w-full object-cover opacity-60" />
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
            <div className="flex items-center justify-center mb-6 animate-fade-in-delay">
              <span className="bg-white/10 text-white px-4 py-1 rounded-full text-sm font-medium border border-white/20 flex items-center">
                <Check size={16} className="mr-1 text-desi-orange" /> 
                100% Halal
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay">
              <Link to="/menu" className="bg-desi-orange hover:bg-desi-orange/90 text-white px-8 py-3 rounded-full 
                  font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                View Menu
              </Link>
              <Link to="/order" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-3 
                  rounded-full font-medium transition-all border border-white/30">
                Order Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Recipes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Traditional Recipes, Modern Delights
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We blend time-honored family recipes with contemporary culinary techniques 
              to create dishes that honor tradition while delighting today's palates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Traditional */}
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-desi-orange/10 mb-5">
                <Utensils className="text-desi-orange" size={28} />
              </div>
              <h3 className="text-xl font-display font-medium mb-3">Family Recipes</h3>
              <p className="text-gray-600">
                Our dishes are prepared using recipes passed down through generations, preserving the authentic taste of Indian cuisine.
              </p>
            </div>
            
            {/* Quality */}
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-desi-orange/10 mb-5">
                <Award className="text-desi-orange" size={28} />
              </div>
              <h3 className="text-xl font-display font-medium mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                We use only the finest ingredients and authentic spices, ensuring every bite delivers a premium culinary experience.
              </p>
            </div>
            
            {/* Love */}
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-desi-orange/10 mb-5">
                <Heart className="text-desi-orange" size={28} />
              </div>
              <h3 className="text-xl font-display font-medium mb-3">Made with Love</h3>
              <p className="text-gray-600">
                Every dish is prepared with care and passion, bringing the warmth and love of home-cooked meals to our food truck.
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
            {bestsellers.map((item, index) => <BestsellerCard key={index} title={item.title} description={item.description} price={item.price} imageSrc={item.imageSrc} isSpecial={item.isSpecial} delay={index * 100} />)}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/menu" className="inline-flex items-center text-desi-orange hover:text-desi-orange/80 font-medium transition-colors">
              <span>View Full Menu</span>
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Commitment to Quality - UPDATED LAYOUT */}
      <section className="py-20 bg-gradient-to-b from-desi-cream to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Commitment to Quality
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Desi Flavors Katy, we're committed to providing you with an exceptional dining experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-desi-orange text-white">
                    <Check size={16} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">100% Halal</h3>
                  <p className="mt-1 text-gray-600">All our meat is sourced from certified Halal suppliers, ensuring the highest standards of quality and religious compliance.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-desi-orange text-white">
                    <Check size={16} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Authentic Spices</h3>
                  <p className="mt-1 text-gray-600">We import and blend our spices using traditional methods to create the perfect balance of flavors in every dish.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-desi-orange text-white">
                    <Check size={16} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">No Artificial Ingredients</h3>
                  <p className="mt-1 text-gray-600">We cook with real ingredients—no artificial colors, flavors, or preservatives in any of our dishes.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-desi-orange text-white">
                    <Check size={16} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Made Fresh Daily</h3>
                  <p className="mt-1 text-gray-600">Every dish is prepared fresh each day, ensuring you get the best taste and quality with every order.</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-desi-orange/10 rounded-2xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1577303935007-0d306ee638cf?auto=format&fit=crop&q=80&w=600" 
                  alt="Quality Indian Cuisine" 
                  className="rounded-xl shadow-lg relative transform -rotate-2 hover:rotate-0 transition-transform duration-500 w-full max-w-md"
                />
                <div className="absolute top-4 right-4 bg-desi-orange text-white px-4 py-1 rounded-full text-sm font-medium shadow-md transform rotate-3">
                  100% Halal
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-desi-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it - hear what our satisfied customers have to say about their Desi Flavors experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Review 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 transform transition-transform hover:-translate-y-2 duration-300">
              <div className="flex items-center text-desi-orange mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "The chicken biryani from Desi Flavors is hands down the best I've had in Houston. Authentic flavors that remind me of home!"
              </p>
              <div className="font-medium">- Sarah M.</div>
            </div>
            
            {/* Review 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 transform transition-transform hover:-translate-y-2 duration-300">
              <div className="flex items-center text-desi-orange mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "I love that their food is always fresh and flavorful. The butter chicken is creamy perfection! My weekly comfort food."
              </p>
              <div className="font-medium">- David L.</div>
            </div>
            
            {/* Review 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 transform transition-transform hover:-translate-y-2 duration-300">
              <div className="flex items-center text-desi-orange mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "The vegetable samosas are crispy on the outside and perfectly spiced on the inside. Great friendly service too!"
              </p>
              <div className="font-medium">- Priya K.</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-desi-cream text-desi-black py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Connect With Us
              </h2>
              <p className="text-gray-600 mb-6">
                Follow us on social media to stay updated with our latest specials, locations, 
                and mouthwatering food photos.
              </p>
              <SocialLinks iconColor="text-desi-black" iconSize={28} />
            </div>
            
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-display font-medium mb-4">
                  Join Our Mailing List
                </h3>
                <p className="text-gray-600 mb-4">
                  Subscribe to receive updates on specials, new menu items, and truck locations.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input type="email" placeholder="Your email address" className="px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none 
                      focus:ring-2 focus:ring-desi-orange w-full" />
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
    </main>;
};

export default Index;
