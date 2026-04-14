"use client";
import { SectionShell } from "../SectionShell";
import { SplitReveal } from "../primitives/SplitReveal";
import { Reveal } from "../primitives/Reveal";
import { AuroraBlob } from "../primitives/AuroraBlob";
import { motion } from "framer-motion";

const PANELS = [
  { k: "Share of Answer", v: "Live", c: "Ceyo vs Profound, Peec, AthenaHQ on 5 prompt clusters. Daily delta." },
  { k: "Content Queue", v: "Kanban", c: "Every draft: brief → draft → voice-checked → scheduled → live." },
  { k: "Agent Activity", v: "24h feed", c: "Per agent: probes run, drafts made, alerts fired, errors." },
  { k: "G2 Tracker", v: "Reviews + rank", c: "Count, rank, competitor deltas, badge status, deadline countdown." },
  { k: "Reddit", v: "Threads + citations", c: "Threads monitored, comments shipped, Perplexity citations earned back." },
  { k: "Ad Performance", v: "Live", c: "LinkedIn + Google + Meta. Top/bottom variants, CPC, CTR. Raw numbers." },
  { k: "Pipeline Signals", v: "Today", c: "Ceyo Scan scans, email captures, signups, trials. Trend arrows." },
  { k: "Competitor Watch", v: "24h", c: "Profound / Peec / AthenaHQ posts, pricing changes, launches, press." },
  { k: "Press Log", v: "Active", c: "Pitches out, placements live, journalist relationship heat map." },
];

const STACK = ["Next.js", "Supabase", "MCP", "Remotion", "LinkedIn Ads API", "Google Ads API", "G2 API", "Reddit API"];

export function S08Dashboard() {
  return (
    <SectionShell id="dashboard" eyebrow="My workstation" index={8} total={10}>
      <AuroraBlob className="top-[-100px] right-[-120px]" size={560} />

      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
        <div>
          <SplitReveal
            as="h2"
            text="One page. Every agent, every channel, every number I act on."
            className="text-display-md text-ceyo-heading mb-6"
          />
          <Reveal delay={0.35}>
            <p className="text-lg text-ceyo-text/80 leading-relaxed mb-8">
              Ships internally week one. I build, I operate, engineering supports.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="card p-5 mb-5">
              <div className="eyebrow text-ceyo-accent3 mb-3">Stack</div>
              <div className="flex flex-wrap gap-1.5">
                {STACK.map((s) => (
                  <span key={s} className="font-mono text-[11px] bg-ceyo-surface border border-ceyo-border px-2 py-1 rounded text-ceyo-text/90">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.65}>
            <div className="card-quiet p-4">
              <div className="eyebrow text-ceyo-muted mb-2">Review cadence</div>
              <p className="text-sm text-ceyo-text/90 leading-relaxed">
                One 10-minute Loom every Friday walking Tom and Maxim through the top 5 changes.
                Monthly in-person deep dive. Async-default.
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
                <div className="font-mono text-[11px] text-ceyo-muted">dashboard.ceyo.ai</div>
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
                <span>9 panels · auto-refresh 60s</span>
                <span className="text-ceyo-accent3">Health 87/100 ●</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
