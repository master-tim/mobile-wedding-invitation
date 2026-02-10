"use client";

import AnimatedSection from "./AnimatedSection";
import { WEDDING_DATA } from "@/data/wedding-data";

export default function FooterSection() {
  return (
    <footer className="section section-alt text-center">
      <AnimatedSection>
        <div className="text-[var(--color-primary)] text-3xl heading-script mb-4">
          ♥
        </div>
        <p className="text-sm text-[var(--color-text-light)]">
          {WEDDING_DATA.content.footer.copyright}
        </p>
        <p className="text-xs text-[var(--color-text-light)] mt-6 opacity-60">
          © 2026 {WEDDING_DATA.groom.name} & {WEDDING_DATA.bride.name}
        </p>
      </AnimatedSection>
    </footer>
  );
}
