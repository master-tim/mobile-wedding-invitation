"use client";

import { useEffect, useRef, useLayoutEffect, DependencyList } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap/register";

// Use useLayoutEffect on client, useEffect on server (for SSR)
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useGSAP(
  callback: (context: {
    gsap: typeof gsap;
    selector: (selector: string) => Element[];
  }) => void | (() => void),
  dependencies: DependencyList = [],
) {
  const scopeRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!scopeRef.current) return;

    const ctx = gsap.context(() => {
      const selector = (sel: string) =>
        gsap.utils.selector(scopeRef.current)(sel);
      const cleanup = callback({ gsap, selector });
      return cleanup;
    }, scopeRef.current);

    return () => ctx.revert();
  }, dependencies);

  return scopeRef;
}

export function useScrollTrigger(
  callback: () => ScrollTrigger | void,
  dependencies: DependencyList = [],
) {
  useIsomorphicLayoutEffect(() => {
    const trigger = callback();

    return () => {
      if (trigger) {
        trigger.kill();
      }
    };
  }, dependencies);
}
