import { ArrowUpRight } from "lucide-react";
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
        <h3 className="md:col-span-7 font-display text-2xl md:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-[-0.015em]">
          Ready when you are. <span className="pull-word">No forms.</span>
        </h3>
        <div className="md:col-span-5 flex flex-col sm:flex-row md:justify-end items-start sm:items-center gap-4">
          <a
            data-testid="footer-cta-candidate"
            href={WA_CANDIDATE}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-5 py-3 border border-ivory/30 text-[13px] tracking-[0.06em] hover:bg-ivory hover:text-navy transition-all"
          >
            candidate <ArrowUpRight size={14} strokeWidth={1.5} className="text-gold" />
          </a>
          <a
            data-testid="footer-cta-employer"
            href={WA_EMPLOYER}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-5 py-3 bg-ivory text-navy text-[13px] tracking-[0.06em] border border-ivory hover:bg-transparent hover:text-ivory transition-all"
          >
            employer <ArrowUpRight size={14} strokeWidth={1.5} className="text-gold" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <a
            href="#top"
            className="font-display text-4xl md:text-5xl tracking-tight leading-none inline-block"
          >
            arcs
          </a>
          <p className="mt-3 font-display italic text-ivory/65 text-lg">assist right</p>
          <p className="mt-6 text-[15px] text-ivory/65 leading-relaxed max-w-sm">
            a recruitment consultancy built for the india that talent maps still scroll past.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 border border-ivory/20 text-[10px] tracking-[0.22em] uppercase text-ivory/60">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            an AR group company · maharashtra
          </div>
        </div>

        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10">
          <Col
            title="candidates"
            index="i"
            items={[
              { label: "join the community", href: WA_COMMUNITY, external: true, testid: "wa-community" },
              { label: "how it works", href: "#how", testid: "how" },
              { label: "whatsapp us", href: WA_CANDIDATE, external: true, testid: "wa-us" },
            ]}
          />
          <Col
            title="employers"
            index="ii"
            items={[
              { label: "hire through arcs", href: "#employers", testid: "hire" },
              { label: "whatsapp partners", href: WA_EMPLOYER, external: true, testid: "wa-partners" },
              { label: "arcsassist@gmail.com", href: "mailto:arcsassist@gmail.com", testid: "email-hello" }            
            ]}
          />
          <Col
            title="contact"
            index="iii"
            items={[
              { label: "arcsassist@gmail.com", href: "mailto:arcsassist@gmail.com", testid: "email-hello" },
              { label: "whatsapp channel", href: WA_CHANNEL, external: true, testid: "wa-channel" },
              { label: "linkedin", href: LINKEDIN, external: true, testid: "linkedin" },
              { label: "instagram", href: INSTAGRAM, external: true, testid: "instagram" },
            ]}
          />
        </div>
      </div>

      <div className="mt-20 pt-6 border-t border-ivory/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] tracking-[0.2em]  text-ivory/45">
        <span>© 2026 arcs · arcsassist.in</span>
        <span className="font-display italic normal-case tracking-normal text-ivory/55 text-sm">
          Built quietly. On purpose.
        </span>
      </div>
    </div>
  </footer>
);
