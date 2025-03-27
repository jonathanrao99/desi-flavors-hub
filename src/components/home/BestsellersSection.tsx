import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import BestsellerCard from '@/components/BestsellerCard';

const BestsellersSection = () => {
  // Sample bestsellers data
  const bestsellers = [{
    title: 'Chicken Biryani',
    description: 'Fragrant basmati rice cooked with tender chicken, aromatic spices, and herbs.',
    price: '$14.99',
    imageSrc: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=600',
    isSpecial: true
  }, {
    title: 'Butter Chicken',
    description: 'Tender chicken pieces in a creamy, tomato-based curry with a hint of butter.',
    price: '$13.99',
    imageSrc: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=600'
  }, {
    title: 'Vegetable Samosas',
    description: 'Crispy pastry triangles filled with spiced potatoes, peas, and vegetables.',
    price: '$6.99',
    imageSrc: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=600'
  }];

  return (
    <section className="py-20 bg-desi-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Our Bestsellers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Try our crowd favorites, featuring our signature biryanis and flavorful curries 
            that have made us a local favorite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestsellers.map((item, index) => <BestsellerCard key={index} title={item.title} description={item.description} price={item.price} imageSrc={item.imageSrc} isSpecial={item.isSpecial} delay={index * 100} />)}
        </div>

        <div className="mt-12 text-center">
          <Link to="/menu" className="inline-flex items-center text-desi-orange hover:text-desi-orange/80 font-medium transition-colors">
            <span>View Full Menu</span>
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;
