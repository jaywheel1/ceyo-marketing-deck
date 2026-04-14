"use client";
import { motion } from "framer-motion";

export function AuroraBlob({
  className = "",
  size = 600,
  color = "rgba(79, 70, 229, 0.22)",
  duration = 16,
}: {
  className?: string;
  size?: number;
  color?: string;
  duration?: number;
}) {
  return (
    <motion.div
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{ width: size, height: size, background: color }}
      animate={{
        x: [0, 40, -20, 0],
        y: [0, -30, 20, 0],
        scale: [1, 1.08, 0.95, 1],
      }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
