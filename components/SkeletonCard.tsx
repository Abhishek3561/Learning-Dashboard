export default function SkeletonCard() {
  return (
    <article className="rounded-3xl border border-zinc-800/50 bg-zinc-900 animate-pulse p-6 flex flex-col gap-3 h-44">
      <div className="h-8 w-8 rounded-lg bg-zinc-800" />

      <div className="h-4 w-3/4 rounded bg-zinc-800" />
      <div className="h-3 w-1/2 rounded bg-zinc-800" />

      <div className="mt-auto h-2 w-full rounded-full bg-zinc-800" />

      <div className="h-3 w-1/4 rounded bg-zinc-800" />
    </article>
  );
}
