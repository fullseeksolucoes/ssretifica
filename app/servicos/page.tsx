"use client";

import Link from "next/link";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

const services = [
  {
    code: "S.01",
    t: "Retífica completa de motores",
    d: "Reconstrução integral de motores nacionais, importados e diesel pesado, com substituição de peças críticas e controle dimensional total.",
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
    d: "Retífica de plano, alargamento de guias, troca de sedes, teste hidráulico de trincas e ajuste de câmara de combustão.",
    items: [
      "Retífica de plano CNC",
      "Alojamento de válvulas",
      "Teste de estanqueidade",
    ],
  },
  {
    code: "S.03",
    t: "Retífica de virabrequins",
    d: "Mancalização sob medida, polimento de munhões e moentes, balanceamento dinâmico em bancada calibrada.",
    items: [
      "Polimento de moentes",
      "Mancalização sob medida",
      "Balanceamento dinâmico",
    ],
  },
  {
    code: "S.04",
    t: "Diagnóstico técnico",
    d: "Avaliação completa com instrumentação digital, leak-down, compressão diferencial e análise de óleo lubrificante.",
    items: [
      "Compressão diferencial",
      "Leak-down test",
      "Análise espectrométrica",
    ],
  },
  {
    code: "S.05",
    t: "Montagem de precisão",
    d: "Montagem em sala limpa, torque controlado eletronicamente, folgas medidas com plastigauge e relógio comparador.",
    items: [
      "Torque eletrônico",
      "Plastigauge em mancais",
      "Pré-lubrificação forçada",
    ],
  },
  {
    code: "S.06",
    t: "Teste e dinamômetro",
    d: "Verificação de pressão de óleo, vazão, ruído, temperatura e rodagem inicial controlada em bancada de prova.",
    items: ["Pressão e vazão", "Rodagem assistida", "Laudo técnico final"],
  },
];

const process = [
  {
    n: "01",
    t: "Diagnóstico",
    d: "Recepção, inspeção visual, instrumentação digital e definição do escopo técnico.",
  },
  {
    n: "02",
    t: "Desmontagem",
    d: "Catalogação fotográfica de cada componente e medição inicial em bancada metrológica.",
  },
  {
    n: "03",
    t: "Usinagem",
    d: "Processos CNC dedicados — cabeçote, bloco, virabrequim, bielas — sob tolerâncias estritas.",
  },
  {
    n: "04",
    t: "Montagem",
    d: "Sala limpa, torque eletrônico, folgas verificadas e pré-lubrificação forçada do conjunto.",
  },
  {
    n: "05",
    t: "Teste",
    d: "Bancada dinâmica, leak-down, pressão de óleo e laudo técnico assinado pelo engenheiro responsável.",
  },
];

const faqs = [
  [
    "Qual o prazo médio de uma retífica completa?",
    "Entre 8 e 14 dias úteis, dependendo da complexidade do motor e da disponibilidade de peças originais. Motores importados podem demandar prazo adicional para importação de componentes específicos.",
  ],
  [
    "Vocês atendem motores diesel pesado?",
    "Sim. Operamos motores Mercedes-Benz, Volvo, Scania, Cummins, MWM e Iveco — frotas urbanas, agronegócio e linha pesada.",
  ],
  [
    "Existe garantia técnica?",
    "Toda retífica acompanha garantia formal de 12 meses ou 20.000 km, com cobertura sobre a operação executada e peças aplicadas.",
  ],
  [
    "Posso acompanhar o serviço?",
    "Sim. Disponibilizamos fotografias de cada etapa e recebemos visitas técnicas agendadas. Transparência integral é parte do protocolo.",
  ],
  [
    "Trabalham com motores de alta performance?",
    "Sim. Possuímos linha dedicada a motores preparados — incluindo retífica de bloco com sobremedida, comando alto, e ajustes para combustíveis alternativos.",
  ],
];

export default function Servicos() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Layout>
      <PageHero
        eyebrow="Serviços Técnicos"
        title="Operações de engenharia, executadas com método e controle metrológico."
        lead="Cada serviço da SS Retífica segue procedimento técnico documentado, rastreável e validado por engenheiro responsável."
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
            Cinco etapas, uma única tolerância: a sua especificação.
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
            Se a sua pergunta não está aqui, fale com nossa equipe técnica —
            orçamento e diagnóstico inicial sem custo.
          </p>
          <Link
            href="/contato"
            className="mt-8 inline-flex items-center gap-3 text-foreground border-b border-accent pb-1 font-medium"
          >
            Falar com engenheiro
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
