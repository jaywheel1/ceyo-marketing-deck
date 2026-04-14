"use client";
import { SectionShell } from "../SectionShell";
import { SplitReveal } from "../primitives/SplitReveal";
import { Reveal } from "../primitives/Reveal";
import { AuroraBlob } from "../primitives/AuroraBlob";
import { motion } from "framer-motion";

const PLAN = [
  {
    m: "Month 1",
    h: "Foundation shipped",
    weeks: [
      { w: "W1", t: "Homepage + blog rendering fixed. First citation probe baseline. G2 in-app trigger live. Tom + Maxim first posts ship. Dashboard v1." },
      { w: "W2", t: "First 15 Reddit comments shipped. G2 outreach to top 30 customers. First contrarian data-backed post shipped. Content calendar locked for 60 days." },
      { w: "W3", t: "Programmatic SEO page architecture live. First 20 pages published. 15 G2 reviews collected. Ceyo Scan specced." },
      { w: "W4", t: "20 G2 reviews hit → Users Love Us for Summer locked. First LinkedIn TLA behind a winning organic post. Ceyo Scan in internal test." },
    ],
  },
  {
    m: "Month 2",
    h: "Scale",
    weeks: [
      { w: "W5", t: "Ceyo Scan launches with \"we failed our own test\" story. Press pitch out. 50 G2 reviews in sight." },
      { w: "W6", t: "First case study published with named customer + numbers. Agency partner landing page live. Lily Ray outreach starts." },
      { w: "W7", t: "Scan public-pages engine live. Second case study. First webinar scheduled." },
      { w: "W8", t: "50 G2 reviews → High Performer contender. LinkedIn TLAs scaled behind 3 top organic posts. Rand + Mike King briefings booked." },
    ],
  },
  {
    m: "Month 3",
    h: "Prove the engine",
    weeks: [
      { w: "W9", t: "State of GEO data collection complete. Third case study drafted. 500+ programmatic pages live." },
      { w: "W10", t: "State of GEO report launches. Press pitch + webinar + podcast appearances booked around it." },
      { w: "W11", t: "75+ G2 reviews. Dashboard v2 with predictive alerts. Agency program: first committed partners." },
      { w: "W12", t: "90-day retro. Quantify what worked. Plan days 91–180 with Tom + Maxim." },
    ],
  },
];

export function S09Plan() {
  return (
    <SectionShell id="plan" eyebrow="90 days" index={9} total={10}>
      <AuroraBlob className="top-[-80px] left-[-100px]" size={500} />

      <div className="mb-12">
        <SplitReveal
          as="h2"
          text="Week by week. What ships, when."
          className="text-display-md text-ceyo-heading"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        {PLAN.map((p, pi) => (
          <Reveal key={p.m} delay={0.2 + pi * 0.12}>
            <div className="card p-6 h-full relative overflow-hidden">
              <div className="flex items-baseline justify-between mb-5">
                <div>
                  <div className="eyebrow text-ceyo-accent3">{p.m}</div>
                  <div className="text-xl font-semibold text-ceyo-heading mt-0.5">{p.h}</div>
                </div>
                <div className="font-mono text-[10px] text-ceyo-muted">{String(pi + 1).padStart(2, "0")}/03</div>
              </div>

              <div className="space-y-3 relative">
                <div className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-ceyo-accent/40 via-ceyo-border to-transparent" />
                {p.weeks.map((w, wi) => (
                  <motion.div
                    key={w.w}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + pi * 0.12 + wi * 0.07 }}
                    className="flex gap-3 items-start"
                  >
                    <div className="shrink-0 h-6 w-6 rounded-md bg-ceyo-surface border border-ceyo-accent/40 flex items-center justify-center font-mono text-[10px] text-ceyo-accent3 tabular relative z-10">
                      {w.w}
                    </div>
                    <p className="text-sm text-ceyo-text/85 leading-relaxed pt-0.5">{w.t}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
