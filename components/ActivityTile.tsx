"use client";

import { motion } from "framer-motion";
import { tileVariant } from "./BentoGrid";

const bars = [30, 55, 40, 70, 50, 85, 65];
const days = ["M", "T", "W", "T", "F", "S", "S"];

export default function ActivityTile() {
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
      className="col-span-1 md:col-span-2 rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
    >
      <h3 className="mb-1 font-semibold text-zinc-200">Weekly Activity</h3>
      <p className="mb-4 text-xs text-zinc-500">Hours studied per day</p>

      <figure className="flex h-28 items-end gap-2">
        {bars.map((heightPct, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                delay: i * 0.06,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              style={{
                height: `${heightPct}%`,
                transformOrigin: "bottom",
              }}
              className="w-full rounded-md bg-gradient-to-t from-blue-500 to-purple-500"
            />
            <span className="text-[10px] text-zinc-600">{days[i]}</span>
          </div>
        ))}
      </figure>
    </motion.section>
  );
}