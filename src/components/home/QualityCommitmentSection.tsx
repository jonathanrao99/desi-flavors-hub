
const QualityCommitmentSection = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-desi-orange/5 via-gray-50/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 text-gray-900">
            Our Commitment to Quality
          </h2>
          <p className="text-gray-600 text-center max-w-2xl text-base">
            We take pride in delivering excellence through every aspect of our service, 
            from ingredient selection to the final presentation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image with animated squares design */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full max-w-lg mx-auto group">
              {/* Animated square decorations */}
              <div 
                className="absolute -top-10 -right-10 w-56 h-56 bg-desi-orange/10 rounded-3xl z-0 
                transition-all duration-700 ease-out group-hover:bg-desi-orange/25 group-hover:-translate-y-6 group-hover:rotate-12"
              ></div>
              <div 
                className="absolute -bottom-10 -left-10 w-64 h-64 bg-desi-orange/5 rounded-3xl z-0 
                transition-all duration-700 ease-out delay-100 group-hover:bg-desi-orange/20 group-hover:translate-y-6 group-hover:-rotate-12"
              ></div>
              
              {/* Main image */}
              <div className="overflow-hidden rounded-3xl shadow-2xl relative z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <img 
                  src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&q=80&w=600"
                  alt="Fresh ingredients for our food"
                  className="w-full h-[400px] object-cover transform transition-all duration-700 ease-out scale-105 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
          
          <div className="order-2 lg:order-1 space-y-6">
            {[
              {
                number: "1",
                title: "Fresh Ingredients",
                description: "We partner with local suppliers to source the finest ingredients daily. Every dish is crafted with premium, seasonal produce for exceptional taste."
              },
              {
                number: "2",
                title: "Authentic Recipes",
                description: "Our time-honored family recipes capture generations of culinary expertise. Each dish stays true to traditional Indian cooking methods and flavors."
              },
              {
                number: "3",
                title: "100% Halal",
                description: "All our ingredients and preparation methods strictly follow Halal guidelines. We ensure complete compliance for our valued Muslim customers."
              },
              {
                number: "4",
                title: "Clean Preparation",
                description: "Our kitchen upholds the highest hygiene standards with daily sanitization. Regular inspections and certified staff guarantee food safety."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-start group hover:bg-gray-50/80 p-4 rounded-xl transition-all duration-300 hover:shadow-md"
              >
                <div className="bg-desi-orange/10 group-hover:bg-desi-orange/20 rounded-xl w-12 h-12 flex items-center justify-center shrink-0 mr-4 transition-colors duration-300">
                  <span className="text-desi-orange text-lg font-bold">{item.number}</span>
                </div>
                <div>
                  <h3 className="font-display font-medium text-lg mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityCommitmentSection;