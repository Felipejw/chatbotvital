"use client";

import { useState } from 'react';
import Image from 'next/image';
import {
  LayoutDashboard, BookOpenText, ClipboardList, DraftingCompass, BotMessageSquare,
  UserCheck, ShieldCheck, Users, Store, StickyNote,
  DownloadCloud, Users2, BrainCircuit, PlusCircle, Kanban, CalendarClock, Zap, Bot, LayoutPanelLeft
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface PlatformFeature {
  id: string;
  title: string;
  icon: LucideIcon;
  longDescription: string;
  imageSrc: string;
  imageAlt: string;
  aiHint?: string;
}

const platformFeaturesData: PlatformFeature[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: LayoutDashboard,
    longDescription: 'Acompanhe sua performance e métricas chave em um painel de controle intuitivo. Visualize seus resultados, saldo, e progresso de forma clara e objetiva para tomar decisões mais informadas.',
    imageSrc: 'https://checkout.tubaroesdabolsa.com/wp-content/uploads/2025/06/cap-dashboard-scaled.png',
    imageAlt: 'Demonstração do Dashboard da plataforma Tubarões da Bolsa',
  },
  {
    id: 'trade-journal',
    title: 'Diário de Trades',
    icon: BookOpenText,
    longDescription: 'Registre todas as suas operações detalhadamente. Analise seus acertos e erros, identifique padrões e refine suas estratégias para uma melhoria contínua. O diário é essencial para o desenvolvimento de um trader consistente.',
    imageSrc: 'https://checkout.tubaroesdabolsa.com/wp-content/uploads/2025/06/cap-diariotrader-scaled.png',
    imageAlt: 'Interface do Diário de Trades',
    aiHint: 'trading journal'
  },
  {
    id: 'daily-plan',
    title: 'Plano Diário',
    icon: ClipboardList,
    longDescription: 'Defina suas metas, estratégias e limites para cada dia de operação. O plano diário ajuda a manter o foco, a disciplina e a evitar decisões impulsivas, seguindo um roteiro pré-estabelecido.',
    imageSrc: 'https://checkout.tubaroesdabolsa.com/wp-content/uploads/2025/06/cap-planodiario-scaled.png',
    imageAlt: 'Funcionalidade de Plano Diário',
    aiHint: 'daily planner'
  },
  {
    id: 'strategy-builder',
    title: 'Construtor de Estratégias',
    icon: DraftingCompass,
    longDescription: 'Crie, teste e otimize suas próprias estratégias de trading. Utilize ferramentas visuais e backtesting para validar suas ideias antes de aplicá-las no mercado real, aumentando suas chances de sucesso.',
    imageSrc: 'https://checkout.tubaroesdabolsa.com/wp-content/uploads/2025/06/cap-construtordeestrategia-scaled.png',
    imageAlt: 'Demonstração do Construtor de Estratégias',
    aiHint: 'strategy builder'
  },
  {
    id: 'virtual-psychologist',
    title: 'Psicólogo Virtual',
    icon: BotMessageSquare,
    longDescription: 'Receba suporte emocional e insights de uma IA treinada para ajudar traders. Gerencie o estresse, a ansiedade e outros fatores psicológicos que afetam suas decisões e sua performance no mercado.',
    imageSrc: 'https://checkout.tubaroesdabolsa.com/wp-content/uploads/2025/06/cap-psicologovirtual-scaled.png',
    imageAlt: 'Interface do Psicólogo Virtual',
    aiHint: 'ai psychologist'
  },
  {
    id: 'profile-test',
    title: 'Teste de Perfil',
    icon: UserCheck,
    longDescription: 'Descubra seu perfil de trader e entenda suas características comportamentais. Receba recomendações personalizadas para alinhar suas estratégias e seu operacional ao seu perfil, maximizando seus pontos fortes.',
    imageSrc: 'https://checkout.tubaroesdabolsa.com/wp-content/uploads/2025/06/cap-testedeperfil-scaled.png',
    imageAlt: 'Funcionalidade de Teste de Perfil',
    aiHint: 'profile assessment'
  },
  {
    id: 'risk-manager',
    title: 'Gestor de Risco',
    icon: ShieldCheck,
    longDescription: 'Defina e controle seus limites de perda, metas de ganho e tamanho de posição. O gestor de risco é fundamental para proteger seu capital e garantir a longevidade nas suas operações no mercado.',
    imageSrc: 'https://checkout.tubaroesdabolsa.com/wp-content/uploads/2025/06/cap-gestorderisco-scaled.png',
    imageAlt: 'Opção de Gestor de Risco',
    aiHint: 'risk management'
  },
  {
    id: 'traders-group',
    title: 'Grupo de Traders',
    icon: Users,
    longDescription: 'Conecte-se com outros traders, compartilhe experiências, estratégias e aprendizados. Participe de discussões, tire dúvidas e faça parte de uma comunidade engajada e focada em resultados.',
    imageSrc: 'https://checkout.tubaroesdabolsa.com/wp-content/uploads/2025/06/cap-grupotrader-scaled.png',
    imageAlt: 'Comunidade Grupo de Traders',
    aiHint: 'community forum'
  },
  {
    id: 'trader-store',
    title: 'Loja do Trader',
    icon: Store,
    longDescription: 'Acesse uma seleção de produtos digitais como e-books, indicadores, cursos e estratégias prontas. Encontre ferramentas e conhecimento para aprimorar ainda mais suas habilidades e resultados no trading.',
    imageSrc: 'https://checkout.tubaroesdabolsa.com/wp-content/uploads/2025/06/cap-loja-scaled.png',
    imageAlt: 'Loja do Trader com Produtos Digitais',
    aiHint: 'online store'
  }
];

