"use client";

import { Home, BookOpen, BarChart3, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const items = [
  { name: "Home", icon: Home },
  { name: "Courses", icon: BookOpen },
  { name: "Analytics", icon: BarChart3 },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="hidden md:flex flex-col gap-2 bg-zinc-900 border-r border-zinc-800 p-4 min-h-screen sticky top-0 h-screen">
      <header className="mb-4 px-4 py-2">
        <span className="hidden xl:block text-sm font-semibold text-zinc-300 tracking-widest uppercase">
          LearnOS
        </span>
        <span className="xl:hidden text-lg font-bold text-blue-400">L</span>
      </header>

      {items.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.name;

        return (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-colors duration-150 ${
              isActive ? "text-white" : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-xl bg-zinc-800"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              />
            )}

            <Icon className="relative z-10 h-5 w-5 shrink-0" />
            <span className="relative z-10 hidden xl:block">{item.name}</span>
          </button>
        );
      })}
    </nav>
  );
}