"use client";
import { SectionShell } from "../SectionShell";
import { SplitReveal } from "../primitives/SplitReveal";
import { Reveal } from "../primitives/Reveal";
import { AuroraBlob } from "../primitives/AuroraBlob";
import { Explainer } from "../primitives/Explainer";
import { motion } from "framer-motion";

const STAGES = [
  {
    n: "01",
    stage: "Free tool used",
    trigger: "Someone runs Ceyo Scan",
    flow: [
      "Result page captures email if they want the full report",
      "3-email educational sequence: \"how AI search works\", \"what your score means\", \"3 things you can fix this week\"",
      "Day 7: invite to start a real Ceyo trial",
    ],
  },
  {
    n: "02",
    stage: "Trial started",
    trigger: "They sign up for Ceyo",
    flow: [
      "Personalized Loom from Tom welcoming them (Remotion-rendered, swaps in their brand name)",
      "Day-1 / Day-3 / Day-7 emails walking them to their first AI visibility lift — the 'aha moment'",
      "Trigger for the in-product G2 prompt: the moment their score goes up",
    ],
  },
  {
    n: "03",
    stage: "Customer",
    trigger: "They convert to paid",
    flow: [
      "Monthly Remotion-rendered \"Your Ceyo Wrapped\" — score change, top wins, biggest gaps. Built to share.",
      "Quarterly: invite to be in the next case study (named, with numbers)",
      "When they hit a major milestone (50% lift, beat a competitor): proactive outreach for advocacy",
    ],
  },
  {
    n: "04",
    stage: "Churn / paused",
    trigger: "They cancel or stop using",
    flow: [
      "30-day silent window — no nagging",
      "Day 30: \"What we shipped while you were away\" email (proof the product moved on)",
      "Day 60: personal note from Tom or Maxim with one specific reason to come back",
      "Day 90: \"here's a free Ceyo Scan refresh\" — back into the funnel",
    ],
  },
];

const WEBINARS = [
  { k: "Quarterly anchor", d: "60-min flagship event with an outside guest (Lily Ray, customer founder). Big topic, big promo push." },
  { k: "Monthly mini", d: "30-min product walkthrough or research drop. Tom or Maxim hosts solo. Lower production." },
  { k: "Replay engine", d: "Every webinar gets cut into Remotion-rendered clips for LinkedIn, X, email — 1 webinar = 10+ assets." },
];

const LEAD_FORMS = [
  { use: "Webinar registration", verdict: "Yes — friction kills webinar signups, lead-gen forms remove it" },
  { use: "Gated research download", verdict: "Yes — high-intent, low-commitment exchange" },
  { use: "Newsletter signup", verdict: "Yes — emails go straight to nurture flow above" },
  { use: "Demo / trial requests", verdict: "No — sends them to LinkedIn instead of into Ceyo's onboarding. Use the on-site flow." },
];

export function S07Lifecycle() {
  return (
    <SectionShell id="lifecycle" eyebrow="From first scan to advocate" index={8} total={13}>
      <AuroraBlob className="bottom-[-100px] right-[-160px]" size={540} color="rgba(99,102,241,0.14)" />

      <div className="mb-6">
        <SplitReveal
          as="h2"
          text="Every signup gets the right email, at the right moment."
          className="text-display-md text-ceyo-heading max-w-5xl"
        />
      </div>

      <Explainer>
        <p>
          Most B2B SaaS marketing dies in the gap between &quot;person signs up&quot; and &quot;person becomes a paying customer&quot;.
          <strong className="text-ceyo-heading"> Ceyo&apos;s lifecycle marketing fills that gap</strong> — automated email sequences for every stage, plus webinars as the recurring big moments.
        </p>
        <p>
          Built on <strong className="text-ceyo-heading">Loops</strong> or <strong className="text-ceyo-heading">Customer.io</strong> for email, <strong className="text-ceyo-heading">Remotion</strong> for personalized video, triggered by usage signals from Ceyo&apos;s own product data.
        </p>
      </Explainer>

      {/* The 4-stage flow */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        {STAGES.map((s, i) => (
          <Reveal key={s.n} delay={0.2 + i * 0.1}>
            <div className="card p-5 h-full relative">
              <div className="flex items-baseline justify-between mb-3">
                <span className="font-mono text-[11px] text-ceyo-accent3 tabular">{s.n}</span>
                <span className="text-[10px] text-ceyo-muted uppercase tracking-wider">stage</span>
              </div>
              <div className="text-base font-semibold text-ceyo-heading mb-1">{s.stage}</div>
              <div className="text-[11px] text-ceyo-muted italic mb-4 pb-3 border-b border-ceyo-borderSoft">
                Trigger: {s.trigger}
              </div>
              <ul className="space-y-2">
                {s.flow.map((f, j) => (
                  <li key={j} className="text-[12px] text-ceyo-text/85 leading-snug flex gap-2">
                    <span className="text-ceyo-accent mt-0.5 shrink-0">→</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              {i < STAGES.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="hidden lg:block absolute top-1/2 -right-2.5 text-ceyo-accent/50 text-2xl pointer-events-none"
                >
                  →
                </motion.div>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      {/* Webinars + Lead-gen forms */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Reveal delay={0.6}>
          <div className="card p-5 h-full">
            <div className="eyebrow text-ceyo-accent3 mb-3">Webinars — the recurring anchor</div>
            <p className="text-sm text-ceyo-text/85 leading-relaxed mb-4">
              Webinars do two jobs at once: <strong className="text-ceyo-heading">they capture new leads</strong> (registrations feed straight into the email flow above) and <strong className="text-ceyo-heading">they create content</strong> (one webinar becomes 10+ assets).
            </p>
            <div className="space-y-2.5">
              {WEBINARS.map((w) => (
                <div key={w.k} className="flex gap-3">
                  <div className="text-[12px] text-ceyo-accent3 font-semibold shrink-0 min-w-[110px]">{w.k}</div>
                  <div className="text-[12px] text-ceyo-text/85 leading-snug">{w.d}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.75}>
          <div className="card p-5 h-full">
            <div className="eyebrow text-ceyo-accent3 mb-3">LinkedIn + Meta lead-gen forms</div>
            <p className="text-sm text-ceyo-text/85 leading-relaxed mb-4">
              These are pre-filled signup forms inside LinkedIn or Facebook. Useful in some cases, dangerous in others — depends what we&apos;re asking for.
            </p>
            <div className="space-y-2">
              {LEAD_FORMS.map((f) => {
                const yes = f.verdict.startsWith("Yes");
                return (
                  <div key={f.use} className="flex gap-3 items-start">
                    <span className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded shrink-0 mt-0.5 ${yes ? "bg-ceyo-success/15 text-ceyo-success" : "bg-ceyo-danger/15 text-ceyo-danger"}`}>
                      {yes ? "Use" : "Skip"}
                    </span>
                    <div>
                      <div className="text-[12.5px] font-semibold text-ceyo-heading leading-tight">{f.use}</div>
                      <div className="text-[11.5px] text-ceyo-muted leading-snug">{f.verdict.replace(/^(Yes|No) — /, "")}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.95}>
        <div className="mt-8 p-4 border-l-2 border-ceyo-accent bg-ceyo-surface/40 rounded-r">
          <p className="text-sm text-ceyo-text/90 leading-relaxed">
            <strong className="text-ceyo-heading">The whole engine runs from one tool</strong> (Loops or Customer.io) wired to Ceyo&apos;s product events. I build the flows, write the copy, set the triggers. Email + webinars + lead-gen forms all feed each other — every signup, no matter the entry point, ends up in the right sequence.
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
