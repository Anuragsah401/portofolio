import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Terminal } from 'lucide-react';
import { aiExperiments } from '../../data/experiments';
import { SectionHeader } from '../ui/SectionHeader';

export function AIProductLab() {
  const [selectedId, setSelectedId] = useState<string>(aiExperiments[0].id);
  const activeExp = aiExperiments.find((e) => e.id === selectedId) || aiExperiments[0];

  return (
    <section id="ai-lab" className="border-b border-border-strong/20 bg-bg-surface/40 py-24 md:py-32">
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
          <div className="space-y-3 lg:col-span-5">
            {aiExperiments.map((exp) => {
              const isSelected = exp.id === activeExp.id;
              return (
                <button
                  key={exp.id}
                  type="button"
                  onClick={() => setSelectedId(exp.id)}
                  className={`w-full border p-4 text-left transition-all duration-200 ${
                    isSelected
                      ? 'border-border-strong bg-bg-elevated shadow-[5px_5px_0px_0px_var(--accent-primary)] -translate-y-0.5'
                      : 'border-border-strong/40 bg-bg-primary hover:border-border-strong hover:bg-bg-elevated'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-2 py-0.5 font-mono text-xs font-bold ${
                        isSelected
                          ? 'bg-accent text-white'
                          : 'bg-bg-surface text-text-primary'
                      }`}
                    >
                      {exp.number}
                    </span>
                    <span className="font-mono text-[11px] font-semibold text-text-muted">
                      {exp.category}
                    </span>
                  </div>
                  <h3 className="mt-2 text-base font-extrabold text-text-primary">
                    {exp.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
                    {exp.pipeline.map((step, i) => (
                      <span key={step} className="inline-flex items-center gap-1.5">
                        <span
                          className={
                            isSelected
                              ? 'font-bold text-text-primary'
                              : 'font-medium text-text-secondary'
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
            <div className="editorial-card flex h-full flex-col justify-between p-6 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExp.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22 }}
                  className="space-y-6"
                >
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-strong/30 pb-4">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-accent" />
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-primary">
                        {activeExp.title}
                      </span>
                    </div>
                    <span className="border border-border-strong bg-accent px-2.5 py-0.5 font-mono text-[11px] font-bold text-white">
                      {activeExp.statusLabel}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm font-medium leading-relaxed text-text-secondary sm:text-base">
                    {activeExp.summary}
                  </p>

                  {/* Pipeline Step Nodes */}
                  <div>
                    <div className="mb-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-text-muted">
                      Execution Flow
                    </div>
                    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                      {activeExp.pipeline.map((step, idx) => (
                        <div
                          key={step}
                          className="border border-border-strong bg-bg-primary p-3"
                        >
                          <div className="font-mono text-[10px] font-bold text-accent">
                            0{idx + 1}
                          </div>
                          <div className="mt-1 text-xs font-extrabold text-text-primary">
                            {step}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sample Trigger Input */}
                  <div className="border border-border-strong bg-bg-primary p-4">
                    <div className="mb-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-text-muted">
                      Input Context / Trigger
                    </div>
                    <div className="font-mono text-xs font-semibold text-text-primary">
                      {activeExp.sampleInput}
                    </div>
                  </div>

                  {/* Deterministic Reasoning Trace */}
                  <div className="border border-border-strong bg-[#141414] p-4 font-mono text-xs text-[#F3F1EC]">
                    <div className="mb-2 flex items-center gap-2 text-[11px] text-[#9E9B93]">
                      <Terminal className="h-3.5 w-3.5 text-[#FF3B00]" />
                      <span className="font-bold">AI REASONING &amp; TOOL EXECUTION</span>
                    </div>
                    <div className="space-y-1.5">
                      {activeExp.reasoningSteps.map((step) => (
                        <div key={step} className="truncate">
                          <span className="mr-2 text-[#FF3B00]">›</span>
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
                        className="border border-border-strong bg-bg-primary p-3"
                      >
                        <div className="font-mono text-[10px] font-bold uppercase text-text-muted">
                          {item.label}
                        </div>
                        <div className="mt-1 text-xs font-bold text-text-primary">
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
