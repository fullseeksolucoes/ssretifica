import { NextResponse } from "next/server";
import { Resend } from "resend";
import { buildWorkWithUsEmailHtml } from "@/lib/email-template";

const toEmail = process.env.RESEND_TO_EMAIL || "retificass@yahoo.com";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("RESEND_API_KEY não configurada");
  }
  return new Resend(key);
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const honeypot = form.get("honeypot") as string | null;
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    const name = (form.get("name") as string) || "";
    const email = (form.get("email") as string) || "";
    const phone = (form.get("phone") as string) || "";
    const area = (form.get("area") as string) || "";
    const file = form.get("file") as File | null;

    if (!name || !email || !phone || !area) {
      return NextResponse.json(
        { success: false, message: "Campos obrigatórios não preenchidos" },
        { status: 400 },
      );
    }

    const attachments: { filename: string; content: string }[] = [];

    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer.toString("base64"),
      });
    }

    await getResend().emails.send({
      from: "SS Retífica <naoresponder@ssretifica.com.br>",
      to: [toEmail],
      replyTo: email,
      subject: "Novo contato pelo site - SS Retífica",
      attachments: attachments.length > 0 ? attachments : undefined,
      html: buildWorkWithUsEmailHtml({
        name,
        email,
        phone,
        area,
        fileName: file && file.size > 0 ? file.name : undefined,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Erro ao enviar candidatura";
    console.error("Erro no envio de candidatura:", error);
    return NextResponse.json({ success: false, message }, { status: 400 });
  }
}
