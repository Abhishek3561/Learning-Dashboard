"use client";

import { Flame } from "lucide-react";
import { motion } from "framer-motion";
import { tileVariant } from "./BentoGrid";

const USER_NAME = process.env.NEXT_PUBLIC_USER_NAME ?? "Student";

export default function HeroTile() {
  return (
    <motion.section
      variants={tileVariant}
      whileHover={{
        scale: 1.01,
        boxShadow: "0 0 30px rgba(59,130,246,0.08)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="col-span-1 md:col-span-2 relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />

      <header className="relative z-10">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, {USER_NAME}
        </h1>

        <p className="mt-1 text-sm text-zinc-400">
          Keep up the great work. You're on a roll!
        </p>
      </header>
      <aside className="mt-4 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2">
        <Flame className="h-4 w-4 text-orange-400" />
        <span className="text-sm font-medium text-orange-300">
          12 Day Streak
        </span>
      </aside>
    </motion.section>
  );
}