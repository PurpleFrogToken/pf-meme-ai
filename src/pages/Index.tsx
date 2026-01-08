import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import VisionSection from '@/components/VisionSection';
import TokenomicsSection from '@/components/TokenomicsSection';
import AirdropSection from '@/components/AirdropSection';
import AIRoadmapSection from '@/components/AIRoadmapSection';
import BrandStorySection from '@/components/BrandStorySection';
import SmartContractSection from '@/components/SmartContractSection';
import GlobalRoadmapSection from '@/components/GlobalRoadmapSection';
import DifferentiationSection from '@/components/DifferentiationSection';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navigation />
      <Hero />
      <VisionSection />
      <BrandStorySection />
      <TokenomicsSection />
      <AirdropSection />
      <AIRoadmapSection />
      <SmartContractSection />
      <GlobalRoadmapSection />
      <DifferentiationSection />
      <CommunitySection />
      <Footer />
    </div>
  );
}