"use client";

import Link from "next/link";
import Image from "next/image";
import { Layout } from "@/components/site/Layout";

const differentials = [
  {
    n: "01",
    t: "Controle metrológico",
    d: "Bancada tridimensional, micrômetros calibrados e laudo técnico em cada operação.",
  },
  {
    n: "02",
    t: "Engenheiro responsável",
    d: "Toda retífica é validada e assinada por engenheiro mecânico CREA/MG ativo.",
  },
  {
    n: "03",
    t: "Garantia técnica 12 meses",
    d: "Cobertura formal de 12 meses ou 20.000 km, com suporte pós-entrega dedicado.",
  },
  {
    n: "04",
    t: "Sala limpa de montagem",
    d: "Ambiente controlado para preservar tolerâncias de motores de alto desempenho.",
  },
];

const services = [
  {
    t: "Retífica completa",
    d: "Reconstrução integral com peças originais e teste dinâmico final.",
    img: "/retifica.webp",
  },
  {
    t: "Cabeçotes CNC",
    d: "Plano, sedes, guias e teste hidráulico de estanqueidade.",
    img: "/cabecote.webp",
  },
  {
    t: "Virabrequins",
    d: "Polimento, mancalização e balanceamento dinâmico calibrado.",
    img: "/virabrequins.webp",
  },
  {
    t: "Diagnóstico técnico",
    d: "Compressão, leak-down e análise espectrométrica de óleo.",
    img: "/diagnostico.webp",
  },
];

const reviews = [
  {
    n: "Analuu Abreu",
    s: "Excelente profissionais e serviços de qualidade! Gosto muito de ser clientes de vocês",
    d: "há uma semana",
  },
  {
    n: "Magnus Konare",
    s: "Serviço de excelência prestado pelo pessoal desta retífica. Tudo ocorreu bem e a entrega do motor foi feita antes do prazo combinado. Agradeço a toda equipe SS.",
    d: "há 2 anos",
  },
  {
    n: "Fabricio Rocha",
    s: "Excelente serviço",
    d: "há 2 anos",
  },
  {
    n: "Andre Lucas",
    s: "Muito bem atendido pelo Sérgio e toda sua equipe. Grande abraço!! Martins Centro Automotivo",
    d: "há 3 anos",
  },
  {
    n: "Matheus Rodrigues",
    s: "Melhor retifica de Belo Horizonte",
    d: "há 5 anos",
  },
  {
    n: "Joselito Lima Reis",
    s: "Excelente ! Ótimo trabalho e o que é difícil nos dias atuais , honestidade! Parabéns ao Hudson e sua equipe!!",
    d: "há 6 anos",
  },
  {
    n: "Washington Souza",
    s: "Ótima retifica qualidade e preço, procurar o Sérgio ou Samuel",
    d: "há 7 anos",
  },
  {
    n: "Jose Ângelo",
    s: "Ótima",
    d: "há 8 anos",
  },
];

