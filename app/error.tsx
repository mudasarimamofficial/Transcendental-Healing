"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8 text-center animate-fade-in">
      <span className="material-symbols-outlined text-error text-6xl mb-6" style={{ fontVariationSettings: "'wght' 300" }}>error</span>
      <h1 className="font-headline-lg text-primary text-4xl mb-4">A Disruption in Flow</h1>
      <p className="font-body-lg text-secondary max-w-lg mx-auto mb-8">
        We encountered an unexpected energetic barrier. Please allow us to reset the connection.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="bg-primary text-on-primary font-label-lg px-8 py-3 rounded-full hover:bg-ether-indigo-light transition-colors shadow-lg"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="bg-surface-container border border-secondary-fixed text-primary font-label-lg px-8 py-3 rounded-full hover:bg-surface-variant transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
