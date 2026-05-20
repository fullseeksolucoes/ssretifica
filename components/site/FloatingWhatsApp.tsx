"use client";

import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_LINK =
  "https://wa.me/5531997279740?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20SS%20Ret%C3%ADfica";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco pelo WhatsApp - SS Retífica de Motores"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="relative flex">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/40 opacity-75" />
        <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/30 transition-transform duration-300 group-hover:scale-110">
          <FaWhatsapp className="h-6 w-6" />
        </span>
      </span>
    </a>
  );
}
