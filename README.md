# Ethereal Sanctum - Transcendental Healing

This is a production-ready Next.js 15 application designed for the "Ethereal Sanctum" project. It features an integrated Supabase backend for secure authentication, dynamic CMS architecture, and forms.

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure Environment:**
   Copy `.env.example` to `.env.local` and fill in your Supabase credentials.
   ```bash
   cp .env.example .env.local
   ```

3. **Run Development Server:**
   ```bash
   npm run dev
   ```

## Database Setup (Supabase)

To enable the dynamic CMS and secure forms, you must initialize your Supabase database with the schema defined in `types/database.ts`.

1. Create a new Supabase project.
2. Obtain your `Project URL` and `anon key` and place them in `.env.local`.
3. Create the required tables via the Supabase SQL Editor:
   - `bookings`
   - `newsletter`
   - `contact_messages`
   - `services`, `blog`, `podcasts` (See `types/database.ts` for full schemas)

## Vercel Deployment

This project is optimized for deployment on Vercel. 
Simply import the GitHub repository into your Vercel account, and ensure you add the `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` as Environment Variables in the Vercel dashboard.

## Windows Local Build Note
If you are building locally on Windows and encounter `Cannot find native binding` or `Application Control policy` errors relating to `@tailwindcss/oxide` or `@next/swc`, this is a local OS security constraint blocking the native Rust binaries used by Next.js and Tailwind v4. The Vercel deployment (which runs on Linux) will bypass this constraint seamlessly.
