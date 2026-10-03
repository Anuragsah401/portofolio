import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface SystemNode {
  id: 'AI' | 'PRODUCT' | 'CODE' | 'DATA' | 'SYSTEM';
  label: string;
  role: string;
  items: string[];
  description: string;
  coords: { x: string; y: string };
}

const nodes: SystemNode[] = [
  {
    id: 'AI',
    label: 'AI',
    role: 'Intelligence & Reasoning',
    items: ['Agents', 'Voice', 'Tool calling'],
    description: 'Natural language reasoning, voice interfaces, and permission-scoped tool execution.',
    coords: { x: '22%', y: '14%' },
  },
  {
    id: 'PRODUCT',
    label: 'PRODUCT',
    role: 'Experience & SaaS Layer',
    items: ['SaaS', 'UX', 'Workflows'],
    description: 'Translating messy real-world operations into intuitive multi-tenant SaaS products.',
    coords: { x: '74%', y: '18%' },
  },
  {
    id: 'CODE',
    label: 'CODE',
    role: 'Full-Stack Engineering',
    items: ['React', 'TypeScript', 'Node.js'],
    description: 'Type-safe frontend and backend architecture engineered for speed and clarity.',
    coords: { x: '12%', y: '56%' },
  },
  {
    id: 'DATA',
    label: 'DATA',
    role: 'Relational Core & APIs',
    items: ['PostgreSQL', 'APIs', 'Prisma'],
    description: 'Strict relational schemas, transactional guarantees, and clean API contracts.',
    coords: { x: '78%', y: '58%' },
  },
  {
    id: 'SYSTEM',
    label: 'SYSTEM',
    role: 'Architecture & Automation',
    items: ['Architecture', 'Automation', 'Deployment'],
    description: 'End-to-end production systems, event-driven automation, and cloud infrastructure.',
    coords: { x: '46%', y: '84%' },
  },
];

