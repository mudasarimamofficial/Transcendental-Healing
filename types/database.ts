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
        Row: {
          id: string
          created_at: string
          service_type: string
          booking_date: string
          name: string
          email: string
          phone: string | null
          notes: string | null
          status: 'pending' | 'confirmed' | 'cancelled'
        }
        Insert: {
          id?: string
          created_at?: string
          service_type: string
          booking_date: string
          name: string
          email: string
          phone?: string | null
          notes?: string | null
          status?: 'pending' | 'confirmed' | 'cancelled'
        }
        Update: {
          id?: string
          created_at?: string
          service_type?: string
          booking_date?: string
          name?: string
          email?: string
          phone?: string | null
          notes?: string | null
          status?: 'pending' | 'confirmed' | 'cancelled'
        }
      }
      contact_messages: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          message: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          message: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          message?: string
        }
      }
      newsletter: {
        Row: {
          id: string
          created_at: string
          email: string
        }
        Insert: {
          id?: string
          created_at?: string
          email: string
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
        }
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
