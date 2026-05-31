"use client";

import { motion } from "framer-motion";

export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <meter
      value={progress}
      min={0}
      max={100}
      aria-label={`${progress}% complete`}
      className="block w-full h-2 rounded-full bg-zinc-800 overflow-hidden appearance-none"
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.3,
        }}
        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
      />
    </meter>
  );
}