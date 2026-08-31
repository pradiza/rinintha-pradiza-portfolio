"use client";

import { useEffect } from "react";

const revealSelector = [
  ".heroMessage > *",
  ".heroPortrait figcaption",
  ".pageHero > *",
  ".proof > div",
  ".sectionHead > *",
  ".projectCard",
  ".profileTeaser > *",
  ".consultTeaser > *",
  ".timeline article",
  ".momentsGrid figure",
  ".mediaLinkCard",
  ".pressList > a",
  ".workStory",
  ".serviceList article",
  ".credibilityGrid article",
  ".processGrid article",
  ".consultRequest > *",
  ".contactOptions a",
  ".siteFooter > *",
].join(",");

export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    document.documentElement.classList.add("motionReady");

    items.forEach((item, index) => {
      item.classList.add("revealItem");
      item.style.setProperty("--reveal-delay", `${(index % 4) * 55}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("isVisible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -9%", threshold: 0.08 },
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motionReady");
    };
  }, []);

  return null;
}
