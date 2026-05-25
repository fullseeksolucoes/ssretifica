import { business, knowsAbout, serviceTypes } from "@/lib/data";

const areaServed = [
  { "@type": "City", name: "Belo Horizonte" },
  { "@type": "AdministrativeArea", name: "Região Metropolitana de Belo Horizonte" },
];

const faqEntities = [
  {
    "@type": "Question",
    name: "Qual o prazo médio de uma retífica completa?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Entre 8 e 14 dias úteis, dependendo da complexidade do motor e da disponibilidade de peças originais. Motores importados podem demandar prazo adicional.",
    },
  },
  {
    "@type": "Question",
    name: "Vocês atendem motores diesel?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Sim. Atuamos com motores diesel leve, incluindo Mercedes-Benz, Cummins, MWM e marcas comerciais leves.",
    },
  },
  {
    "@type": "Question",
    name: "Existe garantia técnica?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Toda retífica acompanha garantia formal de 3 meses (90 dias) com suporte pós-entrega dedicado.",
    },
  },
  {
    "@type": "Question",
    name: "Posso acompanhar o serviço?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Sim. Disponibilizamos fotografias de cada etapa e recebemos visitas técnicas agendadas.",
    },
  },
  {
    "@type": "Question",
    name: "Trabalham com motores de alta performance?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Sim. Possuímos linha dedicada a motores preparados, incluindo retífica de bloco com sobremedida, comando alto e ajustes para combustíveis alternativos.",
    },
  },
  {
    "@type": "Question",
    name: "O diagnóstico técnico é gratuito?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A avaliação técnica preliminar, que inclui inspeção visual e análise auditiva, é realizada sem custo. Procedimentos diagnósticos específicos, como teste de pressão de óleo, compressão diferencial, fluxo e avaliação em bancada, são cobrados conforme a complexidade do serviço.",
    },
  },
];

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${business.url}/#business`,
        additionalType: "https://schema.org/AutomotiveBusiness",
        name: business.name,
        description: business.description,
        url: business.url,
        telephone: business.telephone,
        logo: business.logo,
        image: business.image,
        sameAs: [business.whatsappLinkSimple, business.instagramUrl],
        priceRange: "R$",
        areaServed,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua João de Deus Matos, 197",
          addressLocality: "Belo Horizonte",
          addressRegion: "MG",
          postalCode: "31160-080",
          addressCountry: "BR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: business.geo.latitude,
          longitude: business.geo.longitude,
        },
        knowsAbout,
      },
      {
        "@type": "Organization",
        "@id": `${business.url}/#organization`,
        name: business.name,
        url: business.url,
        logo: business.logo,
        image: business.image,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: business.telephone,
          contactType: "customer support",
          availableLanguage: ["Portuguese"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${business.url}/#website`,
        name: business.name,
        url: business.url,
        inLanguage: "pt-BR",
        publisher: { "@id": `${business.url}/#organization` },
      },
      {
        "@type": "Service",
        "@id": `${business.url}/#service`,
        name: "Retífica e Usinagem de Motores",
        description:
          "Serviços de retífica de motores nacionais e importados. Remoção, usinagem de cabeçotes, retífica de virabrequins, montagem e instalação final.",
        provider: { "@id": `${business.url}/#business` },
        category: "Retífica de Motores",
        areaServed,
        serviceType: serviceTypes,
      },
      {
        "@type": "FAQPage",
        "@id": `${business.url}/#faq`,
        mainEntity: faqEntities,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
