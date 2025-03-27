import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative flex min-h-screen items-center justify-center overflow-hidden bg-desi-black text-white py-20">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-desi-black/50 to-desi-black/80"></div>
        <img 
          src="/lovable-uploads/0e914dde-161a-4d12-bd85-4803d3a6dca2.png" 
          alt="Desi Flavors Food Truck" 
          className="h-full w-full object-cover opacity-70" 
        />
      </motion.div>
      
      <div className="container mx-auto relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4 animate-fade-in text-balance">
            <p>Authentic Indian Flavors</p> <span className="text-desi-orange">On Wheels</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-in-delay max-w-2xl mx-auto text-balance">
            Experience homestyle Indian cuisine with our specialty biryanis and 
            traditional favorites, made with authentic recipes and fresh ingredients.
          </p>
          <div className="flex items-center justify-center mb-6 animate-fade-in-delay">
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium border border-white/20 flex items-center">
              <Check size={16} className="mr-1 text-desi-orange" /> 
              100% Halal
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay">
            <Link 
              to="/menu" 
              className="bg-desi-orange hover:bg-desi-orange/90 text-white px-8 py-3 rounded-full 
                font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              View Menu
            </Link>
            <Link 
              to="/order" 
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-desi-orange px-8 py-3 
                rounded-full font-medium transition-all border border-white/30"
            >
              Order Online
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
