import { motion } from "framer-motion";

export const Position = () => {
  return (
    <section className="bg-ivory py-24 md:py-36 border-b border-rule">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="eyebrow mb-8 text-ink/60 text-xs tracking-[0.2em] uppercase">
          our position
        </div>
        
        <h2 className="font-sans normal-case text-4xl sm:text-5xl md:text-6xl text-navy leading-[1.1] tracking-[-0.02em] mb-12 font-medium">
          Ambition is everywhere. <span className="italic text-gold">Guidance is not.</span>
        </h2>
        
        <p className="text-base md:text-[17px] leading-[1.7] text-ink/80 max-w-[650px] mb-20 lowercase">
          we are a consultancy built for the india that talent maps still scroll past and the employers smart enough to hire from it.
        </p>
        
        <div className="border-t border-rule pt-6 flex justify-end items-center">
          <div className="italic text-ink/50 text-[13px] md:text-sm">
            Maharashtra · India
          </div>
        </div>
      </div>
    </section>
  );
};
