import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeroSystemVisual } from './HeroSystemVisual';
import { smoothScrollTo } from '../../utils/smoothScroll';

const headlineLines = [
  'I build digital',
  'products with AI.',
  'Turn ideas real!',
];

export function Hero() {
  const scrollToSection = (id: string, e: React.MouseEvent) => {
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      smoothScrollTo(id, 1150);
    }
  };

  return (
    <section className="relative overflow-hidden border-b border-border-strong/20 pt-10 pb-20 md:pt-14 md:pb-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Editorial Display Typography + Hand-Sketched Squiggle + Side-by-Side CTA & Copy */}
          <div className="lg:col-span-6">
            {/* Positioning Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-6 inline-flex items-center gap-2.5 border border-border-strong bg-bg-elevated px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-text-primary shadow-[3px_3px_0px_0px_#111111]"
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span>AI Product Builder · Full-Stack Engineer</span>
            </motion.div>

            {/* Reference-Inspired 3-Line Heavy Geometric Headline */}
            <h1 className="text-[44px] font-extrabold leading-[1.03] tracking-tightest text-text-primary sm:text-6xl lg:text-[68px]">
              {headlineLines.map((line, idx) => (
                <motion.span
                  key={line}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.07 * idx,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block"
                >
                  {idx === 1 ? (
                    <>
                      products with <span className="text-accent">AI.</span>
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              ))}
            </h1>

            {/* Signature Hand-Drawn Sketch Waveform + Floating Spec Sheets */}
            <div className="my-8 max-w-md" aria-hidden="true">
              <svg
                viewBox="0 0 420 68"
                fill="none"
                className="w-full overflow-visible text-text-primary"
              >
                {/* Floating Tilted Document / Product Spec Icon 1 (Left) */}
                <g>
                  <path
                    d="M8 22 L20 10 L34 20 L22 38 Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    fill="var(--bg-elevated)"
                  />
                  <line x1="16" y1="19" x2="25" y2="25" stroke="currentColor" strokeWidth="1.3" />
                  <line x1="14" y1="23" x2="22" y2="29" stroke="currentColor" strokeWidth="1.3" />
                  <line x1="12" y1="27" x2="19" y2="32" stroke="currentColor" strokeWidth="1.3" />
                </g>

                {/* Hand-Sketched Sine Squiggle Extending into Long Architectural Line */}
                <motion.path
                  d="M42 36 L68 36 C72 36 74 16 78 16 C82 16 84 52 88 52 C92 52 94 20 98 20 C102 20 104 48 108 48 C112 48 114 22 118 22 C121 22 123 36 128 36 L408 34"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                />

                {/* Floating Tilted Spec Note 2 (Bottom Center) */}
                <g>
                  <path
                    d="M128 50 L142 40 L154 52 L140 63 Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="var(--bg-elevated)"
                  />
                  <line x1="136" y1="48" x2="145" y2="55" stroke="currentColor" strokeWidth="1.2" />
                  <line x1="133" y1="52" x2="141" y2="58" stroke="currentColor" strokeWidth="1.2" />
                </g>

                {/* Floating Tilted Spec Note 3 (Upper Middle) */}
                <g>
                  <path
                    d="M156 16 L172 12 L175 24 L159 28 Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="var(--bg-elevated)"
                  />
                  <line x1="161" y1="18" x2="170" y2="16" stroke="currentColor" strokeWidth="1.2" />
                  <line x1="162" y1="22" x2="171" y2="20" stroke="currentColor" strokeWidth="1.2" />
                </g>
              </svg>
            </div>

            {/* Bottom Action Row: Solid Rectangular Black Button on Left + Editorial Paragraph on Right */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8"
            >
              <div className="flex shrink-0 flex-wrap items-center gap-3">
                <a
                  href="#work"
                  onClick={(e) => scrollToSection('work', e)}
                  className="editorial-btn-primary inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wide"
                >
                  Explore my work
                </a>
                <Link
                  to="/contact"
                  onClick={(e) => scrollToSection('contact', e)}
                  className="editorial-btn-outline inline-flex items-center justify-center px-5 py-4 text-sm font-bold"
                >
                  Let&apos;s build
                </Link>
              </div>

              <p className="max-w-xs text-xs font-medium leading-relaxed text-text-secondary sm:text-sm">
                I turn ideas, business problems, and opportunities into modern digital
                products, intelligent systems, and scalable web applications.
              </p>
            </motion.div>

            {/* Pipeline Strip */}
            <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-border-strong/20 pt-5 font-mono text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
              <span>Product thinking</span>
              <span className="text-accent">•</span>
              <span>AI-assisted development</span>
              <span className="text-accent">•</span>
              <span>Full-stack engineering</span>
            </div>
          </div>

          {/* Right Column: Vermilion Sphere + Folded Charcoal Monolith + Interactive System Nodes */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <HeroSystemVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
