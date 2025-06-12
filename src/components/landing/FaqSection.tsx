import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircleIcon } from 'lucide-react';

const faqs = [
  {
    question: 'Preciso instalar algo?',
    answer: 'Não! Tudo funciona direto no navegador. Sem complicações, acesse de onde estiver.',
  },
  {
    question: 'Posso usar em vários dispositivos?',
    answer: 'Sim. Você pode acessar pelo celular, tablet ou computador. Sua conta é sincronizada em todos eles.',
  },
  {
    question: 'Tem teste grátis?',
    answer: 'Sim! Oferecemos um período de teste gratuito de 3 dias para você explorar todas as funcionalidades da plataforma sem compromisso.',
  },
  {
    question: 'É seguro?',
    answer: 'Com certeza! Utilizamos as mais recentes tecnologias de segurança para proteger seus dados e conversas. Além disso, nosso suporte via WhatsApp está sempre pronto para ajudar.',
  },
  {
    question: 'Preciso pagar mais depois?',
    answer: 'Não. A nossa oferta especial de R$49 garante acesso vitalício à plataforma, sem nenhuma mensalidade ou taxa adicional futura.',
  },
];

export function FaqSection() {
  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center mb-12">
          <HelpCircleIcon className="h-10 w-10 text-primary mr-3" />
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-center">
            Ficou com dúvidas? <span className="text-primary">A gente responde!</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="bg-card shadow-sm rounded-lg mb-4">
                <AccordionTrigger className="p-6 text-left font-headline text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0 font-body text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
