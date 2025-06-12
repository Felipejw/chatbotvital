
import Image from 'next/image';

const logos = [
  { src: 'https://chatguru.com.br/wp-content/themes/chatguru-3/assets/img/novo/parceiros/1.svg', alt: 'Logotipo Parceiro 1', hint: 'company logo' },
  { src: 'https://chatguru.com.br/wp-content/themes/chatguru-3/assets/img/novo/parceiros/2.svg', alt: 'Logotipo Parceiro 2', hint: 'company logo' },
  { src: 'https://chatguru.com.br/wp-content/themes/chatguru-3/assets/img/novo/parceiros/3.svg', alt: 'Logotipo Parceiro 3', hint: 'company logo' },
  { src: 'https://chatguru.com.br/wp-content/themes/chatguru-3/assets/img/novo/parceiros/4.svg', alt: 'Logotipo Parceiro 4', hint: 'company logo' },
  { src: 'https://chatguru.com.br/wp-content/themes/chatguru-3/assets/img/novo/parceiros/5.svg', alt: 'Logotipo Parceiro 5', hint: 'company logo' },
  { src: 'https://chatguru.com.br/wp-content/themes/chatguru-3/assets/img/novo/parceiros/6.svg', alt: 'Logotipo Parceiro 6', hint: 'company logo' },
  { src: 'https://chatguru.com.br/wp-content/themes/chatguru-3/assets/img/novo/parceiros/7.svg', alt: 'Logotipo Parceiro 7', hint: 'company logo' },
  { src: 'https://chatguru.com.br/wp-content/themes/chatguru-3/assets/img/novo/parceiros/8.svg', alt: 'Logotipo Parceiro 8', hint: 'company logo' },
  { src: 'https://chatguru.com.br/wp-content/themes/chatguru-3/assets/img/novo/parceiros/9.svg', alt: 'Logotipo Parceiro 9', hint: 'company logo' },
  { src: 'https://chatguru.com.br/wp-content/themes/chatguru-3/assets/img/novo/parceiros/10.svg', alt: 'Logotipo Parceiro 10', hint: 'company logo' },
];

export function LogoCloudSection() {
  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-headline text-2xl sm:text-3xl text-foreground mb-10">
          Empresas que confiam em nossa solução
        </h2>
        <div className="relative w-full overflow-hidden group">
          <div className="flex animate-marquee group-hover:animate-pause whitespace-nowrap">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`logo-${index}-${logo.alt}`}
                className="inline-flex flex-shrink-0 items-center justify-center mx-6 sm:mx-8 md:mx-10 h-20"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={60}
                  className="object-contain max-h-full"
                  data-ai-hint={logo.hint}
                  unoptimized={logo.src.endsWith('.svg')}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
