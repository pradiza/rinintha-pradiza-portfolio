"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const measurementId = "G-Y2701E2FV6";
const preferenceKey = "rinintha-analytics-consent";
type Choice = "accepted" | "declined";
type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  "ga-disable-G-Y2701E2FV6"?: boolean;
};

function configureAnalytics(choice: Choice) {
  const analyticsWindow = window as AnalyticsWindow;
  analyticsWindow["ga-disable-G-Y2701E2FV6"] = choice !== "accepted";
  analyticsWindow.dataLayer ??= [];
  // Queue privacy settings before the Google tag initializes.
  function queue(...args: unknown[]) {
    void args;
    analyticsWindow.dataLayer!.push(arguments);
  }
  const gtag = analyticsWindow.gtag ?? queue;
  gtag("consent", "default", {
    analytics_storage: choice === "accepted" ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  gtag("set", { allow_google_signals: false, allow_ad_personalization_signals: false });
}

export function VisitorAnalytics() {
  const pathname = usePathname();
  const japanese = pathname === "/ja" || pathname.startsWith("/ja/");
  const [choice, setChoice] = useState<Choice | null>(null);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let saved: Choice | null = null;
    try {
      const preference = JSON.parse(localStorage.getItem(preferenceKey) ?? "null");
      if (preference?.expires > Date.now() && ["accepted", "declined"].includes(preference.choice)) {
        saved = preference.choice;
      }
    } catch { /* A blocked or unavailable store must not enable analytics. */ }
    configureAnalytics(saved ?? "declined");
    setChoice(saved);
    setOpen(saved === null);
    setReady(true);
  }, []);

  function choose(next: Choice) {
    try {
      localStorage.setItem(preferenceKey, JSON.stringify({ choice: next, expires: Date.now() + 180 * 86400000 }));
    } catch { /* The choice still applies for this page visit. */ }
    configureAnalytics(next);
    if (next === "declined") {
      (window as AnalyticsWindow).gtag?.("consent", "update", { analytics_storage: "denied" });
      // Remove first-party GA cookies when consent is withdrawn.
      for (const cookie of document.cookie.split(";")) {
        const name = cookie.split("=")[0].trim();
        if (name !== "_ga" && !name.startsWith("_ga_")) continue;
        const parts = location.hostname.split(".");
        document.cookie = `${name}=; Max-Age=0; path=/`;
        for (let i = 0; i < parts.length - 1; i++) {
          document.cookie = `${name}=; Max-Age=0; path=/; domain=${parts.slice(i).join(".")}`;
        }
      }
    } else {
      (window as AnalyticsWindow).gtag?.("consent", "update", { analytics_storage: "granted" });
    }
    const wasAccepted = choice === "accepted";
    setChoice(next);
    setOpen(false);
    // Unload the already-running Google tag after withdrawing consent.
    if (wasAccepted && next === "declined") location.reload();
  }

  if (!ready) return null;
  return <>
    {choice === "accepted" && <GoogleAnalytics gaId={measurementId} />}
    <div className="analyticsPreferences" lang={japanese ? "ja" : "en"}>
      <button type="button" className="analyticsSettings" aria-expanded={open} aria-controls="analytics-choice" onClick={() => setOpen(!open)}>
        {japanese ? "アクセス解析の設定" : "Analytics preferences"}
      </button>
      {open && <section id="analytics-choice" className="analyticsNotice" aria-labelledby="analytics-title">
        <h2 id="analytics-title">{japanese ? "アクセス解析について" : "Help improve this website"}</h2>
        <p>{japanese ? "Google AnalyticsのCookieを使い、閲覧ページや滞在時間を測定してもよろしいですか？許可しなくてもサイトをご利用いただけます。設定はいつでも変更できます。" : "May we use Google Analytics cookies to measure pages visited and time spent on this website? You can decline and still use the site, or change your choice anytime."}</p>
        <details><summary>{japanese ? "データの取り扱い" : "How your data is used"}</summary>
          <p>{japanese ? "リニンザ　プラディザは、サイト改善のためにアクセス解析を利用します。許可すると、閲覧・操作情報、ブラウザーやデバイスの情報、おおまかな地域がGoogleによって処理されます。広告パーソナライズは無効です。Cookieを使わないVercelの集計アクセス解析も利用しています。この選択はお使いのブラウザーに180日間保存されます。" : "Rinintha Pradiza uses analytics to improve this website. If you accept, Google processes page visits, interactions, browser and device information, and approximate location. Advertising personalization is disabled. We also use Vercel’s cookie-free aggregate traffic analytics. Your choice is saved in this browser for 180 days."}</p>
          <p><a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">{japanese ? "Googleのデータ利用について" : "How Google uses data"}</a> · <a href="mailto:rininthapradiza@gmail.com">{japanese ? "お問い合わせ" : "Contact"}</a></p>
        </details>
        <div className="analyticsActions"><button type="button" onClick={() => choose("declined")}>{japanese ? "許可しない" : "Decline"}</button><button type="button" onClick={() => choose("accepted")}>{japanese ? "許可する" : "Accept analytics"}</button></div>
      </section>}
    </div>
  </>;
}
