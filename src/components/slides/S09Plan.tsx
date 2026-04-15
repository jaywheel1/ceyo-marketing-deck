"use client";
import { SectionShell } from "../SectionShell";
import { SplitReveal } from "../primitives/SplitReveal";
import { Reveal } from "../primitives/Reveal";
import { AuroraBlob } from "../primitives/AuroraBlob";
import { Explainer } from "../primitives/Explainer";
import { motion } from "framer-motion";

const PLAN = [
  {
    m: "Month 1",
    h: "Foundation shipped",
    weeks: [
      { w: "W1", t: "Homepage + blog rendering fixed (so AI can read them). First AI visibility baseline captured. G2 pop-up live. Tom + Maxim's first posts ship. Dashboard v1." },
      { w: "W2", t: "First 15 Reddit comments shipped. G2 outreach to top 30 customers. First myth-busting post shipped. Content calendar locked for 60 days." },
      { w: "W3", t: "Auto-page engine live. First 20 Google pages published. 15 G2 reviews collected. Ceyo Scan design complete." },
      { w: "W4", t: "20 G2 reviews → Users Love Us badge locked for Summer report. First paid LinkedIn ad behind a winning organic post. Ceyo Scan in internal test." },
    ],
  },
  {
    m: "Month 2",
    h: "Scale",
    weeks: [
      { w: "W5", t: "Ceyo Scan launches publicly with the \"we failed our own test\" story. Press pitch out. 50 G2 reviews in sight." },
      { w: "W6", t: "First case study published with named customer + real numbers. Agency partner page live. Lily Ray outreach starts." },
      { w: "W7", t: "Ceyo Scan public pages engine live (every scan = a Google page). Second case study. First webinar scheduled." },
      { w: "W8", t: "50 G2 reviews → High Performer badge in reach. Paid LinkedIn scaled behind top 3 organic posts. Rand + Mike King briefings booked." },
    ],
  },
  {
    m: "Month 3",
    h: "Prove the engine",
    weeks: [
      { w: "W9", t: "State of GEO report data collection complete. Third case study drafted. 500+ auto-generated Google pages live." },
      { w: "W10", t: "State of GEO report launches. Press pitch + webinar + podcast appearances all booked around it." },
      { w: "W11", t: "75+ G2 reviews. Dashboard v2 with predictive alerts. Agency program: first committed partners signed." },
      { w: "W12", t: "90-day retro. Quantify what worked. Plan days 91–180 with Tom + Maxim." },
    ],
  },
];

export function S09Plan() {
  return (
    <SectionShell id="plan" eyebrow="90 days" index={9} total={10}>
      <AuroraBlob className="top-[-80px] left-[-100px]" size={500} />

      <div className="mb-6">
        <SplitReveal
          as="h2"
          text="Week by week. What ships, when."
          className="text-display-md text-ceyo-heading"
        />
      </div>

      <Explainer>
        The concrete 90-day schedule — what lands in each week of each month.
        Foundation first (weeks 1–4), scale second (weeks 5–8), prove it&apos;s working last (weeks 9–12).
        Every item here is a deliverable you can check off.
      </Explainer>

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
