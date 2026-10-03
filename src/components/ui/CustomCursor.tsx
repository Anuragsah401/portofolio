import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const cursorX = useSpring(-100, { stiffness: 520, damping: 34 });
  const cursorY = useSpring(-100, { stiffness: 520, damping: 34 });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)');
    setEnabled(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setEnabled(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    if (!mediaQuery.matches) return;

    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest('a, button, [role="button"], input, textarea, select');
      setIsHovering(Boolean(interactive));
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden lg:block"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <div
        className={`-ml-3.5 -mt-3.5 flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-200 ${
          isHovering
            ? 'scale-150 border-accent bg-accent/20'
            : 'scale-100 border-text-primary/50 bg-transparent'
        }`}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full transition-colors ${
            isHovering ? 'bg-accent' : 'bg-text-primary'
          }`}
        />
      </div>
    </motion.div>
  );
}
