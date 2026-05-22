"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { FaClock, FaMapMarkedAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";

const nav = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "A Empresa" },
  { to: "/servicos", label: "Serviços" },
  { to: "/contato", label: "Contato" },
];

export function Header({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  const solid = !transparent || scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-background/90 backdrop-blur-md border-b hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-350 px-6 lg:px-10 h-32 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <Image
            src="/logo.webp"
            alt="SS Retífica"
            width={140}
            height={40}
            className="h-28 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                href={n.to}
                className={`px-4 py-2 text-sm tracking-wide transition-colors relative ${
                  active
                    ? solid
                      ? "text-foreground"
                      : "text-background"
                    : solid
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-background/70 hover:text-background"
                }`}
              >
                {n.label}
                {active && (
                  <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contato"
            className={`group hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-colors ${
              solid
                ? "bg-foreground text-background hover:bg-accent hover:text-accent-foreground"
                : "bg-accent text-accent-foreground hover:bg-background hover:text-foreground"
            }`}
          >
            Orçamento
            <span
              className={`h-1.5 w-1.5 rounded-full transition-colors group-hover:bg-foreground ${
                solid ? "bg-accent" : "bg-accent-foreground"
              }`}
            />
          </Link>

          <button
            className={`md:hidden p-2 transition-colors ${
              solid ? "text-foreground" : "text-background"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div ref={menuRef} className="md:hidden">
          <div className="mx-auto max-w-350 px-6 pb-6 pt-2 bg-background/95 backdrop-blur-md">
            <nav className="flex flex-col gap-1">
              {nav.map((n) => {
                const active = pathname === n.to;
                return (
                  <Link
                    key={n.to}
                    href={n.to}
                    onClick={() => setMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium tracking-wide transition-colors ${
                      active
                        ? "bg-accent/10 text-accent"
                        : "text-foreground/70 hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {n.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 pt-4 border-t border-background/10">
              <Link
                href="/contato"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-lg bg-accent text-accent-foreground px-5 py-3 text-sm font-medium transition-colors hover:bg-background hover:text-foreground"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-32">
      <div className="mx-auto max-w-350 px-6 lg:px-10 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.webp"
                alt="SS Retífica"
                width={160}
                height={48}
                className="h-32 w-auto object-contain"
              />
            </div>
            <p className="mt-6 max-w-md text-background/60 leading-relaxed text-sm">
              Retífica e recondicionamento de motores com responsabilidade
              técnica. Tradição, qualidade e compromisso em cada serviço
              entregue.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.22em] text-background/40 mb-5">
              Navegação
            </div>
            <ul className="space-y-3 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link
                    href={n.to}
                    className="text-background/80 hover:text-accent transition-colors"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.22em] text-background/40 mb-5">
              Contato
            </div>
            <ul className="space-y-3 text-sm text-background/80">
              <li>
                <a
                  href="https://maps.app.goo.gl/1W4UGAd8ZtY2Goiu5"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-2 group"
                >
                  <FaMapMarkedAlt className="mt-0.5 text-accent group-hover:text-accent/80 transition-colors shrink-0" />
                  <span className="group-hover:text-accent transition-colors">
                    Rua João de Deus Matos, 197 - Ipiranga, Belo Horizonte - MG,
                    31160-080
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5531998124400"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 group"
                >
                  <IoLogoWhatsapp className="text-accent group-hover:text-accent/80 transition-colors shrink-0" />
                  <span className="group-hover:text-accent transition-colors">
                    WhatsApp · +55 (31) 99812-4400
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+553130421747"
                  className="flex items-center gap-2 group"
                >
                  <BsTelephoneFill className="text-accent group-hover:text-accent/80 transition-colors shrink-0" />
                  <span className="group-hover:text-accent transition-colors">
                    Telefone · +55 (31) 3042-1747
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/50">
                <FaClock className="text-accent shrink-0" />
                <span>Seg–Sex · 08h00 às 17h45</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-background/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-background/40">
          <div className="leading-relaxed">
            © {new Date().getFullYear()} Ss Retifica Recondicionadora de Motores
            Ltda · CNPJ 37.280.196/0001-25
          </div>
          <span className="flex items-center gap-1.5 text-background/30 hover:text-background/60 transition-colors">
            <span>Desenvolvido por</span>
            <a
              href="https://www.fullseek.com.br/"
              target="_blank"
              rel="noreferrer"
              aria-label="Desenvolvido por FullSeek - agência de tecnologia"
              className="font-medium text-background/60 hover:text-accent transition-colors"
            >
              FullSeek
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export function Layout({
  children,
  transparentHeader = false,
}: {
  children: React.ReactNode;
  transparentHeader?: boolean;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header transparent={transparentHeader} />
      <main className="flex-1">{children}</main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
