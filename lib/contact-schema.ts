import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  area: z.string().min(1, "Área de interesse é obrigatória"),
  message: z.string().optional(),
  fileName: z.string().optional(),
  honeypot: z.string().optional(),
});
