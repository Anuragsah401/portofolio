import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { HeroSystemVisual } from './HeroSystemVisual';

export function Hero() {
  const scrollToSection = (id: string, e: React.MouseEvent) => {
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden border-b border-border-subtle bg-architectural-grid pt-10 pb-20 md:pt-16 md:pb-28">
      {/* Subtle radial vignette so the grid feels refined */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg-primary/40 via-transparent to-bg-primary"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Editorial Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            {/* Status Pill */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-sm border border-border-strong bg-bg-elevated px-3 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span className="font-mono text-xs font-medium tracking-wide text-text-secondary">
                AI Product Builder · Full-Stack Product Engineer
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-semibold leading-[1.06] tracking-tightest text-text-primary sm:text-5xl md:text-6xl lg:text-[64px]">
              I build digital products{' '}
              <span className="font-display italic font-normal text-accent">
                with AI.
              </span>
            </h1>

            {/* Supporting Message */}
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl">
              I turn ideas, business problems, and opportunities into modern digital
              products, intelligent systems, and scalable web applications.
            </p>

            {/* Positioning Bar */}
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-wider text-text-muted">
              <span className="text-text-primary">Product thinking</span>
              <span className="text-accent">·</span>
              <span className="text-text-primary">AI-assisted development</span>
              <span className="text-accent">·</span>
              <span className="text-text-primary">Full-stack engineering</span>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href="#work"
                onClick={(e) => scrollToSection('work', e)}
                className="group inline-flex items-center justify-center gap-2.5 rounded-sm bg-text-primary px-6 py-3.5 text-sm font-semibold text-bg-primary transition-transform active:scale-[0.99] hover:opacity-90"
              >
                <span>Explore my work</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                to="/contact"
                onClick={(e) => scrollToSection('contact', e)}
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-border-strong bg-bg-elevated px-6 py-3.5 text-sm font-medium text-text-primary transition-colors hover:border-accent hover:text-accent"
              >
                <span>Let's build something</span>
              </Link>
            </div>

            {/* Bottom Pipeline Strip (IDEA -> PRODUCT -> AI -> ENGINEERING -> BUSINESS) */}
            <div className="mt-12 border-t border-border-subtle pt-6">
              <div className="mb-2 font-mono text-[11px] uppercase tracking-widest text-text-muted">
                Execution Pipeline
              </div>
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-text-secondary">
                {['IDEA', 'PRODUCT', 'AI', 'ENGINEERING', 'BUSINESS'].map((step, idx, arr) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded border border-border-subtle bg-bg-elevated px-2 py-1 text-[11px] font-medium text-text-primary">
                      {step}
                    </span>
                    {idx < arr.length - 1 && (
                      <span className="text-text-muted" aria-hidden="true">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Signature Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <HeroSystemVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
