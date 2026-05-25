import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/site/StructuredData";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = "https://www.ssretifica.com.br";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FB7409",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SS Retífica | Retífica de Motores em Belo Horizonte",
    template: "%s | SS Retífica",
  },
  description:
    "Retífica de motores em Belo Horizonte. Remoção, usinagem, montagem e instalação de motores nacionais e importados. Gasolina, etanol e diesel leve.",
  keywords: [
    "retífica em Belo Horizonte",
    "retífica de motores BH",
    "usinagem de cabeçotes",
    "retífica de virabrequins",
    "recondicionamento de bielas",
    "montagem de motores",
    "retífica de motores diesel",
    "oficina de retífica BH",
    "remoção e instalação de motores",
    "montagem especializada de motores",
    "diagnóstico técnico automotivo",
    "SS Retífica",
    "retífica Ipiranga BH",
    "mecânica de motores BH",
  ],
  authors: [{ name: "SS Retífica" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "SS Retífica",
    title: "SS Retífica | Retífica de Motores em Belo Horizonte",
    description:
      "Retífica de motores e usinagem de precisão em Belo Horizonte. Remoção, montagem e instalação com responsabilidade técnica.",
    url: siteUrl,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SS Retífica - Engenharia de Motores em Belo Horizonte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SS Retífica | Retífica de Motores em Belo Horizonte",
    description:
      "Retífica de motores com usinagem de precisão, controle metrológico e garantia técnica de 3 meses em Belo Horizonte.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "automotive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn("scroll-smooth", inter.variable, spaceGrotesk.variable, "font-sans", geist.variable)}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
