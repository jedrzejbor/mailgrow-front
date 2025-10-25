import { z } from "zod";

export const signInSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
})

export const signUpSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(1, "Password must be 8 characters"),
  name: z.string().min(4, "Name must be at least 3 characters"),
  confirmPassword: z.string().min(8, "Password must be 8 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords not match",
});