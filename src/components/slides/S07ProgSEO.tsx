"use client";
import { SectionShell } from "../SectionShell";
import { SplitReveal } from "../primitives/SplitReveal";
import { NumberTicker } from "../primitives/NumberTicker";
import { Reveal } from "../primitives/Reveal";
import { AuroraBlob } from "../primitives/AuroraBlob";
import { BorderBeam } from "../primitives/BorderBeam";
import { Explainer } from "../primitives/Explainer";

const PAGE_TYPES = [
  { url: "/vs/[competitor]", desc: "Head-to-head vs Profound, Peec, AthenaHQ, Otterly, Semrush, Ahrefs" },
  { url: "/alternatives-to-[x]", desc: "Lists where Ceyo is one of several honest options" },
  { url: "/best-[category]-geo-tool", desc: "Category-specific: B2B SaaS, ecommerce, agencies, fintech" },
  { url: "/[industry]-ai-search-playbook", desc: "Industry-specific playbooks with real Ceyo data" },
  { url: "/scan/[brand]", desc: "Auto-created from free-tool usage (links back)" },
];

const WEEKS = [
  { w: "Week 1–2", t: "Design page architecture", n: "Define the 5 page types. Each gets its own AI agent that researches per-page — not one template filled in with different names." },
  { w: "Week 3", t: "Agents generate pages", n: "Each AI agent pulls real data from Ceyo's tools, writes unique copy in Ceyo's voice, publishes through the blog. Proper research, not template-swap." },
  { w: "Week 4", t: "Publishing cadence", n: "20 new pages per week minimum. Each has internal links, FAQ sections, comparison tables, real data. Not thin content." },
  { w: "Month 2", t: "Scale", n: "200+ pages live. Structured data on each so Google and AI understand them properly. Every page links to Ceyo Scan for the brand or category mentioned." },
  { w: "Month 3", t: "Refresh loop", n: "500+ pages total. Monthly refresh agent pulls fresh data and updates each page. Page-by-page rank tracking." },
];

export function S07ProgSEO() {
  return (
    <SectionShell id="prog-seo" eyebrow="Owned SEO real estate" index={7} total={12}>
      <AuroraBlob className="bottom-[-140px] left-[-100px]" size={500} />

      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
        <div>
          <SplitReveal
            as="h2"
            text="Hundreds of Google pages, each one actually useful."
            className="text-display-md text-ceyo-heading mb-6"
          />

          <Explainer>
            Instead of writing blog posts one at a time, we use <strong className="text-ceyo-heading">AI agents to build hundreds of pages automatically</strong> —
            each one researched individually, each ranking in Google for a different keyword.
            Most companies who try this make <strong className="text-ceyo-danger">thin spam pages</strong>. We use real Ceyo data per page, so ours rank <strong className="text-ceyo-heading">AND help people</strong>.
          </Explainer>

          <Reveal delay={0.3}>
            <p className="text-base text-ceyo-text/85 leading-relaxed mb-6">
              <strong className="text-ceyo-heading">Stormy AI</strong> used this exact method — an AI agent per page, not a template.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="relative card p-6 mb-6">
              <BorderBeam duration={11} />
              <div className="eyebrow text-ceyo-accent3 mb-3">Result, 10 months</div>
              <div className="flex items-baseline gap-3 mb-4">
                <NumberTicker value={67} className="text-3xl font-semibold text-ceyo-muted tabular" />
                <span className="text-ceyo-muted">→</span>
                <NumberTicker value={2100} className="text-5xl font-semibold text-ceyo-heading tabular" />
                <span className="text-sm text-ceyo-muted">monthly signups</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="tabular text-ceyo-accent3 text-2xl font-semibold">
                    +<NumberTicker value={23} suffix="%" />
                  </div>
                  <div className="text-xs text-ceyo-muted">more signups per visitor</div>
                </div>
                <div>
                  <div className="tabular text-ceyo-accent3 text-2xl font-semibold">
                    −<NumberTicker value={45} suffix="%" />
                  </div>
                  <div className="text-xs text-ceyo-muted">cheaper per new signup</div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-ceyo-borderSoft text-[11px] text-ceyo-muted/80">Source: Stormy AI / Omnius programmatic SEO case study</div>
            </div>
          </Reveal>

          <Reveal delay={0.55}>
            <div className="card-quiet p-4">
              <div className="eyebrow text-ceyo-muted mb-3">5 types of pages we&apos;d build</div>
              <div className="space-y-2">
                {PAGE_TYPES.map((p) => (
                  <div key={p.url} className="flex items-start gap-3">
                    <span className="font-mono text-[12px] text-ceyo-accent3 shrink-0 mt-0.5 min-w-[180px]">
                      ceyo.ai{p.url}
                    </span>
                    <span className="text-xs text-ceyo-muted/90 leading-relaxed">{p.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div>
          <div className="eyebrow text-ceyo-accent3 mb-5">How I run it</div>
          <div className="space-y-3 relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-ceyo-accent/40 via-ceyo-border to-transparent" />
            {WEEKS.map((w, i) => (
              <Reveal key={w.w} delay={0.15 + i * 0.08}>
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 relative z-10 mt-1">
                    <div className="h-4 w-4 rounded-full bg-ceyo-ink border-2 border-ceyo-accent" />
                  </div>
                  <div className="flex-1 card p-4">
                    <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                      <span className="font-mono text-[11px] text-ceyo-accent3 tabular">{w.w}</span>
                      <span className="text-ceyo-heading font-semibold">{w.t}</span>
                    </div>
                    <p className="text-sm text-ceyo-muted leading-relaxed">{w.n}</p>
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
