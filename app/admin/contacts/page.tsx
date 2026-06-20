import { createClient } from "@/lib/supabase/server";

export default async function AdminContacts() {
  const supabase = await createClient();
  const { data: messages } = await supabase.from('contact_messages').select('*').order('created_at', { ascending: false });

  return (
    <div className="p-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="font-headline-lg text-primary text-3xl mb-2">Messages</h1>
          <p className="text-secondary">Client inquiries and contact form submissions.</p>
        </div>
      </div>

      <div className="bg-surface-container-lowest border border-secondary-fixed rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-surface-container border-b border-secondary-fixed text-primary font-label-lg">
            <tr>
              <th className="p-4">Date</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Message</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-secondary-fixed">
            {messages?.map((msg) => (
              <tr key={msg.id} className="hover:bg-surface-variant/50 transition-colors">
                <td className="p-4 text-secondary whitespace-nowrap">{new Date(msg.created_at).toLocaleDateString()}</td>
                <td className="p-4 font-medium text-primary whitespace-nowrap">{msg.name}</td>
                <td className="p-4 text-secondary whitespace-nowrap">{msg.email}</td>
                <td className="p-4 text-secondary max-w-md truncate">{msg.message}</td>
              </tr>
            ))}
            {(!messages || messages.length === 0) && (
              <tr>
                <td colSpan={4} className="p-8 text-center text-secondary">No messages found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
