import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BadgePercentIcon, ZapIcon } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 pt-32 md:pt-20 text-center text-white overflow-hidden">
      <Image
        src="https://placehold.co/1920x1080/1A1A1A/333333.png"
        alt="Background Tecnológico Abstrato"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="-z-10"
        data-ai-hint="dark technology"
      />
      <div className="absolute inset-0 bg-black/70 -z-10" />
      <div className="container mx-auto px-4 z-10">
        <Badge variant="outline" className="mb-6 bg-primary/20 border-primary text-primary-foreground py-2 px-4 text-sm font-medium">
          <BadgePercentIcon className="h-5 w-5 mr-2" />
          Oferta por Tempo Limitado
        </Badge>
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
          O Chatbot mais barato do Brasil com <span className="text-primary">acesso vitalício</span> por apenas <span className="text-primary">R$97!</span>
        </h1>
        <p className="font-body text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-300">
          Automatize suas vendas no WhatsApp e atenda seus clientes 24h por dia, sem precisar pagar mensalidade!
        </p>
        <Button size="lg" className="text-lg px-10 py-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <ZapIcon className="h-6 w-6 mr-2" />
          Quero Garantir o Acesso Vitalício Agora!
        </Button>
      </div>
    </section>
  );
}
