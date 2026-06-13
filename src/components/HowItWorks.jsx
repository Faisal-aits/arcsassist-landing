import { motion } from "framer-motion";
import { STEPS } from "../data/content";

export const HowItWorks = () => (
  <section
    id="how"
    data-testid="how-section"
    className="bg-ivory py-24 md:py-36"
  >
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="eyebrow text-ink/55">how it works</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-[-0.015em] leading-[1.08] text-ink max-w-xl">
            Three steps. <span className="pull-word">No theatre.</span>
          </h2>
        </div>
        <p className="text-sm text-ink/55 max-w-xs md:text-right leading-relaxed">
          a deliberate, human process — not a funnel.
          <br />
          <span className="font-display italic text-ink/40">approx. 3 weeks · per candidate</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-12 relative">
        <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-rule" aria-hidden />
        {STEPS.map((s, i) => (
          <motion.article
            key={s.n}
            data-testid={`step-${s.n}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.1 }}
            className="relative md:pt-12 group"
          >
            <div className="flex items-baseline justify-between mb-6 md:mb-8">
              <span className="font-display text-gold text-3xl md:text-4xl">{s.n}</span>
            </div>
            <h3 className="font-display text-xl md:text-[26px] text-ink leading-snug tracking-[-0.01em]">
              {s.title}
            </h3>
            <p className="mt-4 text-[15px] text-ink/70 leading-relaxed max-w-sm">{s.body}</p>
            <span className="block mt-8 h-px w-12 bg-ink/20 transition-all duration-500 group-hover:w-24 group-hover:bg-gold" />
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
