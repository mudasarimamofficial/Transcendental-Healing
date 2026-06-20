"use client";

import { useActionState } from "react";
import { loginAction } from "@/app/actions/auth";

export default function AdminLogin() {
  const [state, formAction, isPending] = useActionState(loginAction, null);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 font-body-md text-on-background">
      <div className="max-w-md w-full bg-surface-container-lowest border border-secondary-fixed p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-8">
          <h1 className="font-headline-lg text-headline-lg text-primary mb-2">Sanctum Admin</h1>
          <p className="font-body-md text-secondary">Sign in to manage the portal.</p>
        </div>
        
        <form action={formAction} className="space-y-6">
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
            <label className="floating-label absolute top-3 left-0 -z-10 origin-[0] text-secondary transition-all duration-300" htmlFor="email">Admin Email</label>
          </div>

          <div className="relative">
            <input 
              className="floating-input peer block w-full appearance-none border-0 border-b border-secondary-fixed bg-transparent px-0 py-3 text-on-surface focus:border-healing-sage focus:outline-none focus:ring-0 transition-colors disabled:opacity-50" 
              id="password" 
              name="password"
              placeholder=" " 
              required 
              type="password"
              disabled={isPending}
            />
            <label className="floating-label absolute top-3 left-0 -z-10 origin-[0] text-secondary transition-all duration-300" htmlFor="password">Password</label>
          </div>

          {state?.error && (
            <p className="text-sm text-error text-center">{state.error}</p>
          )}

          <button 
            className="w-full bg-primary text-on-primary py-3 rounded-md hover:bg-ether-indigo-light transition-colors font-label-lg tracking-wide disabled:opacity-50"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "Authenticating..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
