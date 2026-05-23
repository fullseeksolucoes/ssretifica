"use client";

import Link from "next/link";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

const services = [
  {
    code: "S.01",
    t: "Retífica completa de motores",
    d: "Reconstrução completa de motores nacionais e importados. Substituição de peças críticas e controle dimensional em todas as etapas.",
    items: [
      "Desmontagem assistida",
      "Limpeza química industrial",
      "Substituição de juntas e selos",
      "Teste dinâmico pós-montagem",
    ],
  },
  {
    code: "S.02",
    t: "Usinagem de cabeçotes",
    d: "Serviço completo em cabeçotes: retífica de plano, troca de sedes e guias, teste hidráulico de trincas e ajuste de câmara de combustão.",
    items: [
      "Retífica de plano",
      "Alojamento de válvulas",
      "Teste de estanqueidade",
    ],
  },
  {
    code: "S.03",
    t: "Retífica de virabrequins",
    d: "Mancalização personalizada, polimento de moentes e balanceamento dinâmico em bancada calibrada.",
    items: [
      "Polimento de moentes",
      "Mancalização sob medida",
      "Balanceamento dinâmico",
    ],
  },
  {
    code: "S.04",
    t: "Remoção e instalação de motores",
    d: "Removemos o motor, preparamos o compartimento e reinstalamos tudo no veículo com os ajustes necessários.",
    items: [
      "Remoção assistida do motor",
      "Preparação do cofre do motor",
      "Reinstalação e alinhamento",
      "Teste de funcionamento no veículo",
    ],
  },
  {
    code: "S.05",
    t: "Diagnóstico técnico",
    d: "A avaliação preliminar é sem custo. Testes específicos como compressão ou pressão de óleo são feitos quando necessário e com autorização prévia.",
    items: [
      "Avaliação técnica inicial",
      "Compressão diferencial",
      "Teste de pressão de óleo",
      "Leak-down test",
      "Inspeção de óleo lubrificante",
    ],
  },
  {
    code: "S.06",
    t: "Montagem especializada de motores",
    d: "Montamos o motor com componentes usinados, controle dimensional rigoroso e ajuste de folgas dentro das especificações do fabricante.",
    items: [
      "Montagem do bloco e cabeçote",
      "Aferição de folgas e torques",
      "Pré-lubrificação forçada",
      "Verificação de vedação e estanqueidade",
    ],
  },
  {
    code: "S.07",
    t: "Teste e dinamômetro",
    d: "Verificamos pressão de óleo, vazão, ruído e temperatura. A rodagem inicial é controlada em bancada de prova.",
    items: [
      "Pressão e vazão de óleo",
      "Rodagem assistida",
      "Laudo técnico final",
    ],
  },
];

const process = [
  {
    n: "01",
    t: "Diagnóstico e recepção",
    d: "Recepção do veículo, inspeção visual, avaliação técnica preliminar e definição do escopo do serviço.",
  },
  {
    n: "02",
    t: "Remoção do motor",
    d: "Remoção assistida do motor, catalogação de componentes e preparação para usinagem.",
  },
  {
    n: "03",
    t: "Usinagem",
    d: "Processos de usinagem dedicados para cabeçote, bloco, virabrequim e bielas, tudo dentro de tolerâncias rigorosas.",
  },
  {
    n: "04",
    t: "Montagem especializada",
    d: "Montagem completa do motor com componentes usinados, torque controlado e folgas verificadas.",
  },
  {
    n: "05",
    t: "Instalação e teste",
    d: "Reinstalação no veículo, teste dinâmico, verificação de pressão e vazão e laudo técnico final.",
  },
];

