export const nav = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "A Empresa" },
  { to: "/servicos", label: "Serviços" },
  { to: "/contato", label: "Contato" },
  { to: "/trabalhe-conosco", label: "Trabalhe Conosco" },
];

export const business = {
  name: "SS Retífica",
  shortDescription:
    "Especializada em retífica, remoção, montagem e instalação de motores. Responsabilidade técnica em cada serviço que entregamos.",
  phones: ["(31) 98499-5069", "(31) 3042-1747", "(31) 3243-1999"],
  phonesRaw: ["+5531984995069", "+553130421747", "+553132431999"],
  whatsapp: "(31) 98023-5271",
  whatsappLinkSimple: "https://wa.me/5531980235271",
  whatsappLink:
    "https://wa.me/5531980235271?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20SS%20Ret%C3%ADfica",
  whatsappLinkTrabalheConosco: "https://wa.me/5531980235271",
  email: "retificass@yahoo.com",
  address:
    "Rua João de Deus Matos, 197 - Ipiranga, Belo Horizonte - MG, 31160-080",
  mapsUrl: "https://maps.app.goo.gl/1W4UGAd8ZtY2Goiu5",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9185.12262179608!2d-43.93603090206885!3d-19.88524194384415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69a7048db4e27%3A0x74455e7d3ab24181!2sSS%20RET%C3%8DFICA%20DE%20MOTORES%20LTDA!5e0!3m2!1spt-BR!2sbr!4v1779324308429!5m2!1spt-BR!2sbr",
  hours: "Seg–Sex · 08h00 às 17h48",
  hoursDetailed: {
    weekdays: "08h00 às 17h48",
    weekends: "Fechado",
  },
  cnpj: "37.280.196/0001-25",
  instagram: "@retificass",
  instagramUrl: "https://instagram.com/retificass",
  telephone: "+553130421747",
  url: "https://www.ssretifica.com.br",
  logo: "https://www.ssretifica.com.br/logo.webp",
  image: "https://www.ssretifica.com.br/hero-engine.jpg",
  description:
    "Retífica de motores e usinagem de precisão em Belo Horizonte. Remoção, montagem e instalação de motores nacionais e importados.",
  geo: {
    latitude: "-19.88524194384415",
    longitude: "-43.93603090206885",
  },
};

