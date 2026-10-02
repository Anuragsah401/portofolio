import { motion } from 'framer-motion';
import { ArrowUpRight, GitBranch, Shield, Terminal, Workflow } from 'lucide-react';
import { socialData } from '../../data/social';
import { SectionHeader } from '../ui/SectionHeader';

const architecturalHighlights = [
  {
    title: 'Multi-Tenant Relational Schemas',
    tag: 'PostgreSQL · Prisma',
    description:
      'Strict tenant isolation, indexed reservation slot queries, and transactional constraints designed to prevent booking collisions.',
    icon: GitBranch,
  },
  {
    title: 'RBAC & Auditable AI Tool Execution',
    tag: 'LLM Agents · Security',
    description:
      'Permission-gated function calling where read queries run deterministically and state-mutating actions require human-in-the-loop confirmation.',
    icon: Shield,
  },
  {
    title: 'Hardware & Network Presence Verification',
    tag: 'Geolocation · Wi-Fi BSSID',
    description:
      'Dual-factor attendance validation matching employee mobile check-ins against physical venue coordinates and router BSSIDs.',
    icon: Workflow,
  },
  {
    title: 'Real-Time Event & Order Synchronization',
    tag: 'Event Driven · KDS',
    description:
      'Low-latency state synchronization connecting table-bound QR guest sessions directly to kitchen preparation boards.',
    icon: Terminal,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="border-b border-border-subtle bg-bg-elevated/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Part 1: Personal Story & Positioning */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6"
          >
            <SectionHeader
              index="07"
              eyebrow="About"
              title="Where software engineering meets real-world business operations."
            />

            <blockquote className="rounded-sm border-l-2 border-accent bg-bg-elevated p-5 text-base font-medium leading-relaxed text-text-primary sm:text-lg">
              &ldquo;I enjoy taking ideas that exist only as conversations, sketches, or
              business problems and turning them into working digital products.&rdquo;
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="space-y-5 text-base leading-relaxed text-text-secondary lg:col-span-6 lg:pt-12"
          >
            <p>
              I build digital products that turn complex business problems into simple user
              experiences. My work sits at the intersection of{' '}
              <strong className="font-medium text-text-primary">
                software development, product design, applied AI, and real-world hospitality
                operations
              </strong>
              .
            </p>
            <p>
              Having seen firsthand how restaurants and service teams operate under peak-hour
              pressure, I design software that respects real human workflows—whether that is a
              host managing a busy dining room in{' '}
              <span className="text-text-primary">SeatBooking</span>, a manager querying live
              operations by voice in <span className="text-text-primary">ProsisIt</span>, staff
              verifying shift attendance in <span className="text-text-primary">Workforce</span>,
              or guests ordering via QR in <span className="text-text-primary">E-Menu</span>.
            </p>
            <p>
              I use modern full-stack engineering and AI-assisted workflows to move rapidly
              from initial concept to structured architecture, polished UX, and deployable
              systems.
            </p>

            {/* Core Disciplines */}
            <div className="grid grid-cols-2 gap-2.5 pt-4 sm:grid-cols-3">
              {[
                'Software Development',
                'Product Design',
                'AI Systems',
                'Business Workflows',
                'Hospitality Domain',
                'Full-Stack Architecture',
              ].map((badge) => (
                <div
                  key={badge}
                  className="rounded-sm border border-border-subtle bg-bg-elevated px-3 py-2 font-mono text-xs text-text-primary"
                >
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Part 2: GitHub & Engineering Credibility */}
        <div className="mt-20 border-t border-border-subtle pt-16">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-accent">
                Engineering &amp; Architecture
              </div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
                Engineering credibility &amp; system patterns
              </h3>
            </div>

            <a
              href={socialData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-sm border border-border-strong bg-bg-elevated px-4 py-2.5 font-mono text-xs font-semibold text-text-primary transition-colors hover:border-accent hover:text-accent"
            >
              <span>GitHub ({socialData.githubHandle})</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {architecturalHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-sm border border-border-subtle bg-bg-elevated p-6 transition-colors hover:border-border-strong"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Icon className="h-4 w-4 text-accent" />
                      <h4 className="text-base font-semibold text-text-primary">
                        {item.title}
                      </h4>
                    </div>
                    <span className="rounded border border-border-strong bg-bg-surface px-2 py-0.5 font-mono text-[10px] text-text-secondary">
                      {item.tag}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
