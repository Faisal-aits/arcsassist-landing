import { ArrowUpRight } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  WA_CANDIDATE,
  WA_EMPLOYER,
  WA_COMMUNITY,
  WA_CHANNEL,
  EMAIL_HELLO,
  EMAIL_PARTNERS,
  LINKEDIN,
  INSTAGRAM,
} from "../data/content";
import footerLogo from "../assets/arcs full website.png";

const Col = ({ title, index, items }) => (
  <div>
    <div className="flex items-center gap-2 mb-5">
      <span className="eyebrow text-ivory/55">{title}</span>
    </div>
    <ul className="space-y-3">
      {items.map((it) => (
        <li key={it.label}>
          <a
            data-testid={`footer-${it.testid}`}
            href={it.href}
            target={it.external ? "_blank" : undefined}
            rel={it.external ? "_balanced" : undefined}
            className="group inline-flex items-center gap-2 text-[15px] text-ivory/85 hover:text-gold transition-colors"
          >
            {it.label}
            <ArrowUpRight
              size={13}
              strokeWidth={1.5}
              className="text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer = () => (
  <footer
    id="contact"
    data-testid="footer"
    className="bg-navy text-ivory pt-24 md:pt-28 pb-10 grain relative"
  >
    <span aria-hidden className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />

    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="mb-20 md:mb-24 grid grid-cols-1 md:grid-cols-12 gap-8 pb-16 md:pb-20 border-b border-ivory/15">
        <h3 className="md:col-span-7 font-sans normal-case text-2xl md:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-[-0.015em]">
          Ready when you are. <span className="pull-word">No forms.</span>
        </h3>
        <div className="md:col-span-5 flex flex-col sm:flex-row md:justify-end items-start sm:items-center gap-4">
          <a
            data-testid="footer-cta-contact"
            href={EMAIL_HELLO}
            className="group inline-flex items-center gap-3 px-5 py-3 border border-ivory/30 text-[13px] tracking-[0.06em] hover:bg-ivory hover:text-navy transition-all"
          >
            contact us <ArrowUpRight size={14} strokeWidth={1.5} className="text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="flex items-end -ml-8 md:-ml-20">
            <a
              href="#top"
              className="flex items-center leading-none inline-block"
              aria-label="arcs — home"
            >
              <img
                src={footerLogo}
                alt="arcs"
                className="h-20 md:h-32 w-auto object-contain scale-[2] md:scale-[2.5] origin-left brightness-0 invert"
              />
            </a>
          </div>
          <p className="mt-6 text-[15px] text-ivory/65 leading-relaxed max-w-sm">
            A recruitment consultancy built for the india that talent maps still scroll past.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 border border-ivory/20 text-[10px] tracking-[0.22em] uppercase text-ivory/60">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            maharashtra
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col md:items-end">
          <ul className="space-y-4 text-right">
            <li>
              <a href={EMAIL_HELLO} className="group inline-flex items-center gap-2 text-[15px] text-ivory/85 hover:text-gold transition-colors">
                Contact us
                <ArrowUpRight size={13} strokeWidth={1.5} className="text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </li>
            <li>
              <a href={WA_COMMUNITY} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-[15px] text-ivory/85 hover:text-gold transition-colors">
                Join the community
                <ArrowUpRight size={13} strokeWidth={1.5} className="text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </li>
            <li>
              <span className="inline-flex items-center gap-2 text-[15px] text-ivory/85">
                office @ arcsassist
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-20 pt-6 border-t border-ivory/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] tracking-[0.2em]  text-ivory/45">
        <div className="flex items-center gap-4">
          <span>© 2026 arcs · arcsassist.in</span>
          <div className="flex items-center gap-3">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" aria-label="Instagram">
              <FaInstagram size={16} />
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={16} />
            </a>
          </div>
        </div>
        <span className="font-sans normal-case tracking-normal text-ivory/55 text-[13px]">
          Built quietly. On Purpose by{" "}
          <a href="https://www.instagram.com/pushbrandingstudio?igsh=MW5sdHo0dDJuMmhhdQ==" target="_blank" rel="noopener noreferrer" className="underline hover:text-ivory transition-colors">
            PUSH Branding Studio
          </a>
        </span>
      </div>
    </div>
  </footer>
);
