import { motion } from "framer-motion";

export const HonestNote = () => (
  <section
    id="honest-note"
    data-testid="honest-note-section"
    className="relative bg-ivory text-ink py-24 md:py-36 overflow-hidden grain border-t border-rule"
  >
    <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
      <div className="flex items-center gap-3 mb-8">
        <span className="font-display italic text-gold text-sm">VII</span>
        <span className="h-px w-12 bg-ink/20" />
        <span className="eyebrow text-ink/55">an honest note</span>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.015em] leading-[1.08] text-ink"
      >
        a note on what we <span className="pull-word">don&apos;t</span> do.
      </motion.h2>
      <p className="mt-8 md:mt-12 text-[17px] md:text-lg text-ink/70 leading-relaxed max-w-2xl">
        arcs is built for jobs. we are not, right now, a career guidance service, an overseas
        education consultancy, or a business setup firm — even though those are part of the longer
        plan. we are starting with the vertical we can do well. the others arrive when we can do
        each one properly. if that is what you need today, we will tell you so on the first call,
        and point you elsewhere if we have to.
      </p>

      <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 border-t border-rule">
        {[
          { k: "today", v: "recruitment", status: "active" },
          { k: "soon", v: "career guidance", status: "planned" },
          { k: "later", v: "overseas · biz setup", status: "vision" },
        ].map((it, i) => (
          <div
            key={it.k}
            className={`py-8 px-1 md:px-8 border-b border-rule ${
              i < 2 ? "md:border-r md:border-rule" : ""
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] tracking-[0.22em] uppercase text-ink/40">{it.k}</span>
              {it.status === "active" && (
                <span className="h-1 w-1 rounded-full bg-gold animate-pulse" />
              )}
            </div>
            <p className={`font-display text-xl md:text-2xl ${it.status === "active" ? "text-ink" : "text-ink/40"}`}>
              {it.v}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
