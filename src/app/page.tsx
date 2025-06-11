import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { VslSection } from '@/components/landing/VslSection';
import { BenefitsSection } from '@/components/landing/BenefitsSection';
import { SocialProofSection } from '@/components/landing/SocialProofSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <VslSection />
        <BenefitsSection />
        <SocialProofSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
