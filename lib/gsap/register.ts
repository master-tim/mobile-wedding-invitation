"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Set default configuration
gsap.defaults({
  ease: "power2.out",
  duration: 0.8,
});

// ScrollTrigger defaults
ScrollTrigger.defaults({
  toggleActions: "play none none reverse",
  start: "top 80%",
  end: "bottom 20%",
});

// Enable markers for debugging (disable in production)
// ScrollTrigger.config({ markers: true });

export { gsap, ScrollTrigger, ScrollToPlugin };
