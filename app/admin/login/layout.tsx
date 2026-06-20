import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
      redirect('/admin');
    }
  } catch (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-surface font-body-md text-on-surface p-8">
        <div className="max-w-md w-full bg-error-container text-on-error-container p-6 rounded-2xl shadow-lg">
          <h2 className="font-headline-md mb-2">Supabase Configuration Error</h2>
          <p>Please ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are correctly set in Vercel.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
