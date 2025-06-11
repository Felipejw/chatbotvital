import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2Icon, PlayCircleIcon } from 'lucide-react';

export function VslSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-12">
          Assista e descubra como nosso Chatbot está ajudando empresas a vender <span className="text-primary">todos os dias!</span>
        </h2>
        <div className="max-w-4xl mx-auto mb-10">
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-primary">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/EngW7tLk6R8?autoplay=0&modestbranding=1&rel=0&showinfo=0"
              title="Vídeo de Vendas ChatVital"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <Button size="lg" className="text-lg px-10 py-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-lg transform transition-transform hover:scale-105 mb-6">
          <PlayCircleIcon className="h-6 w-6 mr-2" />
          Comprar Agora por R$49
        </Button>
        <div className="flex justify-center">
          <Badge variant="secondary" className="py-2 px-4 text-md font-medium bg-accent/20 border-accent text-accent-foreground">
            <CheckCircle2Icon className="h-5 w-5 mr-2 text-accent" />
            Sem mensalidades + Suporte incluso
          </Badge>
        </div>
      </div>
    </section>
  );
}
