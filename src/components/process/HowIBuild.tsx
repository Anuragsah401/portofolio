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
    <section id="process" className="border-b border-border-strong/20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            index="04"
            eyebrow="How I Build"
            title="From concept to working system."
          />

          <div className="editorial-card mb-12 max-w-md p-5 lg:mb-20">
            <p className="text-sm font-medium leading-relaxed text-text-secondary">
              <strong className="font-bold text-text-primary">
                AI is part of my development workflow
              </strong>
              , but engineering decisions, architecture, product thinking, and validation
              remain essential.
            </p>
          </div>
        </div>

        {/* 8-Step Swiss Architectural Grid */}
        <div className="grid grid-cols-1 border-l-2 border-t-2 border-border-strong sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex flex-col justify-between border-b-2 border-r-2 border-border-strong bg-bg-elevated p-6 transition-colors hover:bg-bg-primary sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="bg-text-primary px-2 py-0.5 font-mono text-xs font-bold text-bg-primary group-hover:bg-accent group-hover:text-white transition-colors">
                    {step.number}
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="mt-5 text-xl font-extrabold tracking-tight text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm font-medium leading-relaxed text-text-secondary">
                  {step.detail}
                </p>
              </div>

              <div className="mt-6 border-t border-border-strong/20 pt-4 font-mono text-[10px] font-bold uppercase tracking-widest text-text-muted">
                STAGE {step.number} // 08
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
