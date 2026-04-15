"use client";
import { SectionShell } from "../SectionShell";
import { SplitReveal } from "../primitives/SplitReveal";
import { NumberTicker } from "../primitives/NumberTicker";
import { Reveal } from "../primitives/Reveal";
import { AuroraBlob } from "../primitives/AuroraBlob";
import { BorderBeam } from "../primitives/BorderBeam";
import { Explainer } from "../primitives/Explainer";

const EXECUTION = [
  { w: "Weeks 1–2", label: "Design + build the free tool", notes: "A single page on ceyo.ai. Someone types in their domain, gets an instant score. No signup. Email unlocks a longer report. Paid unlocks ongoing tracking. I own the copy, design, and landing page." },
  { w: "Week 3", label: "The \"we failed our own test\" launch", notes: "Run the tool on Ceyo itself first. Publish our (probably failing) score with zero spin. Tom posts the founder angle, Maxim posts the builder angle. I pitch the story to Search Engine Land, Search Engine Journal, TechCrunch." },
  { w: "Week 4", label: "Make it shareable", notes: "Every scan result generates a branded image — the score, the competitors, the Ceyo logo — one-click to LinkedIn and X. Plus a \"scan a competitor\" button inside every result so one scan leads to five." },
  { w: "Month 2", label: "Every scan becomes a page on Google", notes: "Each scan creates a permanent page at ceyo.ai/scan/[brand-name]. Hundreds become thousands. Each ranks in Google for \"[brand name] AI visibility\". Plus: I send pre-run scans to 50 target agencies for their top 3 clients." },
  { w: "Month 3", label: "Category pages", notes: "Second version: ceyo.ai/recommends/best-[category] pages. Each shows who AI recommends in that category today, updated weekly from our data. More indexed pages, more search traffic." },
];

const LENSES = [
  { k: "AI visibility score", d: "0–100, based on % of AI answers mentioning the brand", color: "bg-ceyo-accent/20 text-ceyo-accent3 border-ceyo-accent/30" },
  { k: "AI-readability grade", d: "F to A, whether AI can read the site properly", color: "bg-ceyo-blue/15 text-ceyo-blue border-ceyo-blue/30" },
  { k: "Head-to-head", d: "Side-by-side against 2 competitors", color: "bg-ceyo-success/15 text-ceyo-success border-ceyo-success/30" },
  { k: "Sentiment", d: "How AI talks about the brand: positive, neutral, negative", color: "bg-ceyo-warn/15 text-ceyo-warn border-ceyo-warn/30" },
];

export function S03CeyoScan() {
  return (
    <SectionShell id="ceyo-scan" eyebrow="The top of funnel" index={3} total={10}>
      <AuroraBlob className="top-0 left-[-160px]" size={540} />

      <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-start">
        <div>
          <SplitReveal
            as="h2"
            text="A free tool that becomes how people find Ceyo."
            className="text-display-md text-ceyo-heading mb-6"
          />

          <Explainer>
            A free quality-check tool on Ceyo&apos;s website. Anyone types in their domain and gets a score they can share.
            They get value, we get traffic and leads. HubSpot built a $30B company on exactly this move.
          </Explainer>

          <Reveal delay={0.3}>
            <p className="text-base text-ceyo-text/85 leading-relaxed mb-6">
              HubSpot&apos;s Website Grader, launched 2006 — still the clearest example of this working.
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
                  <div className="text-xs text-ceyo-muted mt-1">websites scanned</div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-semibold text-ceyo-heading tabular">
                    <NumberTicker value={40} suffix="K" />
                  </div>
                  <div className="text-xs text-ceyo-muted mt-1">free backlinks earned</div>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-ceyo-borderSoft text-[13px] text-ceyo-text/80 italic">
                Arguably the single marketing asset that took HubSpot from startup to $30B+ public company.
              </div>
              <div className="mt-3 text-[11px] text-ceyo-muted/80">Source: HubSpot public case studies</div>
            </div>
          </Reveal>

          <Reveal delay={0.55}>
            <div className="card-quiet p-5">
              <div className="eyebrow text-ceyo-muted mb-3">Ceyo Scan · What you get in 60 seconds</div>
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
                HubSpot has their own AI grader today — but it&apos;s one-shot, no signup, and doesn&apos;t create pages.
                Ceyo&apos;s version is better: 4 scores, built for repeat visits, and every scan becomes a Google-findable page.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
