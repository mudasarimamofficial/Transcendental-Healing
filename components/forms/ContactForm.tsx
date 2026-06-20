"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/actions/forms";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null);

  if (state?.success) {
    return (
      <div className="bg-surface-cream border border-healing-sage/50 p-8 rounded-2xl text-center">
        <span className="material-symbols-outlined text-healing-sage text-4xl mb-4" style={{ fontVariationSettings: "'wght' 300" }}>check_circle</span>
        <h3 className="font-headline-md text-headline-md text-primary mb-2">Message Received</h3>
        <p className="font-body-md text-body-md text-secondary">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-8">
      {/* Name Input */}
      <div className="relative">
        <input 
          className="floating-input peer block w-full appearance-none border-0 border-b border-secondary-fixed bg-transparent px-0 py-3 text-on-surface focus:border-healing-sage focus:outline-none focus:ring-0 transition-colors disabled:opacity-50" 
          id="name" 
          name="name"
          placeholder=" " 
          required 
          type="text"
          disabled={isPending}
        />
        <label className="floating-label absolute top-3 left-0 -z-10 origin-[0] text-secondary transition-all duration-300" htmlFor="name">Preferred Name</label>
        {state?.errors?.name && <p className="text-sm text-error mt-1">{state.errors.name[0]}</p>}
      </div>
      
      {/* Email Input */}
      <div className="relative">
        <input 
          className="floating-input peer block w-full appearance-none border-0 border-b border-secondary-fixed bg-transparent px-0 py-3 text-on-surface focus:border-healing-sage focus:outline-none focus:ring-0 transition-colors disabled:opacity-50" 
          id="email" 
          name="email"
          placeholder=" " 
          required 
          type="email"
          disabled={isPending}
        />
        <label className="floating-label absolute top-3 left-0 -z-10 origin-[0] text-secondary transition-all duration-300" htmlFor="email">Email Address</label>
        {state?.errors?.email && <p className="text-sm text-error mt-1">{state.errors.email[0]}</p>}
      </div>

      {/* Service Type Dropdown */}
      <div className="relative border-b border-secondary-fixed pb-2">
        <label className="block text-label-sm font-label-sm text-secondary mb-1" htmlFor="service_type">Area of Interest</label>
        <select 
          className="block w-full appearance-none border-0 bg-transparent px-0 py-2 text-on-surface focus:ring-0 focus:outline-none cursor-pointer disabled:opacity-50" 
          id="service_type" 
          name="service_type"
          defaultValue=""
          disabled={isPending}
        >
          <option disabled value="">Select an avenue of healing...</option>
          <option value="addiction">Addiction Recovery Support</option>
          <option value="ayurveda">Ayurvedic Healing</option>
          <option value="yoga">Yoga &amp; Breathwork</option>
          <option value="general">General Consultation</option>
        </select>
        <span className="material-symbols-outlined absolute right-0 bottom-3 text-secondary pointer-events-none" style={{ fontVariationSettings: "'wght' 300" }}>expand_more</span>
      </div>
      
      {/* Message Input */}
      <div className="relative pt-4">
        <textarea 
          className="floating-input peer block w-full appearance-none border-0 border-b border-secondary-fixed bg-transparent px-0 py-3 text-on-surface focus:border-healing-sage focus:outline-none focus:ring-0 transition-colors resize-none disabled:opacity-50" 
          id="message" 
          name="message"
          placeholder=" " 
          rows={4}
          required
          disabled={isPending}
        ></textarea>
        <label className="floating-label absolute top-7 left-0 -z-10 origin-[0] text-secondary transition-all duration-300" htmlFor="message">Your Intention or Inquiry</label>
        {state?.errors?.message && <p className="text-sm text-error mt-1">{state.errors.message[0]}</p>}
      </div>
      
      {state?.message && !state.success && (
        <p className="text-sm text-error">{state.message}</p>
      )}

      <div className="pt-4">
        <button 
          className="inline-flex w-full sm:w-auto items-center justify-center px-10 py-4 bg-primary text-on-primary rounded-full hover:bg-ether-indigo-light transition-colors duration-300 font-label-lg text-label-lg tracking-wide disabled:opacity-50" 
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Submit Request"}
        </button>
      </div>
    </form>
  );
}
