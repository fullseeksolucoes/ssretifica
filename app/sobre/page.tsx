"use client";

import Image from "next/image";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

const values = [
  {
    t: "Precisão metrológica",
    d: "Cada componente passa por controle dimensional rastreável, calibrado conforme normas ABNT/ISO.",
  },
  {
    t: "Transparência integral",
    d: "Diagnóstico documentado, peças mensuráveis e cliente acompanhando cada etapa da operação.",
  },
  {
    t: "Equipe especializada",
    d: "Técnicos com experiência em motores nacionais, importados e de alta performance.",
  },
  {
    t: "Responsabilidade",
    d: "Garantia formal, peças originais e procedimento técnico documentado para cada motor entregue.",
  },
];

export default function Sobre() {
  return (
    <Layout>
      <PageHero
        eyebrow="A Empresa"
        title="Retífica de motores com tradição, método e precisão"
        lead="Atendemos frotistas, oficinas e proprietários particulares de toda a região metropolitana de Belo Horizonte. Oferecemos serviços completos de remoção, usinagem, montagem e instalação de motores."
        sideImage="/hero-about.webp"
      />

      <section className="mx-auto max-w-350 px-6 lg:px-10 py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
          <div className="text-xs uppercase tracking-[0.28em] text-accent">
            Nossa história
          </div>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold tracking-tight">
            Processo completo com responsabilidade técnica
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
          <p>
            A SS Retífica é especializada em retífica de motores e usinagem de
            componentes mecânicos para veículos nacionais e importados. Atuamos
            com motores a gasolina, etanol e diesel leve. Fazemos o processo
            completo, da remoção do motor à instalação final.
          </p>
          <p>
            Nossa estrutura tem equipamentos de usinagem, bancada metrológica e
            teste dinâmico. Esses recursos permitem manter tolerâncias rigorosas
            em cada etapa. Toda operação é documentada e acompanhada por técnicos
            especializados.
          </p>
          <p>
            Trabalhamos com frota pesada, utilitários, veículos de passeio e
            motores preparados. A avaliação técnica preliminar é feita sem
            custo e o cliente pode acompanhar cada fase do serviço mediante
            agendamento.
          </p>
          <p>
            O cliente confia o veículo e nós cuidamos de tudo: diagnóstico,
            remoção, usinagem, montagem especializada, reinstalação e teste
            final. Um único responsável por cada etapa do processo.
          </p>
        </div>
      </section>

      <section className="bg-foreground text-background py-20">
        <div className="mx-auto max-w-350 px-6 lg:px-10">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.28em] text-accent">
              Capacidade técnica
            </div>
            <p className="mt-5 font-display text-2xl md:text-3xl font-medium leading-snug text-background/80">
              Da recepção do veículo à entrega final, a SS Retífica faz todo o
              processo: remoção, usinagem, montagem especializada e instalação
              do motor, com usinagem de precisão, bancada metrológica e teste
              dinâmico.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-350 px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-4/5 overflow-hidden">
          <Image
            src="/structure.webp"
            alt="Estrutura interna da SS Retífica"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-accent">
            Estrutura
          </div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight">
            Estrutura para usinagem e montagem de precisão
          </h2>
          <ul className="mt-8 divide-y hairline border-y hairline">
            {[
              [
                "Setor de usinagem",
                "Brunidoras, mandrilhadoras e retífica plana de cabeçotes.",
              ],
              [
                "Laboratório metrológico",
                "Micrômetros digitais, súbitos e relógio comparador.",
              ],
              [
                "Bancada de teste dinâmico",
                "Verificação de pressão de óleo, vazão e leak-down.",
              ],
              [
                "Setor de montagem",
                "Mecânicos especializados em motores nacionais e importados.",
              ],
            ].map(([t, d]) => (
              <li key={t} className="py-5 grid grid-cols-12 gap-6">
                <div className="col-span-5 font-display font-medium">{t}</div>
                <div className="col-span-7 text-sm text-muted-foreground">
                  {d}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-350 px-6 lg:px-10 py-24">
        <div className="text-xs uppercase tracking-[0.28em] text-accent">
          Missão & Valores
        </div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl">
            Responsabilidade técnica em cada etapa
          </h2>
        <div className="mt-12 grid md:grid-cols-2 gap-px bg-border border hairline">
          {values.map((v) => (
            <div key={v.t} className="bg-background p-10">
              <div className="font-display text-2xl font-semibold tracking-tight">
                {v.t}
              </div>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {v.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/hero-engine.jpg"
          alt="Técnico SS Retífica"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-foreground/80 via-foreground/40 to-transparent" />
        <div className="relative h-full mx-auto max-w-350 px-6 lg:px-10 flex items-center">
          <blockquote className="max-w-2xl text-background">
            <div className="text-accent text-xs uppercase tracking-[0.28em]">
              Compromisso técnico
            </div>
            <p className="mt-4 font-display text-2xl md:text-4xl font-medium leading-tight text-balance">
              &ldquo;Cada motor é usinado, medido, testado e documentado antes
              de sair daqui. Assumimos a responsabilidade por cada
              tolerância.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>
    </Layout>
  );
}
