import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HERO } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: i * 0.08 },
  }),
};

const Headline = ({ parts, theme }) => (
  <h1
    className={`font-display tracking-[-0.015em] leading-[1.02] text-[2.25rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] ${
      theme === "dark" ? "text-ivory" : "text-ink"
    }`}
  >
    {parts[0]}{" "}
    <span className="pull-word">{parts[1]}</span>{" "}
    {parts[2]}
  </h1>
);

const Side = ({ data, theme, testidPrefix, index }) => {
  const dark = theme === "dark";
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeUp}
      className={`relative flex flex-col justify-between py-16 md:py-24 lg:py-32 min-h-[70vh] md:min-h-[92vh] ${
        dark
          ? "px-6 sm:px-10 md:pl-24 lg:pl-32 md:pr-12 lg:pr-20 bg-navy text-ivory"
          : "px-6 sm:px-10 md:px-12 lg:px-20 bg-ivory text-ink"
      }`}
      data-testid={`${testidPrefix}-side`}
    >
      <div className="flex items-center justify-between">
        <motion.div
          variants={fadeUp}
          custom={0}
          className={`flex items-center gap-3 ${dark ? "text-ivory/55" : "text-ink/55"}`}
        >
          <span className="eyebrow">{data.eyebrow}</span>
        </motion.div>
      </div>

      <motion.div variants={fadeUp} custom={1} className="my-12 md:my-0 max-w-xl">
        <Headline parts={data.headline} theme={theme} />
        <p
          className={`mt-7 md:mt-9 text-[15px] md:text-[16px] leading-relaxed max-w-md ${
            dark ? "text-ivory/72" : "text-ink/72"
          }`}
        >
          {data.sub}
        </p>
      </motion.div>

      <motion.div variants={fadeUp} custom={2} className="flex flex-col gap-5">
        <a
          data-testid={`${testidPrefix}-cta`}
          href={data.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group inline-flex items-center justify-between sm:justify-start gap-4 self-stretch sm:self-start pl-6 pr-5 py-4 sm:py-3.5 text-[13px] tracking-[0.06em] transition-all duration-300 border ${
            dark
              ? "bg-ivory text-navy border-ivory hover:bg-transparent hover:text-ivory"
              : "bg-navy text-ivory border-navy hover:bg-transparent hover:text-navy"
          }`}
        >
          <span className="lowercase font-medium">{data.cta}</span>
          <ArrowRight
            size={16}
            strokeWidth={1.5}
            className="text-gold transition-transform group-hover:translate-x-1"
          />
        </a>
        <span
          className={`text-[10px] tracking-[0.22em] uppercase flex items-center gap-2 ${
            dark ? "text-ivory/45" : "text-ink/45"
          }`}
        >
          <span className="h-1 w-1 rounded-full bg-gold" />
          via whatsapp · usually replies within 4 hrs
        </span>
      </motion.div>

      <div
        aria-hidden
        className={`hidden md:block absolute bottom-10 right-10 font-display italic text-xs ${
          dark ? "text-ivory/30" : "text-ink/30"
        }`}
      >
        {testidPrefix === "hero-candidates" ? "[i]" : "[ii]"}
      </div>
    </motion.div>
  );
};

const TICKER_ITEMS = [
  { id: "01", text: "100+ candidates coached" },
  { id: "02", text: "90-day replacement" },
  { id: "03", text: "1/5th metro agency cost" },
  { id: "04", text: "tier 3 & 4 india focus" },
];

export const Hero = () => (
  <section id="top" data-testid="hero" className="pt-16 md:pt-20">
    <div className="relative grid grid-cols-1 md:grid-cols-2">
      <Side data={HERO.candidates} theme="light" testidPrefix="hero-candidates" index="01" />
      <Side data={HERO.employers} theme="dark" testidPrefix="hero-employers" index="02" />

      <div
        aria-hidden
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 items-center justify-center pointer-events-none"
      >
        <div className="flex overflow-hidden rounded-full border-2 border-gold shadow-[0_0_0_5px_rgba(197,163,88,0.25)] whitespace-nowrap font-display text-[11px] tracking-[0.25em] uppercase">
          <span className="bg-navy text-ivory px-5 py-2">assist</span>
          <span className="bg-ivory text-navy px-5 py-2">right</span>
        </div>
      </div>
    </div>

    <div className="bg-ink text-ivory marquee-container relative overflow-hidden py-5 border-y border-rule/10">
      {/* Left/Right Fading Gradients for Premium Look */}
      <div className="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap select-none overflow-hidden">
        {/* Track 1 */}
        <div className="animate-marquee flex items-center shrink-0 gap-16 md:gap-24 pr-16 md:pr-24">
          {TICKER_ITEMS.map((item, index) => (
            <div key={`${item.id}-${index}`} className="flex items-baseline gap-3">
              <span className="font-display text-gold italic">{item.id}</span>
              <span className="text-ivory/70 tracking-[0.16em] uppercase text-[11px]">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate for seamless loop) */}
        <div className="animate-marquee flex items-center shrink-0 gap-16 md:gap-24 pr-16 md:pr-24" aria-hidden="true">
          {TICKER_ITEMS.map((item, index) => (
            <div key={`${item.id}-dup-${index}`} className="flex items-baseline gap-3">
              <span className="font-display text-gold italic">{item.id}</span>
              <span className="text-ivory/70 tracking-[0.16em] uppercase text-[11px]">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="bg-ivory border-b border-rule">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-wrap items-center justify-between gap-3 text-[11px] tracking-[0.2em] uppercase text-ink/50">
        <span>arcsassist.in</span>
        <span className="hidden md:inline">an AR group company</span>
        <span>rooted in maharashtra · 2026</span>
      </div>
    </div>
  </section>
);
