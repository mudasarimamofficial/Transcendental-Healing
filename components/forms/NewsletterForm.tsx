"use client";

import { useActionState } from "react";
import { submitNewsletter } from "@/app/actions/forms";

export default function NewsletterForm() {
  const [state, formAction, isPending] = useActionState(submitNewsletter, null);

  return (
    <form action={formAction} className="space-y-3">
      <label className="sr-only" htmlFor="footer-email">
        Email address
      </label>
      <input
        className="w-full bg-background border border-secondary-container rounded-md px-4 py-2 font-body-md text-body-md focus:outline-none focus:border-healing-sage focus:ring-1 focus:ring-healing-sage placeholder-outline transition-colors disabled:opacity-50"
        id="footer-email"
        name="email"
        placeholder="Email address"
        type="email"
        required
        disabled={isPending || state?.success}
      />
      <button
        className="w-full bg-primary text-surface-cream font-label-lg text-label-lg py-2 rounded-md hover:bg-ether-indigo-light transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        type="submit"
        disabled={isPending || state?.success}
      >
        {isPending ? "Subscribing..." : state?.success ? "Subscribed!" : "Newsletter Signup"}
      </button>
      {state && !state.success && (
        <p className="text-sm text-error mt-2 font-body-md">{state.message}</p>
      )}
      {state && state.success && (
        <p className="text-sm text-healing-sage mt-2 font-body-md">{state.message}</p>
      )}
    </form>
  );
}
