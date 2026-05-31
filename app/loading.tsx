import SkeletonCard from "@/components/SkeletonCard";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#09090b]">
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr]">
        {/* Sidebar skeleton */}
        <aside className="hidden md:flex flex-col gap-2 bg-zinc-900 border-r border-zinc-800 p-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-11 rounded-xl bg-zinc-800 animate-pulse"
            />
          ))}
        </aside>

        {/* Main content skeleton */}
        <main className="p-6 pb-24 md:pb-6">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* Hero tile skeleton — spans 2 cols */}
            <div className="col-span-1 md:col-span-2 h-40 rounded-3xl bg-zinc-900 border border-zinc-800/50 animate-pulse p-6 flex flex-col gap-3">
              <div className="h-6 w-2/3 rounded bg-zinc-800" />
              <div className="h-4 w-1/3 rounded bg-zinc-800" />
            </div>

            {/* Activity tile skeleton */}
            <div className="col-span-1 md:col-span-2 h-40 rounded-3xl bg-zinc-900 border border-zinc-800/50 animate-pulse p-6 flex flex-col gap-3">
              <div className="h-4 w-1/4 rounded bg-zinc-800" />
              <div className="mt-auto flex items-end gap-2 h-20">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded bg-zinc-800"
                    style={{ height: `${40 + i * 8}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Course card skeletons */}
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
