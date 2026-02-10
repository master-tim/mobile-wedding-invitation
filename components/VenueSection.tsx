"use client";

import { WEDDING_DATA } from "@/data/wedding-data";
import ScrollSection from "./gsap/ScrollSection";
import MapSection from "./MapSection";
import Image from "next/image";

export default function VenueSection() {
  const { venue, date } = WEDDING_DATA;

  const openNaverMap = () => {
    // Keep using the original Korean address for robust map search in Korea
    const url = `https://map.naver.com/v5/search/${encodeURIComponent(venue.address)}`;
    window.open(url, "_blank");
  };

  const openKakaoMap = () => {
    // Keep using the original Korean address for robust map search in Korea
    const url = `https://map.kakao.com/link/search/${encodeURIComponent(venue.address)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="section">
      <div className="section-inner">
        <ScrollSection animation="fade-up" className="text-center mb-10">
          <p className="eyebrow mb-2">{WEDDING_DATA.content.venue.eyebrow}</p>
          <h2 className="text-3xl heading-serif text-[var(--color-text)]">
            {WEDDING_DATA.content.venue.title}
          </h2>
          <div className="section-divider" />
        </ScrollSection>

        <ScrollSection animation="fade-up" delay={0.1}>
          <div className="text-center mb-8">
            <h3 className="text-lg heading-serif text-[var(--color-text)] mb-2">
              {WEDDING_DATA.venue.name}
            </h3>
            <p className="text-sm text-[var(--color-text-light)] mb-1">
              {WEDDING_DATA.venue.address}
            </p>
            <p className="text-sm text-[var(--color-text-light)]">
              Tel. {WEDDING_DATA.venue.phone}
            </p>
            <p className="text-[var(--color-primary)] text-sm mt-3 font-medium tracking-[0.2em] uppercase">
              {WEDDING_DATA.venue.date}
            </p>
          </div>
        </ScrollSection>

        <ScrollSection animation="scale" delay={0.2}>
          <MapSection />
        </ScrollSection>

        <ScrollSection animation="fade-up" delay={0.3}>
          <div className="flex gap-3 justify-center mt-6">
            <button
              onClick={openNaverMap}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#03C75A] text-white rounded-full text-xs tracking-[0.2em] uppercase transition-transform hover:scale-105"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.273 12.845L7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727z" />
              </svg>
              {WEDDING_DATA.content.venue.naverMap}
            </button>
            <button
              onClick={openKakaoMap}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#FEE500] text-[#191919] rounded-full text-xs tracking-[0.2em] uppercase transition-transform hover:scale-105"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.47 1.607 4.647 4.035 5.906l-.857 3.17a.375.375 0 00.577.412l3.725-2.482c.818.106 1.661.161 2.52.161 5.523 0 10-3.477 10-7.667S17.523 3 12 3z" />
              </svg>
              {WEDDING_DATA.content.venue.kakaoMap}
            </button>
          </div>
        </ScrollSection>
      </div>
    </section>
  );
}
