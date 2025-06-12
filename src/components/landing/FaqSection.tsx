import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircleIcon } from 'lucide-react';

const faqs = [
  {
    question: 'Posso usar em vários dispositivos?',
    answer: 'Sim. Você pode acessar pelo celular, tablet ou computador. Sua conta é sincronizada em todos eles.',
  },
  {
    question: 'Preciso pagar mais depois?',
    answer: 'Não. A nossa oferta especial de R$49 garante acesso vitalício à plataforma, sem nenhuma mensalidade ou taxa adicional futura.',
  },
  {
    question: 'O Chatbot possui Mensalidade?',
    answer: 'Não! Você paga apenas 1 única vez e o sistema é seu para sempre.',
  },
  {
    question: 'Como vou receber o acesso ao Chatbot?',
    answer: 'Após a confirmação do pagamento você receberá em seu Email o acesso para começar a usar.',
  },
  {
    question: 'Quais são as formas de pagamento?',
    answer: 'Você pode comprar seu Chatbot com Pix ou Cartão de Crédito em até 12x.',
  },
  {
    question: 'Preciso estar com o Computador ou WhatsApp ligado?',
    answer: 'Você pode estar com o celular, computador e WhatsApp desligados que irá funcionar perfeitamente.',
  },
  {
    question: 'Eu terei algum suporte sobre o Chatbot?',
    answer: 'Sim, após a compra você contará com nosso suporte no WhatsApp e vídeos para fazer a configuração do seu chatbot.',
  },
  {
    question: 'Posso revender o Chatbot?',
    answer: 'Sim, você pode revender nosso chatbot livremente.',
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
