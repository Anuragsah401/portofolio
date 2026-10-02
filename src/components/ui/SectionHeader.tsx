interface SectionHeaderProps {
  index?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'
      }`}
    >
      <div
        className={`mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-text-muted ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        {index && (
          <span className="inline-flex items-center rounded border border-border-strong bg-bg-surface px-2 py-0.5 text-[11px] font-medium text-accent">
            {index}
          </span>
        )}
        <span className="h-px w-6 bg-border-strong" aria-hidden="true" />
        <span className="text-text-secondary">{eyebrow}</span>
      </div>

      <h2 className="text-3xl font-semibold tracking-tightest text-text-primary sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
