import { motion } from "framer-motion";

export const AboutUs = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="about" data-testid="about-section" className="bg-ivory py-24 md:py-36 border-b border-rule">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-24 items-start">
          <div className="md:col-span-5">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="eyebrow mb-8 text-ink/60"
            >
              <span className="text-gold">●</span> about arcs
            </motion.div>
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="font-sans normal-case text-4xl sm:text-5xl md:text-6xl text-navy leading-[1.05] tracking-[-0.02em] mb-8 font-medium"
            >
              Built <em className="italic text-gold font-medium">quietly.</em><br/>
              Built <em className="italic text-gold font-medium">on purpose.</em>
            </motion.h2>
          </div>

          <div className="md:col-span-7">
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="text-base md:text-[17px] leading-[1.7] text-ink/80 max-w-[540px]"
            >
              We started arcs because the gap between ambition and a real job is often not about talent. It is about who you know, where you grew up, and whether anyone in your life has done the work before you.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="w-10 h-px bg-navy/40 my-8"
            />
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="text-base md:text-[17px] leading-[1.7] text-ink/80 max-w-[540px]"
            >
              We are a small team, working from maharashtra, helping ambitious people who do not always have the shortcuts other candidates have. Freshers building their first careers. Employers who want good people without the metro markup.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="w-10 h-px bg-navy/40 my-8"
            />
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="text-lg text-navy font-medium max-w-[540px]"
            >
              We will not be the loudest consultancy you have heard of. We are trying to be the most honest.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
