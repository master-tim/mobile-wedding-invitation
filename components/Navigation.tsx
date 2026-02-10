"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { WEDDING_DATA } from "@/data/wedding-data";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: WEDDING_DATA.content.navigation.home, href: "#hero" },
    { label: WEDDING_DATA.content.navigation.intro, href: "#intro" },
    { label: WEDDING_DATA.content.navigation.venue, href: "#venue" },
    { label: WEDDING_DATA.content.navigation.transport, href: "#transport" },
    { label: WEDDING_DATA.content.navigation.contact, href: "#contact" },
    { label: WEDDING_DATA.content.navigation.gallery, href: "#gallery" },
  ];

  return (
    <>
      {/* Sticky/Absolute Header */}
      <nav
        className={`fixed top-0 left-0 w-full z-[70] flex items-center justify-between px-6 py-6 md:px-10 transition-all duration-300 ${isScrolled ? "text-white mix-blend-difference" : "text-white bg-gradient-to-b from-black/60 to-transparent drop-shadow-md"}`}
      >
        <button
          onClick={toggleMenu}
          className="uppercase tracking-widest text-sm font-medium hover:opacity-70 transition-opacity"
        >
          {isOpen
            ? WEDDING_DATA.content.navigation.close
            : WEDDING_DATA.content.navigation.menu}
        </button>
      </nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] text-white flex flex-col justify-center items-center bg-black"
          >
            <Image
              src={WEDDING_DATA.images.background}
              alt="Menu Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />

            <div className="w-full h-full max-w-[720px] mx-auto flex flex-col justify-center items-center relative z-10">
              <div className="flex flex-col space-y-6 text-center">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleMenu();
                        const target = document.querySelector(item.href);
                        if (target && window.lenis) {
                          window.lenis.scrollTo(target as HTMLElement);
                        }
                      }}
                      className="text-4xl md:text-6xl font-serif hover:text-gray-400 transition-colors uppercase tracking-wider"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-10 text-sm tracking-widest uppercase text-white/50"
              >
                Wedding Invitation
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
