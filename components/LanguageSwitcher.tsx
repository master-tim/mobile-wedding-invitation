"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // Parse country and locale from path: /[country]/[locale]/...
  // Example: /korea/en
  const segments = pathname.split("/").filter(Boolean);
  const country = segments[0] || "korea";
  const currentLocale = segments[1] || "ko";

  // Define available locales for Korea
  const locales = [
    { code: "ko", label: "KOR" },
    { code: "en", label: "ENG" },
  ];

  const handleLocaleChange = (newLocale: string) => {
    // Construct new path
    const newSegments = [...segments];
    if (newSegments.length >= 2) {
      newSegments[1] = newLocale;
    } else {
      router.push(`/${country}/${newLocale}`);
      return;
    }

    const newPath = `/${newSegments.join("/")}`;

    // Persist preference
    localStorage.setItem("wedding-locale", newLocale);
    document.cookie = `wedding-locale=${newLocale}; path=/; max-age=31536000`;

    // Force hard navigation to ensure middleware and i18n logic runs fresh
    window.location.href = newPath;
  };

  if (locales.length <= 1) return null;

  return (
    <div className="flex gap-4 text-sm font-medium tracking-widest z-[70]">
      {locales.map((locale) => (
        <button
          key={locale.code}
          onClick={() => handleLocaleChange(locale.code)}
          disabled={isPending}
          className={`${
            currentLocale === locale.code
              ? "text-white border-b border-white"
              : "text-white/60 hover:text-white transition-colors"
          }`}
        >
          {locale.label}
        </button>
      ))}
    </div>
  );
}
