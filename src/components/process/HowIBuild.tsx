import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';

const steps = [
  {
    number: '01',
    title: 'Understand',
    detail: 'Map the operational problem, user constraints, and real-world business context before writing code.',
  },
  {
    number: '02',
    title: 'Design',
    detail: 'Define information hierarchy, user flows, and a consistent design system with clear states.',
  },
  {
    number: '03',
    title: 'Prototype',
    detail: 'Validate interactive workflows and layout ergonomics across desktop and mobile viewports early.',
  },
  {
    number: '04',
    title: 'Build',
    detail: 'Engineer full-stack foundations using React, TypeScript, Node.js, PostgreSQL, and Prisma.',
  },
  {
    number: '05',
    title: 'Connect AI',
    detail: 'Integrate LLM reasoning, voice interfaces, and permission-scoped tool calling where it adds clear value.',
  },
  {
    number: '06',
    title: 'Test',
    detail: 'Verify edge cases, multi-tenant data boundaries, role permissions, and deterministic behavior.',
  },
  {
    number: '07',
    title: 'Deploy',
    detail: 'Ship production builds with clean environment configuration, CI/CD, and cloud infrastructure.',
  },
  {
    number: '08',
    title: 'Iterate',
    detail: 'Refine UX details, latency, and operational workflows based on real usage.',
  },
];

export function HowIBuild() {
  return (
    <section id="process" className="border-b border-border-subtle py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            index="04"
            eyebrow="How I Build"
            title="From concept to working system."
          />

          <div className="mb-12 max-w-md rounded-sm border border-border-strong bg-bg-elevated p-5 lg:mb-16">
            <p className="text-sm leading-relaxed text-text-secondary">
              <strong className="font-semibold text-text-primary">
                AI is part of my development workflow
              </strong>
              , but engineering decisions, architecture, product thinking, and validation
              remain essential.
            </p>
          </div>
        </div>

        {/* 8-Step Architectural Grid */}
        <div className="grid grid-cols-1 border-l border-t border-border-subtle sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="group flex flex-col justify-between border-b border-r border-border-subtle bg-bg-primary p-6 transition-colors hover:bg-bg-elevated/80 sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-accent">
                    {step.number}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-border-strong transition-colors group-hover:bg-accent" />
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                  {step.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border-subtle/60 font-mono text-[10px] uppercase tracking-widest text-text-muted">
                STAGE {step.number} // 08
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
