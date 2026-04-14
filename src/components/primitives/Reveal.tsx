"use client";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 20,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  delay = 0,
  stagger = 0.08,
  className = "",
}: {
  children: ReactNode[];
  delay?: number;
  stagger?: number;
  className?: string;
}) {
  return (
    <>
      {children.map((child, i) => (
        <Reveal key={i} delay={delay + i * stagger} className={className}>
          {child}
        </Reveal>
      ))}
    </>
  );
}
