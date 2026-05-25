"use client";

import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { business } from "@/lib/data";

export default function Contato() {
  return (
    <Layout>
      <PageHero
        eyebrow="Contato"
        title="Fale com a SS Retífica. Avaliação inicial sem custo"
        lead="Atendemos frotistas, oficinas e proprietários particulares de toda a região metropolitana de Belo Horizonte."
      />

      <section className="mx-auto max-w-350 px-6 lg:px-10 py-16 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-10">
          <div className="border-l-2 border-accent pl-6">
            <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              WhatsApp
            </div>
            <a
              href={business.whatsappLinkSimple}
              className="mt-2 block font-display text-2xl font-semibold hover:text-accent transition-colors"
            >
              +55 {business.whatsapp}
            </a>
          </div>

          <div className="border-l-2 border-accent pl-6">
            <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Telefones
            </div>
            {business.phones.map((phone, i) => (
              <a
                key={phone}
                href={`tel:${business.phonesRaw[i]}`}
                className="mt-3 block font-display text-2xl font-semibold hover:text-accent transition-colors first:mt-3"
              >
                +55 {phone}
              </a>
            ))}
          </div>

          <div className="border-l-2 border-accent pl-6">
            <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Endereço
            </div>
            <a
              href={business.mapsUrl}
              className="mt-2 block font-display text-2xl font-semibold hover:text-accent transition-colors"
            >
              {business.address}
            </a>
          </div>

          <div className="bg-foreground text-background p-8">
            <div className="text-xs uppercase tracking-[0.28em] text-accent">
              Horário de operação
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex justify-between border-b border-background/10 pb-3">
                <span>Segunda a Sexta</span>
                <span className="font-display">{business.hoursDetailed.weekdays}</span>
              </li>
              <li className="flex justify-between">
                <span>Sábados, Domingos &amp; Feriados</span>
                <span className="font-display text-background/40">{business.hoursDetailed.weekends}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="aspect-4/5 lg:aspect-auto lg:h-full relative overflow-hidden border hairline">
            <iframe
              title="Localização SS Retífica"
              src={business.mapsEmbed}
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
