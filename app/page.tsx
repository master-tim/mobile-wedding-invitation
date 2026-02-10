"use client";

import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import GallerySection from "@/components/GallerySection";
import VenueSection from "@/components/VenueSection";
import TransportSection from "@/components/TransportSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import Navigation from "@/components/Navigation";

export default function WeddingInvitation() {
  return (
    <main className="page-shell">
      <Navigation />

      <div id="hero">
        <HeroSection />
      </div>

      <div id="intro">
        <IntroSection />
      </div>

      <div id="venue">
        <VenueSection />
      </div>

      <div id="transport">
        <TransportSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      <div id="gallery">
        <GallerySection />
      </div>

      <FooterSection />
    </main>
  );
}
