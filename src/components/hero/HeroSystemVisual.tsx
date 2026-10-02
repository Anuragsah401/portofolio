import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Layers, Code2, Database, Network, ArrowRight } from 'lucide-react';

interface SystemNode {
  id: 'AI' | 'PRODUCT' | 'CODE' | 'DATA' | 'SYSTEM';
  label: string;
  tier: 'top' | 'middle' | 'bottom';
  role: string;
  items: string[];
  description: string;
  icon: typeof Cpu;
}

const nodes: SystemNode[] = [
  {
    id: 'AI',
    label: 'AI',
    tier: 'top',
    role: 'Intelligence & Reasoning Layer',
    items: ['Agents', 'Voice', 'Tool calling'],
    description: 'Natural language reasoning, voice interfaces, and permission-scoped tool execution.',
    icon: Cpu,
  },
  {
    id: 'PRODUCT',
    label: 'PRODUCT',
    tier: 'middle',
    role: 'Experience & Domain Layer',
    items: ['SaaS', 'UX', 'Workflows'],
    description: 'Translating business problems into intuitive multi-tenant SaaS products and workflows.',
    icon: Layers,
  },
  {
    id: 'CODE',
    label: 'CODE',
    tier: 'middle',
    role: 'Application Engineering Layer',
    items: ['React', 'TypeScript', 'Node.js'],
    description: 'Type-safe frontend and backend engineering designed for maintainability and speed.',
    icon: Code2,
  },
  {
    id: 'DATA',
    label: 'DATA',
    tier: 'middle',
    role: 'Persistence & Contract Layer',
    items: ['PostgreSQL', 'APIs', 'Prisma'],
    description: 'Relational data modeling, strict API schemas, and transactional reliability.',
    icon: Database,
  },
  {
    id: 'SYSTEM',
    label: 'SYSTEM',
    tier: 'bottom',
    role: 'Infrastructure & Execution Layer',
    items: ['Architecture', 'Automation', 'Deployment'],
    description: 'End-to-end system architecture, automated notifications, and cloud deployment.',
    icon: Network,
  },
];