const faqs = [
  [
    "Qual o prazo médio de uma retífica completa?",
    "Entre 8 e 14 dias úteis, dependendo da complexidade do motor e da disponibilidade de peças originais. Motores importados podem demandar prazo adicional para importação de componentes específicos.",
  ],
  [
    "Vocês atendem motores diesel?",
    "Sim. Atuamos com motores diesel leve, incluindo Mercedes-Benz, Cummins, MWM e marcas comerciais leves.",
  ],
  [
    "Existe garantia técnica?",
    "Toda retífica acompanha garantia formal de 3 meses (90 dias) com suporte pós-entrega dedicado.",
  ],
  [
    "Posso acompanhar o serviço?",
    "Sim. Disponibilizamos fotografias de cada etapa e recebemos visitas técnicas agendadas. Transparência integral é parte do protocolo.",
  ],
  [
    "Trabalham com motores de alta performance?",
    "Sim. Temos linha dedicada a motores preparados, como retífica de bloco com sobremedida, comando alto e ajustes para combustíveis alternativos.",
  ],
  [
    "O diagnóstico técnico é gratuito?",
    "A avaliação técnica preliminar, que inclui inspeção visual e análise auditiva, é feita sem custo. Testes mais específicos como pressão de óleo, compressão diferencial e avaliação em bancada são cobrados conforme a complexidade do serviço. Consulte nossa equipe para mais informações.",
  ],
];

export default function Servicos() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Layout transparentHeader>
      <PageHero
        eyebrow="Serviços Técnicos"
        title="Da remoção à instalação: usinagem, montagem e teste com controle metrológico"
        lead="Todos os serviços são executados com procedimento técnico documentado e rastreável."
        backgroundImage="/hero-service.webp"
      />

      <section className="mx-auto max-w-350 px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-px bg-border border hairline">
          {services.map((s) => (
            <article
              key={s.code}
              className="group bg-background p-10 hover:bg-foreground hover:text-background transition-colors duration-500"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-xs tracking-[0.28em] text-accent">
                  {s.code}
                </span>
                <span className="h-px w-16 bg-border group-hover:bg-accent transition-colors" />
              </div>
              <h3 className="mt-6 font-display text-2xl md:text-3xl font-semibold tracking-tight">
                {s.t}
              </h3>
              <p className="mt-4 text-muted-foreground group-hover:text-background/70 leading-relaxed">
                {s.d}
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {s.items.map((i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="h-1 w-1 bg-accent rounded-full" />
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-foreground text-background py-24">
        <div className="mx-auto max-w-350 px-6 lg:px-10">
          <div className="text-xs uppercase tracking-[0.28em] text-accent">
            Processo operacional
          </div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl">
            Cinco etapas, uma única tolerância: a sua especificação
          </h2>

          <div className="mt-16 relative">
            <div className="absolute top-7 left-0 right-0 h-px bg-background/15 hidden md:block" />
            <div className="grid md:grid-cols-5 gap-10">
              {process.map((p) => (
                <div key={p.n} className="relative">
                  <div className="relative h-14 w-14 grid place-items-center rounded-full border border-background/30 bg-foreground">
                    <span className="font-display text-sm tracking-widest text-accent">
                      {p.n}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold">
                    {p.t}
                  </h3>
                  <p className="mt-2 text-sm text-background/60 leading-relaxed">
                    {p.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-350 px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="text-xs uppercase tracking-[0.28em] text-accent">
            Perguntas frequentes
          </div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight">
            Respostas técnicas, objetivas.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Se a sua pergunta não está aqui, fale com nossa equipe técnica.
            Orçamento sem compromisso e avaliação inicial gratuita.
          </p>
          <Link
            href="/contato"
            className="mt-8 inline-flex items-center gap-3 text-foreground border-b border-accent pb-1 font-medium"
          >
            Falar com equipe técnica
            <span className="h-1.5 w-1.5 bg-accent rounded-full" />
          </Link>
        </div>
        <div className="lg:col-span-8 divide-y hairline border-y hairline">
          {faqs.map(([q, a], i) => (
            <div key={q} className="py-2">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-5 flex items-center justify-between gap-6"
              >
                <span className="font-display text-lg md:text-xl font-medium">
                  {q}
                </span>
                <span
                  className={`h-8 w-8 grid place-items-center border hairline transition-transform ${open === i ? "rotate-45 bg-accent border-accent text-accent-foreground" : ""}`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <p className="pb-6 pr-12 text-muted-foreground leading-relaxed">
                  {a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
