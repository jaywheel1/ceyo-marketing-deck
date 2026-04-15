"use client";
import { SectionShell } from "../SectionShell";
import { SplitReveal } from "../primitives/SplitReveal";
import { Reveal } from "../primitives/Reveal";
import { AuroraBlob } from "../primitives/AuroraBlob";
import { Explainer } from "../primitives/Explainer";
import { motion } from "framer-motion";

const PHASES = [
  {
    m: "Month 1",
    h: "Build the base",
    body: "Fix what's broken. Stand up the workstation. Ship the first wins.",
    weeks: [
      {
        w: "W1",
        kind: "Foundation",
        tasks: [
          "Switch ceyo.ai to server-rendering — the AI-can't-read-our-site fix",
          "Build the workstation v1 (the central marketing dashboard)",
          "Wire up first AI visibility tracking against 5 core prompts",
          "Ship the in-product G2 review pop-up",
          "Tom + Maxim's first ghostwritten posts go live",
        ],
      },
      {
        w: "W2",
        kind: "Distribution",
        tasks: [
          "First 15 Reddit comments shipped via the daily routine",
          "G2 outreach to top customers",
          "Publish the \"we failed our own visibility test\" post",
          "Content calendar locked for the next 60 days",
        ],
      },
      {
        w: "W3",
        kind: "Owned pages",
        tasks: [
          "Auto-page engine live — first 20 Google pages published",
          "Ceyo Scan v1 in internal testing",
          "15 G2 reviews collected so far",
        ],
      },
      {
        w: "W4",
        kind: "First milestones",
        tasks: [
          "20 G2 reviews → \"Users Love Us\" badge locked for the Summer report",
          "First LinkedIn ad behind a winning organic post",
          "Workstation v1 live — full team has access",
        ],
      },
    ],
  },
  {
    m: "Month 2",
    h: "Scale what's working",
    body: "Public launch of Ceyo Scan. Real case studies. Paid amplification on proven posts.",
    weeks: [
      {
        w: "W5",
        kind: "Public launch",
        tasks: [
          "Ceyo Scan launches publicly with the visibility-fix story",
          "Press pitch out to Search Engine Land, SEJ, TechCrunch",
          "On track for 50 G2 reviews by end of month",
        ],
      },
      {
        w: "W6",
        kind: "Proof + partners",
        tasks: [
          "First case study published — named customer, real numbers",
          "Agency partner page live, outreach starts",
          "Lily Ray outreach begins (monthly cadence)",
        ],
      },
      {
        w: "W7",
        kind: "Distribution scale",
        tasks: [
          "Ceyo Scan public-page engine live (every scan = a Google page)",
          "Second case study",
          "First webinar scheduled with an outside guest",
        ],
      },
      {
        w: "W8",
        kind: "Authority",
        tasks: [
          "50 G2 reviews → High Performer in reach",
          "LinkedIn ads scaled behind top 3 organic posts",
          "Rand Fishkin + Mike King briefings booked",
        ],
      },
    ],
  },
  {
    m: "Month 3",
    h: "Prove the engine",
    body: "Original research drops. Programmatic pages live at scale. Workstation v2.",
    weeks: [
      {
        w: "W9",
        kind: "Research",
        tasks: [
          "State of GEO report — data collection complete",
          "Third case study drafted",
          "500+ auto-generated Google pages now live",
        ],
      },
      {
        w: "W10",
        kind: "PR moment",
        tasks: [
          "State of GEO report launches",
          "Press pitch + webinar + podcast appearances all booked around it",
        ],
      },
      {
        w: "W11",
        kind: "Compounding",
        tasks: [
          "75+ G2 reviews",
          "Workstation v2 with predictive alerts",
          "First committed agency partners signed",
        ],
      },
      {
        w: "W12",
        kind: "Reset",
        tasks: [
          "90-day retro — what worked, what didn't",
          "Plan days 91–180 with Tom + Maxim",
        ],
      },
    ],
  },
];

export function S11Plan() {
  return (
    <SectionShell id="plan" eyebrow="The first 90 days" index={11} total={12}>
      <AuroraBlob className="top-[-80px] left-[-100px]" size={500} />

      <div className="mb-6">
        <SplitReveal
          as="h2"
          text="What ships, when. Phase by phase."
          className="text-display-md text-ceyo-heading"
        />
      </div>

      <Explainer>
        <strong className="text-ceyo-heading">First two weeks are mostly building</strong> — the workstation, the rendering fix, the first AI-visibility baseline, the G2 pop-up.
        <strong className="text-ceyo-heading"> Weeks 3–8 turn that base into shipped marketing</strong> — Ceyo Scan goes public, first case studies, paid amplification.
        <strong className="text-ceyo-heading"> Month 3 is where the engine starts proving itself</strong> — original research, programmatic pages at scale, agency program signed.
      </Explainer>

      <div className="space-y-6">
        {PHASES.map((phase, pi) => (
          <Reveal key={phase.m} delay={0.15 + pi * 0.1}>
            <div className="card p-6">
              <div className="flex items-baseline justify-between mb-2 flex-wrap gap-3">
                <div className="flex items-baseline gap-4">
                  <span className="eyebrow text-ceyo-accent3">{phase.m}</span>
                  <span className="text-2xl font-semibold text-ceyo-heading">{phase.h}</span>
                </div>
                <span className="text-sm text-ceyo-muted italic">{phase.body}</span>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
                {phase.weeks.map((w, wi) => (
                  <motion.div
                    key={w.w}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + pi * 0.1 + wi * 0.06 }}
                    className="card-quiet p-4"
                  >
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="font-mono text-[11px] text-ceyo-accent3 tabular">{w.w}</span>
                      <span className="text-[10px] text-ceyo-muted uppercase tracking-wider">{w.kind}</span>
                    </div>
                    <ul className="space-y-1.5 mt-2">
                      {w.tasks.map((t, ti) => (
                        <li key={ti} className="text-[12.5px] text-ceyo-text/85 leading-snug flex gap-1.5">
                          <span className="text-ceyo-accent shrink-0">·</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
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
