
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { Star, UsersIcon } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Silva',
    company: 'Dona da Loja Flor de Lis',
    avatar: 'https://seguro.chatbotvital.com/wp-content/uploads/2025/06/03.jpeg',
    aiHint: 'woman portrait',
    stars: 5,
    quote: 'O ChatVital revolucionou meu atendimento! Consigo responder meus clientes na hora e as vendas aumentaram 30% desde que comecei a usar. E o melhor: sem mensalidade!',
  },
  {
    name: 'Carlos Pereira',
    company: 'Consultor de Vendas Online',
    avatar: 'https://seguro.chatbotvital.com/wp-content/uploads/2025/06/01.jpg',
    aiHint: 'man portrait',
    stars: 5,
    quote: 'Eu estava cético no início, mas o ChatVital superou minhas expectativas. A IA é inteligente e a plataforma é muito fácil de usar. Recomendo para todos que querem automatizar o WhatsApp.',
  },
  {
    name: 'Mariana Costa',
    company: 'Empreendedora Digital',
    avatar: 'https://seguro.chatbotvital.com/wp-content/uploads/2025/06/04.jpeg',
    aiHint: 'woman smiling',
    stars: 5,
    quote: 'Finalmente uma solução de chatbot que não pesa no bolso! O acesso vitalício por um preço justo é incrível. O suporte também é muito atencioso. Estou muito satisfeita!',
  },
];

export function TestimonialsSection() {
  return (
    <section className="pt-16 md:pt-24 pb-8 md:pb-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center mb-12">
          <UsersIcon className="h-10 w-10 text-primary mr-3" />
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-center">
            O Que Nossos Clientes <span className="text-primary">Dizem Sobre Nós</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <Image
                  src={testimonial.avatar}
                  alt={`Avatar de ${testimonial.name}`}
                  width={60}
                  height={60}
                  className="rounded-full"
                  data-ai-hint={testimonial.aiHint}
                />
                <div>
                  <CardTitle className="font-headline text-xl text-foreground">{testimonial.name}</CardTitle>
                  <CardDescription className="font-body text-sm text-muted-foreground">{testimonial.company}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex mb-3">
                  {Array(testimonial.stars).fill(0).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                  {Array(5 - testimonial.stars).fill(0).map((_, i) => (
                     <Star key={i + testimonial.stars} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="font-body text-muted-foreground italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
