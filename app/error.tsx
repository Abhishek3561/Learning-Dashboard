"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (

    <main className="h-screen flex items-center justify-center bg-[#09090b]">
      <section
        role="alert"
        aria-live="assertive"
        className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-red-500/20 bg-red-500/5 shadow-[0_0_30px_rgba(239,68,68,0.08)]"
      >
        <div
          className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center"
          aria-hidden="true"
        >
          <span className="text-red-400 text-2xl">⚠</span>
        </div>

        <h2 className="text-xl font-semibold text-red-400">
          Failed to load dashboard
        </h2>

        <p className="text-sm text-zinc-500 text-center max-w-xs">
          {error.message || "Something went wrong. Please try again."}
        </p>

        <button
          onClick={reset}
          className="mt-2 px-6 py-2 rounded-lg bg-zinc-800 text-zinc-200 text-sm font-medium border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-700 transition-colors duration-200"
        >
          Try Again
        </button>
      </section>

    </main>
  );
}