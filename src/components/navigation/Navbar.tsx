import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
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
  { label: 'Contact', path: '/contact', sectionId: 'contact' },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);

      if (location.pathname !== '/') return;

      const sectionIds = ['work', 'ai-lab', 'process', 'about', 'contact'];
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
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
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? 'border-b border-border-subtle bg-bg-primary/85 backdrop-blur-md'
          : 'border-b border-transparent bg-bg-primary/60 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Identity */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-2.5 focus:outline-none"
          aria-label="Anurag Sah Home"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-sm border border-border-strong bg-bg-elevated font-mono text-xs font-semibold text-text-primary transition-colors group-hover:border-accent">
            A
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-sm font-semibold tracking-wider text-text-primary">
              ANURAG
            </span>
            <span className="hidden font-mono text-[11px] text-text-muted sm:inline-block">
              / AI PRODUCT BUILDER
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Primary Navigation" className="hidden md:flex md:items-center md:gap-1">
          {navItems.map((item) => {
            const active = isItemActive(item);
            return (
              <Link
                key={item.label}
                to={item.path}
                onClick={(e) => handleNavClick(e, item)}
                className={`relative rounded-sm px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  active
                    ? 'text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute inset-x-2 -bottom-[13px] h-[2px] bg-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border-subtle bg-bg-elevated text-text-secondary transition-colors hover:border-border-strong hover:text-text-primary"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <Link
            to="/contact"
            className="hidden items-center gap-1.5 rounded-sm border border-border-strong bg-bg-elevated px-3.5 py-1.5 font-mono text-xs font-medium text-text-primary transition-all hover:border-accent hover:text-accent sm:inline-flex"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>Start a project</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border-subtle bg-bg-elevated text-text-primary md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-border-strong bg-bg-elevated md:hidden"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1 px-4 py-4">
              {navItems.map((item) => {
                const active = isItemActive(item);
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`flex items-center justify-between rounded-sm px-3 py-2.5 text-sm font-medium ${
                      active
                        ? 'bg-accent-soft text-accent'
                        : 'text-text-secondary hover:bg-bg-surface hover:text-text-primary'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-text-muted">0{navItems.indexOf(item) + 1}</span>
                  </Link>
                );
              })}
              <div className="pt-3">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-sm bg-text-primary px-4 py-2.5 text-sm font-medium text-bg-primary"
                >
                  <span>Let's build something</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
