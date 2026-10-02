import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { projects } from '../../data/projects';
import { SectionHeader } from '../ui/SectionHeader';
import { ProjectMockup } from './ProjectMockup';

export function SelectedProducts() {
  return (
    <section id="work" className="border-b border-border-subtle py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="02"
          eyebrow="Selected Products"
          title="Products I've built"
          subtitle="Real products, experiments, and digital systems built from idea to implementation."
        />

        <div className="space-y-20 md:space-y-28">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-md border border-border-strong bg-bg-elevated/60 p-6 transition-colors hover:border-border-strong sm:p-8 lg:p-12"
              >
                {/* Top Editorial Meta Row */}
                <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-semibold text-accent">
                      PROJECT {project.number}
                    </span>
                    <span className="text-border-strong">/</span>
                    <span className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                      {project.category}
                    </span>
                  </div>
                  <span className="rounded-sm border border-border-subtle bg-bg-surface px-2.5 py-1 font-mono text-[11px] text-text-muted">
                    {project.status}
                  </span>
                </div>

                {/* Editorial Content + Interactive System Preview */}
                <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
                  {/* Narrative Column */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : ''}`}>
                    <h3 className="text-3xl font-semibold tracking-tightest text-text-primary sm:text-4xl">
                      <Link
                        to={`/work/${project.slug}`}
                        className="transition-colors hover:text-accent"
                      >
                        {project.title}
                      </Link>
                    </h3>

                    <p className="mt-4 text-base leading-relaxed text-text-secondary">
                      {project.description}
                    </p>

                    {/* Key Product Capabilities */}
                    <div className="mt-6">
                      <div className="mb-3 font-mono text-[11px] uppercase tracking-widest text-text-muted">
                        Core Product Capabilities
                      </div>
                      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
                        {project.features.slice(0, 5).map((feature) => (
                          <li
                            key={feature.title}
                            className="flex items-start gap-2.5 text-sm text-text-secondary"
                          >
                            <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" />
                            <span>
                              <strong className="font-medium text-text-primary">
                                {feature.title}
                              </strong>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology Stack */}
                    <div className="mt-7 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-sm border border-border-subtle bg-bg-surface px-2.5 py-1 font-mono text-[11px] text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Case Study Link */}
                    <div className="mt-8 pt-2">
                      <Link
                        to={`/work/${project.slug}`}
                        className="inline-flex items-center gap-2 rounded-sm border border-border-strong bg-bg-primary px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-text-primary transition-all hover:border-accent hover:text-accent"
                      >
                        <span>Explore Case Study &amp; Architecture</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Visual Interface Schematic Column */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : ''}`}>
                    <Link
                      to={`/work/${project.slug}`}
                      aria-label={`Inspect ${project.title} case study`}
                      className="block transition-transform duration-300 hover:-translate-y-1"
                    >
                      <ProjectMockup projectId={project.id} variant="hero" />
                    </Link>

                    {/* Architectural Highlight Strip Under Mockup */}
                    <div className="mt-4 flex flex-col justify-between gap-2 rounded-sm border border-border-subtle bg-bg-primary px-4 py-3 sm:flex-row sm:items-center">
                      <span className="font-mono text-[11px] text-text-muted">
                        AI &amp; SYSTEM LAYER:
                      </span>
                      <span className="font-mono text-xs text-text-secondary">
                        {project.aiIntegration.headline}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
