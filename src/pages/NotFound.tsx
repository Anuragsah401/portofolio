import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SEO } from '../components/ui/SEO';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-24">
      <SEO title="404 — Page Not Found" path="/404" />
      <div className="max-w-md text-center">
        <div className="font-mono text-xs uppercase tracking-widest text-accent">
          STATUS // 404
        </div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tightest text-text-primary">
          Route not found.
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-text-secondary">
          The page or product route you requested does not exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-sm bg-text-primary px-5 py-2.5 font-mono text-xs font-semibold text-bg-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
