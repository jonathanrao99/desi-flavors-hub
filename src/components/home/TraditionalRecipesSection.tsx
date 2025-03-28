import { Utensils, Award, Heart } from 'lucide-react';

const TraditionalRecipesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Traditional Recipes, Modern Delights
          </h2>
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
  );
};

export default TraditionalRecipesSection;
