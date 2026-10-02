import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Terminal } from 'lucide-react';
import { aiExperiments } from '../../data/experiments';
import { SectionHeader } from '../ui/SectionHeader';

export function AIProductLab() {
  const [selectedId, setSelectedId] = useState<string>(aiExperiments[0].id);
  const activeExp = aiExperiments.find((e) => e.id === selectedId) || aiExperiments[0];

  return (
    <section id="ai-lab" className="border-b border-border-subtle bg-bg-elevated/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="03"
          eyebrow="AI Product Lab"
          title="AI Product Lab"
          subtitle="I use AI not only to write code, but to explore new product experiences."
        />

        {/* Interactive Split Workbench */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: 5 Miniature Product Selector Tabs */}
          <div className="space-y-2.5 lg:col-span-5">
            {aiExperiments.map((exp) => {
              const isSelected = exp.id === activeExp.id;
              return (
                <button
                  key={exp.id}
                  type="button"
                  onClick={() => setSelectedId(exp.id)}
                  className={`w-full rounded-sm border p-4 text-left transition-all ${
                    isSelected
                      ? 'border-accent bg-bg-elevated shadow-surface'
                      : 'border-border-subtle bg-bg-primary/60 hover:border-border-strong hover:bg-bg-elevated/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-accent">
                      {exp.number}
                    </span>
                    <span className="font-mono text-[11px] text-text-muted">
                      {exp.category}
                    </span>
                  </div>
                  <h3 className="mt-1.5 text-base font-semibold text-text-primary">
                    {exp.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap items-center gap-1.5 font-mono text-[11px] text-text-secondary">
                    {exp.pipeline.map((step, i) => (
                      <span key={step} className="inline-flex items-center gap-1.5">
                        <span
                          className={
                            isSelected ? 'text-text-primary font-medium' : 'text-text-muted'
                          }
                        >
                          {step}
                        </span>
                        {i < exp.pipeline.length - 1 && (
                          <ArrowRight className="h-3 w-3 text-accent" />
                        )}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Interactive Miniature Product Simulator */}
          <div className="lg:col-span-7">
            <div className="flex h-full flex-col justify-between rounded-md border border-border-strong bg-bg-elevated p-6 shadow-elevated sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExp.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-subtle pb-4">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-accent" />
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">
                        {activeExp.title}
                      </span>
                    </div>
                    <span className="rounded border border-accent-border bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                      {activeExp.statusLabel}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
                    {activeExp.summary}
                  </p>

                  {/* Pipeline Step Nodes */}
                  <div>
                    <div className="mb-2.5 font-mono text-[10px] uppercase tracking-widest text-text-muted">
                      Execution Flow
                    </div>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {activeExp.pipeline.map((step, idx) => (
                        <div
                          key={step}
                          className="rounded-sm border border-border-strong bg-bg-surface p-2.5"
                        >
                          <div className="font-mono text-[10px] text-accent">0{idx + 1}</div>
                          <div className="mt-0.5 text-xs font-semibold text-text-primary">
                            {step}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sample Trigger Input */}
                  <div className="rounded-sm border border-border-subtle bg-bg-primary p-4">
                    <div className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-text-muted">
                      Input Context / Trigger
                    </div>
                    <div className="font-mono text-xs text-text-primary">
                      {activeExp.sampleInput}
                    </div>
                  </div>

                  {/* Deterministic Reasoning Trace */}
                  <div className="rounded-sm border border-border-strong bg-bg-surface p-4 font-mono text-xs">
                    <div className="mb-2 flex items-center gap-2 text-[11px] text-text-muted">
                      <Terminal className="h-3.5 w-3.5 text-accent" />
                      <span>AI REASONING &amp; TOOL EXECUTION</span>
                    </div>
                    <div className="space-y-1.5 text-text-secondary">
                      {activeExp.reasoningSteps.map((step) => (
                        <div key={step} className="truncate">
                          <span className="mr-2 text-accent">›</span>
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Resulting Product Output */}
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                    {activeExp.structuredOutput.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-sm border border-border-subtle bg-bg-primary p-3"
                      >
                        <div className="font-mono text-[10px] uppercase text-text-muted">
                          {item.label}
                        </div>
                        <div className="mt-1 text-xs font-semibold text-text-primary">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
