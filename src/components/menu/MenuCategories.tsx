
import { ChevronDown } from 'lucide-react';

interface MenuCategoriesProps {
  activeCategory: string;
  categories: string[];
  setActiveCategory: (category: string) => void;
  isScrolled: boolean;
}

const MenuCategories = ({ activeCategory, categories, setActiveCategory, isScrolled }: MenuCategoriesProps) => {
  return (
    <section className={`py-8 border-b border-gray-100 sticky top-16 z-10 shadow-sm transition-all duration-300 ${
      isScrolled ? 'bg-transparent' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Mobile Category Dropdown */}
        <div className="md:hidden mb-4">
          <div className="relative">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="appearance-none w-full bg-white/90 border border-gray-300 px-4 py-3 rounded-lg shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-desi-orange focus:border-desi-orange"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <ChevronDown size={20} className="absolute right-4 top-3.5 text-gray-500 pointer-events-none" />
          </div>
        </div>
        
        {/* Desktop Categories */}
        <div className="hidden md:flex justify-center space-x-2 overflow-x-auto">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                category === activeCategory
                  ? 'bg-desi-orange text-white shadow-md'
                  : 'bg-gray-100/80 text-gray-700 hover:bg-gray-200/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuCategories;
