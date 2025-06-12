
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2Icon, ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-10 pt-16 md:pt-12 text-center text-white overflow-hidden">
      <Image
        src="https://placehold.co/1920x1080/1A1A1A/333333.png"
        alt="Background Tecnológico Abstrato"
        fill
        quality={80}
        className="object-cover -z-10"
        data-ai-hint="dark technology"
        priority
      />
      <div className="absolute inset-0 bg-black/70 -z-10" />
      <div className="container mx-auto px-4 z-10 flex flex-col items-center">
        <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 mt-8 sm:mt-0">
          O Chatbot mais barato do Brasil com <span className="text-primary">acesso vitalício</span> por apenas <span className="text-primary">R$49!</span>
        </h1>
        <p className="font-body text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-300">
          Automatize suas vendas no WhatsApp e atenda seus clientes 24h por dia, sem precisar pagar mensalidade!
        </p>

        {/* VSL Content Integrated Here */}
        <div className="max-w-3xl w-full mx-auto mb-8">
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-primary" title="Iframe da vsl">
            <iframe
              className="w-full h-full"
              src="https://player.vimeo.com/video/1082156397?h=7b0e9aa4e5&badge=0&autopause=0&player_id=0&app_id=58479"
              title="APRESENTACÃO - CHATBOT"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="flex justify-center mb-10">
          <Badge variant="secondary" className="py-2 px-4 text-md font-medium bg-accent/20 border-accent text-accent-foreground">
            <CheckCircle2Icon className="h-5 w-5 mr-2 text-accent" />
            Sem mensalidades + Suporte incluso
          </Badge>
        </div>
        {/* End of VSL Content */}

        <Button size="lg" className="text-xl px-12 py-7 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-lg transform transition-transform hover:scale-105 font-bold animate-pulse-whatsapp" asChild>
          <Link href="https://seguro.chatbotvital.com/checkouts/chatbotvital/" target="_blank" rel="noopener noreferrer">
            <ShoppingCartIcon className="h-6 w-6 mr-2" />
            Comprar Agora por R$49
          </Link>
        </Button>
      </div>
      <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
    </section>
  );
}