export function HeroSystemVisual() {
  const [activeId, setActiveId] = useState<SystemNode['id']>('AI');

  const activeNode = nodes.find((n) => n.id === activeId) || nodes[0];
  const topNode = nodes[0];
  const middleNodes = nodes.slice(1, 4);
  const bottomNode = nodes[4];

  return (
    <div className="relative rounded-md border border-border-strong bg-bg-elevated p-5 shadow-elevated sm:p-7">
      {/* Top Window Chrome / Status */}
      <div className="mb-6 flex items-center justify-between border-b border-border-subtle pb-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse-subtle" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-text-secondary">
            Product Architecture Graph
          </span>
        </div>
        <span className="font-mono text-[11px] text-text-muted">
          Hover or select a node
        </span>
      </div>

      {/* Interactive Node Topology (AI -> PRODUCT | CODE | DATA -> SYSTEM) */}
      <div className="relative py-2">
        {/* SVG Connecting Lines Behind Nodes */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 400 290"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Top (AI: 200,36) to Middle (PRODUCT: 68,145 | CODE: 200,145 | DATA: 332,145) */}
          <path
            d="M200 45 L68 135"
            stroke={activeId === 'AI' || activeId === 'PRODUCT' ? 'var(--accent-primary)' : 'var(--border-strong)'}
            strokeWidth={activeId === 'AI' || activeId === 'PRODUCT' ? '1.75' : '1'}
            strokeDasharray={activeId === 'AI' || activeId === 'PRODUCT' ? 'none' : '4 4'}
          />
          <path
            d="M200 45 L200 135"
            stroke={activeId === 'AI' || activeId === 'CODE' ? 'var(--accent-primary)' : 'var(--border-strong)'}
            strokeWidth={activeId === 'AI' || activeId === 'CODE' ? '1.75' : '1'}
            strokeDasharray={activeId === 'AI' || activeId === 'CODE' ? 'none' : '4 4'}
          />
          <path
            d="M200 45 L332 135"
            stroke={activeId === 'AI' || activeId === 'DATA' ? 'var(--accent-primary)' : 'var(--border-strong)'}
            strokeWidth={activeId === 'AI' || activeId === 'DATA' ? '1.75' : '1'}
            strokeDasharray={activeId === 'AI' || activeId === 'DATA' ? 'none' : '4 4'}
          />

          {/* Middle (PRODUCT | CODE | DATA) to Bottom (SYSTEM: 200,250) */}
          <path
            d="M68 155 L200 245"
            stroke={activeId === 'SYSTEM' || activeId === 'PRODUCT' ? 'var(--accent-primary)' : 'var(--border-strong)'}
            strokeWidth={activeId === 'SYSTEM' || activeId === 'PRODUCT' ? '1.75' : '1'}
            strokeDasharray={activeId === 'SYSTEM' || activeId === 'PRODUCT' ? 'none' : '4 4'}
          />
          <path
            d="M200 155 L200 245"
            stroke={activeId === 'SYSTEM' || activeId === 'CODE' ? 'var(--accent-primary)' : 'var(--border-strong)'}
            strokeWidth={activeId === 'SYSTEM' || activeId === 'CODE' ? '1.75' : '1'}
            strokeDasharray={activeId === 'SYSTEM' || activeId === 'CODE' ? 'none' : '4 4'}
          />
          <path
            d="M332 155 L200 245"
            stroke={activeId === 'SYSTEM' || activeId === 'DATA' ? 'var(--accent-primary)' : 'var(--border-strong)'}
            strokeWidth={activeId === 'SYSTEM' || activeId === 'DATA' ? '1.75' : '1'}
            strokeDasharray={activeId === 'SYSTEM' || activeId === 'DATA' ? 'none' : '4 4'}
          />
        </svg>

        {/* Tier 1: AI */}
        <div className="relative z-10 flex justify-center">
          <NodeButton
            node={topNode}
            active={activeId === topNode.id}
            onActivate={() => setActiveId(topNode.id)}
          />
        </div>

        {/* Tier 2: PRODUCT / CODE / DATA */}
        <div className="relative z-10 my-9 grid grid-cols-3 gap-2.5 sm:gap-4">
          {middleNodes.map((node) => (
            <NodeButton
              key={node.id}
              node={node}
              active={activeId === node.id}
              onActivate={() => setActiveId(node.id)}
            />
          ))}
        </div>

        {/* Tier 3: SYSTEM */}
        <div className="relative z-10 flex justify-center">
          <NodeButton
            node={bottomNode}
            active={activeId === bottomNode.id}
            onActivate={() => setActiveId(bottomNode.id)}
          />
        </div>
      </div>

      {/* Live Inspector Readout Panel */}
      <div className="mt-6 rounded-sm border border-border-subtle bg-bg-surface p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="rounded bg-accent-soft px-2 py-0.5 font-mono text-xs font-semibold text-accent">
                  {activeNode.label}
                </span>
                <span className="font-mono text-xs text-text-secondary">
                  {activeNode.role}
                </span>
              </div>
              <span className="font-mono text-[11px] text-text-muted">
                NODE // 0{nodes.indexOf(activeNode) + 1}
              </span>
            </div>

            <p className="mt-2.5 text-xs leading-relaxed text-text-secondary sm:text-sm">
              {activeNode.description}
            </p>

            <div className="mt-3.5 flex flex-wrap items-center gap-2 border-t border-border-subtle pt-3">
              {activeNode.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-sm border border-border-strong bg-bg-elevated px-2.5 py-1 font-mono text-xs font-medium text-text-primary"
                >
                  <ArrowRight className="h-3 w-3 text-accent" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

interface NodeButtonProps {
  node: SystemNode;
  active: boolean;
  onActivate: () => void;
}

function NodeButton({ node, active, onActivate }: NodeButtonProps) {
  const Icon = node.icon;
  return (
    <button
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      className={`group flex w-full max-w-[168px] flex-col items-center justify-center rounded-sm border px-3 py-2.5 text-center transition-all duration-150 ${
        active
          ? 'border-accent bg-bg-elevated shadow-surface ring-1 ring-accent/40'
          : 'border-border-strong bg-bg-primary hover:border-text-muted'
      }`}
    >
      <div className="flex items-center gap-1.5">
        <Icon
          className={`h-3.5 w-3.5 transition-colors ${
            active ? 'text-accent' : 'text-text-muted group-hover:text-text-secondary'
          }`}
        />
        <span
          className={`font-mono text-xs font-semibold tracking-wider ${
            active ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'
          }`}
        >
          {node.label}
        </span>
      </div>
      <div className="mt-1 hidden truncate font-mono text-[10px] text-text-muted sm:block">
        {node.items.join(' · ')}
      </div>
    </button>
  );
}
