import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SS Retífica – Retífica e Engenharia de Motores | Belo Horizonte",
    short_name: "SS Retífica",
    description:
      "Retífica de motores e usinagem de precisão em Belo Horizonte. Cabeçotes, virabrequins, blocos e montagem técnica.",
    start_url: "/",
    display: "minimal-ui",
    background_color: "#faf9f7",
    theme_color: "#FB7409",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
