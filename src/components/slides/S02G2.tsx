"use client";
import { SectionShell } from "../SectionShell";
import { SplitReveal } from "../primitives/SplitReveal";
import { NumberTicker } from "../primitives/NumberTicker";
import { Reveal } from "../primitives/Reveal";
import { BorderBeam } from "../primitives/BorderBeam";
import { AuroraBlob } from "../primitives/AuroraBlob";
import { Explainer } from "../primitives/Explainer";

const WEEKS = [
  {
    w: "Week 1",
    items: [
      "Ship a pop-up inside Ceyo that asks for a review the moment a customer sees their AI visibility go up — the exact peak-happiness moment",
      "Add a one-click G2 link to every support email, onboarding email, and success email — permanent, not a one-off campaign",
      "I personally email Ceyo's top 30 customers asking for a 5-minute review, with a direct deep-link",
    ],
  },
  {
    w: "Week 2",
    items: [
      "Daily check on submissions. Personal thank-you reply to every reviewer within 24 hours",
      "One reminder to non-responders. No follow-up nagging",
      "Track the 4 signals G2 uses to rank fast-growing products: website traffic, team size, social reach, review velocity",
    ],
  },
  {
    w: "Week 3–4",
    items: [
      "Hit 20 reviews before April 28 → Ceyo locks the Summer 2026 \"Users Love Us\" badge (the free one)",
      "Put the 3 strongest reviews on the homepage, in Tom + Maxim's LinkedIn, and in ad creative",
      "Upgrade to a paid G2 plan ($2,999/year) so the bigger \"Grid\" badges display publicly the moment we earn them",
    ],
  },
  {
    w: "Month 2",
    items: [
      "Push to 50+ reviews — the in-product pop-up now runs on autopilot",
      "Target: \"High Performer\" (the tier above Users Love Us)",
      "G2 automatically copies our reviews to AWS Marketplace, Microsoft Azure, and 10 other buyer sites — free extra distribution",
    ],
  },
  {
    w: "Month 3",
    items: [
      "75+ reviews, Ceyo's growth signals all firing",
      "Target: \"Leader\" or \"Momentum Leader\" in the Fall 2026 report",
      "Review collection becomes a permanent motion — 4 new reviews per week, every week",
    ],
  },
];

export function S02G2() {
  return (
    <SectionShell id="g2" eyebrow="The review play" index={2} total={10}>
      <AuroraBlob className="top-20 right-[-200px]" size={500} />

      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
        <div>
          <SplitReveal
            as="h2"
            text="G2 to Leader in one quarterly cycle."
            className="text-display-md text-ceyo-heading mb-6"
          />

          <Explainer>
            G2 is the biggest software review site — it&apos;s where B2B buyers check before buying.
            Ceyo has <span className="text-ceyo-danger font-semibold">zero reviews</span> today. Profound has a Leader badge.
            We close that gap in 90 days.
          </Explainer>

          <Reveal delay={0.3}>
            <p className="text-base text-ceyo-text/85 leading-relaxed mb-6">
              How to do it: Reputation.com ran a pop-up inside their product asking for reviews. Just that.
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="relative card p-6 mb-6">
              <BorderBeam duration={8} />
              <div className="eyebrow text-ceyo-accent3 mb-2">Result, under 12 months</div>
              <div className="flex items-baseline gap-3">
                <NumberTicker value={174} suffix="%" className="text-5xl sm:text-6xl font-semibold text-ceyo-heading tabular" />
                <span className="text-ceyo-muted">annual revenue lift</span>
              </div>
              <div className="mt-4 space-y-1.5 text-sm text-ceyo-muted">
                <div className="flex justify-between"><span>New sales opportunities</span><span className="tabular text-ceyo-text">+178%</span></div>
                <div className="flex justify-between"><span>New account requests</span><span className="tabular text-ceyo-text">+200%</span></div>
                <div className="flex justify-between"><span>Time to see it work</span><span className="tabular text-ceyo-text">&lt; 12 months</span></div>
              </div>
              <div className="mt-4 pt-4 border-t border-ceyo-borderSoft text-[11px] text-ceyo-muted/80">
                Source: G2 published case study — Reputation.com
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="card-quiet p-4 flex items-center justify-between">
              <div>
                <div className="eyebrow text-ceyo-muted">Ceyo today</div>
                <div className="text-2xl font-semibold text-ceyo-heading tabular">0 reviews</div>
              </div>
              <div className="h-10 w-px bg-ceyo-border" />
              <div>
                <div className="eyebrow text-ceyo-muted">Next G2 deadline</div>
                <div className="text-2xl font-semibold text-ceyo-danger tabular">Apr 28</div>
              </div>
              <div className="h-10 w-px bg-ceyo-border" />
              <div>
                <div className="eyebrow text-ceyo-muted">First badge at</div>
                <div className="text-2xl font-semibold text-ceyo-accent3 tabular">20 reviews</div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <div className="eyebrow text-ceyo-accent3 mb-5">How I run it, week by week</div>
          <div className="space-y-3 relative">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-ceyo-accent/40 via-ceyo-border to-transparent" />
            {WEEKS.map((w, i) => (
              <Reveal key={w.w} delay={0.2 + i * 0.08}>
                <div className="flex gap-4 items-start pl-0">
                  <div className="shrink-0 relative z-10">
                    <div className="h-8 w-8 rounded-full bg-ceyo-ink border border-ceyo-accent/40 flex items-center justify-center text-[10px] font-mono text-ceyo-accent3 tabular">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="flex-1 card p-4">
                    <div className="eyebrow text-ceyo-accent3 mb-2">{w.w}</div>
                    <ul className="space-y-1.5">
                      {w.items.map((it, j) => (
                        <li key={j} className="text-sm text-ceyo-text/90 leading-relaxed flex gap-2">
                          <span className="text-ceyo-muted mt-1">→</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
