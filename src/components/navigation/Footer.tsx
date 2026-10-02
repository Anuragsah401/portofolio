import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { socialData } from '../../data/social';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          {/* Identity */}
          <div>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2.5 font-mono text-base font-semibold tracking-wider text-text-primary"
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span>{socialData.name}</span>
            </Link>
            <p className="mt-1.5 font-mono text-xs text-text-secondary">
              {socialData.role}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={socialData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 font-mono text-xs text-text-secondary transition-colors hover:text-text-primary"
            >
              <span>GitHub</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </a>

            <a
              href={socialData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 font-mono text-xs text-text-secondary transition-colors hover:text-text-primary"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </a>

            <a
              href={`mailto:${socialData.email}`}
              className="group inline-flex items-center gap-1 font-mono text-xs text-text-secondary transition-colors hover:text-text-primary"
            >
              <span>Email</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </a>
          </div>

          {/* Copyright */}
          <div className="font-mono text-xs text-text-muted">
            © {currentYear} {socialData.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
