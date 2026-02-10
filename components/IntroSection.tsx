"use client";

import { WEDDING_DATA } from "@/data/wedding-data";
import ScrollSection from "./gsap/ScrollSection";

export default function IntroSection() {
  const { groom, bride } = WEDDING_DATA;

  return (
    <section className="section text-center">
      <div className="section-inner">
        <ScrollSection animation="fade-up">
          <p className="eyebrow mb-2">{WEDDING_DATA.content.intro.eyebrow}</p>
          <div className="section-divider" />
        </ScrollSection>

        <ScrollSection animation="fade-up" stagger={0.1} delay={0.2}>
          <div className="mt-10 mb-12">
            <p
              className="text-[15px] leading-relaxed text-[var(--color-text)] mb-1 heading-serif"
              dangerouslySetInnerHTML={{
                __html: WEDDING_DATA.content.intro.mainText,
              }}
            />
          </div>
        </ScrollSection>

        <ScrollSection animation="fade-up" delay={0.4}>
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-[var(--color-text)]">
            <div className="text-right">
              <p className="text-[var(--color-text-light)] text-xs mb-1">
                {WEDDING_DATA.content.intro.groomLabel}
              </p>
              <p className="heading-serif text-lg tracking-[0.15em]">
                {WEDDING_DATA.content.intro.groomName}
              </p>
            </div>
            <div className="w-px h-10 bg-[var(--color-divider)]" />
            <div className="text-left">
              <p className="text-[var(--color-text-light)] text-xs mb-1">
                {WEDDING_DATA.content.intro.brideLabel}
              </p>
              <p className="heading-serif text-lg tracking-[0.15em]">
                {WEDDING_DATA.content.intro.brideName}
              </p>
            </div>
          </div>
        </ScrollSection>

        <ScrollSection animation="fade-up" delay={0.5}>
          <div className="mt-8 text-sm text-[var(--color-text-light)]">
            <p className="heading-serif">
              {WEDDING_DATA.groom.parents.father.name} ·{" "}
              {WEDDING_DATA.groom.parents.mother.name}
              <span className="text-[var(--color-primary)] mx-2">
                {WEDDING_DATA.content.intro.groomParents}
              </span>
              {WEDDING_DATA.groom.name}
            </p>
            <p className="heading-serif mt-1">
              {WEDDING_DATA.bride.parents.father.name} ·{" "}
              {WEDDING_DATA.bride.parents.mother.name}
              <span className="text-[var(--color-primary)] mx-2">
                {WEDDING_DATA.content.intro.brideParents}
              </span>
              {WEDDING_DATA.bride.name}
            </p>
          </div>
        </ScrollSection>
      </div>
    </section>
  );
}
