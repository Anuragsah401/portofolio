import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { socialData } from '../../data/social';
import { smoothScrollTo } from '../../utils/smoothScroll';

export function FloatingAssistantBadge() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
          className="editorial-card mb-3 w-72 p-4"
        >
          <div className="flex items-center justify-between border-b border-border-subtle pb-2">
            <span className="font-mono text-xs font-bold text-text-primary">
              ANURAG SAH // ONLINE
            </span>
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
          </div>
          <p className="mt-2.5 text-xs font-medium leading-relaxed text-text-secondary">
            Available for AI product building, SaaS engineering, and full-stack architecture.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="editorial-btn-primary flex-1 py-2 text-center font-mono text-[11px] font-bold"
            >
              Message me
            </Link>
            <a
              href={`mailto:${socialData.email}`}
              className="editorial-btn-outline inline-flex items-center justify-center p-2"
              aria-label="Send direct email"
            >
              <Mail className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>
      )}

      {/* Circular Monochrome Badge with Live Green Dot */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle availability card"
        className="gpu-layer relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-border-strong bg-[#151515] text-white shadow-[4px_4px_0px_0px_var(--accent-primary)] transition-transform duration-150 hover:scale-105 active:scale-95"
      >
        <span className="font-mono text-sm font-extrabold tracking-tighter">AS</span>
        <span
          aria-hidden="true"
          className="absolute bottom-0.5 left-0.5 h-3.5 w-3.5 rounded-full border-2 border-bg-primary bg-emerald-500"
        />
      </button>
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-border-strong bg-bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          {/* Identity */}
          <div>
            <Link
              to="/"
              onClick={() => smoothScrollTo(0, 950)}
              className="inline-flex items-center gap-2.5 text-lg font-extrabold tracking-tight text-text-primary"
            >
              <span className="h-3 w-3 rounded-full bg-accent" />
              <span>{socialData.name}</span>
            </Link>
            <p className="mt-1 font-mono text-xs font-semibold text-text-secondary">
              {socialData.role}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={socialData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 font-mono text-xs font-bold text-text-primary transition-colors hover:text-accent"
            >
              <span>GitHub</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <a
              href={socialData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 font-mono text-xs font-bold text-text-primary transition-colors hover:text-accent"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <a
              href={`mailto:${socialData.email}`}
              className="group inline-flex items-center gap-1 font-mono text-xs font-bold text-text-primary transition-colors hover:text-accent"
            >
              <span>Email</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="font-mono text-xs font-medium text-text-muted">
            © {currentYear} {socialData.name}
          </div>
        </div>
      </div>
      <FloatingAssistantBadge />
    </footer>
  );
}
