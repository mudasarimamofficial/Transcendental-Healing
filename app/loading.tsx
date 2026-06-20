export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      {/* Subtle Breathing Animation */}
      <div className="relative w-24 h-24 flex items-center justify-center mb-8">
        <div className="absolute w-full h-full bg-healing-sage/20 rounded-full animate-ping opacity-75"></div>
        <div className="relative w-12 h-12 bg-healing-sage rounded-full flex items-center justify-center">
          <span className="material-symbols-outlined text-surface-cream animate-pulse" style={{ fontVariationSettings: "'wght' 300" }}>self_improvement</span>
        </div>
      </div>
      <p className="font-label-lg text-primary tracking-widest uppercase animate-pulse">Holding Space...</p>
    </div>
  );
}
