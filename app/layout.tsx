import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "SS Retífica — Retífica e Engenharia de Motores | Belo Horizonte",
  description:
    "Retífica de motores de alta precisão em Belo Horizonte. Engenharia automotiva, usinagem de cabeçotes, retífica de virabrequins e montagem técnica.",
  authors: [{ name: "SS Retífica" }],
  openGraph: {
    title: "SS Retífica — Engenharia de Motores",
    description:
      "Retífica e engenharia de motores em Belo Horizonte. Precisão industrial, tradição e desempenho.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
