"use client";
import { SectionShell } from "../SectionShell";
import { SplitReveal } from "../primitives/SplitReveal";
import { NumberTicker } from "../primitives/NumberTicker";
import { Reveal } from "../primitives/Reveal";
import { AuroraBlob } from "../primitives/AuroraBlob";
import { BorderBeam } from "../primitives/BorderBeam";
import { Explainer } from "../primitives/Explainer";

const FLAGSHIP_LENSES = [
  { k: "AI visibility score", d: "0–100, the % of AI answers mentioning the brand", color: "bg-ceyo-accent/20 text-ceyo-accent3 border-ceyo-accent/30" },
  { k: "AI-readability grade", d: "F to A — can AI actually read this site?", color: "bg-ceyo-blue/15 text-ceyo-blue border-ceyo-blue/30" },
  { k: "Head-to-head", d: "Side-by-side vs 2 named competitors", color: "bg-ceyo-success/15 text-ceyo-success border-ceyo-success/30" },
  { k: "Sentiment", d: "Positive, neutral, or negative — how AI talks about you", color: "bg-ceyo-warn/15 text-ceyo-warn border-ceyo-warn/30" },
];

const PRECEDENTS = [
  {
    n: "HubSpot Website Grader",
    free: "Domain → SEO grade",
    paid: "Full HubSpot Marketing Hub",
    result: "4M scans, 40K backlinks, foundation of HubSpot's growth from $0 → $30B",
  },
  {
    n: "SimilarWeb",
    free: "Domain → top-line traffic estimate",
    paid: "Country-level breakdowns, keyword data, competitor benchmarks",
    result: "Every domain has a SimilarWeb page — permanent SEO real estate",
  },
  {
    n: "Ahrefs Free Backlink Checker",
    free: "100 backlinks per domain",
    paid: "Full Site Explorer + millions of links",
    result: "Drove their inbound from $0 paid spend in their early years",
  },
  {
    n: "Ubersuggest",
    free: "3 keyword searches per day",
    paid: "Unlimited + deeper SERP data",
    result: "Neil Patel's main growth engine for 5+ years",
  },
];

const ADDITIONAL_TOOLS = [
  {
    n: "AI Crawlability Checker",
    free: "Any domain → A–F grade + top 3 issues",
    paid: "Per-page audit, fix priorities, ongoing monitoring",
    pattern: "Google PageSpeed Insights — single grade, made viral",
  },
  {
    n: "Sentiment Scanner",
    free: "How AI describes any brand across 3 prompts",
    paid: "Full sentiment map, alerts on changes, competitor compare",
    pattern: "Crystal Knows — emotional hook drives sign-up",
  },
  {
    n: "Competitor Gap Finder",
    free: "You + 1 competitor → 1 gap exposed",
    paid: "10 gaps + recommendations + tracking",
    pattern: "SimilarWeb — free single result, paywall for the rest",
  },
  {
    n: "F500 AI Visibility Index",
    free: "Public leaderboard, anyone can view",
    paid: "Brands claim their listing + get monthly reports",
    pattern: "Cloudflare Radar — public data as a PR + SEO play",
  },
];

