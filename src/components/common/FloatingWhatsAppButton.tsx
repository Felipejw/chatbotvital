
import Link from 'next/link';

export function FloatingWhatsAppButton() {
  const phoneNumber = "551198862843"; // Número de telefone do WhatsApp
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
        className="h-7 w-7"
      >
        <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.07 21.94l5.23-1.38c1.45.79 3.06 1.26 4.74 1.26h.01c5.46 0 9.91-4.45 9.91-9.91a9.872 9.872 0 0 0-2.91-7.01zm-7.01 15.24c-1.48 0-2.93-.45-4.12-1.25l-.3-.18-3.07.81.82-3.02-.2-.31a8.087 8.087 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.18-.54.06s-1.02-.37-1.94-1.2c-.72-.65-1.2-1.45-1.39-1.7s-.01-.39.11-.51c.11-.11.25-.29.37-.43s.17-.21.25-.36.04-.29-.02-.41c-.06-.12-.56-1.34-.76-1.84s-.4-.42-.55-.43h-.48c-.17 0-.44.06-.67.31s-.86.84-.86 2.04c0 1.2.88 2.36 1 2.53s1.76 2.72 4.27 3.78c.6.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-.18.21-.59.21-1.09.15-1.21s-.22-.18-.47-.3z"/>
      </svg>
    </Link>
  );
}