export function HeroSystemVisual() {
  const [activeId, setActiveId] = useState<SystemNode['id']>('AI');
  const activeNode = nodes.find((n) => n.id === activeId) || nodes[0];

  // Interactive 3D Parallax Mouse Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 140, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 140, damping: 22 });

  const orbX = useTransform(springX, [-0.5, 0.5], [-18, 18]);
  const orbY = useTransform(springY, [-0.5, 0.5], [-18, 18]);

  const polyX = useTransform(springX, [-0.5, 0.5], [22, -22]);
  const polyY = useTransform(springY, [-0.5, 0.5], [16, -16]);
  const polyRotate = useTransform(springX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative select-none"
    >
      {/* Sculpture Canvas (Directly inspired by the reference's Red Circle + Folded Black Origami Sculpture + White Wireframe Intersection) */}
      <div className="relative mx-auto h-[390px] w-full max-w-[520px] sm:h-[450px]">
        {/* Soft Ground Contact Shadow underneath the folded monolith */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-6 left-1/2 h-9 w-64 -translate-x-1/2 rounded-full bg-black/25 blur-xl dark:bg-black/70"
        />

        {/* 1. Bold Vermilion Red-Orange Sphere (Upper-Left of Sculpture) */}
        <motion.div
          style={{ x: orbX, y: orbY }}
          animate={{ scale: [1, 1.025, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute left-[10%] top-[6%] h-48 w-48 rounded-full bg-accent sm:left-[12%] sm:h-60 sm:w-60"
        />

        {/* 2. Sculptural Folded Charcoal Monolith (Low-Poly Origami Charcoal Form) */}
        <motion.div
          style={{ x: polyX, y: polyY, rotate: polyRotate }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <svg
            viewBox="0 0 500 460"
            className="h-full w-full drop-shadow-[0_28px_32px_rgba(0,0,0,0.22)]"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="facet-dark-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2B2B2B" />
                <stop offset="100%" stopColor="#121212" />
              </linearGradient>
              <linearGradient id="facet-dark-2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B3B3B" />
                <stop offset="100%" stopColor="#181818" />
              </linearGradient>
              <linearGradient id="facet-dark-3" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0E0E0E" />
                <stop offset="100%" stopColor="#2D2D2D" />
              </linearGradient>
              <linearGradient id="facet-highlight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4A4A4A" />
                <stop offset="100%" stopColor="#1E1E1E" />
              </linearGradient>
              <linearGradient id="vermilion-intersect" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B82300" />
                <stop offset="100%" stopColor="#5E1100" />
              </linearGradient>
            </defs>

            {/* Outer Sculptural Origami Facets (Tactile folded dark paper geometry) */}
            <polygon points="260,68 355,54 392,126 305,152" fill="url(#facet-dark-2)" />
            <polygon points="355,54 416,95 392,126" fill="#141414" />
            <polygon points="195,128 260,68 305,152 222,198" fill="url(#facet-dark-1)" />
            <polygon points="305,152 392,126 438,205 342,248" fill="url(#facet-highlight)" />
            <polygon points="392,126 446,162 438,205" fill="#171717" />

            {/* Intersection Zone with the Red Sphere (Deep Crimson/Rust Facets + Crisp White Wireframes) */}
            <polygon
              points="162,150 232,156 218,246 150,238"
              fill="url(#vermilion-intersect)"
              stroke="#F8F6F2"
              strokeWidth="2"
            />
            <polygon
              points="232,156 305,152 272,244 218,246"
              fill="url(#vermilion-intersect)"
              stroke="#F8F6F2"
              strokeWidth="2"
            />
            <polyline
              points="238,136 286,108 310,138 265,168"
              stroke="#F8F6F2"
              strokeWidth="1.8"
              fill="none"
            />

            {/* Lower Sculptural Facets */}
            <polygon points="145,238 218,246 196,334 128,312" fill="url(#facet-highlight)" />
            <polygon points="218,246 272,244 316,320 228,365" fill="url(#facet-dark-1)" />
            <polygon points="272,244 342,248 386,315 316,320" fill="url(#facet-dark-3)" />
            <polygon points="342,248 438,205 426,298 386,315" fill="url(#facet-dark-2)" />
            <polygon points="196,334 228,365 184,394 128,312" fill="#222222" />
            <polygon points="228,365 316,320 356,374 246,404" fill="url(#facet-highlight)" />
            <polygon points="316,320 386,315 418,358 356,374" fill="#121212" />

            {/* Subtle internal architectural ridge creases */}
            <line x1="260" y1="68" x2="305" y2="152" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
            <line x1="305" y1="152" x2="342" y2="248" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
            <line x1="218" y1="246" x2="228" y2="365" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <line x1="272" y1="244" x2="316" y2="320" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          </svg>
        </motion.div>

        {/* 3. Interactive Floating Architectural Node Pills (AI / PRODUCT / CODE / DATA / SYSTEM) */}
        {nodes.map((node, index) => {
          const isActive = activeId === node.id;
          return (
            <motion.button
              key={node.id}
              type="button"
              onMouseEnter={() => setActiveId(node.id)}
              onFocus={() => setActiveId(node.id)}
              onClick={() => setActiveId(node.id)}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{
                opacity: 1,
                scale: isActive ? 1.06 : 1,
                y: [0, index % 2 === 0 ? -5 : 5, 0],
              }}
              transition={{
                opacity: { duration: 0.4, delay: index * 0.08 },
                scale: { type: 'spring', stiffness: 400, damping: 24 },
                y: { duration: 4 + index * 0.5, repeat: Infinity, ease: 'easeInOut' },
              }}
              style={{ left: node.coords.x, top: node.coords.y }}
              className={`group absolute z-20 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 border px-3.5 py-2 font-mono text-xs font-bold tracking-wider transition-colors ${
                isActive
                  ? 'border-border-strong bg-accent text-white shadow-[4px_4px_0px_0px_#111111]'
                  : 'border-border-strong bg-bg-elevated text-text-primary shadow-[3px_3px_0px_0px_#111111] hover:bg-text-primary hover:text-bg-primary'
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  isActive ? 'bg-white' : 'bg-accent'
                }`}
              />
              <span>{node.label}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Interactive Node Readout Bar Underneath Sculpture */}
      <div className="editorial-card relative z-20 mt-2 p-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-subtle pb-3">
              <div className="flex items-center gap-2.5">
                <span className="bg-accent px-2 py-0.5 font-mono text-xs font-bold text-white">
                  {activeNode.label}
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-primary">
                  {activeNode.role}
                </span>
              </div>
              <span className="font-mono text-[11px] text-text-muted">
                INTERACTIVE NODE // 0{nodes.indexOf(activeNode) + 1}
              </span>
            </div>

            <p className="mt-3 text-xs font-medium leading-relaxed text-text-secondary sm:text-sm">
              {activeNode.description}
            </p>

            <div className="mt-3.5 flex flex-wrap items-center gap-2">
              {activeNode.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 border border-border-strong bg-bg-primary px-2.5 py-1 font-mono text-xs font-semibold text-text-primary"
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
