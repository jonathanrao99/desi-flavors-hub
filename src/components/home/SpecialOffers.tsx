import { motion } from 'framer-motion';
import { Clock, Tag, Percent } from 'lucide-react';

const offers = [
  {
    title: "Lunch Special",
    description: "Get 15% off on all lunch items between 11 AM - 3 PM",
    icon: Clock,
    color: "bg-blue-500"
  },
  {
    title: "Family Pack",
    description: "Order any family pack and get 2 free naans",
    icon: Tag,
    color: "bg-green-500"
  },
  {
    title: "Weekend Deal",
    description: "20% off on all biryanis every weekend",
    icon: Percent,
    color: "bg-purple-500"
  }
];

const SpecialOffers = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Special Offers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Don't miss out on our exclusive deals and special offers!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-desi-orange/20 to-desi-orange/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`${offer.color} w-12 h-12 rounded-full flex items-center justify-center mb-6`}>
                  <offer.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{offer.title}</h3>
                <p className="text-gray-600">{offer.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers; 