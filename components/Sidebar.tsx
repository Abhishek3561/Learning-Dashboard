"use client";

import { Home, BookOpen, BarChart3, Settings, PanelLeft } from "lucide-react";
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
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.nav
      // Animate width change smoothly using Framer Motion spring
      animate={{ width: collapsed ? 72 : 260 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="hidden md:flex flex-col gap-2 bg-zinc-900 border-r border-zinc-800 p-4 min-h-screen sticky top-0 h-screen overflow-hidden"
    >
      {/* Header — shows full brand or just initial based on collapsed state */}
      <header className="mb-4 flex items-center justify-between px-2 py-2">
        <motion.span
          // Fade out the wordmark when collapsing
          animate={{ opacity: collapsed ? 0 : 1, width: collapsed ? 0 : "auto" }}
          transition={{ duration: 0.2 }}
          className="text-sm font-semibold text-zinc-300 tracking-widest uppercase overflow-hidden whitespace-nowrap"
        >
          LearnOS
        </motion.span>

        {/* Collapse toggle button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-zinc-500 hover:text-zinc-300 transition-colors duration-150 shrink-0"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <motion.div
            // Rotate the icon 180deg when collapsed so it points the right way
            animate={{ rotate: collapsed ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <PanelLeft className="h-4 w-4" />
          </motion.div>
        </button>
      </header>

      {items.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.name;

        return (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            // Justify center when collapsed (icon only), left when expanded
            className={`relative flex items-center gap-3 px-3 py-3 rounded-xl text-sm transition-colors duration-150 ${
              collapsed ? "justify-center" : "justify-start"
            } ${isActive ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
            // Tooltip on hover when collapsed so user knows what each icon does
            title={collapsed ? item.name : undefined}
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

            {/* Animate label out when collapsing */}
            <motion.span
              animate={{
                opacity: collapsed ? 0 : 1,
                width: collapsed ? 0 : "auto",
              }}
              transition={{ duration: 0.15 }}
              className="relative z-10 overflow-hidden whitespace-nowrap"
            >
              {item.name}
            </motion.span>
          </button>
        );
      })}
    </motion.nav>
  );
}