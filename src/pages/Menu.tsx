
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  category: string;
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Biryani');
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  // Sample menu data
  const allMenuItems: MenuItem[] = [
    // Biryani
    {
      id: 1,
      name: 'Chicken Biryani',
      description: 'Fragrant basmati rice cooked with tender chicken, aromatic spices, and herbs.',
      price: '$14.99',
      isSpicy: true,
      category: 'Biryani'
    },
    {
      id: 2,
      name: 'Vegetable Biryani',
      description: 'Basmati rice cooked with mixed vegetables, aromatic spices, and herbs.',
      price: '$12.99',
      isVegetarian: true,
      category: 'Biryani'
    },
    {
      id: 3,
      name: 'Lamb Biryani',
      description: 'Basmati rice cooked with tender lamb, aromatic spices, and herbs.',
      price: '$16.99',
      isSpicy: true,
      category: 'Biryani'
    },
    {
      id: 4,
      name: 'Egg Biryani',
      description: 'Basmati rice cooked with boiled eggs, aromatic spices, and herbs.',
      price: '$13.99',
      category: 'Biryani'
    },
    // Curries
    {
      id: 5,
      name: 'Butter Chicken',
      description: 'Tender chicken pieces in a creamy, tomato-based curry with a hint of butter.',
      price: '$13.99',
      category: 'Curries'
    },
    {
      id: 6,
      name: 'Paneer Tikka Masala',
      description: 'Cubes of paneer cheese in a rich, spiced tomato sauce.',
      price: '$12.99',
      isVegetarian: true,
      category: 'Curries'
    },
    {
      id: 7,
      name: 'Chana Masala',
      description: 'Chickpeas cooked in a spiced tomato and onion sauce.',
      price: '$11.99',
      isVegetarian: true,
      isSpicy: true,
      category: 'Curries'
    },
    // Appetizers
    {
      id: 8,
      name: 'Vegetable Samosas',
      description: 'Crispy pastry triangles filled with spiced potatoes, peas, and vegetables.',
      price: '$6.99',
      isVegetarian: true,
      category: 'Appetizers'
    },
    {
      id: 9,
      name: 'Onion Bhaji',
      description: 'Crispy, deep-fried onion fritters made with chickpea flour and spices.',
      price: '$5.99',
      isVegetarian: true,
      category: 'Appetizers'
    },
    // Breads & Sides
    {
      id: 10,
      name: 'Garlic Naan',
      description: 'Soft bread topped with garlic and butter, baked in a tandoor.',
      price: '$3.99',
      isVegetarian: true,
      category: 'Breads & Sides'
    },
    {
      id: 11,
      name: 'Raita',
      description: 'Yogurt mixed with cucumber, tomatoes, and spices.',
      price: '$3.49',
      isVegetarian: true,
      category: 'Breads & Sides'
    },
    // Desserts
    {
      id: 12,
      name: 'Gulab Jamun',
      description: 'Soft milk solids balls soaked in rose-flavored sugar syrup.',
      price: '$4.99',
      isVegetarian: true,
      category: 'Desserts'
    },
    {
      id: 13,
      name: 'Kheer',
      description: 'Creamy rice pudding flavored with cardamom, saffron, and topped with nuts.',
      price: '$4.99',
      isVegetarian: true,
      category: 'Desserts'
    },
  ];

  // Extract unique categories
  const categories = Array.from(new Set(allMenuItems.map(item => item.category)));

  // Filter menu items by active category
  useEffect(() => {
    setMenuItems(allMenuItems.filter(item => item.category === activeCategory));
  }, [activeCategory]);

  // Reset scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Menu Header */}
      <section className="bg-desi-cream py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 animate-fade-in">
            Our Menu
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
            Discover our authentic Indian dishes made with traditional recipes and fresh ingredients. 
            All served with love, directly from our food truck.
          </p>
        </div>
      </section>
      
      {/* Menu Categories */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          {/* Mobile Category Dropdown */}
          <div className="md:hidden mb-8">
            <div className="relative">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="appearance-none w-full bg-white border border-gray-300 px-4 py-3 rounded-lg shadow-sm 
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
          <div className="hidden md:flex justify-center space-x-2 overflow-x-auto pb-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  category === activeCategory
                    ? 'bg-desi-orange text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Menu Items */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">
            {activeCategory}
          </h2>
          
          <div className="grid gap-6 max-w-3xl mx-auto">
            {menuItems.map((item, index) => (
              <div 
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                style={{ 
                  opacity: 0, 
                  animation: 'fade-in 0.5s ease-out forwards', 
                  animationDelay: `${index * 100}ms` 
                }}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-display font-medium text-xl text-desi-black mb-1 flex items-center">
                        {item.name}
                        {item.isVegetarian && (
                          <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">
                            Veg
                          </span>
                        )}
                        {item.isSpicy && (
                          <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-800 text-xs rounded-full">
                            Spicy
                          </span>
                        )}
                      </h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                    <span className="font-medium text-desi-orange">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Menu Notes */}
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
    </main>
  );
};

export default Menu;
