
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BadgeDollarSignIcon, BotIcon, DicesIcon, MessageSquareIcon, BookOpenTextIcon, ShieldCheckIcon, ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link';

const benefits = [
  {
    icon: <BadgeDollarSignIcon className="h-10 w-10 text-primary mb-4" />,
    title: 'Sem Mensalidade',
    description: 'Pague uma única vez e tenha acesso vitalício ao chatbot.',
  },
  {
    icon: <BotIcon className="h-10 w-10 text-primary mb-4" />,
    title: 'Chatbot com IA',
    description: 'Inteligência Artificial para respostas mais inteligentes e personalizadas.',
  },
  {
    icon: <DicesIcon className="h-10 w-10 text-primary mb-4" />,
    title: 'Multiplataforma',
    description: 'Acesse de qualquer dispositivo: celular, tablet ou PC.',
  },
  {
    icon: <MessageSquareIcon className="h-10 w-10 text-primary mb-4" />,
    title: 'Suporte via WhatsApp',
    description: 'Atendimento rápido e humanizado para tirar suas dúvidas.',
  },
  {
    icon: <BookOpenTextIcon className="h-10 w-10 text-primary mb-4" />,
    title: 'Tutoriais Passo a Passo',
    description: 'Aprenda a configurar e usar o chatbot de forma simples.',
  },
  {
    icon: <ShieldCheckIcon className="h-10 w-10 text-primary mb-4" />,
    title: 'Funciona em Tudo',
    description: 'Compatível com iOS, Android, Windows e Mac.',
  },
];

export function BenefitsSection() {
  return (
    <section className="py-10 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
          Tudo que você precisa em um <span className="text-primary">único sistema</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                {benefit.icon}
                <CardTitle className="font-headline text-2xl text-foreground">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button size="lg" className="text-xl px-12 py-7 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-lg transform transition-transform hover:scale-105 font-bold" asChild>
            <Link href="https://seguro.chatbotvital.com/checkouts/chatbotvital/" target="_blank" rel="noopener noreferrer">
              <ShoppingCartIcon className="h-6 w-6 mr-2" />
              Comprar Agora por R$49
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
