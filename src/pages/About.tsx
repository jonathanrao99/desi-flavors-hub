import { useEffect } from 'react';
import { MapPin, Clock, ChefHat, Heart, Sparkles, Star, Award, Users } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { number: "1000+", label: "Happy Customers", icon: Users },
    { number: "50+", label: "Unique Dishes", icon: ChefHat },
    { number: "4.9", label: "Customer Rating", icon: Star },
    { number: "2025", label: "Established", icon: Award }
  ];

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

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 bg-cover bg-center"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div 
            className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"
            style={{ 
              backgroundImage: 'url(/lovable-uploads/0e914dde-161a-4d12-bd85-4803d3a6dca2.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </motion.div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            Desi Flavors
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto mb-8"
          >
            Authentic Indian Cuisine in Katy, Texas
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center space-x-4"
          >
            <MapPin className="w-5 h-5" />
            <span>1989 North Fry Rd, Katy, TX 77449</span>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-desi-orange/10 mb-4">
                  <stat.icon className="w-8 h-8 text-desi-orange" />
                </div>
                <div className="text-3xl font-bold text-desi-orange mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-desi-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold mb-8"
            >
              Our Story
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg leading-relaxed"
            >
              Founded in 2025, Desi Flavors emerged from a passion for authentic Indian cuisine 
              and a dream to share these flavors with the Katy community. Our food truck journey 
              began with a simple mission: to serve the most authentic and delicious Indian dishes 
              right here in Katy, Texas.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-center mb-12"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-desi-orange font-medium mb-2">{member.role}</p>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20 bg-desi-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Visit Us</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-desi-orange mt-1 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Location</h3>
                    <p className="text-gray-600">1989 North Fry Rd, Katy, TX 77449</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-desi-orange mt-1 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Hours</h3>
                    <p className="text-gray-600">Monday - Sunday: 11:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-2xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.0!2d-95.8!3d29.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQ4JzAwLjAiTiA5NcKwNDgnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
