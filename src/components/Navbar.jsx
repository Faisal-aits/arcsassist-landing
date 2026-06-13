import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, WA_CANDIDATE } from "../data/content";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-xl border-b border-rule"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          data-testid="nav-logo"
          className="flex items-baseline gap-2 font-display text-2xl md:text-[26px] tracking-tight text-ink leading-none"
          aria-label="arcs — home"
        >
          <span>arcs</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                data-testid={`nav-link-${l.href.replace("#", "")}`}
                href={l.href}
                className="text-[13px] text-ink/75 hover:text-ink transition-colors lowercase tracking-wide relative group"
              >
                {l.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <span className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-ink/55">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold" />
            </span>
            open to enquiries
          </span>
          <a
            data-testid="nav-cta"
            href={WA_CANDIDATE}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-ivory text-[13px] tracking-wide hover:bg-ink transition-colors"
          >
            whatsapp us
            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>

        <button
          data-testid="nav-mobile-toggle"
          className="md:hidden p-2 -mr-2 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        data-testid="nav-mobile-panel"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out bg-ivory border-b border-rule ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              data-testid={`nav-mobile-link-${l.href.replace("#", "")}`}
              className="flex items-center gap-3 text-base text-ink/85 lowercase tracking-wide border-b border-rule/70 pb-3"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_CANDIDATE}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            data-testid="nav-mobile-cta"
            className="mt-2 inline-flex items-center justify-between px-5 py-3.5 bg-navy text-ivory text-sm tracking-wide"
          >
            whatsapp us
            <ArrowUpRight size={16} strokeWidth={1.5} className="text-gold" />
          </a>
        </div>
      </div>
    </header>
  );
};
