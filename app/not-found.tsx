import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8 text-center animate-fade-in">
      {/* Subtle Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tertiary-fixed-dim/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      
      <span className="material-symbols-outlined text-healing-sage text-6xl mb-6" style={{ fontVariationSettings: "'wght' 300" }}>explore_off</span>
      <h1 className="font-headline-lg text-primary text-4xl mb-4">Path Not Found</h1>
      <p className="font-body-lg text-secondary max-w-lg mx-auto mb-8">
        The sanctuary space you are looking for has been moved or no longer exists. Let us guide you back to the center.
      </p>
      <Link
        href="/"
        className="bg-primary text-on-primary font-label-lg px-8 py-4 rounded-full hover:bg-ether-indigo-light transition-colors shadow-lg flex items-center gap-2"
      >
        <span className="material-symbols-outlined text-sm">home</span>
        Return to the Sanctuary
      </Link>
    </div>
  );
}
