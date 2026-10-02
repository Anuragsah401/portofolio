import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import Home from './pages/Home';

const WorkPage = lazy(() => import('./pages/Work'));
const ProjectPage = lazy(() => import('./pages/Project'));
const AILabPage = lazy(() => import('./pages/AILabPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="font-mono text-xs uppercase tracking-widest text-text-muted">
        Loading module...
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'work',
        element: (
          <Suspense fallback={<RouteFallback />}>
            <WorkPage />
          </Suspense>
        ),
      },
      {
        path: 'work/:slug',
        element: (
          <Suspense fallback={<RouteFallback />}>
            <ProjectPage />
          </Suspense>
        ),
      },
      {
        path: 'ai-lab',
        element: (
          <Suspense fallback={<RouteFallback />}>
            <AILabPage />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<RouteFallback />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<RouteFallback />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<RouteFallback />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);
