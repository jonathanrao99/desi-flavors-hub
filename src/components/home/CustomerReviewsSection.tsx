
import { Star } from 'lucide-react';

const CustomerReviewsSection = () => {
  return (
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
  );
};

export default CustomerReviewsSection;
