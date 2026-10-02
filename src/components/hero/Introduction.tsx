import { motion } from 'framer-motion';

const pillars = [
  {
    code: '01',
    title: 'Product Thinking',
    detail: 'Starting with the real operational bottleneck, user motivation, and business outcome before choosing patterns.',
  },
  {
    code: '02',
    title: 'UX / UI Craft',
    detail: 'Designing calm, high-clarity interfaces that make complex multi-tenant workflows feel effortless.',
  },
  {
    code: '03',
    title: 'Software Engineering',
    detail: 'Building resilient full-stack foundations with React, TypeScript, Node.js, PostgreSQL, and Prisma.',
  },
  {
    code: '04',
    title: 'Applied AI Systems',
    detail: 'Embedding natural language, voice, and deterministic tool execution where intelligence genuinely removes friction.',
  },
  {
    code: '05',
    title: 'Business Workflows',
    detail: 'Connecting reservations, staff schedules, notifications, and analytics into unified operational systems.',
  },
];

export function Introduction() {
  return (
    <section className="border-b border-border-subtle py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Editorial Statement */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-text-muted">
              <span className="inline-flex items-center rounded border border-border-strong bg-bg-surface px-2 py-0.5 text-[11px] font-medium text-accent">
                01
              </span>
              <span className="h-px w-6 bg-border-strong" />
              <span className="text-text-secondary">Product Philosophy</span>
            </div>

            <h2 className="text-3xl font-semibold leading-[1.12] tracking-tightest text-text-primary sm:text-4xl md:text-5xl">
              I don't just build interfaces.{' '}
              <span className="block font-display italic font-normal text-accent">
                I build products.
              </span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
              Great software is more than isolated screens or endpoints. It is the alignment
              of user experience, domain architecture, intelligent automation, and real-world
              business execution.
            </p>

            <div className="mt-8 rounded-sm border border-border-subtle bg-bg-elevated p-5">
              <p className="font-mono text-xs leading-relaxed text-text-secondary">
                &ldquo;I turn ideas into{' '}
                <strong className="font-semibold text-text-primary">digital products</strong>{' '}
                — bridging product design, full-stack engineering, and AI systems to solve
                concrete operational problems.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Right Structured Pillars */}
          <div className="lg:col-span-6">
            <div className="divide-y divide-border-subtle border-y border-border-subtle">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.code}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <div className="flex items-baseline gap-3 sm:w-56 sm:shrink-0">
                    <span className="font-mono text-xs text-accent">{pillar.code}</span>
                    <h3 className="text-base font-semibold text-text-primary">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {pillar.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
