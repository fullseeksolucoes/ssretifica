export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.ssretifica.com.br/#business",
        additionalType: "https://schema.org/AutomotiveBusiness",
        name: "SS Retífica",
        description:
          "Retífica de motores e usinagem de precisão em Belo Horizonte. Especializada em cabeçotes, virabrequins, blocos e montagem de motores nacionais e importados.",
        url: "https://www.ssretifica.com.br",
        telephone: "+553130421747",
        logo: "https://www.ssretifica.com.br/logo.webp",
        image: "https://www.ssretifica.com.br/hero-engine.jpg",
        sameAs: ["https://wa.me/5531998124400"],
        priceRange: "R$",
        areaServed: [
          {
            "@type": "City",
            name: "Belo Horizonte",
          },
          {
            "@type": "AdministrativeArea",
            name: "Região Metropolitana de Belo Horizonte",
          },
        ],
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
          latitude: "-19.88524194384415",
          longitude: "-43.93603090206885",
        },
        knowsAbout: [
          "Retífica de motores",
          "Usinagem de cabeçotes",
          "Retífica de virabrequins",
          "Recondicionamento de bielas",
          "Montagem de motores",
          "Remoção e instalação de motores",
          "Diagnóstico técnico automotivo",
          "Balanceamento dinâmico",
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://www.ssretifica.com.br/#organization",
        name: "SS Retífica",
        url: "https://www.ssretifica.com.br",
        logo: "https://www.ssretifica.com.br/logo.webp",
        image: "https://www.ssretifica.com.br/hero-engine.jpg",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+553130421747",
          contactType: "customer support",
          availableLanguage: ["Portuguese"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.ssretifica.com.br/#website",
        name: "SS Retífica",
        url: "https://www.ssretifica.com.br",
        inLanguage: "pt-BR",
        publisher: {
          "@id": "https://www.ssretifica.com.br/#organization",
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.ssretifica.com.br/#service",
        name: "Retífica e Usinagem de Motores",
        description:
          "Serviços especializados em retífica de motores nacionais e importados, incluindo usinagem de cabeçotes, retífica de virabrequins, recondicionamento de bielas e montagem em sala limpa.",
        provider: {
          "@id": "https://www.ssretifica.com.br/#business",
        },
        category: "Retífica de Motores",
        areaServed: [
          {
            "@type": "City",
            name: "Belo Horizonte",
          },
          {
            "@type": "AdministrativeArea",
            name: "Região Metropolitana de Belo Horizonte",
          },
        ],
        serviceType: [
          "Retífica completa de motores",
          "Usinagem de cabeçotes",
          "Retífica de virabrequins",
          "Recondicionamento de bielas",
          "Montagem de precisão",
          "Diagnóstico técnico",
          "Teste dinâmico",
          "Balanceamento dinâmico",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.ssretifica.com.br/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Qual o prazo médio de uma retífica completa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Entre 8 e 14 dias úteis, dependendo da complexidade do motor e da disponibilidade de peças originais. Motores importados podem demandar prazo adicional para importação de componentes específicos.",
            },
          },
          {
            "@type": "Question",
            name: "Vocês atendem motores diesel pesado?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sim. Operamos motores Mercedes-Benz, Volvo, Scania, Cummins, MWM e Iveco — frotas urbanas, agronegócio e linha pesada.",
            },
          },
          {
            "@type": "Question",
            name: "Existe garantia técnica?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Toda retífica acompanha garantia formal de 12 meses ou 20.000 km, com cobertura sobre a operação executada e peças aplicadas.",
            },
          },
          {
            "@type": "Question",
            name: "Posso acompanhar o serviço?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sim. Disponibilizamos fotografias de cada etapa e recebemos visitas técnicas agendadas. Transparência integral é parte do protocolo.",
            },
          },
          {
            "@type": "Question",
            name: "Trabalham com motores de alta performance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sim. Possuímos linha dedicada a motores preparados — incluindo retífica de bloco com sobremedida, comando alto e ajustes para combustíveis alternativos.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
