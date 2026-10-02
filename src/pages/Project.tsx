import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';
import { projects } from '../data/projects';
import { SEO } from '../components/ui/SEO';
import { ProjectMockup } from '../components/projects/ProjectMockup';
import { ArchitectureDiagram } from '../components/projects/ArchitectureDiagram';

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    return <Navigate to="/404" replace />;
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <article className="pb-24">
      <SEO
        title={`${project.title} — Case Study`}
        description={project.description}
        path={`/work/${project.slug}`}
        type="article"
      />

      {/* 1. Project Hero */}
      <header className="border-b border-border-subtle bg-architectural-grid pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/work"
            className="mb-8 inline-flex items-center gap-2 font-mono text-xs text-text-secondary transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Selected Products</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider text-accent">
            <span>PROJECT {project.number}</span>
            <span className="text-border-strong">/</span>
            <span className="text-text-secondary">{project.category}</span>
            <span className="rounded border border-border-strong bg-bg-elevated px-2.5 py-0.5 text-[11px] text-text-muted">
              {project.status}
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-4 text-4xl font-semibold tracking-tightest text-text-primary sm:text-5xl md:text-6xl"
          >
            {project.title}
          </motion.h1>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-text-secondary sm:text-xl">
            {project.tagline}
          </p>

          {/* Technology Pill Strip */}
          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-sm border border-border-strong bg-bg-elevated px-3 py-1 font-mono text-xs text-text-primary"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Hero Interface Schematic */}
          <div className="mt-12">
            <ProjectMockup projectId={project.id} variant="hero" />
          </div>
        </div>
      </header>

      {/* 2. Overview + 3. Problem + 4. Idea + 5. Solution */}
      <section className="border-b border-border-subtle py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="mb-16 max-w-4xl">
            <div className="font-mono text-xs uppercase tracking-widest text-accent">
              01 // Overview
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-text-primary sm:text-3xl">
              Product Context
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
              {project.overview}
            </p>
          </div>

          {/* Problem / Idea / Solution Triad */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-sm border border-border-subtle bg-bg-elevated p-6">
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
                02 // The Problem
              </div>
              <h3 className="mt-2 text-lg font-semibold text-text-primary">
                Operational Friction
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {project.problem}
              </p>
            </div>

            <div className="rounded-sm border border-border-subtle bg-bg-elevated p-6">
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                03 // The Product Idea
              </div>
              <h3 className="mt-2 text-lg font-semibold text-text-primary">
                Core Hypothesis
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {project.idea}
              </p>
            </div>

            <div className="rounded-sm border border-border-strong bg-bg-surface p-6">
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                04 // The Solution
              </div>
              <h3 className="mt-2 text-lg font-semibold text-text-primary">
                Working System
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Features */}
      <section className="border-b border-border-subtle py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="font-mono text-xs uppercase tracking-widest text-accent">
              05 // Product Capabilities
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary">
              Key Features &amp; Modules
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feat) => (
              <div
                key={feat.title}
                className="flex flex-col justify-between rounded-sm border border-border-subtle bg-bg-elevated p-6 transition-colors hover:border-border-strong"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded border border-border-strong bg-bg-surface px-2 py-0.5 font-mono text-[10px] uppercase text-accent">
                      {feat.tag}
                    </span>
                    <Layers className="h-4 w-4 text-text-muted" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-text-primary">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. UX & 10. Interface / Mobile Surface */}
      <section className="border-b border-border-subtle bg-bg-elevated/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="font-mono text-xs uppercase tracking-widest text-accent">
                06 // UX &amp; Interface Decisions
              </div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary">
                Designed for clarity under real-world conditions.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                Every interaction in {project.title} is structured to minimize cognitive
                load—combining responsive mobile surfaces with high-density operational views.
              </p>

              <ul className="mt-6 space-y-3">
                {project.uxHighlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 rounded-sm border border-border-subtle bg-bg-elevated p-3.5 text-sm text-text-primary"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <div className="mb-3 text-center font-mono text-xs uppercase tracking-widest text-text-muted">
                Mobile &amp; Field Surface Preview
              </div>
              <ProjectMockup projectId={project.id} variant="mobile" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Architecture + 9. AI Integration */}
      <section className="border-b border-border-subtle py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-widest text-accent">
              07 // System Architecture
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary">
              Technical Architecture &amp; Data Flow
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              {project.architectureSummary}
            </p>
          </div>

          <ArchitectureDiagram project={project} />

          {/* AI Integration Block */}
          <div className="mt-12 rounded-md border border-accent-border bg-accent-soft/20 p-6 sm:p-8">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              <Sparkles className="h-4 w-4" />
              <span>08 // AI &amp; Intelligent Automation Layer</span>
            </div>
            <h3 className="mt-2 text-2xl font-semibold text-text-primary">
              {project.aiIntegration.headline}
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-secondary sm:text-base">
              {project.aiIntegration.description}
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {project.aiIntegration.capabilities.map((cap) => (
                <div
                  key={cap}
                  className="flex items-center gap-2.5 rounded-sm border border-border-strong bg-bg-elevated px-4 py-3 font-mono text-xs text-text-primary"
                >
                  <Cpu className="h-4 w-4 shrink-0 text-accent" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. Technology & 12. Development Process */}
      <section className="border-b border-border-subtle py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="font-mono text-xs uppercase tracking-widest text-accent">
              09 // Execution &amp; Engineering Process
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary">
              How {project.title} was engineered
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.developmentProcess.map((step) => (
              <div
                key={step.phase}
                className="rounded-sm border border-border-subtle bg-bg-elevated p-5"
              >
                <div className="font-mono text-xs font-semibold text-accent">
                  {step.phase}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>

          {/* 13. Project Links */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-sm border border-border-strong bg-bg-surface p-6">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-text-muted">
                Engineering &amp; Repository Inquiry
              </div>
              <div className="mt-1 text-base font-semibold text-text-primary">
                Interested in a technical walkthrough or live architecture demo of {project.title}?
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {project.repositoryUrl && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-border-strong bg-bg-elevated px-4 py-2.5 font-mono text-xs font-semibold text-text-primary transition-colors hover:border-accent hover:text-accent"
                >
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-text-primary px-4 py-2.5 font-mono text-xs font-semibold text-bg-primary transition-opacity hover:opacity-90"
              >
                <span>Discuss this Product</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 14. Next Project Navigation */}
      <section className="pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to={`/work/${nextProject.slug}`}
            className="group block rounded-md border border-border-strong bg-bg-elevated p-8 transition-colors hover:border-accent sm:p-10"
          >
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-accent">
                  Next Case Study // Project {nextProject.number}
                </div>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary group-hover:text-accent transition-colors sm:text-4xl">
                  {nextProject.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-text-secondary">
                  {nextProject.tagline}
                </p>
              </div>
              <div className="inline-flex items-center gap-2 self-start rounded-sm border border-border-strong bg-bg-primary px-4 py-2.5 font-mono text-xs font-semibold text-text-primary group-hover:border-accent group-hover:text-accent sm:self-center">
                <span>Read Case Study</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}
