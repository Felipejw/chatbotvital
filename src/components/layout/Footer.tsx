import Link from 'next/link';
import { MailIcon, MessageSquareIcon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground mb-3">ChatVital</h3>
            <p className="font-body text-sm">
              Automatizando o seu sucesso, uma conversa por vez.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground mb-3">Contato</h3>
            <ul className="space-y-2 font-body text-sm">
              <li className="flex items-center justify-center md:justify-start">
                <MessageSquareIcon className="h-4 w-4 mr-2 text-primary" />
                <span>WhatsApp: (11) 98886-2843</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <MailIcon className="h-4 w-4 mr-2 text-primary" />
                <span>contato@chatbotbrazil.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground mb-3">Links Úteis</h3>
            <ul className="space-y-2 font-body text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Política de Privacidade</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Termos de Uso</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Suporte</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center font-body text-sm">
          <p>&copy; {new Date().getFullYear()} Chatbot Brazil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
