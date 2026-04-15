"use client";
import { Reveal } from "./Reveal";

export function Explainer({ children, delay = 0.15 }: { children: React.ReactNode; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div className="relative max-w-3xl mb-10 pl-4 border-l-2 border-ceyo-accent/40">
        <div className="eyebrow text-ceyo-accent3 mb-1.5">What this is</div>
        <p className="text-[15px] sm:text-base text-ceyo-text/90 leading-relaxed">
          {children}
        </p>
      </div>
    </Reveal>
  );
}
