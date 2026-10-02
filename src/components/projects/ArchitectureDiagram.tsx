import { ArrowDown, Cpu, Database, Layers, Server } from 'lucide-react';
import type { Project } from '../../data/projects';

interface ArchitectureDiagramProps {
  project: Project;
}

export function ArchitectureDiagram({ project }: ArchitectureDiagramProps) {
  const { architectureLayers } = project;

  return (
    <div className="rounded-md border border-border-strong bg-bg-elevated p-6 shadow-surface sm:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b border-border-subtle pb-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-text-primary">
            {project.title} // System Architecture Topology
          </span>
        </div>
        <span className="font-mono text-[11px] text-text-muted">
          Client → API → Domain Logic → AI / Data / Services
        </span>
      </div>

      {/* Vertical Flow Pipeline */}
      <div className="mx-auto max-w-4xl space-y-3">
        {/* Layer 1: Client Surfaces */}
        <div className="rounded-sm border border-border-strong bg-bg-surface p-4">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-text-muted">
            01 · Client &amp; Experience Layer
          </div>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {architectureLayers.client.map((surface) => (
              <div
                key={surface}
                className="flex items-center gap-2.5 rounded-sm border border-border-subtle bg-bg-elevated px-3.5 py-2.5 font-mono text-xs font-medium text-text-primary"
              >
                <Layers className="h-4 w-4 shrink-0 text-accent" />
                <span>{surface}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center py-0.5 text-text-muted" aria-hidden="true">
          <ArrowDown className="h-4 w-4 text-accent" />
        </div>

        {/* Layer 2: API Gateway */}
        <div className="rounded-sm border border-border-strong bg-bg-primary px-4 py-3 text-center">
          <div className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
            02 · Gateway &amp; Security Boundary
          </div>
          <div className="mt-1 font-mono text-xs font-semibold text-text-primary sm:text-sm">
            {architectureLayers.api}
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center py-0.5 text-text-muted" aria-hidden="true">
          <ArrowDown className="h-4 w-4 text-accent" />
        </div>

        {/* Layer 3: Business Logic */}
        <div className="rounded-sm border border-border-strong bg-bg-surface p-4">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-text-muted">
            03 · Core Domain &amp; Business Logic
          </div>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
            {architectureLayers.logic.map((module) => (
              <div
                key={module}
                className="rounded-sm border border-border-subtle bg-bg-elevated px-3 py-2 text-center font-mono text-xs text-text-primary"
              >
                {module}
              </div>
            ))}
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center py-0.5 text-text-muted" aria-hidden="true">
          <ArrowDown className="h-4 w-4 text-accent" />
        </div>

        {/* Layer 4: Downstream Triad (AI | Database | Services) */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {/* AI Branch */}
          <div className="rounded-sm border border-accent-border bg-accent-soft/40 p-4">
            <div className="mb-2.5 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-accent">
              <Cpu className="h-4 w-4" />
              <span>AI &amp; Intelligence</span>
            </div>
            <ul className="space-y-1.5 font-mono text-xs text-text-primary">
              {architectureLayers.downstream.ai.map((item) => (
                <li key={item} className="rounded border border-border-subtle bg-bg-elevated px-2.5 py-1.5">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Database Branch */}
          <div className="rounded-sm border border-border-strong bg-bg-surface p-4">
            <div className="mb-2.5 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">
              <Database className="h-4 w-4 text-accent" />
              <span>Database &amp; State</span>
            </div>
            <ul className="space-y-1.5 font-mono text-xs text-text-secondary">
              {architectureLayers.downstream.database.map((item) => (
                <li key={item} className="rounded border border-border-subtle bg-bg-elevated px-2.5 py-1.5 text-text-primary">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Services Branch */}
          <div className="rounded-sm border border-border-strong bg-bg-surface p-4">
            <div className="mb-2.5 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">
              <Server className="h-4 w-4 text-accent" />
              <span>External Services</span>
            </div>
            <ul className="space-y-1.5 font-mono text-xs text-text-secondary">
              {architectureLayers.downstream.services.map((item) => (
                <li key={item} className="rounded border border-border-subtle bg-bg-elevated px-2.5 py-1.5 text-text-primary">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
