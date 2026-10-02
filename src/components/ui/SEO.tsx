import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  type?: 'website' | 'article';
}

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://anuragsah.dev';
const DEFAULT_TITLE = 'Anurag Sah — AI Product Builder & Developer';
const DEFAULT_DESCRIPTION =
  'I build modern digital products, AI-powered experiences, SaaS platforms, and business solutions.';

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  type = 'website',
}: SEOProps) {
  const fullTitle = title ? `${title} — Anurag Sah` : DEFAULT_TITLE;
  const canonicalUrl = `${SITE_URL}${path === '/' ? '' : path}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Anurag Sah',
    jobTitle: 'AI Product Builder & Full-Stack Engineer',
    url: SITE_URL,
    sameAs: [
      'https://github.com/anuragsah401',
      'https://www.linkedin.com/in/anuragsah401',
    ],
    description: DEFAULT_DESCRIPTION,
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Anurag Sah — AI Product Builder" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}
