"use client";

import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";
import { Course } from "@/types/course";
import { tileVariant } from "./BentoGrid";

const iconMap = Icons as unknown as Record<string, React.ComponentType<any>>;

export default function CourseCard({ course }: { course: Course }) {
  const DynamicIcon =
    iconMap[course.icon_name] ?? Icons.BookOpen;

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
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"
      />

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