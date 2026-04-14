"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function SplitReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.015,
  as: Tag = "h1",
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: any;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const words = text.split(" ");
  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block mr-[0.25em]">
          {word.split("").map((ch, ci) => (
            <motion.span
              key={ci}
              className="inline-block"
              initial={{ y: "0.6em", opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: delay + (wi * 0.04) + (ci * stagger),
              }}
            >
              {ch}
            </motion.span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
