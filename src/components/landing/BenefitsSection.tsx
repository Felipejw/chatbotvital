import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeDollarSignIcon, CalendarClockIcon, DicesIcon, MessageSquareIcon, BookOpenTextIcon, CheckBadgeIcon, ShieldCheckIcon } from 'lucide-react';

const benefits = [
  {
    icon: <BadgeDollarSignIcon className="h-10 w-10 text-primary mb-4" />,
    title: 'Sem Mensalidade',
    description: 'Pague uma única vez e tenha acesso vitalício ao chatbot.',
  },
  {
    icon: <CalendarClockIcon className="h-10 w-10 text-primary mb-4" />,
    title: 'Teste Grátis por 3 Dias',
    description: 'Experimente todas as funcionalidades antes de decidir.',
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
    description: 'Compatível com iOS, Android e Windows.',
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
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
      </div>
    </section>
  );
}
