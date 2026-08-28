import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone required"),
  service: z.string().min(1, "Service required"),
  message: z.string().min(10, "Message required"),
  website: z.string().max(0).optional(),
});

export const quoteSchema = z.object({
  service: z.string().min(1),
  department: z.string().min(1),
  description: z.string().min(10),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  urgency: z.enum(["normal", "urgent", "emergency"]).optional(),
  website: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type QuoteFormData = z.infer<typeof quoteSchema>;
