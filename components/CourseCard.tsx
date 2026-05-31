"use client";

import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";
import { Course } from "@/types/course";
import { tileVariant } from "./BentoGrid";
import { LucideIcon } from "lucide-react";

const iconMap = Icons as unknown as Record<string, LucideIcon>;

export default function CourseCard({ course }: { course: Course }) {
  const DynamicIcon = iconMap[course.icon_name] ?? Icons.BookOpen;

  return (
    <motion.article
      variants={tileVariant}
      whileHover={{
        scale: 1.02,
        y: -2,
        boxShadow: "0 0 24px rgba(59,130,246,0.18)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
    >
      {/* Hover glow overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"
      />

      {/* Noise texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Content */}
      <header className="relative z-10">
        <DynamicIcon className="mb-4 h-8 w-8 text-blue-400" />

        <h3 className="mb-4 font-semibold leading-snug text-zinc-100">
          {course.title}
        </h3>

        <ProgressBar progress={course.progress} />

        <p className="mt-2 text-sm text-zinc-400">
          {course.progress}% Complete
        </p>
      </header>
    </motion.article>
  );
}