"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Layout } from "@/components/site/Layout";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { areas, business } from "@/lib/data";
import { maskPhone, fieldClass } from "@/lib/utils";

export default function TrabalheConosco() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    area: "",
    honeypot: "",
  });
  const [fileName, setFileName] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const update = (field: string, value: string) =>
    setForm((prev) => ({
      ...prev,
      [field]: field === "telefone" ? maskPhone(value) : value,
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const fd = new FormData();
      fd.append("name", form.nome);
      fd.append("email", form.email);
      fd.append("phone", form.telefone);
      fd.append("area", form.area);
      fd.append("honeypot", form.honeypot);
      if (fileRef.current?.files?.[0]) {
        fd.append("file", fileRef.current.files[0]);
      }

      const res = await fetch("/api/work-with-us", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();

      if (data.success) {
        router.push("/obrigado");
        return;
      }
    } catch {
      // fallback: open WhatsApp
      const text = [
        "*Candidatura - Trabalhe Conosco*",
        `Nome: ${form.nome}`,
        `Telefone: ${form.telefone}`,
        `E-mail: ${form.email}`,
        `Área de interesse: ${form.area}`,
      ]
        .filter(Boolean)
        .join("\n");
      window.open(
        `https://wa.me/5531980235271?text=${encodeURIComponent(text)}`,
        "_blank",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout transparentHeader>
      <section className="relative min-h-screen bg-foreground text-background overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-linear-to-t from-foreground via-foreground/80 to-foreground/60" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,rgba(251,116,9,0.25),transparent_60%)]" />

        <div className="relative mx-auto max-w-350 px-6 lg:px-10 py-32 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-background/60 reveal-up">
                <span className="h-px w-10 bg-accent" />
                Trabalhe Conosco
              </div>
              <h1 className="mt-6 font-display text-4xl md:text-6xl font-semibold leading-tight text-balance reveal-up">
                Faça parte da equipe{" "}
                <span className="text-accent">SS Retífica</span>
              </h1>
              <p className="mt-6 text-background/70 leading-relaxed max-w-md reveal-up">
                Profissionais de mecânica, usinagem e montagem. Ambiente técnico
                estruturado, processos organizados e foco em qualidade.
              </p>
            </div>

            <div className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text"
                    name="honeypot"
                    value={form.honeypot}
                    onChange={(e) => update("honeypot", e.target.value)}
                    className="absolute -left-[9999px]"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  <div className="grid sm:grid-cols-2 gap-5">
                  <Input
                    type="text"
                    required
                    value={form.nome}
                    onChange={(e) => update("nome", e.target.value)}
                    placeholder="Nome"
                    className={fieldClass}
                  />
                  <Input
                    type="tel"
                    required
                    value={form.telefone}
                    onChange={(e) => update("telefone", e.target.value)}
                    placeholder="Telefone / WhatsApp"
                    className={fieldClass}
                  />
                  <Input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="E-mail"
                    className={fieldClass}
                  />
                  <Select
                    value={form.area}
                    onValueChange={(v) => v && update("area", v)}
                  >
                    <SelectTrigger
                      className={`${fieldClass} data-[placeholder]:text-background/30`}
                    >
                      <SelectValue placeholder="Área de interesse" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none border-border bg-background text-foreground">
                      {areas.map((a) => (
                        <SelectItem key={a} value={a}>
                          {a}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <div className="relative">
                    <input
                      ref={fileRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) =>
                        setFileName(e.target.files?.[0]?.name || "")
                      }
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div
                      className={`${fieldClass} flex items-center justify-between text-background/50`}
                    >
                      <span>{fileName || "Nenhum arquivo selecionado"}</span>
                      <span className="text-accent text-xs uppercase tracking-[0.15em]">
                        Selecionar
                      </span>
                    </div>
                  </div>
                  <p className="mt-1.5 text-xs text-background/30">
                    PDF ou DOC. Anexe seu currículo.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Button
                    type="submit"
                    className="w-full sm:w-auto bg-accent text-accent-foreground px-8 py-5 text-base hover:bg-background hover:text-foreground rounded-none border-none h-auto cursor-pointer"
                  >
                    <span className="font-display text-lg font-semibold">
                      {submitting ? "Enviando..." : "Enviar candidatura"}
                    </span>
                    <span className="ml-2">{submitting ? "" : "→"}</span>
                  </Button>
                  <a
      href={business.whatsappLinkSimple}
      className="inline-flex items-center gap-2 text-sm text-background/60 hover:text-accent transition-colors"
                  >
                    <span className="text-lg">↗</span>
                    Fale direto no WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
