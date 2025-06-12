
// import { Header } from '@/components/layout/Header'; // Removido conforme solicitado
import { HeroSection } from '@/components/landing/HeroSection';
// import { VslSection } from '@/components/landing/VslSection'; // VSL agora está na HeroSection
import { BenefitsSection } from '@/components/landing/BenefitsSection';
import { InteractiveFeaturesSection } from '@/components/landing/InteractiveFeaturesSection';
import { LogoCloudSection } from '@/components/landing/LogoCloudSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { SocialProofSection } from '@/components/landing/SocialProofSection';
import { GuaranteeSection } from '@/components/landing/GuaranteeSection';
import { FaqSection } from '@/components/landing/FaqSection';
// import { Footer } from '@/components/layout/Footer'; // Removido

export default function HomePage() {
  return (
    <>
      {/* <Header /> */} {/* Removido conforme solicitado */}
      <main>
        <HeroSection />
        {/* <VslSection /> */} {/* Movido para dentro da HeroSection */}
        <BenefitsSection />
        <InteractiveFeaturesSection />
        <LogoCloudSection />
        <TestimonialsSection />
        <SocialProofSection />
        <GuaranteeSection />
        <FaqSection />
      </main>
      {/* <Footer /> */} {/* Removido */}
    </>
  );
}
