"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap/register";
import { WEDDING_DATA } from "@/data/wedding-data";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !heroTextRef.current || !bgRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax background effect - slower scroll
      gsap.to(bgRef.current, {
        y: () => window.innerHeight * 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Fade out hero text on scroll
      gsap.to(heroTextRef.current, {
        opacity: 0,
        y: -50,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom 70%",
          scrub: 1,
        },
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100dvh] w-full flex flex-col overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div ref={bgRef} className="absolute inset-0 z-0 scale-110">
        <Image
          src={WEDDING_DATA.images.main}
          alt="Wedding main photo"
          fill
          priority
          quality={90}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAQMDBAMBAAAAAAAAAAAAAQIDBAAFEQYSITETQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEQA/AEJUDHzD/9k="
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/5 to-black/50" />
      </div>

      {/* Content */}
      <div
        ref={heroTextRef}
        className="relative z-10 flex-1 flex flex-col justify-between items-center px-6 md:px-10 text-white text-center py-20"
      >
        {/* Title at top - Large script style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-10"
        >
          <h1 className="text-6xl md:text-7xl leading-tight heading-script drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]">
            Happily
            <br />
            Ever After
          </h1>
          <p className="mt-4 text-xs tracking-[0.4em] uppercase text-white/80">
            Wedding Invitation
          </p>
        </motion.div>

        {/* Names, date and venue at bottom */}
        <div className="space-y-6 pb-10">
          {/* Names with separator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em]">
              {WEDDING_DATA.content.hero.groom}
              <span className="mx-3 text-xl">*</span>
              {WEDDING_DATA.content.hero.bride}
            </h2>
          </motion.div>

          {/* Date and venue */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-y-2"
          >
            <p className="text-base md:text-lg tracking-[0.2em] uppercase">
              {WEDDING_DATA.content.hero.date} {WEDDING_DATA.content.hero.time}
            </p>
            <p className="text-sm md:text-base tracking-[0.2em] uppercase opacity-90">
              {WEDDING_DATA.content.hero.location}
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
