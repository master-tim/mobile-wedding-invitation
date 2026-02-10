"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Lenis with specific settings for a "weighted" feel
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;
    window.lenis = lenis;

    // Connect GSAP ScrollTrigger to Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // GSAP ticker connect
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    // Disable grid scroll anchoring if needed
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      window.lenis = undefined;
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []); // Run once on mount

  // Handle route changes
  useEffect(() => {
    if (lenisRef.current) {
        // Reset scroll on route change if needed, though for single page invite it's fine.
        // lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return null;
}
