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

export default function MobileNav() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden border-t border-zinc-800 bg-zinc-900/95 backdrop-blur-md">
      {items.map(({ name, icon: Icon }) => {
        const isActive = active === name;

        return (
          <button
            key={name}
            onClick={() => setActive(name)}
            className="relative flex-1 py-3 flex flex-col items-center gap-1"
          >
            {/* Active indicator dot */}
            {isActive && (
              <motion.div
                layoutId="mobileActiveTab"
                className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-8 rounded-full bg-blue-400"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )}

            <Icon
              size={20}
              className={`transition-colors duration-150 ${
                isActive ? "text-blue-400" : "text-zinc-500"
              }`}
            />

            <span
              className={`text-[10px] font-medium transition-colors duration-150 ${
                isActive ? "text-blue-400" : "text-zinc-600"
              }`}
            >
              {name}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
