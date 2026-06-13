import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FACTS, WA_EMPLOYER } from "../data/content";

export const Employers = () => (
  <section
    id="employers"
    data-testid="employers-section"
    className="relative bg-ivory py-24 md:py-36 border-t border-rule overflow-hidden grain"
  >
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
      <div className="lg:col-span-7">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-display italic text-gold text-sm">V</span>
          <span className="h-px w-12 bg-ink/20" />
          <span className="eyebrow text-ink/55">for employers</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.015em] leading-[1.05] text-ink"
        >
          you are tired of <span className="pull-word">metro agency</span> rates. we are tired of{" "}
          <span className="pull-word">metro agency</span> output.
        </motion.h2>
        <p className="mt-10 text-[17px] md:text-lg text-ink/70 leading-relaxed max-w-2xl">
          we work with small and growing companies in tier 2 and tier 3 india who want good people
          without paying premium recruitment fees. our candidates arrive coached, vetted, and ready
          to interview — not raw resumes passed through a queue.
        </p>
        <a
          data-testid="employers-cta"
          href={WA_EMPLOYER}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-12 inline-flex items-center gap-4 pl-8 pr-6 py-4 bg-navy text-ivory text-[13px] tracking-[0.08em] border border-navy hover:bg-transparent hover:text-navy transition-all duration-500 shadow-xl shadow-navy/5"
        >
          <span className="lowercase font-medium">talk to us about hiring</span>
          <ArrowRight size={18} strokeWidth={1.5} className="text-gold group-hover:translate-x-1.5 transition-transform" />
        </a>
      </div>

      <aside
        data-testid="facts-panel"
        className="lg:col-span-5 self-start w-full bg-white/50 backdrop-blur-sm p-8 md:p-10 border border-ink/5 shadow-2xl shadow-ink/5"
      >
        <div className="border-b border-ink/10 pb-4 mb-6">
          <div className="flex items-center justify-between text-[10px] tracking-[0.25em] uppercase text-ink/40">
            <span className="font-display italic text-gold not-italic-tracking">§ commercials</span>
            <span>arcs · 2026</span>
          </div>
        </div>
        <ul className="space-y-6">
          {FACTS.map((f, i) => (
            <li
              key={f.k}
              className="group"
            >
              <div className="flex items-baseline gap-4 mb-1">
                 <span className="font-display italic text-gold text-xs">0{i + 1}</span>
                 <span className="text-[10px] tracking-[0.18em] uppercase text-ink/50">{f.k}</span>
              </div>
              <p className="font-display text-xl md:text-2xl text-ink leading-tight tracking-tight pl-7">
                {f.v}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-10 pt-6 border-t border-ink/5 text-[10px] tracking-[0.16em] uppercase text-ink/40 leading-relaxed">
          * no retainer · no minimums <br />
          * invoiced only upon successful hire
        </div>
      </aside>
    </div>
  </section>
);
