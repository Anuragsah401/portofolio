export interface TechCategory {
  id: string;
  title: string;
  subtitle: string;
  items: {
    name: string;
    usage: string;
  }[];
}

export const technologyCategories: TechCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces, design systems & state architecture',
    items: [
      { name: 'React', usage: 'Component architecture & interactive product surfaces' },
      { name: 'Vite', usage: 'Fast module bundling & modern build pipeline' },
      { name: 'TypeScript', usage: 'End-to-end static typing & contract safety' },
      { name: 'Tailwind CSS', usage: 'Token-driven design systems & responsive layouts' },
      { name: 'Ant Design', usage: 'Enterprise back-office & data-dense admin interfaces' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'APIs, domain logic & service orchestration',
    items: [
      { name: 'Node.js', usage: 'Event-driven server runtime & asynchronous pipelines' },
      { name: 'Express', usage: 'RESTful API gateways, middleware & webhook handlers' },
      { name: 'NestJS', usage: 'Modular, dependency-injected enterprise backend architecture' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    subtitle: 'Relational schemas, ORMs & managed data stores',
    items: [
      { name: 'PostgreSQL', usage: 'Primary transactional database for multi-tenant SaaS' },
      { name: 'Prisma', usage: 'Type-safe database client, migrations & relational modeling' },
      { name: 'MongoDB', usage: 'Flexible document storage for unstructured & event logs' },
      { name: 'Supabase', usage: 'Managed Postgres, real-time subscriptions & auth services' },
      { name: 'Neon', usage: 'Serverless PostgreSQL with branching for modern cloud workflows' },
    ],
  },
  {
    id: 'ai',
    title: 'AI',
    subtitle: 'Reasoning, voice interfaces & deterministic tool use',
    items: [
      { name: 'OpenAI', usage: 'Structured outputs, reasoning models & audio pipelines' },
      { name: 'LLM APIs', usage: 'Context orchestration, prompt engineering & streaming' },
      { name: 'AI Agents', usage: 'Multi-step problem solving scoped to business domains' },
      { name: 'Tool Calling', usage: 'Schema-validated function execution with RBAC & approvals' },
      { name: 'Voice Interfaces', usage: 'Speech-to-intent & hands-free operational interactions' },
    ],
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    subtitle: 'Version control, CI/CD & cloud deployment',
    items: [
      { name: 'GitHub', usage: 'Source control, code review & automated workflows' },
      { name: 'Netlify', usage: 'Edge-deployed web applications & preview environments' },
      { name: 'Vercel', usage: 'Frontend cloud deployment & serverless edge routing' },
      { name: 'Render', usage: 'Managed Node.js services, background workers & APIs' },
      { name: 'Cloud Services', usage: 'Production hosting, environment isolation & monitoring' },
    ],
  },
];
