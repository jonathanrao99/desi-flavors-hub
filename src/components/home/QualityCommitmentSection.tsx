
const QualityCommitmentSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
          Our Commitment to Quality
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image visible at the top on mobile, right on desktop */}
          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&q=80&w=800"
                alt="Fresh ingredients for our food"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          
          <div className="order-2 lg:order-1 space-y-6">
            <div className="flex items-start">
              <div className="bg-desi-orange/10 rounded-full w-12 h-12 flex items-center justify-center shrink-0 mr-4">
                <span className="text-desi-orange text-xl font-bold">1</span>
              </div>
              <div>
                <h3 className="font-display font-medium text-xl mb-2">Fresh Ingredients</h3>
                <p className="text-gray-600">
                  We source the freshest ingredients from local suppliers whenever possible, 
                  ensuring that our dishes are not only delicious but also support local businesses.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-desi-orange/10 rounded-full w-12 h-12 flex items-center justify-center shrink-0 mr-4">
                <span className="text-desi-orange text-xl font-bold">2</span>
              </div>
              <div>
                <h3 className="font-display font-medium text-xl mb-2">Authentic Recipes</h3>
                <p className="text-gray-600">
                  Our recipes have been passed down through generations, preserving the authentic 
                  flavors and cooking techniques of traditional Indian cuisine.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-desi-orange/10 rounded-full w-12 h-12 flex items-center justify-center shrink-0 mr-4">
                <span className="text-desi-orange text-xl font-bold">3</span>
              </div>
              <div>
                <h3 className="font-display font-medium text-xl mb-2">100% Halal</h3>
                <p className="text-gray-600">
                  We are committed to serving 100% Halal food, prepared according to Islamic dietary 
                  guidelines, ensuring all our customers can enjoy our meals with confidence.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-desi-orange/10 rounded-full w-12 h-12 flex items-center justify-center shrink-0 mr-4">
                <span className="text-desi-orange text-xl font-bold">4</span>
              </div>
              <div>
                <h3 className="font-display font-medium text-xl mb-2">Clean Preparation</h3>
                <p className="text-gray-600">
                  Our kitchen maintains the highest standards of cleanliness and hygiene, with regular 
                  health inspections and strict adherence to food safety protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityCommitmentSection;
