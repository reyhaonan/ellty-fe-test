import { z } from "zod";

export const replySchema = z.object({
  operation: z.enum(["add", "sub", "mul", "div"], {
    error: "Please select an operation.",
  }),
  operand: z.coerce.number().min(1, "Operand cannot be zero."),
});

export type ReplyFormInput = z.infer<typeof replySchema>;
