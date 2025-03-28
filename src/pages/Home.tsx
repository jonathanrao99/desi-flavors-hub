import { motion } from 'framer-motion';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import HeroSection from '@/components/home/HeroSection';
import FeaturedItems from '@/components/home/FeaturedItems';
import AboutSection from '@/components/home/AboutSection';
import Testimonials from '@/components/home/Testimonials';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  useScrollToTop();
  
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedItems />
      <AboutSection />
      <Testimonials />
      <ContactSection />
    </div>
  );
} 