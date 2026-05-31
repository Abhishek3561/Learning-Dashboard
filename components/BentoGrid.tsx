"use client";

import { motion } from "framer-motion";

export const tileVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function BentoGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.section
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      initial="hidden"
      animate="visible"
      className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    >
      {children}
    </motion.section>
  );
}
