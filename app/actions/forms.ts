"use server";

import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  service_type: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function submitContactForm(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  
  const result = contactSchema.safeParse(data);
  
  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
      message: "Please fix the errors below.",
    };
  }

  const supabase = await createClient();
  
  const { error } = await supabase.from("contact_messages").insert([{
      name: result.data.name,
      email: result.data.email,
      service: result.data.service_type || null,
      message: result.data.message,
    }] as any);

  if (error) {
    return {
      success: false,
      message: "Failed to submit message. Please try again later.",
    };
  }

  return {
    success: true,
    message: "Thank you. Your message has been received.",
  };
}

const bookingSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  service_type: z.string().optional(),
  booking_date: z.string().optional(),
  notes: z.string().optional(),
});

export async function submitBookingForm(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  
  const result = bookingSchema.safeParse(data);
  
  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
      message: "Please check your inputs.",
    };
  }

  const supabase = await createClient();
  
  const { error } = await supabase.from("bookings").insert([{
      name: result.data.name,
      email: result.data.email,
      phone: result.data.phone || null,
      service_type: result.data.service_type,
      booking_date: result.data.booking_date,
      notes: result.data.notes || null,
    }] as any);

  if (error) {
    return {
      success: false,
      message: "Failed to request booking. Please try again later.",
    };
  }

  return {
    success: true,
    message: "Booking requested successfully. We will contact you shortly to confirm.",
  };
}

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function submitNewsletter(formData: FormData) {
  const email = formData.get("email");
  
  const result = newsletterSchema.safeParse({ email });
  
  if (!result.success) {
    return {
      success: false,
      message: "Invalid email address.",
    };
  }

  const supabase = await createClient();
  
  // Using upsert or ignoring duplicates usually requires unique constraint in DB
  const { error } = await supabase.from("newsletter_subscribers").insert([{
      email: result.data.email,
    }] as any);

  if (error) {
    if (error.code === '23505') { // Postgres unique violation code
      return { success: true, message: "You are already subscribed." };
    }
    return {
      success: false,
      message: "Failed to subscribe. Please try again.",
    };
  }

  return {
    success: true,
    message: "Successfully subscribed to the newsletter.",
  };
}
