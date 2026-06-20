export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      bookings: {
        Row: { id: string; created_at: string; service_type: string; booking_date: string; name: string; email: string; phone: string | null; notes: string | null; status: 'pending' | 'confirmed' | 'cancelled'; }
        Insert: { id?: string; created_at?: string; service_type: string; booking_date: string; name: string; email: string; phone?: string | null; notes?: string | null; status?: 'pending' | 'confirmed' | 'cancelled'; }
        Update: { id?: string; created_at?: string; service_type?: string; booking_date?: string; name?: string; email?: string; phone?: string | null; notes?: string | null; status?: 'pending' | 'confirmed' | 'cancelled'; }
      }
      contact_messages: {
        Row: { id: string; created_at: string; name: string; email: string; message: string; }
        Insert: { id?: string; created_at?: string; name: string; email: string; message: string; }
        Update: { id?: string; created_at?: string; name?: string; email?: string; message?: string; }
      }
      newsletter: {
        Row: { id: string; created_at: string; email: string; }
        Insert: { id?: string; created_at?: string; email: string; }
        Update: { id?: string; created_at?: string; email?: string; }
      }
      podcasts: {
        Row: { id: string; created_at: string; title: string; description: string; cover_url: string | null; }
        Insert: { id?: string; created_at?: string; title: string; description: string; cover_url?: string | null; }
        Update: { id?: string; created_at?: string; title?: string; description?: string; cover_url?: string | null; }
      }
      episodes: {
        Row: { id: string; created_at: string; podcast_id: string; title: string; description: string; audio_url: string; duration: string; published_at: string; }
        Insert: { id?: string; created_at?: string; podcast_id: string; title: string; description: string; audio_url: string; duration: string; published_at: string; }
        Update: { id?: string; created_at?: string; podcast_id?: string; title?: string; description?: string; audio_url?: string; duration?: string; published_at?: string; }
      }
      services: {
        Row: { id: string; created_at: string; slug: string; title: string; description: string; price: string; duration: string; content: string; is_active: boolean; }
        Insert: { id?: string; created_at?: string; slug: string; title: string; description: string; price: string; duration: string; content: string; is_active?: boolean; }
        Update: { id?: string; created_at?: string; slug?: string; title?: string; description?: string; price?: string; duration?: string; content?: string; is_active?: boolean; }
      }
      blog: {
        Row: { id: string; created_at: string; slug: string; title: string; excerpt: string; content: string; author_id: string; category_id: string; published_at: string; image_url: string | null; }
        Insert: { id?: string; created_at?: string; slug: string; title: string; excerpt: string; content: string; author_id: string; category_id: string; published_at: string; image_url?: string | null; }
        Update: { id?: string; created_at?: string; slug?: string; title?: string; excerpt?: string; content?: string; author_id?: string; category_id?: string; published_at?: string; image_url?: string | null; }
      }
      categories: {
        Row: { id: string; created_at: string; slug: string; name: string; }
        Insert: { id?: string; created_at?: string; slug: string; name: string; }
        Update: { id?: string; created_at?: string; slug?: string; name?: string; }
      }
      testimonials: {
        Row: { id: string; created_at: string; name: string; role: string | null; content: string; rating: number; is_featured: boolean; }
        Insert: { id?: string; created_at?: string; name: string; role?: string | null; content: string; rating?: number; is_featured?: boolean; }
        Update: { id?: string; created_at?: string; name?: string; role?: string | null; content?: string; rating?: number; is_featured?: boolean; }
      }
      sponsors: {
        Row: { id: string; created_at: string; name: string; website_url: string | null; logo_url: string | null; is_active: boolean; }
        Insert: { id?: string; created_at?: string; name: string; website_url?: string | null; logo_url?: string | null; is_active?: boolean; }
        Update: { id?: string; created_at?: string; name?: string; website_url?: string | null; logo_url?: string | null; is_active?: boolean; }
      }
      settings: {
        Row: { id: string; created_at: string; site_name: string; contact_email: string; phone: string | null; address: string | null; social_links: Json | null; }
        Insert: { id?: string; created_at?: string; site_name: string; contact_email: string; phone?: string | null; address?: string | null; social_links?: Json | null; }
        Update: { id?: string; created_at?: string; site_name?: string; contact_email?: string; phone?: string | null; address?: string | null; social_links?: Json | null; }
      }
      profiles: {
        Row: { id: string; created_at: string; email: string; full_name: string | null; avatar_url: string | null; role: 'admin' | 'editor'; }
        Insert: { id?: string; created_at?: string; email: string; full_name?: string | null; avatar_url?: string | null; role?: 'admin' | 'editor'; }
        Update: { id?: string; created_at?: string; email?: string; full_name?: string | null; avatar_url?: string | null; role?: 'admin' | 'editor'; }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
