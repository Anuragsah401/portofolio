import { motion } from 'framer-motion';
import { technologyCategories } from '../../data/technologies';
import { SectionHeader } from '../ui/SectionHeader';

export function TechnologySection() {
  return (
    <section className="border-b border-border-subtle py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="06"
          eyebrow="Technical Stack"
          title="Modern engineering across the full stack."
          subtitle="A focused, production-proven toolkit for building responsive interfaces, relational backends, and AI-native systems."
        />

        <div className="divide-y divide-border-subtle border-y border-border-subtle">
          {technologyCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="grid grid-cols-1 gap-6 py-8 lg:grid-cols-12 lg:gap-10"
            >
              {/* Category Header */}
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs text-accent">0{idx + 1}</span>
                  <h3 className="text-xl font-semibold tracking-tight text-text-primary">
                    {category.title}
                  </h3>
                </div>
                <p className="mt-1.5 text-sm text-text-secondary">{category.subtitle}</p>
              </div>

              {/* Structured Tech Items */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-8">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="group rounded-sm border border-border-subtle bg-bg-elevated/60 p-4 transition-colors hover:border-border-strong hover:bg-bg-elevated"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-semibold text-text-primary group-hover:text-accent transition-colors">
                        {item.name}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-border-strong group-hover:bg-accent transition-colors" />
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-text-secondary">
                      {item.usage}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
