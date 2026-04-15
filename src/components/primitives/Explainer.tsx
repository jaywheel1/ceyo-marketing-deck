"use client";
import { Reveal } from "./Reveal";

export function Explainer({ children, delay = 0.15 }: { children: React.ReactNode; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div className="relative max-w-3xl mb-10 pl-5 border-l-2 border-ceyo-accent/50">
        <div className="eyebrow text-ceyo-accent3 mb-2">What this is</div>
        <div className="text-[15px] sm:text-base text-ceyo-text/95 leading-[1.7] space-y-2">
          {children}
        </div>
      </div>
    </Reveal>
  );
}
