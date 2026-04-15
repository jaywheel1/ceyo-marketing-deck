"use client";
import { SectionShell } from "../SectionShell";
import { SplitReveal } from "../primitives/SplitReveal";
import { Reveal } from "../primitives/Reveal";
import { AuroraBlob } from "../primitives/AuroraBlob";
import { Explainer } from "../primitives/Explainer";
import { motion } from "framer-motion";

const PANELS = [
  { k: "AI visibility", v: "Live", c: "Ceyo vs Profound, Peec, AthenaHQ on 5 key prompts. Daily change." },
  { k: "Content queue", v: "Kanban", c: "Every draft in flight: idea → draft → voice-checked → scheduled → live." },
  { k: "Agent activity", v: "24h feed", c: "Every AI assistant's actions in the last 24 hours. Audit trail." },
  { k: "G2 tracker", v: "Reviews + rank", c: "Review count, rank, competitor delta, badge status, deadline countdown." },
  { k: "Reddit", v: "Threads + cites", c: "Threads watched, comments shipped, AI answers citing Ceyo back." },
  { k: "Ad performance", v: "Live", c: "LinkedIn + Google + Meta combined. Top and bottom-performing ads." },
  { k: "Pipeline today", v: "Today", c: "Free tool scans, email captures, trials, conversions." },
  { k: "Competitor watch", v: "24h", c: "What Profound, Peec, AthenaHQ just posted, launched, priced, or got press for." },
  { k: "Press log", v: "Active", c: "Pitches sent, placements live, every journalist tracked." },
];

const FOR_TEAM = [
  { who: "Tom + Maxim", get: "AI visibility live, weekly content shipped, where Ceyo is winning vs losing in the category, every press placement." },
  { who: "Product team", get: "Which features are getting cited in the wild, what marketing's saying about new launches, customer quotes pulled from reviews." },
  { who: "Sales / customer success", get: "G2 reviews coming in, content they can send to prospects, competitor moves, pipeline numbers." },
  { who: "Anyone who logs in", get: "One health score (1–100). One color (green / amber / red). Click in for detail. No spreadsheet hunting." },
];

const STACK = ["Next.js", "Supabase", "LinkedIn Ads API", "Google Ads API", "G2 API", "Reddit API", "Remotion"];

export function S10Workstation() {
  return (
    <SectionShell id="workstation" eyebrow="The team's workstation" index={10} total={12}>
      <AuroraBlob className="top-[-100px] right-[-120px]" size={560} />

      <div className="mb-6">
        <SplitReveal
          as="h2"
          text="One page. Everything the marketing team needs, in one place."
          className="text-display-md text-ceyo-heading max-w-6xl"
        />
      </div>

      <Explainer>
        <p>
          A <strong className="text-ceyo-heading">central command page</strong> for marketing — built into Ceyo&apos;s admin so anyone on the team can open it.
          Replaces the <strong className="text-ceyo-heading">10 different dashboards</strong>, spreadsheets, and inbox tabs marketing usually lives in.
        </p>
        <p>
          It shows AI visibility, every agent&apos;s activity, content in flight, ad performance, G2 status, Reddit, press, competitor moves —
          <strong className="text-ceyo-heading"> all live, all in one place</strong>.
          I build it in week 1. After that, it&apos;s how the whole team sees what marketing is doing.
        </p>
      </Explainer>

      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 items-start mb-10">
        <div>
          <div className="eyebrow text-ceyo-accent3 mb-4">What different people get from it</div>
          <div className="space-y-3">
            {FOR_TEAM.map((f, i) => (
              <Reveal key={f.who} delay={0.2 + i * 0.08}>
                <div className="card p-4">
                  <div className="text-ceyo-heading font-semibold mb-1">{f.who}</div>
                  <p className="text-sm text-ceyo-muted leading-relaxed">{f.get}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.6}>
            <div className="mt-5 card-quiet p-4">
              <div className="eyebrow text-ceyo-muted mb-2">Built with</div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {STACK.map((s) => (
                  <span key={s} className="font-mono text-[11px] bg-ceyo-surface border border-ceyo-border px-2 py-1 rounded text-ceyo-text/90">
                    {s}
                  </span>
                ))}
              </div>
              <p className="text-xs text-ceyo-muted leading-relaxed">
                Standard web stack. Everything talks to everything via APIs. <strong className="text-ceyo-text">Engineering helps me wire up the data sources; I build and own the page.</strong>
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="relative">
            <div className="card p-5 bg-ceyo-paper/80">
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-ceyo-borderSoft">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-ceyo-danger/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-ceyo-warn/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-ceyo-success/60" />
                </div>
                <div className="font-mono text-[11px] text-ceyo-muted">ceyo.ai/marketing</div>
                <div className="ml-auto flex items-center gap-2 font-mono text-[10px] text-ceyo-accent3">
                  <span className="h-1.5 w-1.5 rounded-full bg-ceyo-success pulse-dot" /> LIVE
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                {PANELS.map((p, i) => (
                  <motion.div
                    key={p.k}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                    className="card p-3 min-h-[110px] group hover:border-ceyo-accent/50 transition"
                  >
                    <div className="flex items-start justify-between mb-1.5">
                      <div className="text-[11px] font-semibold text-ceyo-heading leading-tight">{p.k}</div>
                      <span className="font-mono text-[9px] text-ceyo-accent3/80 uppercase tracking-wider shrink-0 ml-2">{p.v}</span>
                    </div>
                    <p className="text-[10.5px] text-ceyo-muted leading-snug">{p.c}</p>
                    <div className="mt-2 flex items-center gap-1.5">
                      {[0, 1, 2, 3, 4].map((n) => (
                        <div key={n} className="h-[3px] flex-1 rounded bg-ceyo-border overflow-hidden">
                          <motion.div
                            className="h-full bg-ceyo-accent"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${20 + Math.sin(i + n) * 40 + 40}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i + n * 0.05, duration: 0.8 }}
                          />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-ceyo-borderSoft flex items-center justify-between text-[10px] font-mono text-ceyo-muted">
                <span>9 panels · auto-refresh every minute</span>
                <span className="text-ceyo-accent3">Marketing health 87/100 ●</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
