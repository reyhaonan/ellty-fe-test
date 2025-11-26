import { z } from "zod";

export const threadSchema = z.object({
  startingNumber: z.coerce.number().min(1, "Operand cannot be zero."),
});

export type ThreadFormInput = z.infer<typeof threadSchema>;