export default function Home() {
  return (
    <Layout transparentHeader>
      <section className="relative min-h-screen bg-foreground text-background overflow-hidden">
        <Image
          src="/hero-engine.jpg"
          alt="Bloco de motor retificado na SS Retífica"
          fill
          className="object-cover opacity-65"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-foreground via-foreground/70 to-foreground/30" />
        <div className="absolute inset-0 bg-linear-to-r from-foreground/80 via-transparent to-transparent" />

        <div className="relative h-full min-h-screen mx-auto max-w-350 px-6 lg:px-10 pt-36 md:pt-44 pb-16 flex flex-col">
          <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.3em] text-background/60 reveal-up">
            <span className="h-px w-12 bg-accent" />
            Retífica de motores · Belo Horizonte · desde 2020
          </div>

          <div className="mt-auto grid lg:grid-cols-12 gap-10 items-end">
            <h1 className="lg:col-span-9 font-display text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tight leading-[0.95] text-balance reveal-up">
              Precisão industrial
              <br />
              em cada <span className="text-accent">compressão</span>
              <br />
              de motor.
            </h1>
            <div className="lg:col-span-3 space-y-6 reveal-up">
              <p className="text-background/70 leading-relaxed">
                Retífica e engenharia de motores de alta performance, frotas
                pesadas e linha clássica.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/contato"
                  className="group inline-flex items-center justify-between bg-accent text-accent-foreground px-6 py-4 hover:bg-background hover:text-foreground transition-colors"
                >
                  <span className="font-medium">Solicitar orçamento</span>
                  <span className="text-xs tracking-[0.22em]">→</span>
                </Link>
                <Link
                  href="/servicos"
                  className="inline-flex items-center justify-between border border-background/30 px-6 py-4 hover:border-accent hover:text-accent transition-colors"
                >
                  <span className="font-medium">Ver serviços</span>
                  <span className="text-xs tracking-[0.22em]">↘</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 border-t border-background/15 pt-8 gap-6">
            {[
              ["22+", "Anos de operação"],
              ["1.000", "Motores entregues"],
              ["±0,01mm", "Tolerância média"],
              ["12 meses", "Garantia técnica"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="font-display text-3xl md:text-4xl text-accent tracking-tight">
                  {v}
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-background/50">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-y hairline overflow-hidden bg-background py-5">
        <div className="flex gap-16 marquee whitespace-nowrap font-display text-2xl tracking-tight text-muted-foreground">
          {Array(2)
            .fill(null)
            .map((_, k) => (
              <div key={k} className="flex items-center gap-16">
                {[
                  "Mercedes-Benz",
                  "Cummins",
                  "Volkswagen",
                  "MWM",
                  "Volvo",
                  "Scania",
                  "Iveco",
                  "GM",
                  "Fiat Powertrain",
                ].map((b) => (
                  <span key={b + k} className="flex items-center gap-16">
                    {b}
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                ))}
              </div>
            ))}
        </div>
      </div>

      <section className="mx-auto max-w-350 px-6 lg:px-10 py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.28em] text-accent">
              Diferenciais técnicos
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight text-balance">
              Quatro pilares que sustentam cada motor que sai daqui.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              Somos uma operação de retífica de motores dedicada exclusivamente
              ao motor a combustão.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border border hairline">
            {differentials.map((d) => (
              <div
                key={d.n}
                className="bg-background p-8 hover:bg-foreground hover:text-background transition-colors duration-500 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-accent font-display tracking-widest">
                    {d.n}
                  </span>
                  <span className="h-px w-12 bg-border group-hover:bg-accent transition-colors" />
                </div>
                <div className="mt-8 font-display text-xl font-semibold tracking-tight">
                  {d.t}
                </div>
                <p className="mt-3 text-sm text-muted-foreground group-hover:text-background/70 leading-relaxed">
                  {d.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 border-y hairline">
        <div className="mx-auto max-w-350 px-6 lg:px-10 py-28">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-accent">
                Operações técnicas
              </div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl text-balance">
                Engenharia aplicada a cada componente do motor.
              </h2>
            </div>
            <Link
              href="/servicos"
              className="inline-flex items-center gap-3 border-b border-accent pb-1 font-medium"
            >
              Ver todos os serviços
              <span className="h-1.5 w-1.5 bg-accent rounded-full" />
            </Link>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border hairline">
            {services.map((s, i) => (
              <div
                key={s.t}
                className="relative overflow-hidden bg-foreground text-background"
              >
                <Image
                  src={s.img}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="absolute inset-0 object-cover z-0 opacity-40"
                />
                <div className="relative z-10 p-8 flex flex-col h-full">
                  <span className="text-xs tracking-[0.22em] text-accent">
                    0{i + 1} / 0{services.length}
                  </span>
                  <div className="mt-8 font-display text-2xl font-semibold tracking-tight">
                    {s.t}
                  </div>
                  <p className="mt-3 text-sm text-background/70 leading-relaxed flex-1">
                    {s.d}
                  </p>
                  <div className="mt-8 pt-6 border-t border-background/20 flex items-center justify-between text-xs uppercase tracking-[0.2em]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-350 px-6 lg:px-10 py-28">
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.28em] text-accent">
              Operação
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight text-balance">
              Bastidores de uma operação metrológica.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              Estrutura interna, máquinas dedicadas e o ritmo controlado de uma
              retífica de motores.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-6 gap-4">
            <figure className="col-span-6 aspect-video overflow-hidden">
              <Image
                src="/home1.webp"
                alt="SS Retífica — vista interna"
                width={1920}
                height={1080}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </figure>
            <figure className="col-span-3 aspect-square overflow-hidden">
              <Image
                src="/home2.webp"
                alt="Técnico em cabeçote"
                width={1280}
                height={1280}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </figure>
            <figure className="col-span-3 aspect-square overflow-hidden">
              <Image
                src="/home3.webp"
                alt="Retífica de virabrequim"
                width={1280}
                height={1600}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 border-y hairline">
        <div className="mx-auto max-w-350 px-6 lg:px-10 py-28">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-accent">
                Avaliações Google
              </div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl text-balance">
                4.7 / 5 em 25 avaliações verificadas.
              </h2>
            </div>
            <div className="flex items-center gap-2 text-2xl text-accent">
              ★★★★★
              <span className="text-sm text-muted-foreground ml-2">
                Google Reviews · Belo Horizonte
              </span>
            </div>
          </div>

          <div className="mt-14 overflow-hidden mask-edges">
            <div className="flex gap-6 carousel-reviews">
              {[...reviews, ...reviews].map((r, i) => (
                <article
                  key={`${r.n}-${i}`}
                  className="bg-background p-8 border hairline flex flex-col w-95 shrink-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 grid place-items-center rounded-full bg-foreground text-background font-display font-semibold">
                      {r.n
                        .split(" ")
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <div className="font-display font-semibold">{r.n}</div>
                      {/* <div className="text-xs text-muted-foreground">{r.r}</div> */}
                    </div>
                  </div>
                  <div className="mt-5 text-accent text-sm tracking-wider">
                    ★★★★★
                  </div>
                  <p className="mt-4 text-sm text-foreground/80 leading-relaxed flex-1">
                    {r.s}
                  </p>
                  <div className="mt-6 pt-4 border-t hairline flex items-center justify-between text-xs text-muted-foreground">
                    <span>{r.d}</span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 bg-accent rounded-full" />
                      verificado
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-foreground text-background overflow-hidden">
        <div className="absolute -right-32 -top-32 h-125 w-125 rounded-full border border-background/10 spin-slow">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-accent" />
        </div>
        <div
          className="absolute -right-10 top-1/2 -translate-y-1/2 h-75 w-75 rounded-full border border-background/10 spin-slow"
          style={
            {
              animationDirection: "reverse",
              animationDuration: "24s",
            } as React.CSSProperties
          }
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-accent" />
        </div>

        <div className="relative mx-auto max-w-350 px-6 lg:px-10 py-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.28em] text-accent">
              Próximo passo
            </div>
            <h2 className="mt-5 font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95] text-balance">
              Seu motor merece <span className="text-accent">engenharia</span>,
              não improviso.
            </h2>
            <p className="mt-6 max-w-xl text-background/70 leading-relaxed text-lg">
              Diagnóstico técnico inicial sem custo. Atendimento por engenheiro
              responsável. Garantia formal de 12 meses em toda operação.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-3">
            <Link
              href="/contato"
              className="inline-flex items-center justify-between bg-accent text-accent-foreground px-8 py-5 hover:bg-background hover:text-foreground transition-colors"
            >
              <span className="font-display text-lg font-semibold">
                Solicitar orçamento técnico
              </span>
              <span>→</span>
            </Link>
            <a
              href="https://wa.me/5531998124400"
              className="inline-flex items-center justify-between border border-background/30 px-8 py-5 hover:border-accent hover:text-accent transition-colors"
            >
              <span className="font-display text-lg font-medium">
                WhatsApp · (31) 99812-4400
              </span>
              <span>↗</span>
            </a>
            <Link
              href="/sobre"
              className="inline-flex items-center justify-between px-8 py-5 text-background/60 hover:text-background transition-colors"
            >
              <span>Conhecer a empresa</span>
              <span>↘</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
