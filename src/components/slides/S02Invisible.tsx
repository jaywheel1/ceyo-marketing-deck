"use client";
import { SectionShell } from "../SectionShell";
import { SplitReveal } from "../primitives/SplitReveal";
import { Reveal } from "../primitives/Reveal";
import { AuroraBlob } from "../primitives/AuroraBlob";
import { Explainer } from "../primitives/Explainer";
import { motion } from "framer-motion";

export function S02Invisible() {
  return (
    <SectionShell id="invisible" eyebrow="So, funny story…" index={2} total={13}>
      <AuroraBlob className="top-[-100px] right-[-160px]" size={580} color="rgba(245,158,11,0.10)" duration={20} />
      <AuroraBlob className="bottom-[-140px] left-[-100px]" size={520} color="rgba(79,70,229,0.16)" duration={26} />

      <div className="mb-6">
        <SplitReveal
          as="h2"
          text="So… I think I found a problem."
          className="text-display-md text-ceyo-heading max-w-5xl"
        />
      </div>

      <Explainer>
        <p>
          Awkward one to open with, but bear with me. While I was researching ceyo.ai for this deck, I ran a small test to see what AI bots actually see when they visit the site.
          Turns out — <strong className="text-ceyo-heading">they kind of see nothing</strong>.
        </p>
        <p>
          Ceyo&apos;s site builds itself with <strong className="text-ceyo-heading">JavaScript</strong> after the page loads, and the crawlers that ChatGPT, Perplexity, and Google AI use to read websites <strong className="text-ceyo-heading">don&apos;t run JavaScript</strong>. So they hit the page, get a blank container back, and move on.
          A GEO platform that&apos;s invisible to GEO. The good news: it&apos;s a <strong className="text-ceyo-heading">configuration change, not a rebuild — fixed in week 1.</strong>
        </p>
      </Explainer>

      <div className="grid lg:grid-cols-2 gap-6 mb-10">
        <Reveal delay={0.3}>
          <div className="card p-5 relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <div className="eyebrow text-ceyo-success">What humans see</div>
              <span className="font-mono text-[10px] text-ceyo-muted">browser · with javascript</span>
            </div>
            <div className="bg-ceyo-paper rounded-lg p-6 min-h-[280px] relative border border-ceyo-borderSoft">
              <div className="flex items-center gap-1.5 mb-4 pb-3 border-b border-ceyo-borderSoft">
                <div className="h-2 w-2 rounded-full bg-ceyo-danger/60" />
                <div className="h-2 w-2 rounded-full bg-ceyo-warn/60" />
                <div className="h-2 w-2 rounded-full bg-ceyo-success/60" />
                <div className="font-mono text-[9px] text-ceyo-muted ml-2">ceyo.ai</div>
              </div>
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-2xl font-semibold text-ceyo-heading leading-tight"
                >
                  Be The Answer<br/>In AI
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="text-xs text-ceyo-text/70 leading-relaxed"
                >
                  Ceyo seamlessly tracks your brand&apos;s visibility across all major AI platforms, giving you actionable insights to dominate the AI-powered search landscape.
                </motion.div>
                <div className="flex gap-2 pt-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                    className="px-3 py-1.5 bg-ceyo-accent rounded text-[10px] text-white font-semibold"
                  >Sign Up</motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.0 }}
                    className="px-3 py-1.5 border border-ceyo-border rounded text-[10px] text-ceyo-text"
                  >Schedule Demo</motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                  className="grid grid-cols-3 gap-1.5 pt-3"
                >
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-12 bg-ceyo-surface rounded border border-ceyo-borderSoft" />
                  ))}
                </motion.div>
              </div>
            </div>
            <div className="mt-3 text-xs text-ceyo-success/90 font-mono">✓ Headlines, copy, CTAs, full design — all visible</div>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="card p-5 relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <div className="eyebrow text-ceyo-danger">What AI bots actually see</div>
              <span className="font-mono text-[10px] text-ceyo-muted">live scan · curl as GPTBot</span>
            </div>
            <div className="bg-ceyo-paper rounded-lg p-5 min-h-[280px] border border-ceyo-borderSoft font-mono text-[11px] leading-relaxed text-ceyo-text/85 overflow-x-auto">
              <motion.pre
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="whitespace-pre-wrap"
              >