export const differentials = [
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

export const servicesSummary = [
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

export const services = [
  {
    code: "S.01",
    t: "Retífica completa de motores",
    d: "Reconstrução completa de motores nacionais e importados. Substituição de peças críticas e controle dimensional em todas as etapas.",
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
    d: "Serviço completo em cabeçotes: retífica de plano, troca de sedes e guias, teste hidráulico de trincas e ajuste de câmara de combustão.",
    items: [
      "Retífica de plano",
      "Alojamento de válvulas",
      "Teste de estanqueidade",
    ],
  },
  {
    code: "S.03",
    t: "Retífica de virabrequins",
    d: "Mancalização personalizada, polimento de moentes e balanceamento dinâmico em bancada calibrada.",
    items: [
      "Polimento de moentes",
      "Mancalização sob medida",
      "Balanceamento dinâmico",
    ],
  },
  {
    code: "S.04",
    t: "Remoção e instalação de motores",
    d: "Removemos o motor, preparamos o compartimento e reinstalamos tudo no veículo com os ajustes necessários.",
    items: [
      "Remoção assistida do motor",
      "Preparação do cofre do motor",
      "Reinstalação e alinhamento",
      "Teste de funcionamento no veículo",
    ],
  },
  {
    code: "S.05",
    t: "Diagnóstico técnico",
    d: "A avaliação preliminar é sem custo. Testes específicos como compressão ou pressão de óleo são feitos quando necessário e com autorização prévia.",
    items: [
      "Avaliação técnica inicial",
      "Compressão diferencial",
      "Teste de pressão de óleo",
      "Leak-down test",
      "Inspeção de óleo lubrificante",
    ],
  },
  {
    code: "S.06",
    t: "Montagem especializada de motores",
    d: "Montamos o motor com componentes usinados, controle dimensional rigoroso e ajuste de folgas dentro das especificações do fabricante.",
    items: [
      "Montagem do bloco e cabeçote",
      "Aferição de folgas e torques",
      "Pré-lubrificação forçada",
      "Verificação de vedação e estanqueidade",
    ],
  },
  {
    code: "S.07",
    t: "Teste e dinamômetro",
    d: "Verificamos pressão de óleo, vazão, ruído e temperatura. A rodagem inicial é controlada em bancada de prova.",
    items: [
      "Pressão e vazão de óleo",
      "Rodagem assistida",
      "Laudo técnico final",
    ],
  },
];

export const process = [
  {
    n: "01",
    t: "Diagnóstico e recepção",
    d: "Recepção do veículo, inspeção visual, avaliação técnica preliminar e definição do escopo do serviço.",
  },
  {
    n: "02",
    t: "Remoção do motor",
    d: "Remoção assistida do motor, catalogação de componentes e preparação para usinagem.",
  },
  {
    n: "03",
    t: "Usinagem",
    d: "Processos de usinagem dedicados para cabeçote, bloco, virabrequim e bielas, tudo dentro de tolerâncias rigorosas.",
  },
  {
    n: "04",
    t: "Montagem especializada",
    d: "Montagem completa do motor com componentes usinados, torque controlado e folgas verificadas.",
  },
  {
    n: "05",
    t: "Instalação e teste",
    d: "Reinstalação no veículo, teste dinâmico, verificação de pressão e vazão e laudo técnico final.",
  },
];

export const faqs: [string, string][] = [
  [
    "Qual o prazo médio de uma retífica completa?",
    "Entre 8 e 14 dias úteis, dependendo da complexidade do motor e da disponibilidade de peças originais. Motores importados podem demandar prazo adicional para importação de componentes específicos.",
  ],
  [
    "Vocês atendem motores diesel?",
    "Sim. Atuamos com motores diesel leve, incluindo Mercedes-Benz, Cummins, MWM e marcas comerciais leves.",
  ],
  [
    "Existe garantia técnica?",
    "Toda retífica acompanha garantia formal de 3 meses (90 dias) com suporte pós-entrega dedicado.",
  ],
  [
    "Posso acompanhar o serviço?",
    "Sim. Disponibilizamos fotografias de cada etapa e recebemos visitas técnicas agendadas. Transparência integral é parte do protocolo.",
  ],
  [
    "Trabalham com motores de alta performance?",
    "Sim. Temos linha dedicada a motores preparados, como retífica de bloco com sobremedida, comando alto e ajustes para combustíveis alternativos.",
  ],
  [
    "O diagnóstico técnico é gratuito?",
    "A avaliação técnica preliminar, que inclui inspeção visual e análise auditiva, é feita sem custo. Testes mais específicos como pressão de óleo, compressão diferencial e avaliação em bancada são cobrados conforme a complexidade do serviço. Consulte nossa equipe para mais informações.",
  ],
];

export const reviews = [
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
];

export const values = [
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

export const areas = [
  "Mecânica de motores",
  "Usinagem",
  "Montagem de motores",
  "Apoio técnico",
];

export const structureItems: [string, string][] = [
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
];

export const knowsAbout = [
  "Retífica de motores",
  "Usinagem de cabeçotes",
  "Retífica de virabrequins",
  "Recondicionamento de bielas",
  "Montagem especializada de motores",
  "Remoção e instalação de motores",
  "Diagnóstico técnico automotivo",
  "Teste de pressão de óleo",
  "Compressão diferencial",
  "Balanceamento dinâmico",
];

export const serviceTypes = [
  "Retífica completa de motores",
  "Usinagem de cabeçotes",
  "Retífica de virabrequins",
  "Recondicionamento de bielas",
  "Remoção e instalação de motores",
  "Montagem especializada de motores",
  "Diagnóstico técnico",
  "Teste dinâmico",
  "Balanceamento dinâmico",
];