export function InteractiveFeaturesSection() {
  const [selectedFeatureId, setSelectedFeatureId] = useState<string>(platformFeaturesData[0].id);

  const selectedFeature = platformFeaturesData.find(f => f.id === selectedFeatureId) || platformFeaturesData[0];

  return (
    <section
      id="interactive-features"
      className="py-12 md:py-16 bg-secondary dark:bg-card border rounded-lg shadow-lg"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Explore Nossas Ferramentas em Detalhe
          </h2>
          <p className="mt-3 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Clique em uma funcionalidade à esquerda para ver como ela pode transformar sua experiência.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Left Column: Feature List */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="space-y-2 md:sticky md:top-20"> {/* Sticky positioning for larger screens */}
              {platformFeaturesData.map((feature) => (
                <Button
                  key={feature.id}
                  variant="ghost"
                  className={cn(
                    "w-full justify-start text-left h-auto py-3 px-4 rounded-lg",
                    "text-base md:text-sm",
                    selectedFeatureId === feature.id
                      ? 'bg-accent text-accent-foreground shadow-md'
                      : 'bg-card hover:bg-muted text-card-foreground dark:bg-background dark:hover:bg-muted/50'
                  )}
                  onClick={() => setSelectedFeatureId(feature.id)}
                >
                  <feature.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  <span className="flex-grow">{feature.title}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Right Column: Selected Feature Details */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <Card className="shadow-xl rounded-lg">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-3">{selectedFeature.title}</h3>
                <p className="text-foreground/80 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  {selectedFeature.longDescription}
                </p>
                <div className="aspect-video relative w-full rounded-lg overflow-hidden bg-muted/50 border border-border">
                  <Image
                    src={selectedFeature.imageSrc}
                    alt={selectedFeature.imageAlt}
                    fill
                    className="object-contain p-2" 
                    data-ai-hint={selectedFeature.aiHint}
                    unoptimized={selectedFeature.imageSrc.includes('drive.google.com') || selectedFeature.imageSrc.includes('checkout.tubaroesdabolsa.com')}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

    