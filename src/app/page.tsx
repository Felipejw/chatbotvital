import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/landing/HeroSection';
// import { VslSection } from '@/components/landing/VslSection'; // VSL agora está na HeroSection
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
        {/* <VslSection /> */} {/* Movido para dentro da HeroSection */}
        <BenefitsSection />
        <SocialProofSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
