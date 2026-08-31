"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export type Locale = "en" | "ja";

const primaryLinks = {
  en: [
    { href: "/", label: "Home" },
    { href: "/profile", label: "Profile" },
    { href: "/media", label: "Media & Press" },
    { href: "/work", label: "Selected Work" },
    { href: "/services", label: "Services" },
    { href: "/consultation", label: "Consultation" },
  ],
  ja: [
    { href: "/ja", label: "ホーム" },
    { href: "/ja/profile", label: "プロフィール" },
    { href: "/ja/media", label: "メディア掲載" },
    { href: "/ja/work", label: "実績" },
    { href: "/ja/services", label: "サービス" },
    { href: "/ja/consultation", label: "コンサルテーション" },
  ],
};

export function SiteNav({ locale = "en" }: Readonly<{ locale?: Locale }>) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isJapanese = locale === "ja";
  const alternateHref = isJapanese
    ? pathname.replace(/^\/ja(?=\/|$)/, "") || "/"
    : `/ja${pathname === "/" ? "" : pathname}`;

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    document.body.classList.toggle("menuOpen", isOpen);

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menuOpen");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <nav className="nav" aria-label={isJapanese ? "メインナビゲーション" : "Primary navigation"} data-menu-open={isOpen}>
      <a className="brand" href={isJapanese ? "/ja" : "/"} aria-label={isJapanese ? "リニンタ　プラディザ、ホーム" : "Rinintha Pradiza, home"}>RP<span>.</span></a>
      <div className="navLinks" id="primary-menu">
        {primaryLinks[locale].map((link) => <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>{link.label}</a>)}
        <a className="languageSwitch" href={alternateHref} hrefLang={isJapanese ? "en" : "ja"} lang={isJapanese ? "en" : "ja"} onClick={() => setIsOpen(false)}>{isJapanese ? "EN" : "日本語"}</a>
        <a className="navCta" href={isJapanese ? "/ja/contact" : "/contact"} onClick={() => setIsOpen(false)}>{isJapanese ? "お問い合わせ" : "Let's talk"} ↗</a>
      </div>
      <div className="navControls">
        <a className="mobileLanguageSwitch" href={alternateHref} hrefLang={isJapanese ? "en" : "ja"} lang={isJapanese ? "en" : "ja"}>{isJapanese ? "EN" : "日本語"}</a>
        <button
          className="menuToggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-menu"
          aria-label={isJapanese ? (isOpen ? "メニューを閉じる" : "メニューを開く") : (isOpen ? "Close navigation menu" : "Open navigation menu")}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
