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
    <section className="border-b border-border-strong/20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Editorial Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6"
          >
            <div className="mb-5 flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-widest">
              <span className="inline-flex h-6 items-center border border-border-strong bg-accent px-2 text-[11px] text-white">
                01
              </span>
              <span className="h-[1.5px] w-8 bg-text-primary" />
              <span className="text-text-primary">Product Philosophy</span>
            </div>

            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tightest text-text-primary sm:text-5xl">
              I don&apos;t just build interfaces.{' '}
              <span className="mt-1 block text-accent">
                I build products.
              </span>
            </h2>

            <p className="mt-6 text-base font-medium leading-relaxed text-text-secondary sm:text-lg">
              Great software is more than isolated screens or endpoints. It is the alignment
              of user experience, domain architecture, intelligent automation, and real-world
              business execution.
            </p>

            <div className="editorial-card mt-8 p-5">
              <p className="font-mono text-xs font-medium leading-relaxed text-text-secondary">
                &ldquo;I turn ideas into{' '}
                <strong className="font-bold text-text-primary">digital products</strong>{' '}
                — bridging product design, full-stack engineering, and AI systems to solve
                concrete operational problems.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Right Structured Pillars */}
          <div className="lg:col-span-6">
            <div className="divide-y divide-border-strong/25 border-y border-border-strong">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.code}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="group flex flex-col gap-2 py-5 transition-colors hover:bg-bg-elevated/60 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 sm:px-3"
                >
                  <div className="flex items-baseline gap-3 sm:w-56 sm:shrink-0">
                    <span className="font-mono text-xs font-bold text-accent">{pillar.code}</span>
                    <h3 className="text-base font-bold text-text-primary">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm font-medium leading-relaxed text-text-secondary">
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
