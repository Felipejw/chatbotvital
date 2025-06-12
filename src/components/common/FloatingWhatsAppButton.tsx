
import Link from 'next/link';
import { MessageCircleIcon } from 'lucide-react';

export function FloatingWhatsAppButton() {
  const phoneNumber = "5511988862843"; // Número de telefone do WhatsApp
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircleIcon className="h-7 w-7" />
    </Link>
  );
}
