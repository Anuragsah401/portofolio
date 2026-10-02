import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)');
    setEnabled(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setEnabled(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    if (!mediaQuery.matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest('a, button, [role="button"], input, textarea, select');
      setIsHovering(Boolean(interactive));
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden lg:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <div
        className={`-ml-3 -mt-3 h-6 w-6 rounded-full border transition-all duration-150 ease-out ${
          isHovering
            ? 'scale-150 border-accent/60 bg-accent/10'
            : 'scale-100 border-text-muted/30 bg-transparent'
        }`}
      />
    </div>
  );
}
