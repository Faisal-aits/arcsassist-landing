export const Partners = () => {
  const PARTNERS = ["HDFC", "SBI", "AXIS", "ICICI", "KOTAK", "BAJAJ", "TATA", "RELIANCE"];

  return (
    <section className="bg-ivory py-16 md:py-24 border-t border-rule overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
        <div className="flex items-center gap-3">
          <span className="eyebrow text-ink/55">our partners</span>
        </div>
      </div>
      
      <div className="marquee-container relative flex whitespace-nowrap overflow-hidden">
        {/* Track 1 */}
        <div className="animate-marquee flex items-center shrink-0 gap-16 md:gap-32 pr-16 md:pr-32">
          {PARTNERS.map((p, i) => (
            <span key={`${p}-${i}`} className="font-display text-2xl md:text-3xl text-ink/40 font-medium">
              {p}
            </span>
          ))}
        </div>
        
        {/* Track 2 */}
        <div className="animate-marquee flex items-center shrink-0 gap-16 md:gap-32 pr-16 md:pr-32" aria-hidden="true">
          {PARTNERS.map((p, i) => (
            <span key={`${p}-dup-${i}`} className="font-display text-2xl md:text-3xl text-ink/40 font-medium">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
