import { createClient } from "@/lib/supabase/server";

export default async function AdminBookings() {
  const supabase = await createClient();
  const { data: bookings } = await supabase.from('bookings').select('*').order('created_at', { ascending: false });

  return (
    <div className="p-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="font-headline-lg text-primary text-3xl mb-2">Bookings</h1>
          <p className="text-secondary">Manage your client sessions.</p>
        </div>
      </div>

      <div className="bg-surface-container-lowest border border-secondary-fixed rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-surface-container border-b border-secondary-fixed text-primary font-label-lg">
            <tr>
              <th className="p-4">Date Requested</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Service</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-secondary-fixed">
            {bookings?.map((booking) => (
              <tr key={booking.id} className="hover:bg-surface-variant/50 transition-colors">
                <td className="p-4 text-secondary">{new Date(booking.created_at).toLocaleDateString()}</td>
                <td className="p-4 font-medium text-primary">{booking.name}</td>
                <td className="p-4 text-secondary">{booking.email}</td>
                <td className="p-4 text-secondary capitalize">{booking.service_type}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    booking.status === 'pending' ? 'bg-tertiary-fixed-dim/20 text-tertiary-fixed-dim' : 
                    'bg-healing-sage/20 text-healing-sage'
                  }`}>
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
            {(!bookings || bookings.length === 0) && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-secondary">No bookings found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
