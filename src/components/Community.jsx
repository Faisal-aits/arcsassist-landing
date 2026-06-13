import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WA_COMMUNITY } from "../data/content";

export const Community = () => (
  <section
    id="community"
    data-testid="community-section"
    className="relative bg-navy text-ivory py-24 md:py-36 overflow-hidden grain"
  >
    <span aria-hidden className="absolute top-6 right-6 text-ivory/30 font-display italic text-xs">arcs · 2026</span>

    <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="h-px w-12 bg-ivory/25" />
        <span className="eyebrow text-ivory/60">the <span className="lowercase">arcs</span> job assist community</span>
        <span className="h-px w-12 bg-ivory/25" />
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08] tracking-[-0.015em]"
      >
        One whatsapp group. <span className="pull-word">Real roles.</span> Real coaching.
      </motion.h2>
      <p className="mt-8 max-w-2xl mx-auto text-base md:text-[17px] text-ivory/72 leading-relaxed">
        join 100+ candidates being actively matched to openings. no spam. no group floods. just the
        matches that fit you, with a real human handling the introduction.
      </p>
      <a
        data-testid="community-cta"
        href={WA_COMMUNITY}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-10 inline-flex items-center gap-3 pl-7 pr-6 py-4 bg-ivory text-navy text-[13px] tracking-[0.06em] border border-ivory hover:bg-transparent hover:text-ivory transition-all duration-300"
      >
        <span className="lowercase font-medium">join the community</span>
        <ArrowRight size={16} strokeWidth={1.5} className="text-gold group-hover:translate-x-1 transition-transform" />
      </a>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] tracking-[0.22em] uppercase text-ivory/45">
        <span>· no spam ·</span>
        <span>· vetted matches ·</span>
        <span>· human handled ·</span>
      </div>
    </div>
  </section>
);
