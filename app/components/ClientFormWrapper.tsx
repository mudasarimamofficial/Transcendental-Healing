"use client";

import { useState, useTransition } from "react";

export function ClientFormWrapper({ action, className, children, successMessage = "Success!" }: any) {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<any>(null);

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      try {
        const res = await action(formData);
        setResult(res);
      } catch (e) {
        setResult({ success: false, message: "An unexpected error occurred." });
      }
    });
  }

  return (
    <form action={handleSubmit} className={className}>
      {children}
      {isPending && (
        <div className="font-label-sm text-label-sm text-healing-sage mt-4 animate-pulse">
          Please wait...
        </div>
      )}
      {result && result.success && (
        <div className="font-label-sm text-label-sm text-healing-sage mt-4 bg-healing-sage/10 p-3 rounded">
          {result.message || successMessage}
        </div>
      )}
      {result && !result.success && (
        <div className="font-label-sm text-label-sm text-error mt-4 bg-error/10 p-3 rounded">
          {result.message || "An error occurred"}
          {result.errors && (
            <ul className="mt-2 list-disc pl-4">
              {Object.entries(result.errors).map(([key, value]: any) => (
                <li key={key}>{value}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </form>
  );
}
