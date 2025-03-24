
import { useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import TraditionalRecipesSection from '@/components/home/TraditionalRecipesSection';
import BestsellersSection from '@/components/home/BestsellersSection';
import QualityCommitmentSection from '@/components/home/QualityCommitmentSection';
import CustomerReviewsSection from '@/components/home/CustomerReviewsSection';
import ConnectSection from '@/components/home/ConnectSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  // Reset scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return <main className="min-h-screen">
      <HeroSection />
      <TraditionalRecipesSection />
      <BestsellersSection />
      <QualityCommitmentSection />
      <CustomerReviewsSection />
      <ConnectSection />
      <ContactSection />
    </main>;
};

export default Index;
