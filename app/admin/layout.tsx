import Link from "next/link";
import { logoutAction } from "@/app/actions/auth";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-surface font-body-md text-on-surface">
      {/* Sidebar */}
      <aside className="w-64 bg-surface-container-lowest border-r border-secondary-fixed flex flex-col">
        <div className="p-6 border-b border-secondary-fixed">
          <h2 className="font-headline-md text-primary tracking-tight">Sanctum Admin</h2>
        </div>
        <nav className="flex-1 p-4 flex flex-col gap-2">
          <Link href="/admin" className="px-4 py-2 rounded-md hover:bg-surface-variant transition-colors text-secondary hover:text-primary">
            Overview
          </Link>
          <Link href="/admin/bookings" className="px-4 py-2 rounded-md hover:bg-surface-variant transition-colors text-secondary hover:text-primary">
            Bookings
          </Link>
          <Link href="/admin/contacts" className="px-4 py-2 rounded-md hover:bg-surface-variant transition-colors text-secondary hover:text-primary">
            Messages
          </Link>
          <Link href="/admin/newsletter" className="px-4 py-2 rounded-md hover:bg-surface-variant transition-colors text-secondary hover:text-primary">
            Newsletter
          </Link>
          <div className="my-2 border-t border-secondary-fixed/50"></div>
          <Link href="/admin/services" className="px-4 py-2 rounded-md hover:bg-surface-variant transition-colors text-secondary hover:text-primary">
            CMS: Services
          </Link>
          <Link href="/admin/podcast" className="px-4 py-2 rounded-md hover:bg-surface-variant transition-colors text-secondary hover:text-primary">
            CMS: Podcast
          </Link>
          <Link href="/admin/blog" className="px-4 py-2 rounded-md hover:bg-surface-variant transition-colors text-secondary hover:text-primary">
            CMS: Blog
          </Link>
          <Link href="/admin/settings" className="px-4 py-2 rounded-md hover:bg-surface-variant transition-colors text-secondary hover:text-primary">
            Settings
          </Link>
        </nav>
        <div className="p-4 border-t border-secondary-fixed">
          <form action={logoutAction}>
            <button type="submit" className="w-full px-4 py-2 text-left rounded-md hover:bg-error-container hover:text-on-error-container transition-colors text-error flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">logout</span>
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
