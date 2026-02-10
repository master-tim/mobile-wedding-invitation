"use client";

import { ReactNode, useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap/register";

interface ScrollSectionProps {
  children: ReactNode;
  animation?:
    | "fade-up"
    | "fade-down"
    | "fade-left"
    | "fade-right"
    | "fade"
    | "scale"
    | "none";
  delay?: number;
  duration?: number;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean;
  className?: string;
  stagger?: number;
}

export default function ScrollSection({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.8,
  start = "top 95%",
  end = "bottom 20%",
  scrub = false,
  pin = false,
  markers = false,
  className = "",
  stagger = 0,
}: ScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const element = sectionRef.current;
    const children =
      stagger > 0 ? gsap.utils.toArray(element.children) : element;

    // Animation variants
    const animations: Record<string, gsap.TweenVars> = {
      "fade-up": { opacity: 0, y: 60 },
      "fade-down": { opacity: 0, y: -60 },
      "fade-left": { opacity: 0, x: -60 },
      "fade-right": { opacity: 0, x: 60 },
      fade: { opacity: 0 },
      scale: { opacity: 0, scale: 0.8 },
      none: {},
    };

    const fromVars = animations[animation] || {};

    if (animation === "none") {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(children, {
        ...fromVars,
        duration,
        delay,
        stagger: stagger > 0 ? stagger : undefined,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start,
          end,
          scrub: scrub,
          pin: pin,
          markers: markers,
          toggleActions: scrub ? undefined : "play none none reverse",
        },
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, [animation, delay, duration, start, end, scrub, pin, markers, stagger]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
