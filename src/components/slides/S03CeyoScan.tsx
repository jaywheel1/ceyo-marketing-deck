"use client";
import { SectionShell } from "../SectionShell";
import { SplitReveal } from "../primitives/SplitReveal";
import { NumberTicker } from "../primitives/NumberTicker";
import { Reveal } from "../primitives/Reveal";
import { AuroraBlob } from "../primitives/AuroraBlob";
import { BorderBeam } from "../primitives/BorderBeam";

const EXECUTION = [
  { w: "Weeks 1–2", label: "Spec + build v1", notes: "One-page tool: domain → Share of Answer score + crawlability grade + competitor comparison. No login. Email unlocks full audit. I write copy + design end-to-end." },
  { w: "Week 3", label: "The \"we failed our own test\" launch", notes: "Run the tool on Ceyo itself first. Publish the (probably failing) crawlability grade with zero spin. Tom posts the owner angle, Maxim posts the builder angle. I pitch SEL + SEJ + TechCrunch." },
  { w: "Week 4", label: "Viral mechanics", notes: "Share card shipped: every result generates a branded image (score, competitors, logo). One-click to LinkedIn and X. \"Scan a competitor\" CTA inside every result." },
  { w: "Month 2", label: "Public pages at scale", notes: "Permanent pages at ceyo.ai/scan/[brand]. Hundreds become thousands. Each ranks in Google for \"[brand] AI visibility\". Outreach to 50 agencies with pre-run scans of their top 3 clients." },
  { w: "Month 3", label: "Category pages", notes: "Second surface: ceyo.ai/recommends/best-[category]. Lives from real probe data, updated weekly. Programmatic SEO at scale, backed by honest numbers." },
];

const LENSES = [
  { k: "Share of Answer", d: "% of AI responses mentioning the brand, 0–100", color: "bg-ceyo-accent/20 text-ceyo-accent3 border-ceyo-accent/30" },
  { k: "Crawlability", d: "Grade F–A for AI crawler accessibility", color: "bg-ceyo-blue/15 text-ceyo-blue border-ceyo-blue/30" },
  { k: "Competitor vs", d: "Head-to-head against 2 named rivals", color: "bg-ceyo-success/15 text-ceyo-success border-ceyo-success/30" },
  { k: "Sentiment", d: "Positive / neutral / negative read per engine", color: "bg-ceyo-warn/15 text-ceyo-warn border-ceyo-warn/30" },
];

export function S03CeyoScan() {
  return (
    <SectionShell id="ceyo-scan" eyebrow="The top of funnel" index={3} total={10}>
      <AuroraBlob className="top-0 left-[-160px]" size={540} />

      <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-start">
        <div>
          <SplitReveal
            as="h2"
            text="A free tool marketers actually want to share."
            className="text-display-md text-ceyo-heading mb-8"
          />

          <Reveal delay={0.3}>
            <p className="text-lg text-ceyo-text/85 leading-relaxed mb-6">
              HubSpot launched Website Grader in 2006.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="relative card p-6 mb-6">
              <BorderBeam duration={10} />
              <div className="eyebrow text-ceyo-accent3 mb-3">Between 2006 and 2011</div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-4xl sm:text-5xl font-semibold text-ceyo-heading tabular">
                    <NumberTicker value={4} suffix="M" />
                  </div>
                  <div className="text-xs text-ceyo-muted mt-1">websites graded</div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-semibold text-ceyo-heading tabular">
                    <NumberTicker value={40} suffix="K" />
                  </div>
                  <div className="text-xs text-ceyo-muted mt-1">organic backlinks earned</div>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-ceyo-borderSoft text-[13px] text-ceyo-text/80 italic">
                Arguably the single growth asset that took HubSpot from startup to $30B+ public company.
              </div>
              <div className="mt-3 text-[11px] text-ceyo-muted/80">Source: HubSpot case studies</div>
            </div>
          </Reveal>

          <Reveal delay={0.55}>
            <div className="card-quiet p-5">
              <div className="eyebrow text-ceyo-muted mb-3">Ceyo Scan · Four lenses, one URL</div>
              <div className="grid grid-cols-2 gap-2">
                {LENSES.map((l) => (
                  <div key={l.k} className={`rounded-lg px-3 py-2.5 border ${l.color}`}>
                    <div className="text-sm font-semibold">{l.k}</div>
                    <div className="text-[11px] opacity-80 mt-0.5 leading-snug">{l.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div>
          <div className="eyebrow text-ceyo-accent3 mb-5">How I run it</div>
          <div className="space-y-3">
            {EXECUTION.map((e, i) => (
              <Reveal key={e.w} delay={0.15 + i * 0.08}>
                <div className="card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[11px] text-ceyo-accent3 tabular">{e.w}</span>
                    <span className="h-px flex-1 bg-ceyo-border" />
                    <span className="text-ceyo-heading font-semibold">{e.label}</span>
                  </div>
                  <p className="text-sm text-ceyo-muted leading-relaxed">{e.notes}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.7}>
            <div className="mt-6 p-4 border-l-2 border-ceyo-accent bg-ceyo-surface/40 rounded-r">
              <p className="text-sm text-ceyo-text/90 leading-relaxed">
                HubSpot has an AEO Grader today — one-shot, no public pages. Ceyo&apos;s is structurally better:
                multi-lens, persistent, and creates thousands of indexable pages.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
