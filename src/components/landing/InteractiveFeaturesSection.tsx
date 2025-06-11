
"use client";

import { useState } from 'react';
import Image from 'next/image';
import {
  MessageSquare, LayoutDashboard, Workflow, Contact, CalendarClock, Zap, Tags, PlusCircle, UserPlus, Puzzle, Code2, Settings, SendHorizonal
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
    id: 'atendimento',
    title: 'Atendimento',
    icon: MessageSquare,
    longDescription: 'Centralize e gerencie todas as suas conversas de atendimento em um único lugar. Organize, responda e acompanhe o histórico de interações com seus clientes de forma eficiente.',
    imageSrc: 'https://placehold.co/800x450.png',
    imageAlt: 'Demonstração da funcionalidade de Atendimento',
    aiHint: 'customer support chat'
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: LayoutDashboard,
    longDescription: 'Visualize as principais métricas do seu chatbot e atendimento. Acompanhe o desempenho, volume de mensagens, e outras estatísticas importantes para tomar decisões estratégicas.',
    imageSrc: 'https://placehold.co/800x450.png',
    imageAlt: 'Demonstração da funcionalidade de Dashboard',
    aiHint: 'analytics dashboard'
  },
  {
    id: 'chatbot-funil',
    title: 'Chatbot Funil',
    icon: Workflow,
    longDescription: 'Crie fluxos de conversa automatizados e funis de vendas inteligentes. Guie seus clientes por jornadas personalizadas, qualifique leads e aumente suas conversões com nosso construtor de funis.',
    imageSrc: 'https://placehold.co/800x450.png',
    imageAlt: 'Demonstração da funcionalidade de Chatbot Funil',
    aiHint: 'chatbot funnel builder'
  },
  {
    id: 'contatos',
    title: 'Contatos',
    icon: Contact, // Corrigido de Contacts para Contact
    longDescription: 'Gerencie sua base de contatos de forma organizada. Importe, exporte, segmente e adicione informações relevantes aos perfis dos seus clientes para um atendimento mais personalizado.',
    imageSrc: 'https://placehold.co/800x450.png',
    imageAlt: 'Demonstração da funcionalidade de Contatos',
    aiHint: 'contact management crm'
  },
  {
    id: 'agendamento-mensagens',
    title: 'Agendamento de Mensagens',
    icon: CalendarClock,
    longDescription: 'Programe o envio de mensagens automáticas para datas e horários específicos. Ideal para lembretes, follow-ups, campanhas sazonais e manter o engajamento com seus clientes.',
    imageSrc: 'https://placehold.co/800x450.png',
    imageAlt: 'Demonstração da funcionalidade de Agendamento de Mensagens',
    aiHint: 'message scheduling calendar'
  },
  {
    id: 'respostas-rapidas',
    title: 'Respostas Rápidas',
    icon: Zap,
    longDescription: 'Crie e utilize modelos de mensagens prontas para agilizar o atendimento. Responda perguntas frequentes e envie informações importantes com apenas alguns cliques, economizando tempo.',
    imageSrc: 'https://placehold.co/800x450.png',
    imageAlt: 'Demonstração da funcionalidade de Respostas Rápidas',
    aiHint: 'quick replies chat'
  },
  {
    id: 'tag',
    title: 'Tag',
    icon: Tags,
    longDescription: 'Categorize e organize seus contatos e conversas utilizando tags personalizadas. Facilite a segmentação, a busca por informações e o acompanhamento de diferentes tipos de interações.',
    imageSrc: 'https://placehold.co/800x450.png',
    imageAlt: 'Demonstração da funcionalidade de Tag',
    aiHint: 'tagging system organization'
  },
  {
    id: 'adicionar-whatsapp',
    title: 'Adicionar WhatsApp',
    icon: PlusCircle,
    longDescription: 'Conecte múltiplos números de WhatsApp à plataforma de forma simples e rápida. Gerencie diversas contas e canais de atendimento em um só lugar.',
    imageSrc: 'https://placehold.co/800x450.png',
    imageAlt: 'Demonstração da funcionalidade de Adicionar WhatsApp',
    aiHint: 'whatsapp integration setup'
  },
  {
    id: 'adicionar-atendentes',
    title: 'Adicionar Atendentes',
    icon: UserPlus,
    longDescription: 'Inclua membros da sua equipe na plataforma para colaborar no atendimento. Defina permissões, distribua conversas e trabalhe em conjunto para oferecer o melhor suporte.',
    imageSrc: 'https://placehold.co/800x450.png',
    imageAlt: 'Demonstração da funcionalidade de Adicionar Atendentes',
    aiHint: 'team members users'
  },
  {
    id: 'integracoes',
    title: 'Integrações',
    icon: Puzzle,
    longDescription: 'Conecte seu chatbot com outras ferramentas e sistemas que você já utiliza. Amplie as funcionalidades e automatize processos integrando com CRMs, plataformas de e-commerce e mais.',
    imageSrc: 'https://placehold.co/800x450.png',
    imageAlt: 'Demonstração da funcionalidade de Integrações',
    aiHint: 'api integrations plugins'
  },
  {
    id: 'api',
    title: 'API',
    icon: Code2,
    longDescription: 'Acesse nossa API para desenvolvedores e crie integrações personalizadas. Tenha flexibilidade para conectar o chatbot com seus sistemas e construir soluções sob medida para suas necessidades.',
    imageSrc: 'https://placehold.co/800x450.png',
    imageAlt: 'Demonstração da funcionalidade de API',
    aiHint: 'developer api code'
  },
  {
    id: 'configuracoes',
    title: 'Configurações',
    icon: Settings,
    longDescription: 'Personalize as configurações gerais da sua conta e do chatbot. Ajuste preferências de notificação, horários de atendimento, informações da empresa e muito mais.',
    imageSrc: 'https://placehold.co/800x450.png',
    imageAlt: 'Demonstração da funcionalidade de Configurações',
    aiHint: 'app settings configuration'
  },
  {
    id: 'envio-em-massa',
    title: 'Envio em Massa',
    icon: SendHorizonal,
    longDescription: 'Realize envios de mensagens em massa para seus contatos segmentados. Ideal para campanhas de marketing, comunicados importantes e divulgação de novidades (respeitando as políticas do WhatsApp).',
    imageSrc: 'https://placehold.co/800x450.png',
    imageAlt: 'Demonstração da funcionalidade de Envio em Massa',
    aiHint: 'bulk messaging campaign'
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
