"use client";

import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

export default function Contato() {
  return (
    <Layout>
      <PageHero
        eyebrow="Contato"
        title="Fale com a SS Retífica. Diagnóstico inicial sem custo."
        lead="Atendemos frotistas, oficinas parceiras e proprietários particulares de toda a região metropolitana de Belo Horizonte."
      />

      <section className="mx-auto max-w-350 px-6 lg:px-10 py-16 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-10">
          <div className="border-l-2 border-accent pl-6">
            <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              WhatsApp
            </div>
            <a
              href="https://wa.me/5531980235271"
              className="mt-2 block font-display text-2xl font-semibold hover:text-accent transition-colors"
            >
              +55 (31) 98023-5271
            </a>
          </div>

          <div className="border-l-2 border-accent pl-6">
            <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Telefones
            </div>
            <a
              href="tel:+553184995069"
              className="mt-3 block font-display text-2xl font-semibold hover:text-accent transition-colors"
            >
              +55 (31) 8499-5069
            </a>
            <a
              href="tel:+553130421747"
              className="mt-2 block font-display text-2xl font-semibold hover:text-accent transition-colors"
            >
              +55 (31) 3042-1747
            </a>
            <a
              href="tel:+553132431999"
              className="mt-2 block font-display text-2xl font-semibold hover:text-accent transition-colors"
            >
              +55 (31) 3243-1999
            </a>
          </div>

          <div className="border-l-2 border-accent pl-6">
            <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Endereço
            </div>
            <a
              href="https://maps.app.goo.gl/1W4UGAd8ZtY2Goiu5"
              className="mt-2 block font-display text-2xl font-semibold hover:text-accent transition-colors"
            >
              Rua João de Deus Matos, 197 - Ipiranga, Belo Horizonte - MG,
              31160-080
            </a>
          </div>

          <div className="bg-foreground text-background p-8">
            <div className="text-xs uppercase tracking-[0.28em] text-accent">
              Horário de operação
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex justify-between border-b border-background/10 pb-3">
                <span>Segunda a Sexta</span>
                <span className="font-display">08h00 — 17h45</span>
              </li>
              <li className="flex justify-between">
                <span>Sábados, Domingos &amp; Feriados</span>
                <span className="font-display text-background/40">Fechado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="aspect-4/5 lg:aspect-auto lg:h-full relative overflow-hidden border hairline">
            <iframe
              title="Localização SS Retífica"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9185.12262179608!2d-43.93603090206885!3d-19.88524194384415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69a7048db4e27%3A0x74455e7d3ab24181!2sSS%20RET%C3%8DFICA%20DE%20MOTORES%20LTDA!5e0!3m2!1spt-BR!2sbr!4v1779324308429!5m2!1spt-BR!2sbr"
              className="absolute inset-0 h-full w-full grayscale contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
