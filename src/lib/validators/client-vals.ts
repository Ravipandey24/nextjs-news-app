import { z } from "zod";

export const SignUpSchema = z
  .object({
    username: z.string().min(3).max(20),
    password: z.string().min(3).max(20),
    confirmPassword: z.string().min(3).max(20),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});
export const SignInSchema = z
  .object({
    username: z.string().min(3).max(20),
    password: z.string().min(3).max(20),
})

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
export type SignInSchemaType = z.infer<typeof SignInSchema>;
