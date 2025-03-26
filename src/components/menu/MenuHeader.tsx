
const MenuHeader = () => {
  return (
    <section className="bg-desi-cream py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 animate-fade-in">
          Our Menu
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
          Discover our authentic Indian dishes made with traditional recipes and fresh ingredients. 
          All served with love, directly from our food truck at 1989 North Fry RD, Katy, TX 77449.
        </p>
        <div className="mt-4 inline-flex items-center justify-center">
          <span className="bg-green-100 text-green-800 text-sm rounded-full px-3 py-1 font-medium mr-2">
            100% Halal Certified
          </span>
        </div>
      </div>
    </section>
  );
};

export default MenuHeader;
