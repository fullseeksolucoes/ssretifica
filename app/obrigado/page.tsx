"use client";

import { Layout } from "@/components/site/Layout";
import { useEffect } from "react";
import Link from "next/link";
import { business } from "@/lib/data";

export default function ObrigadoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout transparentHeader>
      <section className="relative min-h-screen bg-foreground text-background overflow-hidden flex items-center">
        {/* background texture / overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/80 to-foreground/60" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,rgba(251,116,9,0.25),transparent_60%)]" />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-10 py-32 text-center">
          <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-background/60 reveal-up">
            <span className="h-px w-10 bg-accent" />
            Mensagem enviada
            <span className="h-px w-10 bg-accent" />
          </div>

          <h1 className="mt-6 font-display text-4xl md:text-6xl font-semibold leading-tight reveal-up">
            Obrigado pelo seu <span className="text-accent">contato</span>
          </h1>

          <p className="mt-6 text-background/70 max-w-2xl mx-auto leading-relaxed reveal-up">
            Recebemos sua mensagem com sucesso. Nossa equipe da SS Retífica já
            está analisando suas informações e em breve entrará em contato com
            você.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-between bg-accent text-accent-foreground px-8 h-[56px] min-w-[200px] font-display font-semibold hover:bg-background hover:text-foreground transition-colors"
            >
              Voltar ao site
              <span>→</span>
            </Link>

            <a
              href={business.whatsappLink}
              className="inline-flex items-center gap-2 px-6 h-[56px] text-sm text-background/60 hover:text-accent transition-colors"
            >
              ↗ Falar no WhatsApp
            </a>
          </div>

          {/* info box */}
          <div className="mt-16 grid md:grid-cols-3 gap-6 text-left">
            <div className="border border-background/10 p-6">
              <div className="text-accent text-xs uppercase tracking-[0.2em]">
                Retífica completa
              </div>
              <p className="mt-3 text-sm text-background/70">
                Motores nacionais e importados com processo completo de
                recuperação.
              </p>
            </div>

            <div className="border border-background/10 p-6">
              <div className="text-accent text-xs uppercase tracking-[0.2em]">
                Atendimento técnico
              </div>
              <p className="mt-3 text-sm text-background/70">
                Diagnóstico preciso para identificar falhas e orientar o melhor
                serviço.
              </p>
            </div>

            <div className="border border-background/10 p-6">
              <div className="text-accent text-xs uppercase tracking-[0.2em]">
                Confiança e garantia
              </div>
              <p className="mt-3 text-sm text-background/70">
                Serviços executados com padrão técnico e garantia de qualidade.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
