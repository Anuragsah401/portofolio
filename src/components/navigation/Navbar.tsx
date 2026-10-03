import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

interface NavItem {
  label: string;
  path: string;
  sectionId: string;
}

const navItems: NavItem[] = [
  { label: 'Work', path: '/work', sectionId: 'work' },
  { label: 'AI Lab', path: '/ai-lab', sectionId: 'ai-lab' },
  { label: 'Process', path: '/#process', sectionId: 'process' },
  { label: 'About', path: '/about', sectionId: 'about' },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => {
      if (location.pathname !== '/') return;
      const sectionIds = ['work', 'ai-lab', 'process', 'about', 'contact'];
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (location.pathname === '/') {
      const target = document.getElementById(item.sectionId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
        return;
      }
    } else if (item.path === '/#process') {
      e.preventDefault();
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('process');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      setMobileOpen(false);
    }
  };

  const isItemActive = (item: NavItem) => {
    if (location.pathname === '/') {
      return activeSection === item.sectionId;
    }
    if (item.path !== '/#process' && location.pathname.startsWith(item.path)) {
      return true;
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-strong/20 bg-bg-primary/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Reference-inspired Architectural Vertical Partition Grid */}
        <div className="grid h-20 grid-cols-2 items-center md:grid-cols-12">
          {/* Compartment 1: Geometric Folded Emblem + Brand Name */}
          <div className="flex h-full items-center border-border-strong/30 md:col-span-3 md:border-r md:pr-6">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="Anurag Sah Home"
            >
              {/* Folded Monolith Icon (Directly inspired by reference logo) */}
              <svg
                className="h-7 w-7 text-text-primary transition-transform duration-300 group-hover:scale-105"
                viewBox="0 0 32 32"
                fill="none"
                aria-hidden="true"
              >
                <path d="M5 7L16 12V28L5 22V7Z" fill="currentColor" />
                <path
                  d="M16 12L26 6V21L16 28V12Z"
                  stroke="currentColor"
                  strokeWidth="2.2"
                />
                <circle cx="24" cy="7" r="3.5" fill="var(--accent-primary)" />
              </svg>
              <span className="text-lg font-extrabold tracking-tight text-text-primary">
                anurag<span className="text-accent">.</span>
              </span>
            </Link>
          </div>

          {/* Compartment 2: Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden h-full items-center justify-center gap-8 border-r border-border-strong/30 px-6 md:col-span-5 md:flex"
          >
            {navItems.map((item) => {
              const active = isItemActive(item);
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative py-1 text-sm font-semibold transition-colors ${
                    active
                      ? 'text-text-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="editorial-nav-dot"
                      className="absolute -bottom-1.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent"
                      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Compartment 3: Status / Theme Switcher */}
          <div className="hidden h-full items-center justify-end gap-4 border-r border-border-strong/30 px-6 md:col-span-2 md:flex">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'paper' : 'dark'} mode`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-text-secondary transition-colors hover:text-text-primary"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="h-3.5 w-3.5 text-accent" />
                  <span>Paper</span>
                </>
              ) : (
                <>
                  <Moon className="h-3.5 w-3.5" />
                  <span>Ink</span>
                </>
              )}
            </button>
          </div>

          {/* Compartment 4: Rectangular Boxed CTA ("Sign up" style from reference) */}
          <div className="flex h-full items-center justify-end gap-3 md:col-span-2 md:pl-6">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="inline-flex h-10 w-10 items-center justify-center border border-border-strong text-text-primary md:hidden"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <Link
              to="/contact"
              className="editorial-btn-outline hidden px-5 py-2.5 text-xs font-bold tracking-wide md:inline-flex"
            >
              Let&apos;s talk
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation menu"
              className="inline-flex h-10 w-10 items-center justify-center border border-border-strong bg-bg-elevated text-text-primary md:hidden"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border-strong bg-bg-elevated md:hidden"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col divide-y divide-border-subtle px-4 py-4">
              {navItems.map((item, idx) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item)}
                  className="flex items-center justify-between py-3.5 text-base font-bold text-text-primary"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-accent">0{idx + 1}</span>
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="editorial-btn-primary flex w-full items-center justify-center py-3.5 text-sm font-bold"
                >
                  Let&apos;s build something
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
