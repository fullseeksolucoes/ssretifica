"use client";

import Image from "next/image";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

const metrics = [
  { v: "22+", l: "Anos de operação" },
  { v: "1.000", l: "Motores entregues" },
  { v: "±0,01mm", l: "Tolerância de usinagem" },
  { v: "100%", l: "Garantia técnica" },
];

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
    t: "Engenharia aplicada",
    d: "Equipe formada por engenheiros mecânicos e técnicos especialistas em motores de alto desempenho.",
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
        title="Uma engenharia de motores construída sobre tradição, método e medição."
        lead="Desde 2020 em Belo Horizonte, a SS Retífica é referência em retífica de alta precisão, atendendo frotistas, oficinas parceiras e proprietários exigentes de toda a região metropolitana."
        sideImage="/hero-about.webp"
      />

      <section className="mx-auto max-w-350 px-6 lg:px-10 py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
          <div className="text-xs uppercase tracking-[0.28em] text-accent">
            Nossa história
          </div>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold tracking-tight">
            Da bancada artesanal ao centro técnico de referência.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            dolorem maxime labore impedit repellat et quo voluptatibus! Sunt
            magni ad quae magnam nostrum repudiandae, saepe mollitia. Fuga vel
            fugit voluptatem ab sed. Eos maiores rem voluptatem odio qui aut,
            assumenda cum. Voluptatibus reiciendis dolorem consequuntur! Eos ad
            officiis blanditiis, ex doloremque ea qui nisi unde omnis,
            aspernatur nobis incidunt recusandae et perspiciatis natus in
            quisquam necessitatibus suscipit at consectetur laborum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            perspiciatis, quisquam vel doloremque delectus ipsa facilis
            voluptates cum corrupti aspernatur culpa temporibus iure nostrum
            quis ratione similique, provident aliquid, quo aperiam beatae. Ea
            fuga obcaecati hic amet minima numquam? Ea.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            nisi totam iusto quisquam velit optio facilis neque. Iusto, quaerat
            ad similique aspernatur quam sed, nesciunt quisquam obcaecati
            consequuntur impedit facilis?
          </p>
        </div>
      </section>

      <section className="bg-foreground text-background py-20">
        <div className="mx-auto max-w-350 px-6 lg:px-10">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-accent">
                Indicadores
              </div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight max-w-xl">
                Números que medem nossa operação.
              </h2>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 divide-x divide-background/10 border-y border-background/10">
            {metrics.map((m) => (
              <div key={m.l} className="p-8">
                <div className="font-display text-5xl md:text-6xl text-accent tracking-tight">
                  {m.v}
                </div>
                <div className="mt-3 text-xs uppercase tracking-[0.22em] text-background/60">
                  {m.l}
                </div>
              </div>
            ))}
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
            1.800 m² de operação técnica controlada.
          </h2>
          <ul className="mt-8 divide-y hairline border-y hairline">
            {[
              [
                "Setor de usinagem CNC",
                "Brunidoras, mandrilhadoras e retífica plana de cabeçotes.",
              ],
              [
                "Laboratório metrológico",
                "Micrômetros digitais, súbitos e bancada tridimensional.",
              ],
              [
                "Bancada de teste dinâmico",
                "Verificação de pressão de óleo, vazão e leak-down.",
              ],
              [
                "Sala limpa de montagem",
                "Ambiente controlado para motores de alto desempenho.",
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
          Engenharia que se prova em cada compressão.
        </h2>
        <div className="mt-12 grid md:grid-cols-2 gap-px bg-border border hairline">
          {values.map((v, i) => (
            <div key={v.t} className="bg-background p-10">
              <div className="flex items-center gap-3 text-accent font-display text-sm">
                <span>0{i + 1}</span>
                <span className="h-px w-8 bg-accent" />
              </div>
              <div className="mt-5 font-display text-2xl font-semibold tracking-tight">
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
              Filosofia
            </div>
            <p className="mt-4 font-display text-2xl md:text-4xl font-medium leading-tight text-balance">
              &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Facilis dolores numquam, distinctio sequi dolor nobis possimus
              quibusdam delectus eos architecto.&rdquo;
            </p>
            <footer className="mt-6 text-sm text-background/70">
              — Nome Sobrenome, Cargo na Empresa
            </footer>
          </blockquote>
        </div>
      </section>
    </Layout>
  );
}
