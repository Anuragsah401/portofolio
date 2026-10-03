import { useEffect } from 'react';

let activeAnimationFrame: number | null = null;

function easeOutQuint(t: number): number {
  return 1 - Math.pow(1 - t, 5);
}

/**
 * Smoothly scrolls the window to a target Y coordinate or element ID at a
 * luxurious, controlled pace using a 60fps requestAnimationFrame loop.
 */
export function smoothScrollTo(target: string | number, duration = 1150, offset = 80) {
  if (typeof window === 'undefined') return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let targetY = 0;
  if (typeof target === 'number') {
    targetY = target;
  } else {
    const id = target.replace(/^#/, '');
    const element = document.getElementById(id);
    if (!element) return;
    targetY = element.getBoundingClientRect().top + window.scrollY - offset;
  }

  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const clampedTargetY = Math.max(0, Math.min(targetY, maxScroll));

  if (prefersReducedMotion) {
    window.scrollTo(0, clampedTargetY);
    return;
  }

  if (activeAnimationFrame !== null) {
    cancelAnimationFrame(activeAnimationFrame);
    activeAnimationFrame = null;
  }

  const startY = window.scrollY;
  const distance = clampedTargetY - startY;

  if (Math.abs(distance) < 2) return;

  // Scale duration gently by distance so both short and long jumps feel natural and unhurried
  const adaptiveDuration = Math.min(1400, Math.max(850, duration * (Math.abs(distance) / 1200 + 0.45)));
  let startTime: number | null = null;

  // Cancel programmatic scroll if user manually scrolls with wheel or touch
  const cancelOnUserInput = () => {
    if (activeAnimationFrame !== null) {
      cancelAnimationFrame(activeAnimationFrame);
      activeAnimationFrame = null;
    }
    cleanupListeners();
  };

  const cleanupListeners = () => {
    window.removeEventListener('wheel', cancelOnUserInput);
    window.removeEventListener('touchstart', cancelOnUserInput);
  };

  window.addEventListener('wheel', cancelOnUserInput, { passive: true });
  window.addEventListener('touchstart', cancelOnUserInput, { passive: true });

  const step = (timestamp: number) => {
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / adaptiveDuration, 1);
    const eased = easeOutQuint(progress);

    window.scrollTo(0, Math.round(startY + distance * eased));

    if (progress < 1) {
      activeAnimationFrame = requestAnimationFrame(step);
    } else {
      activeAnimationFrame = null;
      cleanupListeners();
    }
  };

  activeAnimationFrame = requestAnimationFrame(step);
}

/**
 * Inertial wheel-scroll damper for fine-pointer desktops.
 * Intercepts abrupt mouse-wheel jumps and interpolates them at a silky 60fps pace
 * without hijacking native Mac trackpad momentum or touch scrolling.
 */
export function useSmoothWheelScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (prefersReducedMotion || !isFinePointer) return;

    let targetScrollY = window.scrollY;
    let currentScrollY = window.scrollY;
    let isAnimating = false;
    let rafId: number | null = null;

    // Ease factor (0.085 gives a weighted, unhurried 60fps glide)
    const lerpFactor = 0.085;

    const updateScroll = () => {
      const diff = targetScrollY - currentScrollY;

      if (Math.abs(diff) > 0.5) {
        currentScrollY += diff * lerpFactor;
        window.scrollTo(0, Math.round(currentScrollY));
        rafId = requestAnimationFrame(updateScroll);
      } else {
        currentScrollY = targetScrollY;
        window.scrollTo(0, Math.round(targetScrollY));
        isAnimating = false;
        rafId = null;
      }
    };

    const onWheel = (e: WheelEvent) => {
      // Do not interfere with pinch-to-zoom or horizontal scrolling
      if (e.ctrlKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      // Check if scrolling inside an overflow container
      const target = e.target as HTMLElement | null;
      if (target?.closest('[data-scrollable="true"]')) return;

      e.preventDefault();

      if (!isAnimating) {
        currentScrollY = window.scrollY;
        targetScrollY = window.scrollY;
      }

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      // Dampen raw wheel delta (0.68x multiplier) so scrolling is never overly fast
      const dampedDelta = e.deltaY * 0.68;
      targetScrollY = Math.max(0, Math.min(targetScrollY + dampedDelta, maxScroll));

      if (!isAnimating) {
        isAnimating = true;
        rafId = requestAnimationFrame(updateScroll);
      }
    };

    const syncOnNativeScroll = () => {
      if (!isAnimating) {
        currentScrollY = window.scrollY;
        targetScrollY = window.scrollY;
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', syncOnNativeScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', syncOnNativeScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);
}
