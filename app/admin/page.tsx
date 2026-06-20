import { createClient } from "@/lib/supabase/server";

export default async function AdminOverview() {
  const supabase = await createClient();

  // Fetch some quick stats
  const { count: bookingCount } = await supabase.from('bookings').select('*', { count: 'exact', head: true });
  const { count: messageCount } = await supabase.from('contact_messages').select('*', { count: 'exact', head: true });
  const { count: newsletterCount } = await supabase.from('newsletter').select('*', { count: 'exact', head: true });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-headline-lg text-primary text-3xl mb-2">Welcome Back</h1>
        <p className="text-secondary">Here is what is happening with your sanctuary today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-secondary-fixed p-6 rounded-2xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary-fixed/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">event</span>
            </div>
            <h3 className="font-label-lg text-primary">Total Bookings</h3>
          </div>
          <p className="font-headline-lg text-4xl text-primary">{bookingCount || 0}</p>
        </div>

        <div className="bg-surface-container-lowest border border-secondary-fixed p-6 rounded-2xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-healing-sage/20 flex items-center justify-center text-healing-sage">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <h3 className="font-label-lg text-primary">Unread Messages</h3>
          </div>
          <p className="font-headline-lg text-4xl text-primary">{messageCount || 0}</p>
        </div>

        <div className="bg-surface-container-lowest border border-secondary-fixed p-6 rounded-2xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-tertiary-fixed-dim/20 flex items-center justify-center text-tertiary-fixed-dim">
              <span className="material-symbols-outlined">group</span>
            </div>
            <h3 className="font-label-lg text-primary">Newsletter Subs</h3>
          </div>
          <p className="font-headline-lg text-4xl text-primary">{newsletterCount || 0}</p>
        </div>
      </div>
    </div>
  );
}
