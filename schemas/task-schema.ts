import { z } from "zod";

export const taskSchema = z.object({
  title: z.string().min(2, "Você precisa nomear sua tarefa.").max(20, "Você não pode exceder 20 caracteres."),
});
