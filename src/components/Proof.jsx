import { motion } from "framer-motion";
import { PROOF } from "../data/content";

export const Proof = () => (
  <section
    id="why"
    data-testid="proof-section"
    className="bg-mist py-24 md:py-36"
  >
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-16 md:mb-20">
        <div className="md:col-span-7">
          <div className="flex items-center gap-3 mb-6">
            <span className="eyebrow text-navy/60">why <span className="lowercase">arcs</span></span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-[-0.015em] leading-[1.08] text-navy">
            The difference between <span className="pull-word">found</span> and{" "}
            <span className="pull-word">placed.</span>
          </h2>
        </div>
        <p className="md:col-span-5 self-end text-base md:text-[17px] text-navy/70 leading-relaxed">
          most recruitment firms find candidates. we build them. that is the difference between a
          quick placement and a real career.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-navy/20">
        {PROOF.map((p, i) => (
          <motion.article
            key={p.n}
            data-testid={`proof-${p.n}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, ease: "easeOut", delay: (i % 2) * 0.08 }}
            className={`group py-12 md:py-14 px-2 md:px-10 border-b border-navy/20 transition-colors duration-300 hover:bg-white/40 ${
              i % 2 === 0 ? "md:border-r md:border-navy/20" : ""
            }`}
          >
            <div className="flex items-baseline justify-between mb-6">
              <span className="font-display italic text-gold text-base">{p.n} · {p.title.split(" ").slice(0, 2).join(" ")}…</span>
              <span className="text-[10px] tracking-[0.22em] uppercase text-navy/40">
                principle
              </span>
            </div>
            <h3 className="font-display text-xl md:text-[26px] text-navy leading-snug tracking-[-0.01em] mb-4">
              {p.title}
            </h3>
            <p className="text-[15px] text-navy/70 leading-relaxed max-w-md">
              {p.body}
            </p>
            <span className="block mt-6 h-px w-10 bg-navy/30 transition-all duration-500 group-hover:w-20 group-hover:bg-gold" />
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
