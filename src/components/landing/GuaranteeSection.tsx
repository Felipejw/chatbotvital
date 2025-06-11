import Image from 'next/image';
import { ShieldCheckIcon } from 'lucide-react';

export function GuaranteeSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-5xl mx-auto p-6 md:p-10 rounded-lg shadow-lg bg-card">
          {/* Left Column: Image */}
          <div className="w-full md:w-auto flex justify-center md:justify-start">
            <Image
              src="https://placehold.co/200x200.png"
              alt="Selo de Garantia ChatVital - 15 dias"
              width={180}
              height={180}
              className="rounded-md"
              data-ai-hint="guarantee seal badge"
            />
          </div>
          {/* Right Column: Text */}
          <div className="w-full md:flex-1 text-center md:text-left">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-4 flex items-center justify-center md:justify-start">
              <ShieldCheckIcon className="h-7 w-7 sm:h-8 sm:w-8 mr-2.5 text-primary" />
              FIQUE TRANQUILO, SUA COMPRA É SEGURA!
            </h2>
            <p className="font-body text-md sm:text-lg text-card-foreground leading-relaxed">
              O código do consumidor (Art.39) garante 7 dias para solicitar o
              reembolso em caso de insatisfação com o produto. Nós confiamos
              tanto em nosso sistema que lhe garantimos <strong className="font-semibold text-primary">15 dias de garantia!</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
