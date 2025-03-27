import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const dishes = [
  {
    name: "Hyderabadi Biryani",
    description: "Fragrant basmati rice cooked with tender meat and aromatic spices",
    price: "$14.99",
    rating: 4.9,
    image: "/lovable-uploads/0e914dde-161a-4d12-bd85-4803d3a6dca2.png"
  },
  {
    name: "Butter Chicken",
    description: "Tender chicken in rich, creamy tomato sauce with Indian spices",
    price: "$13.99",
    rating: 4.8,
    image: "/lovable-uploads/0e914dde-161a-4d12-bd85-4803d3a6dca2.png"
  },
  {
    name: "Paneer Tikka",
    description: "Grilled cottage cheese marinated in spiced yogurt",
    price: "$12.99",
    rating: 4.7,
    image: "/lovable-uploads/0e914dde-161a-4d12-bd85-4803d3a6dca2.png"
  }
];

const FeaturedDishes = () => {
  return (
    <section className="py-20 bg-desi-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Dishes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our most popular and beloved dishes, crafted with authentic recipes and premium ingredients.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{dish.name}</h3>
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-desi-orange font-bold text-lg">{dish.price}</span>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-gray-600">{dish.rating}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes; 