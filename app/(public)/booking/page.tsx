import Link from "next/link";
import { submitNewsletter } from "@/app/actions/forms";
import { ClientFormWrapper } from "@/app/components/ClientFormWrapper";

export default function Page() {
  return (
    <div className="bg-background text-on-background antialiased min-h-screen flex flex-col font-body-md selection:bg-tertiary-fixed-dim selection:text-tertiary">
<div>
  {/* TopNavBar from Shared Components (Suppressed Active State as this is a booking/transactional flow) */}
  <header className="bg-surface-cream/80 backdrop-blur-md fixed top-0 w-full z-50 bg-surface-cream/90 border-b border-secondary-container/30">
    <nav className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto md:px-margin-desktop px-margin-mobile">
      <div className="font-headline-md text-headline-md font-medium tracking-tight text-primary">
        Transcendental Healing
      </div>
      {/* Hidden on mobile, flex on desktop */}
      <ul className="hidden md:flex items-center gap-8">
        <li><a className="font-label-lg text-label-lg text-on-secondary-container hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage" href="/index.html">Home</a></li>
        <li><a className="font-label-lg text-label-lg text-on-secondary-container hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage" href="/about.html">About</a></li>
        <li><a className="font-label-lg text-label-lg text-on-secondary-container hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage" href="/services/addiction-recovery.html">Services</a></li>
        <li><a className="font-label-lg text-label-lg text-on-secondary-container hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage" href="/continuing-education.html">Education</a></li>
        <li><a className="font-label-lg text-label-lg text-on-secondary-container hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage" href="/podcast/index.html">Podcast</a></li>
        <li><a className="font-label-lg text-label-lg text-on-secondary-container hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage" href="/blog/index.html">Resources</a></li>
      </ul>
      <button className="hidden md:flex items-center justify-center bg-primary text-on-primary font-label-lg text-label-lg px-8 py-3 rounded-full hover:bg-ether-indigo-light transition-colors duration-300 shadow-[0_4px_30px_rgba(3,7,28,0.08)]">
        Book a Session
      </button>
      {/* Mobile Menu Icon */}
      <button className="md:hidden text-primary p-2">
        <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 0'}}>menu</span>
      </button>
    </nav>
  </header>
  {/* Main Booking Canvas */}
  <main className="flex-grow pt-[120px] pb-32 px-margin-mobile md:px-margin-desktop relative">
    {/* Decorative Ambient Background Elements */}
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-surface-container-low blur-[120px] opacity-70" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-primary-fixed/20 blur-[150px] opacity-60" />
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
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-secondary-container -z-10" />
          {/* Progress Line Active */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/4 h-[2px] bg-tertiary-fixed-dim -z-10 transition-all duration-500 ease-out" id="progress-bar" />
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
      <div className="glass-panel rounded-[24px] p-6 md:p-12 shadow-[0_8px_40px_rgba(3,7,28,0.03)] relative overflow-hidden">
        {/* Step 1: Service Selection (Visible by default) */}
        <div className="step-transition opacity-100 translate-y-0" id="step-1">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8 text-center">Select Your Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Option A */}
            <label className="cursor-pointer group relative h-full">
              <input className="peer sr-only" name="service" type="radio" defaultValue="clinical" />
              <div className="h-full rounded-xl border border-secondary-container bg-surface-container-lowest p-6 transition-all duration-300 peer-checked:border-tertiary-fixed-dim peer-checked:bg-surface-cream peer-checked:shadow-[0_4px_24px_rgba(233,193,118,0.15)] group-hover:border-outline-variant flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-4 text-primary group-hover:text-healing-sage transition-colors peer-checked:text-tertiary-fixed-dim">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: '"wght" 300'}}>medical_services</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">Clinical Recovery</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-3">Structured, evidence-based approaches integrated with holistic practices for sustainable healing.</p>
                </div>
                <div className="mt-6 flex justify-between items-center border-t border-secondary-container pt-4">
                  <span className="font-label-lg text-label-lg text-primary">From $150</span>
                  <div className="w-5 h-5 rounded-full border border-outline flex items-center justify-center peer-checked:border-tertiary-fixed-dim peer-checked:bg-tertiary-fixed-dim transition-colors">
                    <div className="w-2.5 h-2.5 rounded-full bg-surface-container-lowest opacity-0 peer-checked:opacity-100" />
                  </div>
                </div>
              </div>
            </label>
            {/* Option B */}
            <label className="cursor-pointer group relative h-full">
              <input defaultChecked className="peer sr-only" name="service" type="radio" defaultValue="sacred" />
              <div className="h-full rounded-xl border border-secondary-container bg-surface-container-lowest p-6 transition-all duration-300 peer-checked:border-tertiary-fixed-dim peer-checked:bg-surface-cream peer-checked:shadow-[0_4px_24px_rgba(233,193,118,0.15)] group-hover:border-outline-variant flex flex-col justify-between relative overflow-hidden">
                {/* Subtle accent top bar for recommended */}
                <div className="absolute top-0 left-0 w-full h-1 bg-tertiary-fixed-dim" />
                <div>
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-4 text-primary group-hover:text-healing-sage transition-colors peer-checked:text-tertiary-fixed-dim">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: '"wght" 300'}}>self_improvement</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">Sacred Healing</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-3">Ayurvedic practices, reflexology, and breathwork to restore physical and energetic balance.</p>
                </div>
                <div className="mt-6 flex justify-between items-center border-t border-secondary-container pt-4">
                  <span className="font-label-lg text-label-lg text-primary">From $120</span>
                  <div className="w-5 h-5 rounded-full border border-tertiary-fixed-dim bg-tertiary-fixed-dim flex items-center justify-center transition-colors">
                    <div className="w-2.5 h-2.5 rounded-full bg-surface-container-lowest opacity-100" />
                  </div>
                </div>
              </div>
            </label>
            {/* Option C */}
            <label className="cursor-pointer group relative h-full">
              <input className="peer sr-only" name="service" type="radio" defaultValue="spiritual" />
              <div className="h-full rounded-xl border border-secondary-container bg-surface-container-lowest p-6 transition-all duration-300 peer-checked:border-tertiary-fixed-dim peer-checked:bg-surface-cream peer-checked:shadow-[0_4px_24px_rgba(233,193,118,0.15)] group-hover:border-outline-variant flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-4 text-primary group-hover:text-healing-sage transition-colors peer-checked:text-tertiary-fixed-dim">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: '"wght" 300'}}>auto_awesome</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">Spiritual Guidance</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-3">Tarot, intuitive readings, and profound energetic alignment for inner clarity.</p>
                </div>
                <div className="mt-6 flex justify-between items-center border-t border-secondary-container pt-4">
                  <span className="font-label-lg text-label-lg text-primary">From $90</span>
                  <div className="w-5 h-5 rounded-full border border-outline flex items-center justify-center peer-checked:border-tertiary-fixed-dim peer-checked:bg-tertiary-fixed-dim transition-colors">
                    <div className="w-2.5 h-2.5 rounded-full bg-surface-container-lowest opacity-0 peer-checked:opacity-100" />
                  </div>
                </div>
              </div>
            </label>
          </div>
          {/* Navigation Action */}
          <div className="mt-12 flex justify-end">
            <button className="bg-primary text-on-primary font-label-lg text-label-lg px-8 py-4 rounded-full hover:bg-ether-indigo-light transition-colors duration-300 shadow-[0_4px_30px_rgba(3,7,28,0.08)] flex items-center gap-2" type="button">
              Continue <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
  {/* Footer from Shared Components */}
  <footer className="bg-surface w-full pt-20 pb-10 bg-surface-cream border-t border-secondary-container">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="md:col-span-1 mb-8 md:mb-0">
        <div className="font-headline-lg text-headline-lg text-primary mb-4">
          Transcendental Healing
        </div>
        <p className="font-body-md text-body-md text-secondary">A sanctuary for profound recovery and spiritual awakening.</p>
      </div>
      <div className="md:col-span-2 grid grid-cols-2 gap-8">
        <div>
          <h4 className="font-label-lg text-label-lg text-primary mb-4 font-semibold">Services</h4>
          <ul className="space-y-3">
            <li><a className="font-body-md text-body-md text-secondary hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage block" href="/services/addiction-recovery.html">Addiction Recovery</a></li>
            <li><a className="font-body-md text-body-md text-secondary hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage block" href="/services/ayurveda.html">Ayurvedic Healing</a></li>
            <li><a className="font-body-md text-body-md text-secondary hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage block" href="/services/reflexology.html">Reflexology</a></li>
            <li><a className="font-body-md text-body-md text-secondary hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage block" href="/services/yoga.html">Yoga &amp; Breathwork</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-lg text-label-lg text-primary mb-4 font-semibold">Connect</h4>
          <ul className="space-y-3">
            <li><a className="font-body-md text-body-md text-secondary hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage block" href="/services/tarot.html">Tarot</a></li>
            <li><a className="font-body-md text-body-md text-secondary hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage block" href="/continuing-education.html">Professional Training</a></li>
            <li><a className="font-body-md text-body-md text-secondary hover:text-healing-sage transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-healing-sage block" href="#">Newsletter Signup</a></li>
          </ul>
        </div>
      </div>
      <div className="md:col-span-1 mt-8 md:mt-0 flex flex-col justify-end">
        <p className="font-body-md text-body-md text-secondary text-sm">© 2024 Transcendental Healing. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</div>

    </div>
  );
}
