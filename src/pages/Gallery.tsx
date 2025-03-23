
import { useEffect } from 'react';
import ImageGallery from '@/components/ImageGallery';

const Gallery = () => {
  // Sample gallery images
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=900',
      alt: 'Chicken Biryani',
      category: 'Food'
    },
    {
      src: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&q=80&w=900',
      alt: 'Food Truck',
      category: 'Truck'
    },
    {
      src: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&q=80&w=900',
      alt: 'Samosas',
      category: 'Food'
    },
    {
      src: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=900',
      alt: 'Butter Chicken',
      category: 'Food'
    },
    {
      src: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&q=80&w=900',
      alt: 'Customers at Food Truck',
      category: 'Customers'
    },
    {
      src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=900',
      alt: 'Vegetable Samosas',
      category: 'Food'
    },
    {
      src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=900',
      alt: 'Mango Lassi',
      category: 'Drinks'
    },
    {
      src: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=900',
      alt: 'Garlic Naan',
      category: 'Food'
    },
    {
      src: 'https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&q=80&w=900',
      alt: 'Food Truck',
      category: 'Truck'
    },
  ];

  // Reset scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Gallery Header */}
      <section className="bg-desi-cream py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 animate-fade-in">
            Photo Gallery
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
            Take a visual journey through our food truck, delicious dishes, and happy customers. 
            Browse through our gallery to see what we're all about.
          </p>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ImageGallery images={galleryImages} />
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-desi-black text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 animate-fade-in">
            Share Your Experience
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in-delay">
            Tag us on social media with #DesiFlavorsKaty to be featured in our gallery. 
            We love seeing your foodie adventures with us!
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full 
                font-medium transition-all border border-white/30 inline-flex items-center space-x-2"
            >
              <span>Follow Us on Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
