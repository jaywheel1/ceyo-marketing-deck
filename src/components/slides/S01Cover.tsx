"use client";
import { SectionShell } from "../SectionShell";
import { SplitReveal } from "../primitives/SplitReveal";
import { AuroraBlob } from "../primitives/AuroraBlob";
import { Reveal } from "../primitives/Reveal";
import { motion } from "framer-motion";

export function S01Cover() {
  return (
    <SectionShell id="cover">
      <AuroraBlob className="top-[-120px] left-[-80px]" size={620} color="rgba(79,70,229,0.18)" />
      <AuroraBlob className="bottom-[-200px] right-[-100px]" size={700} color="rgba(99,102,241,0.12)" duration={22} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-8 sm:gap-10 relative"
      >
        <div className="inline-flex items-center gap-3 self-start">
          <span className="h-2 w-2 rounded-full bg-ceyo-accent pulse-dot" />
          <span className="eyebrow text-ceyo-accent3">Prepared for the Ceyo team</span>
        </div>

        <SplitReveal
          as="h1"
          text="Ceyo marketing,"
          className="text-display-xl text-ceyo-heading"
        />
        <SplitReveal
          as="h1"
          text="next 12 months."
          className="text-display-xl accent-text block -mt-6"
          delay={0.35}
        />

        <Reveal delay={0.9}>
          <p className="text-xl sm:text-2xl text-ceyo-text/80 max-w-3xl font-light leading-relaxed">
            The plays. Week-by-week execution. How I run it.
          </p>
        </Reveal>

        <Reveal delay={1.1} className="pt-8">
          <div className="flex items-center gap-8 text-sm text-ceyo-muted border-t border-ceyo-borderSoft pt-6">
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ceyo-heading">Jay</span>
              <span className="text-ceyo-border">·</span>
              <span>Marketing Lead</span>
            </div>
            <span className="text-ceyo-border">·</span>
            <span className="font-mono text-xs">04.2026</span>
          </div>
        </Reveal>
      </motion.div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ceyo-muted">
        <span className="text-[10px] uppercase tracking-widest">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="h-6 w-px bg-gradient-to-b from-ceyo-muted to-transparent"
        />
      </div>
    </SectionShell>
  );
}
