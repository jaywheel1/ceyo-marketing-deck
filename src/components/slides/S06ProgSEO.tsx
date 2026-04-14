"use client";
import { SectionShell } from "../SectionShell";
import { SplitReveal } from "../primitives/SplitReveal";
import { NumberTicker } from "../primitives/NumberTicker";
import { Reveal } from "../primitives/Reveal";
import { AuroraBlob } from "../primitives/AuroraBlob";
import { BorderBeam } from "../primitives/BorderBeam";

const PAGE_TYPES = [
  { url: "/vs/[competitor]", desc: "Head-to-head vs Profound, Peec, AthenaHQ, Otterly, Semrush, Ahrefs" },
  { url: "/alternatives-to-[x]", desc: "Ranked lists where Ceyo is one of several honest options" },
  { url: "/best-[category]-geo-tool", desc: "Category-specific: B2B SaaS, ecommerce, agencies, fintech" },
  { url: "/[industry]-ai-search-playbook", desc: "Industry-specific playbooks with real probe data" },
  { url: "/scan/[brand]", desc: "Public pages driven by free-tool usage, feeds back here" },
];

const WEEKS = [
  { w: "Week 1–2", t: "Architecture", n: "Define 5 page types. Each gets its own Claude Code agent that researches per-URL — not template substitution." },
  { w: "Week 3", t: "Agent generation", n: "Per-URL agent pulls real citation probe data, writes unique copy, voice-matches. Published through blog CMS." },
  { w: "Week 4", t: "Publication ramp", n: "20 pages per week minimum. Internal links, FAQ schema, comparison tables. Each backed by real Ceyo data." },
  { w: "Month 2", t: "Scale", n: "200+ pages live. Schema.org JSON-LD on each. Every page links to Ceyo Scan for the brand/category mentioned." },
  { w: "Month 3", t: "Refresh loop", n: "500+ pages. Monthly refresh agent re-pulls live data. Page-level ranking monitoring for Google + AI citations." },
];

export function S06ProgSEO() {
  return (
    <SectionShell id="prog-seo" eyebrow="Owned real estate" index={6} total={10}>
      <AuroraBlob className="bottom-[-140px] left-[-100px]" size={500} />

      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
        <div>
          <SplitReveal
            as="h2"
            text="Programmatic SEO with real research agents per URL."
            className="text-display-md text-ceyo-heading mb-8"
          />

          <Reveal delay={0.3}>
            <p className="text-lg text-ceyo-text/85 leading-relaxed mb-6">
              Stormy AI used Claude Code with a research agent per URL — not template substitution.
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
                  <div className="text-xs text-ceyo-muted">conversion lift</div>
                </div>
                <div>
                  <div className="tabular text-ceyo-accent3 text-2xl font-semibold">
                    −<NumberTicker value={45} suffix="%" />
                  </div>
                  <div className="text-xs text-ceyo-muted">cheaper acquisition</div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-ceyo-borderSoft text-[11px] text-ceyo-muted/80">Source: Stormy AI / Omnius programmatic SEO case study</div>
            </div>
          </Reveal>

          <Reveal delay={0.55}>
            <div className="card-quiet p-4">
              <div className="eyebrow text-ceyo-muted mb-3">Page architecture</div>
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

          <Reveal delay={0.7}>
            <div className="mt-6 p-4 border-l-2 border-ceyo-accent bg-ceyo-surface/40 rounded-r">
              <p className="text-sm text-ceyo-text/90 leading-relaxed">
                I own the architecture, agent prompts, voice, CMS publishing, internal linking strategy. Engineering supports the orchestration infrastructure.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
