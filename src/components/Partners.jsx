export const Partners = () => {
  const PARTNERS = Array(8).fill("HDFC");

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
          {PARTNERS.map((_, i) => (
            <img 
              key={`track1-${i}`} 
              src="https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg" 
              alt="HDFC Bank" 
              className="h-8 md:h-12 w-auto object-contain" 
            />
          ))}
        </div>
        
        {/* Track 2 */}
        <div className="animate-marquee flex items-center shrink-0 gap-16 md:gap-32 pr-16 md:pr-32" aria-hidden="true">
          {PARTNERS.map((_, i) => (
            <img 
              key={`track2-${i}`} 
              src="https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg" 
              alt="HDFC Bank" 
              className="h-8 md:h-12 w-auto object-contain" 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
