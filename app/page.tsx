"use client";

import Link from "next/link";
import Image from "next/image";
import { Layout } from "@/components/site/Layout";

const differentials = [
  {
    t: "Controle metrológico",
    d: "Cada peça é medida com instrumentos calibrados e acompanhada de laudo técnico.",
  },
  {
    t: "Usinagem de precisão",
    d: "Equipamentos dedicados para cabeçotes, blocos, virabrequins e bielas dentro das tolerâncias do fabricante.",
  },
  {
    t: "Garantia técnica de 3 meses",
    d: "90 dias de cobertura com suporte direto da nossa equipe.",
  },
  {
    t: "Peças originais",
    d: "Usamos componentes genuínos em cada serviço de reconstrução.",
  },
];

const services = [
  {
    t: "Retífica completa de motores",
    d: "Reconstrução integral com substituição de peças críticas e teste dinâmico final.",
    img: "/retifica.webp",
  },
  {
    t: "Usinagem de cabeçotes",
    d: "Retífica de plano, sedes, guias e teste hidráulico de estanqueidade.",
    img: "/cabecote.webp",
  },
  {
    t: "Retífica de virabrequins",
    d: "Polimento, mancalização e balanceamento dinâmico calibrado.",
    img: "/virabrequins.webp",
  },
  {
    t: "Diagnóstico técnico",
    d: "Compressão, leak-down, pressão de óleo e inspeção de lubrificante.",
    img: "/diagnostico.webp",
  },
  {
    t: "Remoção e instalação de motores",
    d: "Remoção, preparação e reinstalação completa do motor no veículo.",
    img: "/retifica.webp",
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
  // {
  //   n: "Matheus Rodrigues",
  //   s: "Melhor retifica de Belo Horizonte",
  //   d: "há 5 anos",
  // },
  // {
  //   n: "Joselito Lima Reis",
  //   s: "Excelente ! Ótimo trabalho e o que é difícil nos dias atuais , honestidade! Parabéns ao Hudson e sua equipe!!",
  //   d: "há 6 anos",
  // },
  // {
  //   n: "Washington Souza",
  //   s: "Ótima retifica qualidade e preço, procurar o Sérgio ou Samuel",
  //   d: "há 7 anos",
  // },
  // {
  //   n: "Jose Ângelo",
  //   s: "Ótima",
  //   d: "há 8 anos",
  // },
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
            Retífica de motores · Belo Horizonte
          </div>

          <div className="mt-auto grid lg:grid-cols-12 gap-10 items-end">
            <h1 className="lg:col-span-9 font-display text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tight leading-[0.95] text-balance reveal-up">
              Do diagnóstico à
              <br />
              entrega, o motor
              <br />
              nas <span className="text-accent">mãos certas</span>
            </h1>
            <div className="lg:col-span-3 space-y-6 reveal-up">
              <p className="text-background/70 leading-relaxed">
                Fazemos o processo completo: remoção, usinagem, montagem e
                instalação do motor.
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

          <div className="mt-16 border-t border-background/15 pt-8">
            <p className="text-xs uppercase tracking-[0.25em] text-background/50">
              Motores nacionais e importados · Gasolina, etanol e diesel leve
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-350 px-6 lg:px-10 py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.28em] text-accent">
              Diferenciais técnicos
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight text-balance">
              Controle em cada etapa do processo
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              Cada operação é medida e documentada, da recepção até a entrega.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border border hairline">
            {differentials.map((d) => (
              <div
                key={d.t}
                className="bg-background p-8 hover:bg-foreground hover:text-background transition-colors duration-500 group"
              >
                <div className="font-display text-xl font-semibold tracking-tight">
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
                Engenharia em cada componente do motor
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

          <p className="mt-8 max-w-2xl text-muted-foreground leading-relaxed">
            Cuidamos de cada etapa, desde a remoção do motor até a instalação
            final. Mais conveniência, mais precisão e mais confiança para você.
          </p>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border border hairline">
            {services.map((s) => (
              <div
                key={s.t}
                className="relative overflow-hidden bg-foreground text-background"
              >
                <Image
                  src={s.img}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 20vw"
                  className="absolute inset-0 object-cover z-0 opacity-40"
                />
                <div className="relative z-10 p-8 flex flex-col h-full min-h-56">
                  <div className="mt-auto">
                    <div className="font-display text-2xl font-semibold tracking-tight">
                      {s.t}
                    </div>
                    <p className="mt-3 text-sm text-background/70 leading-relaxed">
                      {s.d}
                    </p>
                  </div>
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
              Bastidores da operação
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              Estrutura interna, máquinas dedicadas e o dia a dia de uma
              retífica de motores.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-6 gap-4">
            <figure className="col-span-6 aspect-video overflow-hidden">
              <Image
                src="/home1.webp"
                alt="Vista interna da SS Retífica"
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
                O que dizem nossos clientes
              </h2>
            </div>
            <div className="flex items-center gap-2 text-2xl text-accent">
              ★★★★★
              <span className="text-sm text-muted-foreground ml-2">
                Google Reviews · Belo Horizonte
              </span>
            </div>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r) => (
              <article
                key={r.n}
                className="bg-background p-8 border hairline flex flex-col"
              >
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 grid place-items-center rounded-full bg-foreground text-background font-display font-semibold text-sm">
                    {r.n
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <div className="font-display font-semibold">{r.n}</div>
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
      </section>

      <section className="relative bg-foreground text-background overflow-hidden">
        <div className="mx-auto max-w-350 px-6 lg:px-10 py-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.28em] text-accent">
              Próximo passo
            </div>
            <h2 className="mt-5 font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95] text-balance">
              Seu motor merece <span className="text-accent">excelência</span>,
              não improviso.
            </h2>
            <p className="mt-6 max-w-xl text-background/70 leading-relaxed text-lg">
              Avaliação técnica inicial sem custo. Testes mais específicos são
              feitos com autorização prévia e conforme a necessidade de cada
              serviço.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-3">
            <Link
              href="/contato"
              className="inline-flex items-center justify-between bg-accent text-accent-foreground px-8 py-5 hover:bg-background hover:text-foreground transition-colors"
            >
              <span className="font-display text-lg font-semibold">
                Solicitar orçamento
              </span>
              <span>→</span>
            </Link>
            <a
              href="https://wa.me/5531980235271"
              className="inline-flex items-center justify-between border border-background/30 px-8 py-5 hover:border-accent hover:text-accent transition-colors"
            >
              <span className="font-display text-lg font-medium">
                (31) 98023-5271
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

      <section className="border-t hairline bg-muted/20">
        <div className="relative overflow-hidden">
          <iframe
            title="Localização SS Retífica"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9185.12262179608!2d-43.93603090206885!3d-19.88524194384415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69a7048db4e27%3A0x74455e7d3ab24181!2sSS%20RET%C3%8DFICA%20DE%20MOTORES%20LTDA!5e0!3m2!1spt-BR!2sbr!4v1779324308429!5m2!1spt-BR!2sbr"
            className="h-90 md:h-130 w-full grayscale contrast-125 brightness-[0.98]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </Layout>
  );
}
