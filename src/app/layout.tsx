import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import Script from 'next/script'; // Importar o componente Script

export const metadata: Metadata = {
  title: 'ChatVital - Seu Chatbot com Acesso Vitalício',
  description: 'Automatize suas vendas no WhatsApp e atenda seus clientes 24h por dia com o ChatVital.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
        {/* Pixel Script Início */}
        <Script id="set-pixel-id" strategy="afterInteractive">
          {`window.pixelId = "684afeee18892a123654f286";`}
        </Script>
        <Script
          id="utmify-pixel-script"
          src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
          strategy="afterInteractive"
        />
        {/* Pixel Script Fim */}
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
