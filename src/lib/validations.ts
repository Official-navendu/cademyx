import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: 'Full name must be at least 2 characters.' })
    .max(80, { message: 'Full name cannot exceed 80 characters.' }),
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email address is required.' })
    .email({ message: 'Please enter a valid email address.' })
    .max(100, { message: 'Email address is too long.' }),
  phone: z
    .string()
    .trim()
    .max(25, { message: 'Phone number cannot exceed 25 characters.' })
    .optional()
    .or(z.literal('')),
  inquiryType: z.enum(
    ['Program Inquiry', 'Academic Guidance', 'General Question', 'Partnership', 'Other'],
    { message: 'Please select a valid inquiry type.' }
  ),
  programSlug: z.string().optional().or(z.literal('')),
  subject: z
    .string()
    .trim()
    .max(120, { message: 'Subject cannot exceed 120 characters.' })
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Message must be at least 10 characters long.' })
    .max(2000, { message: 'Message cannot exceed 2000 characters.' }),
  consent: z.literal(true, {
    message: 'You must acknowledge the communication consent before submitting.',
  }),
  hp: z.string().optional(),
});

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;
