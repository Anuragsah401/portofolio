import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/navigation/Navbar';
import { Footer } from '../components/navigation/Footer';
import { CustomCursor } from '../components/ui/CustomCursor';
import { smoothScrollTo, useSmoothWheelScroll } from '../utils/smoothScroll';

export function MainLayout() {
  const { pathname, hash } = useLocation();

  // Enable silky 60fps damped wheel scrolling on desktop
  useSmoothWheelScroll();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => {
        smoothScrollTo(id, 1150);
      }, 60);
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-text-primary">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-sm focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <CustomCursor />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
