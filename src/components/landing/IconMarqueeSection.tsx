
import Image from 'next/image';

// const iconSet = {
//   src: 'https://chatguru.com.br/wp-content/themes/chatguru-3/assets/img/novo/icones1.svg',
//   alt: 'Conjunto de ícones de plataformas e funcionalidades compatíveis com ChatVital',
//   hint: 'platform icons'
// };

export function IconMarqueeSection() {
  return (
    <section className="py-8 md:py-12 bg-background"> {/* Usando bg-background para alternar com a seção anterior (bg-gray-50) */}
      <div className="container mx-auto px-4">
        {/* Opcionalmente, um título poderia ser adicionado aqui se desejado no futuro */}
        {/* Ex: <h2 className="text-center font-headline text-2xl sm:text-3xl text-foreground mb-10">Plataformas que se Integram Conosco</h2> */}
        <div className="relative w-full overflow-hidden group">
          <div className="flex animate-marquee group-hover:animate-pause whitespace-nowrap">
            {/* Imagem 1 atualizada */}
            <div className="inline-flex flex-shrink-0 items-center justify-center px-2">
              <Image
                src="https://images.unsplash.com/photo-1514368771328-0b14929dceb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxwbGF0Zm9ybSUyMGljb25zfGVufDB8fHx8MTc0OTc0NDE5MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Various platform and social media icons"
                width={1080} 
                height={720}  
                className="object-contain max-h-16" 
                data-ai-hint="platform icons"
              />
            </div>
            {/* Imagem 2 atualizada */}
            <div className="inline-flex flex-shrink-0 items-center justify-center px-2">
              <Image
                src="https://images.unsplash.com/photo-1688069628729-b5fe09502bfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxwbGF0Zm9ybSUyMGljb25zfGVufDB8fHx8MTc0OTc0NDE5MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Abstract representation of interconnected platform icons" 
                width={1080}
                height={720}
                className="object-contain max-h-16"
                data-ai-hint="platform icons"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
