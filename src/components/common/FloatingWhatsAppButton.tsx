
import Link from 'next/link';

export function FloatingWhatsAppButton() {
  const phoneNumber = "5511988862843"; // Número de telefone do WhatsApp
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-primary-foreground p-3.5 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7" // Ajustado o tamanho do SVG
      >
        <path d="M16.6 14.2c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.5-1.8-.1-.2 0-.4.1-.5.1-.1.2-.2.4-.4.1-.1.2-.2.2-.3.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.6-.5-.6h-.5c-.2 0-.5.2-.6.3-.6.7-.6 1.7.1 3 .1.1 1.1 1.6 2.6 2.3.4.2.7.3 1 .4.5.1 1 .1 1.3.1.4-.1.5-.3.7-.6.2-.2.2-.5.1-.6l-.3-.2zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18.4c-4.7 0-8.5-3.8-8.5-8.4s3.8-8.4 8.5-8.4 8.5 3.8 8.5 8.4-3.8 8.4-8.5 8.4z"/>
      </svg>
    </Link>
  );
}
