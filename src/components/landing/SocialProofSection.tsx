import { Button } from '@/components/ui/button';
import { VerifiedIcon, UsersIcon, ZapIcon } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

export function SocialProofSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center mb-6">
          <UsersIcon className="h-12 w-12 text-primary mr-3" />
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Mais de <span className="text-primary">5.000 negócios</span> já automatizaram o WhatsApp com a gente!
          </h2>
        </div>
        <div className="flex justify-center items-center max-w-3xl mx-auto mb-10 text-lg text-muted-foreground">
          <VerifiedIcon className="h-8 w-8 text-accent mr-3 shrink-0" />
          <p className="font-body">
            Empreendedores de todo o Brasil estão economizando tempo e aumentando vendas com o nosso chatbot.
          </p>
        </div>
        
        <CountdownTimer />

        <Button size="lg" className="text-lg px-10 py-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <ZapIcon className="h-6 w-6 mr-2" />
          Comprar Agora por R$49
        </Button>
      </div>
    </section>
  );
}
