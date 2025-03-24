
import SocialLinks from '@/components/SocialLinks';

const ConnectSection = () => {
  return (
    <section className="bg-desi-cream text-desi-black py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Connect With Us
            </h2>
            <p className="text-gray-600 mb-6">
              Follow us on social media to stay updated with our latest specials, locations, 
              and mouthwatering food photos.
            </p>
            <SocialLinks iconColor="text-desi-black" iconSize={28} />
          </div>
          
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-display font-medium mb-4">
                Join Our Mailing List
              </h3>
              <p className="text-gray-600 mb-4">
                Subscribe to receive updates on specials, new menu items, and truck locations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="Your email address" className="px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none 
                    focus:ring-2 focus:ring-desi-orange w-full" />
                <button className="bg-desi-orange hover:bg-desi-orange/90 text-white px-6 py-3 
                  rounded-lg font-medium transition-all whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
