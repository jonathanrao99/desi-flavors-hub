
import { useEffect } from 'react';
import { MapPin, Users, Clock, Award } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';

const About = () => {
  // Reset scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Team members - Updated names
  const team = [
    {
      name: 'Jaladevi Thota',
      role: 'Founder & Head Chef',
      bio: 'Jaladevi brings 15 years of culinary expertise from Northern India, specializing in traditional biryani recipes passed down through generations.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: 'Venu Thota',
      role: 'Manager & Sous Chef',
      bio: 'Venu ensures smooth operations and assists with menu development, bringing his knowledge of Gujarat region specialties to our offerings.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600'
    }
  ];

  // Photo gallery for about page
  const photos = [
    {
      src: '/lovable-uploads/0e914dde-161a-4d12-bd85-4803d3a6dca2.png',
      alt: 'Our Food Truck',
      category: 'Truck'
    },
    {
      src: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=900',
      alt: 'Chicken Biryani',
      category: 'Food'
    },
    {
      src: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&q=80&w=900',
      alt: 'Happy Customers',
      category: 'Customers'
    },
    {
      src: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=900',
      alt: 'Freshly Baked Naan',
      category: 'Food'
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* About Header */}
      <section className="bg-desi-cream py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 animate-fade-in">
            About Desi Flavors
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
            Our journey of bringing authentic Indian flavors to the streets of Katy, Texas.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/0e914dde-161a-4d12-bd85-4803d3a6dca2.png" 
                alt="Desi Flavors Food Truck" 
                className="w-full h-auto"
              />
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Desi Flavors began in 2020 with a simple mission: to share the authentic tastes of 
                India with the Katy community. What started as a passion project soon became a 
                beloved local food destination.
              </p>
              <p className="text-gray-600 mb-8">
                We take pride in our homestyle cooking approach, using recipes that have been 
                passed down through generations and ingredients that are fresh and locally sourced 
                whenever possible.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="mr-3 text-desi-orange">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="text-sm text-gray-600">20607 Westheimer PKWY, Katy, TX 77450</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 text-desi-orange">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Hours</h3>
                    <p className="text-sm text-gray-600">Tue-Sun: 11AM - 8PM<br />Monday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What Sets Us Apart */}
      <section className="py-16 bg-desi-cream">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-10 text-center">
            What Sets Us Apart
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-desi-orange/10 mb-4">
                <Award className="text-desi-orange" size={24} />
              </div>
              <h3 className="text-xl font-display font-medium mb-3">
                Authentic Recipes
              </h3>
              <p className="text-gray-600">
                We use family recipes that have been perfected over generations, bringing you 
                the true flavors of Indian cuisine.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-desi-orange/10 mb-4">
                <MapPin className="text-desi-orange" size={24} />
              </div>
              <h3 className="text-xl font-display font-medium mb-3">
                Quality Ingredients
              </h3>
              <p className="text-gray-600">
                We source the freshest ingredients and authentic spices to ensure every 
                dish delivers the perfect balance of flavors.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-desi-orange/10 mb-4">
                <Users className="text-desi-orange" size={24} />
              </div>
              <h3 className="text-xl font-display font-medium mb-3">
                Community Focus
              </h3>
              <p className="text-gray-600">
                We're proud to be part of the Katy community and strive to provide a welcoming 
                experience for all our customers.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet the Team - Updated names */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-10 text-center">
            Meet Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-desi-cream/30 rounded-xl p-6">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-medium text-center md:text-left">{member.name}</h3>
                  <p className="text-desi-orange font-medium mb-2 text-center md:text-left">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Photos Section */}
      <section className="py-16 bg-desi-cream">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-10 text-center">
            Photo Gallery
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <div 
                key={index}
                className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Connect with us */}
      <section className="py-16 bg-desi-black text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Connect With Us
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Follow us on social media to stay updated with our latest specials, locations, 
            and mouthwatering food photos.
          </p>
          <div className="flex justify-center">
            <SocialLinks iconColor="text-white" iconSize={28} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
