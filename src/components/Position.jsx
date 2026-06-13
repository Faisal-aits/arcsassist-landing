import { motion } from "framer-motion";

export const Position = () => (
  <section
    id="position"
    data-testid="position-section"
    className="bg-ivory py-24 md:py-36 lg:py-44 border-b border-rule"
  >
    <div className="max-w-5xl mx-auto px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-8"
      >
        <span className="eyebrow text-ink/55">our position</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08] tracking-[-0.015em] text-ink max-w-4xl"
      >
        Ambition is everywhere. <span className="pull-word">Guidance is not.</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="mt-8 md:mt-10 max-w-2xl text-base md:text-[17px] text-ink/70 leading-relaxed"
      >
        we are a consultancy built for the india that talent maps still scroll past — and the
        employers smart enough to hire from it.
      </motion.p>

      <div className="mt-16 md:mt-20 pt-6 border-t border-rule flex flex-wrap items-center justify-between gap-4 text-[11px] tracking-[0.2em] uppercase text-ink/50">
        <span>issued by arcs editorial</span>
        <span className="font-display italic normal-case tracking-normal text-ink/60">
          Maharashtra · India
        </span>
      </div>
    </div>
  </section>
);
