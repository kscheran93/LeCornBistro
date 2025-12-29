import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// We don't need real tables for this "no backend" simulation, 
// but we define schemas here for Zod validation on the frontend.

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  enquiryType: z.enum(["General", "Event Booking", "Franchise", "Feedback"]),
});

export const franchiseFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  city: z.string().min(2, "City is required"),
  budgetRange: z.string().min(1, "Budget range is required"),
  experience: z.string().min(10, "Please describe your experience"),
  message: z.string().optional(),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
export type FranchiseForm = z.infer<typeof franchiseFormSchema>;
