import { motion } from 'framer-motion';

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
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-14 md:mb-20 ${
        align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'
      }`}
    >
      <div
        className={`mb-5 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-widest ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        {index && (
          <span className="inline-flex h-6 items-center border border-border-strong bg-accent px-2 font-mono text-[11px] font-bold text-white">
            {index}
          </span>
        )}
        <span className="h-[1.5px] w-8 bg-text-primary" aria-hidden="true" />
        <span className="text-text-primary">{eyebrow}</span>
      </div>

      <h2 className="text-4xl font-extrabold leading-[1.04] tracking-tightest text-text-primary sm:text-5xl md:text-6xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-base font-medium leading-relaxed text-text-secondary sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