export function S03CeyoScan() {
  return (
    <SectionShell id="ceyo-scan" eyebrow="The top of funnel" index={3} total={13}>
      <AuroraBlob className="top-0 left-[-160px]" size={540} />

      <div className="mb-6">
        <SplitReveal
          as="h2"
          text="A free tool ecosystem that becomes how people find Ceyo."
          className="text-display-md text-ceyo-heading max-w-5xl"
        />
      </div>

      <Explainer>
        <p>
          A <strong className="text-ceyo-heading">family of free tools</strong> on Ceyo&apos;s site — each one solves a real problem instantly, then offers a paid upgrade for the deeper version.
          The flagship is <strong className="text-ceyo-heading">Ceyo Scan</strong>. Every tool feeds the next, every tool feeds <strong className="text-ceyo-heading">G2 reviews</strong>, every tool builds permanent SEO pages.
        </p>
        <p>
          Pattern is proven: <strong className="text-ceyo-heading">HubSpot, SimilarWeb, Ahrefs, and Ubersuggest</strong> all built their inbound engines on it.
        </p>
      </Explainer>

      {/* Flagship tool */}
      <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 mb-12 items-start">
        <div>
          <div className="eyebrow text-ceyo-accent3 mb-3">Flagship · Ceyo Scan</div>
          <p className="text-base text-ceyo-text/85 leading-relaxed mb-5">
            Type in any domain. <strong className="text-ceyo-heading">60 seconds later</strong> you have <strong className="text-ceyo-heading">4 scores</strong>, a head-to-head with competitors, and a shareable image. No signup. Email unlocks the full audit. Paid unlocks ongoing tracking.
          </p>

          <div className="card-quiet p-5 mb-5">
            <div className="grid grid-cols-2 gap-2">
              {FLAGSHIP_LENSES.map((l) => (
                <div key={l.k} className={`rounded-lg px-3 py-2.5 border ${l.color}`}>
                  <div className="text-sm font-semibold">{l.k}</div>
                  <div className="text-[11px] opacity-80 mt-0.5 leading-snug">{l.d}</div>
                </div>
              ))}
            </div>
          </div>

          <Reveal delay={0.4}>
            <div className="card p-5 relative">
              <BorderBeam duration={10} />
              <div className="eyebrow text-ceyo-accent3 mb-2">Why this works — proof</div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-3xl font-semibold text-ceyo-heading tabular">
                    <NumberTicker value={4} suffix="M" />
                  </div>
                  <div className="text-[11px] text-ceyo-muted">HubSpot Website Grader scans</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-ceyo-heading tabular">
                    <NumberTicker value={40} suffix="K" />
                  </div>
                  <div className="text-[11px] text-ceyo-muted">free backlinks earned</div>
                </div>
              </div>
              <p className="text-[12px] text-ceyo-text/80 italic mt-4 leading-relaxed">
                Built HubSpot from startup to $30B+ public company.
              </p>
            </div>
          </Reveal>
        </div>

        <div>
          <div className="eyebrow text-ceyo-accent3 mb-3">The freemium playbook — proven precedents</div>
          <div className="space-y-2.5">
            {PRECEDENTS.map((p, i) => (
              <Reveal key={p.n} delay={0.2 + i * 0.07}>
                <div className="card p-4">
                  <div className="text-sm font-semibold text-ceyo-heading mb-1.5">{p.n}</div>
                  <div className="grid grid-cols-2 gap-3 mb-2">
                    <div>
                      <div className="text-[10px] eyebrow text-ceyo-success">Free</div>
                      <div className="text-[12px] text-ceyo-text/85 leading-snug">{p.free}</div>
                    </div>
                    <div>
                      <div className="text-[10px] eyebrow text-ceyo-accent3">Paid unlock</div>
                      <div className="text-[12px] text-ceyo-text/85 leading-snug">{p.paid}</div>
                    </div>
                  </div>
                  <div className="text-[11px] text-ceyo-muted italic leading-snug border-t border-ceyo-borderSoft pt-2">
                    {p.result}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Additional tools */}
      <Reveal delay={0.5}>
        <div className="mb-8">
          <div className="flex items-baseline gap-3 mb-4">
            <div className="eyebrow text-ceyo-accent3">More tools, same playbook</div>
            <div className="h-px flex-1 bg-ceyo-border" />
          </div>
          <p className="text-sm text-ceyo-text/85 leading-relaxed mb-5 max-w-4xl">
            <strong className="text-ceyo-heading">Ceyo Scan ships first.</strong> Once the engine is proven, we add 3–4 more free tools — each using Ceyo&apos;s existing data, each following the same free-then-paid pattern. <strong className="text-ceyo-heading">No new infrastructure.</strong> Just new entry points for a different audience.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {ADDITIONAL_TOOLS.map((t, i) => (
              <Reveal key={t.n} delay={0.55 + i * 0.06}>
                <div className="card p-4 h-full">
                  <div className="text-sm font-semibold text-ceyo-heading mb-2 leading-tight">{t.n}</div>
                  <div className="space-y-2 mb-3">
                    <div>
                      <div className="text-[9px] eyebrow text-ceyo-success">Free</div>
                      <div className="text-[11.5px] text-ceyo-text/85 leading-snug">{t.free}</div>
                    </div>
                    <div>
                      <div className="text-[9px] eyebrow text-ceyo-accent3">Paid</div>
                      <div className="text-[11.5px] text-ceyo-text/85 leading-snug">{t.paid}</div>
                    </div>
                  </div>
                  <div className="text-[10px] text-ceyo-muted italic leading-snug border-t border-ceyo-borderSoft pt-2">
                    Pattern: {t.pattern}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      {/* G2 tie-in */}
      <Reveal delay={0.85}>
        <div className="card p-5 border-l-2 border-ceyo-accent">
          <div className="eyebrow text-ceyo-accent3 mb-2">How this ties to G2 (next slide)</div>
          <p className="text-sm text-ceyo-text/90 leading-relaxed">
            Every free-tool result page ends with <strong className="text-ceyo-heading">&quot;Did this help? Leave us a quick G2 review.&quot;</strong>
            Free tool users who convert to paid get the in-product G2 prompt later.
            G2 reviews show up as <strong className="text-ceyo-heading">trust badges on every tool result page</strong>.
            Tools drive signups → signups become reviews → reviews drive more signups. <strong className="text-ceyo-heading">Reinforcing flywheel.</strong>
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
