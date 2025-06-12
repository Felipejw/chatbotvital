
import { Button } from '@/components/ui/button';
import { VerifiedIcon, UsersIcon, ShoppingCartIcon } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import Link from 'next/link';

const features = [
  'Chatbot com I.A',
  'Disparo em Massa',
  '+100 Atendentes',
  '+100 Números de WhatsApp',
  'Agendamento de Mensagem',
  'Dashboard de Atendimento',
  'Chatbot Interno (Entre a Equipe)',
  'Integração: Typebot - Dialogflow',
  'Mensagem, Áudio e Documentos',
];

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

        {/* Features and Pricing Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-card p-6 sm:p-8 rounded-lg shadow-lg border text-center">
            <CountdownTimer initialHours={0} initialMinutes={4} initialSeconds={0} />
            <ul className="space-y-3 text-left mb-8 mt-6 text-card-foreground">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-lg">
                  <span className="mr-3 shrink-0 text-primary">✅</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="text-center">
              <p className="font-body text-md text-muted-foreground mb-2">
                Somente agora, você terá a chance de comprar o chatbot... Se você sair dessa página, o chatbot custará <span className="font-bold text-destructive">R$99,00</span>.
              </p>
              <p className="font-body text-md text-muted-foreground mb-4">
                De <span className="line-through">R$99</span> você vai investir somente...
              </p>
              <div className="mb-1">
                <span className="text-2xl text-muted-foreground line-through">De R$99,00</span>
              </div>
              <div>
                <span className="font-headline text-7xl sm:text-8xl font-extrabold text-primary drop-shadow-lg">
                  R$49<span className="text-5xl sm:text-6xl align-top">,00</span>
                </span>
              </div>
              <Button size="lg" className="mt-8 text-lg px-10 py-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-lg transform transition-transform hover:scale-105" asChild>
                <Link href="https://seguro.chatbotvital.com/checkouts/chatbotvital/" target="_blank" rel="noopener noreferrer">
                  <ShoppingCartIcon className="h-6 w-6 mr-2" />
                  Comprar Agora por R$49
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {/* End of Features and Pricing Section */}
        
      </div>
    </section>
  );
}
