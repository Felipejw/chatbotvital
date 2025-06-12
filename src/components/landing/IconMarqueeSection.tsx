
import Image from 'next/image';

const iconSet = {
  src: 'https://chatguru.com.br/wp-content/themes/chatguru-3/assets/img/novo/icones1.svg',
  alt: 'Conjunto de ícones de plataformas e funcionalidades compatíveis com ChatVital',
  hint: 'platform icons'
};

export function IconMarqueeSection() {
  return (
    <section className="py-8 md:py-12 bg-background"> {/* Usando bg-background para alternar com a seção anterior (bg-gray-50) */}
      <div className="container mx-auto px-4">
        {/* Opcionalmente, um título poderia ser adicionado aqui se desejado no futuro */}
        {/* Ex: <h2 className="text-center font-headline text-2xl sm:text-3xl text-foreground mb-10">Plataformas que se Integram Conosco</h2> */}
        <div className="relative w-full overflow-hidden group">
          <div className="flex animate-marquee group-hover:animate-pause whitespace-nowrap">
            {/* Duplicar a imagem para efeito de marquee contínuo */}
            <div className="inline-flex flex-shrink-0 items-center justify-center px-2">
              <Image
                src={iconSet.src}
                alt={iconSet.alt}
                width={1934} // Largura original da imagem SVG
                height={62}   // Altura original da imagem SVG
                className="object-contain max-h-16" // Controla a altura máxima exibida, mantendo a proporção
                data-ai-hint={iconSet.hint}
                unoptimized // Recomendado para SVGs para evitar otimização desnecessária
              />
            </div>
            <div className="inline-flex flex-shrink-0 items-center justify-center px-2">
              <Image
                src={iconSet.src}
                alt={iconSet.alt} // Reutilizando o alt text
                width={1934}
                height={62}
                className="object-contain max-h-16"
                data-ai-hint={iconSet.hint}
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
