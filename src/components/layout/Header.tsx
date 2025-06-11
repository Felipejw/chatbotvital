import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BotMessageSquare } from 'lucide-react';

export function Header() {
  // A barra fixa foi removida conforme solicitado.
  return null;
  // return (
  //   <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
  //     <div className="container mx-auto px-4 h-16 flex items-center justify-between">
  //       <Link href="/" className="flex items-center gap-2">
  //         <BotMessageSquare className="h-8 w-8 text-primary" />
  //         <span className="text-xl font-headline font-bold text-foreground">ChatVital</span>
  //       </Link>
  //       <Button asChild>
  //         <a href="https://app.chatbotbrazil.com" target="_blank" rel="noopener noreferrer">
  //           Acessar Plataforma
  //         </a>
  //       </Button>
  //     </div>
  //   </header>
  // );
}
