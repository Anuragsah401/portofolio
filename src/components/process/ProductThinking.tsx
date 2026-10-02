import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

interface ThinkingTrace {
  id: 'seatbooking' | 'prosisit';
  name: string;
  subtitle: string;
  stages: {
    stage: string;
    value: string;
  }[];
}

const traces: ThinkingTrace[] = [
  {
    id: 'seatbooking',
    name: 'SeatBooking',
    subtitle: 'Restaurant SaaS · Reservations · Automation',
    stages: [
      {
        stage: 'Business Problem',
        value: 'Missed phone reservations, manual table allocation conflicts, and high no-show rates during peak service.',
      },
      {
        stage: 'User Need',
        value: 'Guests want instant mobile booking; hosts need a real-time command center for tables and arrivals.',
      },
      {
        stage: 'Product Concept',
        value: 'A multi-tenant restaurant reservation SaaS connecting guest bookings directly to live floor capacity.',
      },
      {
        stage: 'UX',
        value: 'Sub-60-second mobile booking widget paired with a high-contrast host dashboard for rapid status updates.',
      },
      {
        stage: 'Technical Architecture',
        value: 'React + TypeScript frontend, Node.js API, and PostgreSQL + Prisma relational schema enforcing slot integrity.',
      },
      {
        stage: 'AI / Automation',
        value: 'Automated email confirmations, scheduled SMS reminders, and AI-assisted availability and note classification.',
      },
      {
        stage: 'Working Product',
        value: 'End-to-end reservation platform ready for multi-venue hospitality operations.',
      },
    ],
  },
  {
    id: 'prosisit',
    name: 'ProsisIt',
    subtitle: 'AI · Voice · Intelligent Business Assistant',
    stages: [
      {
        stage: 'Business Problem',
        value: 'Hospitality managers lose time navigating fragmented dashboards for bookings, shifts, and analytics.',
      },
      {
        stage: 'User Need',
        value: 'Hands-free voice and natural-language answers backed by safe, permission-aware actions.',
      },
      {
        stage: 'Product Concept',
        value: 'An AI business copilot that queries operational systems and executes approved tools via text or voice.',
      },
      {
        stage: 'UX',
        value: 'Conversational interface with transparent reasoning steps and inline human-in-the-loop approval cards.',
      },
      {
        stage: 'Technical Architecture',
        value: 'AI orchestration gateway with Role-Based Access Control (RBAC), typed tool schemas, and immutable audit trails.',
      },
      {
        stage: 'AI / Automation',
        value: 'Multi-step LLM tool calling, voice-to-intent routing, and automated operational analytics synthesis.',
      },
      {
        stage: 'Working Product',
        value: 'Auditable AI assistant unifying reservations, workforce insights, and voice interaction.',
      },
    ],
  },
];

export function ProductThinking() {
  const [activeTraceId, setActiveTraceId] = useState<'seatbooking' | 'prosisit'>('seatbooking');
  const activeTrace = traces.find((t) => t.id === activeTraceId) || traces[0];

  return (
    <section className="border-b border-border-subtle bg-bg-elevated/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            index="05"
            eyebrow="Product Thinking"
            title="I build around problems, not technologies."
            subtitle="Every technical decision traces back to a concrete business problem and user need."
          />

          {/* Case Switcher */}
          <div className="mb-12 flex items-center gap-2 self-start rounded-sm border border-border-strong bg-bg-primary p-1 md:mb-16">
            {traces.map((trace) => {
              const active = trace.id === activeTraceId;
              return (
                <button
                  key={trace.id}
                  type="button"
                  onClick={() => setActiveTraceId(trace.id)}
                  className={`rounded-sm px-4 py-2 font-mono text-xs font-semibold transition-all ${
                    active
                      ? 'bg-accent text-bg-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {trace.name} Example
                </button>
              );
            })}
          </div>
        </div>

        {/* 7-Stage Vertical / Responsive Trace */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTrace.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="mx-auto max-w-5xl"
          >
            <div className="mb-6 flex flex-wrap items-center justify-between gap-2 rounded-sm border border-border-strong bg-bg-elevated px-5 py-3.5">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">
                Product Trace // {activeTrace.name}
              </span>
              <span className="font-mono text-xs text-accent">{activeTrace.subtitle}</span>
            </div>

            <div className="space-y-2">
              {activeTrace.stages.map((item, idx) => (
                <div key={item.stage}>
                  <div className="grid grid-cols-1 items-center gap-3 rounded-sm border border-border-subtle bg-bg-elevated p-4 sm:grid-cols-12 sm:gap-6 sm:px-6">
                    <div className="flex items-center gap-3 sm:col-span-4">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded border border-border-strong bg-bg-surface font-mono text-[11px] font-semibold text-accent">
                        0{idx + 1}
                      </span>
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">
                        {item.stage}
                      </span>
                    </div>
                    <div className="text-sm leading-relaxed text-text-secondary sm:col-span-8">
                      {item.value}
                    </div>
                  </div>

                  {idx < activeTrace.stages.length - 1 && (
                    <div className="flex justify-center py-1 text-accent" aria-hidden="true">
                      <ArrowDown className="h-4 w-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