<span className="text-ceyo-muted">&lt;!doctype html&gt;</span>{"\n"}
<span className="text-ceyo-blue">&lt;html</span> <span className="text-ceyo-accent3">lang</span>=<span className="text-ceyo-success">"en"</span><span className="text-ceyo-blue">&gt;</span>{"\n"}
{"  "}<span className="text-ceyo-blue">&lt;head&gt;</span>{"\n"}
{"    "}<span className="text-ceyo-muted">&lt;meta</span> <span className="text-ceyo-accent3">name</span>=<span className="text-ceyo-success">"description"</span>{"\n"}
{"      "}<span className="text-ceyo-accent3">content</span>=<span className="text-ceyo-success">"Ceyo - Track Your Brand's AI Visibility"</span><span className="text-ceyo-muted">&gt;</span>{"\n"}
{"    "}<span className="text-ceyo-blue">&lt;title&gt;</span><span className="text-ceyo-text">Ceyo</span><span className="text-ceyo-blue">&lt;/title&gt;</span>{"\n"}
{"    "}<span className="text-ceyo-muted">&lt;script src="/assets/index.js"&gt;&lt;/script&gt;</span>{"\n"}
{"  "}<span className="text-ceyo-blue">&lt;/head&gt;</span>{"\n"}
{"  "}<span className="text-ceyo-blue">&lt;body&gt;</span>{"\n"}
{"    "}<span className="text-ceyo-danger font-semibold">&lt;div id="root"&gt;&lt;/div&gt;</span>{"\n"}
{"  "}<span className="text-ceyo-blue">&lt;/body&gt;</span>{"\n"}
<span className="text-ceyo-blue">&lt;/html&gt;</span>
              </motion.pre>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 }}
                className="text-[10.5px] text-ceyo-muted mt-4 italic border-t border-ceyo-borderSoft pt-3"
              >
                That empty <span className="text-ceyo-danger font-mono">&lt;div id=&quot;root&quot;&gt;&lt;/div&gt;</span> is the entire body. The page content gets injected later by JavaScript that bots don&apos;t run.
              </motion.div>
            </div>
            <div className="mt-3 text-xs text-ceyo-danger/90 font-mono">✗ Just a title and meta description. No headlines, no copy, no nothing.</div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.8}>
        <div className="card p-6 mb-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <div>
              <div className="eyebrow text-ceyo-accent3 mb-2">How I tested this</div>
              <p className="text-sm text-ceyo-text/85 leading-relaxed">
                I ran a script against <strong className="text-ceyo-heading">ceyo.ai</strong> with JavaScript turned off — same way most AI crawlers see the web.
                The page returned the literal string <strong className="text-ceyo-danger">&quot;Ceyo&quot;</strong> and nothing else.
              </p>
            </div>
            <div>
              <div className="eyebrow text-ceyo-accent3 mb-2">Which AI bots can&apos;t read JS</div>
              <ul className="space-y-1.5 text-sm text-ceyo-text/85">
                <li>• <strong className="text-ceyo-heading">GPTBot</strong> (ChatGPT&apos;s crawler) — no JS</li>
                <li>• <strong className="text-ceyo-heading">Google-Extended</strong> (Gemini) — limited JS</li>
                <li>• <strong className="text-ceyo-heading">PerplexityBot</strong> — inconsistent JS</li>
                <li>• <strong className="text-ceyo-heading">ClaudeBot</strong> (Anthropic) — no JS</li>
              </ul>
            </div>
            <div>
              <div className="eyebrow text-ceyo-accent3 mb-2">The fix</div>
              <p className="text-sm text-ceyo-text/85 leading-relaxed">
                Switch to <strong className="text-ceyo-heading">server-side rendering</strong> or <strong className="text-ceyo-heading">pre-rendering</strong> for every public page.
                Ceyo&apos;s already on Next.js — this is a <strong className="text-ceyo-heading">configuration change</strong>, not a rebuild.
                Done in <strong className="text-ceyo-heading">week 1</strong>.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={1}>
        <div className="p-5 border-l-2 border-ceyo-accent bg-ceyo-surface/40 rounded-r">
          <p className="text-sm text-ceyo-text/90 leading-relaxed">
            <strong className="text-ceyo-heading">Bonus side effect:</strong> the moment we fix it, we publish a self-aware post —
            <em className="text-ceyo-accent3"> &quot;We&apos;re a GEO company. Our own site failed our visibility test. Here&apos;s how we fixed it.&quot;</em>
            That story becomes the launch moment for everything else in this deck — <strong className="text-ceyo-heading">Ceyo Scan, Reddit, content, all of it</strong>. The irony does the heavy lifting.
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
