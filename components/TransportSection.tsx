"use client";

import ScrollSection from "./gsap/ScrollSection";
import { WEDDING_DATA } from "@/data/wedding-data";

export default function TransportSection() {
  return (
    <section className="section section-alt">
      <div className="section-inner">
        <ScrollSection animation="fade-up" className="text-center mb-10">
          <p className="eyebrow mb-2">
            {WEDDING_DATA.content.transport.eyebrow}
          </p>
          <h2 className="text-3xl heading-serif text-[var(--color-text)]">
            {WEDDING_DATA.content.transport.title}
          </h2>
          <div className="section-divider" />
        </ScrollSection>

        <ScrollSection animation="fade-up" delay={0.1}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center gap-2 mb-3">
              <svg
                className="w-5 h-5 text-[var(--color-primary)]"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-1.6-3.2A2 2 0 0014.6 5H9.4a2 2 0 00-1.8 1.1L6 10l-2.5 1.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2"
                />
                <circle cx="7" cy="17" r="2" />
                <circle cx="17" cy="17" r="2" />
              </svg>
              <h3 className="text-lg heading-serif text-[var(--color-text)]">
                {WEDDING_DATA.content.transport.parking.title}
              </h3>
            </div>
            <p
              className="text-sm text-[var(--color-text-light)]"
              dangerouslySetInnerHTML={{
                __html: WEDDING_DATA.content.transport.parking.desc,
              }}
            />
          </div>
        </ScrollSection>
      </div>
    </section>
  );
}
