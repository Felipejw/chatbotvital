
import Image from 'next/image';

const iconSet = {
  src: 'https://chatguru.com.br/wp-content/themes/chatguru-3/assets/img/novo/icones1.svg',
  alt: 'Conjunto de ícones de plataformas e funcionalidades compatíveis com ChatVital',
  hint: 'platform icons'
};

export function IconMarqueeSection() {
  return (
    <section className="py-6 md:py-10 bg-background"> {/* Usando bg-background para alternar com a seção anterior (bg-gray-50) */}
      <div className="container mx-auto px-4">
        <h2 className="text-center font-headline text-2xl sm:text-3xl text-foreground mb-8">
          Integração com as Plataformas que Você Já Usa
        </h2>
        <div className="relative w-full overflow-hidden group">
          <div className="flex animate-marquee group-hover:animate-pause whitespace-nowrap">
            {/* Duplicating the icon for continuous marquee effect */}
            <div className="inline-flex flex-shrink-0 items-center justify-center px-6">
              <Image
                src={iconSet.src}
                alt={iconSet.alt}
                width={1000}
                height={60}
                className="object-contain max-h-16"
                data-ai-hint={iconSet.hint}
                unoptimized // Good for SVGs
              />
            </div>
            <div className="inline-flex flex-shrink-0 items-center justify-center px-6">
              <Image
                src={iconSet.src}
                alt={iconSet.alt}
                width={1000}
                height={60}
                className="object-contain max-h-16"
                data-ai-hint={iconSet.hint}
                unoptimized // Good for SVGs
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
