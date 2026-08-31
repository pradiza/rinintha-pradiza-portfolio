"use client";

import { useEffect, useState } from "react";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/profile", label: "Profile" },
  { href: "/media", label: "Media & Press" },
  { href: "/work", label: "Selected Work" },
  { href: "/services", label: "Services" },
  { href: "/consultation", label: "Consultation" },
];

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="nav" aria-label="Primary navigation" data-menu-open={isOpen}>
      <a className="brand" href="/" aria-label="Rinintha Pradiza, home">RP<span>.</span></a>
      <button
        className="menuToggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="primary-menu"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <div className="navLinks" id="primary-menu">
        {primaryLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>{link.label}</a>)}
        <a className="navCta" href="/contact" onClick={() => setIsOpen(false)}>Let&apos;s talk ↗</a>
      </div>
    </nav>
  );
}
