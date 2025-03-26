
const MenuNotes = () => {
  return (
    <section className="bg-desi-cream py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-display font-medium mb-4 text-desi-black">
            Menu Notes
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="bg-green-100 text-green-800 text-xs rounded-full px-2 py-0.5 mt-0.5 mr-2">
                Veg
              </span>
              <span>Vegetarian dishes</span>
            </li>
            <li className="flex items-start">
              <span className="bg-red-100 text-red-800 text-xs rounded-full px-2 py-0.5 mt-0.5 mr-2">
                Spicy
              </span>
              <span>Spicy dishes that pack some heat</span>
            </li>
            <li className="flex items-start">
              <span className="bg-green-100 text-green-800 text-xs rounded-full px-2 py-0.5 mt-0.5 mr-2">
                Halal
              </span>
              <span>All our meat dishes are certified Halal</span>
            </li>
            <li className="mt-4">
              All dishes are prepared fresh daily. Menu items may vary based on availability.
            </li>
            <li>
              Please inform us of any allergies or dietary restrictions when ordering.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MenuNotes;
