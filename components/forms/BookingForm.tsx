"use client";

import { useActionState, useState } from "react";
import { submitBookingForm } from "@/app/actions/forms";

export default function BookingForm() {
  const [state, formAction, isPending] = useActionState(submitBookingForm, null);
  const [step, setStep] = useState(1);

  if (state?.success) {
    return (
      <div className="glass-panel rounded-[24px] p-6 md:p-12 shadow-[0_8px_40px_rgba(3,7,28,0.03)] text-center animate-fade-in">
        <span className="material-symbols-outlined text-tertiary-fixed-dim text-6xl mb-6" style={{ fontVariationSettings: "'wght' 300" }}>auto_awesome</span>
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Journey Initiated</h2>
        <p className="font-body-lg text-body-lg text-secondary max-w-lg mx-auto">{state.message}</p>
      </div>
    );
  }

  return (
    <div className="glass-panel rounded-[24px] p-6 md:p-12 shadow-[0_8px_40px_rgba(3,7,28,0.03)] relative overflow-hidden">
      <form action={formAction}>
        {/* Step 1 */}
        <div className={`step-transition transition-opacity duration-500 ${step === 1 ? 'opacity-100' : 'hidden'}`}>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8 text-center">Select Your Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Option A */}
            <label className="cursor-pointer group relative h-full">
              <input className="peer sr-only" name="service_type" type="radio" value="clinical" required />
              <div className="h-full rounded-xl border border-secondary-container bg-surface-container-lowest p-6 transition-all duration-300 peer-checked:border-tertiary-fixed-dim peer-checked:bg-surface-cream peer-checked:shadow-[0_4px_24px_rgba(233,193,118,0.15)] group-hover:border-outline-variant flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-4 text-primary group-hover:text-healing-sage transition-colors peer-checked:text-tertiary-fixed-dim">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 300" }}>medical_services</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">Clinical Recovery</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-3">Structured, evidence-based approaches integrated with holistic practices.</p>
                </div>
              </div>
            </label>
            {/* Option B */}
            <label className="cursor-pointer group relative h-full">
              <input className="peer sr-only" name="service_type" type="radio" value="sacred" defaultChecked />
              <div className="h-full rounded-xl border border-secondary-container bg-surface-container-lowest p-6 transition-all duration-300 peer-checked:border-tertiary-fixed-dim peer-checked:bg-surface-cream peer-checked:shadow-[0_4px_24px_rgba(233,193,118,0.15)] group-hover:border-outline-variant flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-tertiary-fixed-dim"></div>
                <div>
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-4 text-primary group-hover:text-healing-sage transition-colors peer-checked:text-tertiary-fixed-dim">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 300" }}>self_improvement</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">Sacred Healing</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-3">Ayurvedic practices, reflexology, and breathwork to restore balance.</p>
                </div>
              </div>
            </label>
            {/* Option C */}
            <label className="cursor-pointer group relative h-full">
              <input className="peer sr-only" name="service_type" type="radio" value="spiritual" />
              <div className="h-full rounded-xl border border-secondary-container bg-surface-container-lowest p-6 transition-all duration-300 peer-checked:border-tertiary-fixed-dim peer-checked:bg-surface-cream peer-checked:shadow-[0_4px_24px_rgba(233,193,118,0.15)] group-hover:border-outline-variant flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-4 text-primary group-hover:text-healing-sage transition-colors peer-checked:text-tertiary-fixed-dim">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 300" }}>auto_awesome</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">Spiritual Guidance</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-3">Tarot, intuitive readings, and profound energetic alignment.</p>
                </div>
              </div>
            </label>
          </div>
          <div className="mt-12 flex justify-end">
            <button 
              onClick={(e) => { e.preventDefault(); setStep(2); }}
              className="bg-primary text-on-primary font-label-lg text-label-lg px-8 py-4 rounded-full hover:bg-ether-indigo-light transition-colors duration-300 shadow-[0_4px_30px_rgba(3,7,28,0.08)] flex items-center gap-2" 
              type="button"
            >
              Continue <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Step 2: Details & Submit */}
        <div className={`step-transition transition-opacity duration-500 ${step === 2 ? 'opacity-100 animate-fade-in' : 'hidden'}`}>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8 text-center">Your Details</h2>
          <div className="max-w-xl mx-auto space-y-8 bg-surface-container-lowest border border-secondary-fixed p-8 rounded-2xl">
            {/* Name */}
            <div className="relative">
              <input className="floating-input peer block w-full appearance-none border-0 border-b border-secondary-fixed bg-transparent px-0 py-3 text-on-surface focus:border-healing-sage focus:outline-none transition-colors disabled:opacity-50" id="name" name="name" placeholder=" " required type="text" disabled={isPending} />
              <label className="floating-label absolute top-3 left-0 -z-10 origin-[0] text-secondary transition-all duration-300" htmlFor="name">Preferred Name</label>
              {state?.errors?.name && <p className="text-sm text-error mt-1">{state.errors.name[0]}</p>}
            </div>
            {/* Email */}
            <div className="relative">
              <input className="floating-input peer block w-full appearance-none border-0 border-b border-secondary-fixed bg-transparent px-0 py-3 text-on-surface focus:border-healing-sage focus:outline-none transition-colors disabled:opacity-50" id="email" name="email" placeholder=" " required type="email" disabled={isPending} />
              <label className="floating-label absolute top-3 left-0 -z-10 origin-[0] text-secondary transition-all duration-300" htmlFor="email">Email Address</label>
              {state?.errors?.email && <p className="text-sm text-error mt-1">{state.errors.email[0]}</p>}
            </div>
            {/* Date */}
            <div className="relative">
              <input className="floating-input peer block w-full appearance-none border-0 border-b border-secondary-fixed bg-transparent px-0 py-3 text-on-surface focus:border-healing-sage focus:outline-none transition-colors disabled:opacity-50" id="booking_date" name="booking_date" placeholder=" " required type="date" disabled={isPending} />
              <label className="floating-label absolute -top-4 left-0 -z-10 origin-[0] text-secondary text-sm transition-all duration-300" htmlFor="booking_date">Preferred Date</label>
              {state?.errors?.booking_date && <p className="text-sm text-error mt-1">{state.errors.booking_date[0]}</p>}
            </div>
            {/* Notes */}
            <div className="relative">
              <textarea className="floating-input peer block w-full appearance-none border-0 border-b border-secondary-fixed bg-transparent px-0 py-3 text-on-surface focus:border-healing-sage focus:outline-none transition-colors resize-none disabled:opacity-50" id="notes" name="notes" placeholder=" " rows={3} disabled={isPending}></textarea>
              <label className="floating-label absolute top-3 left-0 -z-10 origin-[0] text-secondary transition-all duration-300" htmlFor="notes">Additional Intentions (Optional)</label>
            </div>
            
            {state?.message && !state.success && (
              <p className="text-sm text-error">{state.message}</p>
            )}

            <div className="pt-4 flex justify-between">
              <button 
                onClick={(e) => { e.preventDefault(); setStep(1); }}
                className="text-secondary hover:text-primary transition-colors font-label-lg"
                type="button"
                disabled={isPending}
              >
                Back
              </button>
              <button 
                className="inline-flex items-center justify-center px-10 py-4 bg-tertiary-fixed-dim text-tertiary rounded-full hover:bg-tertiary-fixed transition-colors duration-300 font-label-lg tracking-wide disabled:opacity-50" 
                type="submit"
                disabled={isPending}
              >
                {isPending ? "Confirming..." : "Confirm Booking"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
