import Link from "next/link";
import BookingForm from "@/components/forms/BookingForm";

export default function Page() {
  return (
    <>
      
 Decorative Ambient Background Elements 
<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-surface-container-low blur-[120px] opacity-70"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-primary-fixed/20 blur-[150px] opacity-60"></div>
</div>
<div className="max-w-[800px] mx-auto w-full relative z-10">
{/* Header Section */}
<div className="text-center mb-16 space-y-4">
<span className="inline-block px-4 py-1.5 rounded-full bg-healing-sage/10 text-healing-sage font-label-sm text-label-sm uppercase tracking-widest">Booking</span>
<h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary">Begin Your Transformation</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Please select your preferred path to healing. We honor your journey and hold this space for your restorative practice.</p>
</div>
{/* Progress Tracker */}
<div className="mb-16">
<div className="flex justify-between items-center relative">
{/* Progress Line Background */}
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-secondary-container -z-10"></div>
{/* Progress Line Active */}
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/4 h-[2px] bg-tertiary-fixed-dim -z-10 transition-all duration-500 ease-out" id="progress-bar"></div>
{/* Step Indicators */}
<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-tertiary-fixed-dim text-tertiary flex items-center justify-center font-label-lg text-label-lg shadow-[0_0_20px_rgba(233,193,118,0.3)]">1</div>
<span className="font-label-sm text-label-sm text-on-surface-variant hidden md:block">Path</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-surface-cream border border-secondary-fixed-dim text-surface-tint flex items-center justify-center font-label-lg text-label-lg transition-colors">2</div>
<span className="font-label-sm text-label-sm text-surface-tint hidden md:block">Format</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-surface-cream border border-secondary-fixed-dim text-surface-tint flex items-center justify-center font-label-lg text-label-lg transition-colors">3</div>
<span className="font-label-sm text-label-sm text-surface-tint hidden md:block">Time</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-surface-cream border border-secondary-fixed-dim text-surface-tint flex items-center justify-center font-label-lg text-label-lg transition-colors">4</div>
<span className="font-label-sm text-label-sm text-surface-tint hidden md:block">Details</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-surface-cream border border-secondary-fixed-dim text-surface-tint flex items-center justify-center font-label-lg text-label-lg transition-colors">5</div>
<span className="font-label-sm text-label-sm text-surface-tint hidden md:block">Confirm</span>
</div>
</div>
</div>
{/* Booking Container (Bento/Glassmorphism hybrid) */}
<BookingForm />
</div>

    </>
  );
}
