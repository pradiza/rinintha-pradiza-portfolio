import type { Metadata } from "next";
import { PageHero, PageShell, SiteFooter } from "../components";
import { email } from "../site-data";

export const metadata: Metadata = {
  title: "Indonesia Market Entry Consultant for Japanese Companies",
  description: "A 60-minute Indonesia market entry strategy call for Japanese entertainment, media, pop-culture, event, and lifestyle companies. Get practical guidance on audiences, localization, partnerships, and activation.",
  keywords: ["Indonesia market entry consultant", "Indonesia market entry consultation", "Japanese companies Indonesia", "Japan Indonesia business strategy", "Indonesia entertainment market", "Indonesia brand activation", "Indonesia localization strategy"],
  alternates: { canonical: "/consultation" },
  openGraph: {
    title: "Indonesia Market Entry Consultation for Japanese Companies",
    description: "Practical, market-specific guidance for Japanese entertainment, media, pop-culture, event, and lifestyle companies exploring Indonesia.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indonesia Market Entry Consultation for Japanese Companies",
    description: "A focused 60-minute strategy call covering Indonesian audiences, localization, partnerships, activation, and practical next steps.",
  },
};

const consultationMail = `mailto:${email}?subject=Indonesia%20Market%20Entry%20Strategy%20Call&body=Company%20or%20IP%3A%0AWebsite%3A%0AWhat%20are%20you%20considering%20doing%20in%20Indonesia%3F%3A%0AWhat%20stage%20are%20you%20currently%20at%3F%3A%0AYour%20biggest%20questions%20or%20concerns%3A%0AWhat%20would%20make%20this%20consultation%20useful%20for%20you%3F%3A%0APreferred%20timing%3A`;

export default function ConsultationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Indonesia Market Entry Strategy Call",
    description: "A focused 60-minute Indonesia market entry consultation for Japanese entertainment, media, pop-culture, event, and lifestyle companies.",
    provider: { "@type": "Person", name: "Rinintha Pradiza" },
    areaServed: { "@type": "Country", name: "Indonesia" },
    audience: { "@type": "BusinessAudience", audienceType: "Japanese companies exploring the Indonesian market" },
    offers: { "@type": "Offer", price: "100", priceCurrency: "USD" },
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <PageHero
        label="Indonesia market entry consultation for Japanese companies"
        title={<>Enter Indonesia with <em>clarity.</em></>}
        intro="A focused 60-minute Indonesia market entry strategy call with Rinintha Pradiza for Japanese entertainment, media, pop-culture, event, and lifestyle companies exploring Indonesia."
      />

      <section className="consultOffer consultationScope" id="scope">
        <div className="consultOfferHead">
          <p className="sectionLabel">The advisory session</p>
          <h2>Practical Indonesia market entry advice for the <em>decision in front of you.</em></h2>
          <p>This is not a generic introduction to the Indonesian market. Bring one real business, project, or IP question. Together, we will examine your assumptions, identify where local context matters, consider the most relevant market-entry and activation routes, and clarify what should happen next.</p>
        </div>
        <div className="offerPrice"><strong>USD 100</strong><span>Introductory rate · 60 minutes</span><a className="pillButton lightButton" href={consultationMail}>Request a consultation ↗</a><small>Available in English or Indonesian</small></div>
        <div className="offerGrid">
          <article><span>Best for</span><ul><li>Teams assessing whether Indonesia fits</li><li>Japanese entertainment and cultural IP</li><li>Media, events, lifestyle, and consumer-facing brands</li><li>Concepts that need meaningful localization</li><li>A specific decision that needs local context</li></ul></article>
          <article><span>What we can examine</span><ul><li>Audience and fan-community behavior</li><li>Positioning and cultural nuance</li><li>Local partnerships and stakeholder types</li><li>Media, event, activation, and community routes</li><li>Risks, assumptions, and questions to investigate next</li></ul></article>
          <article><span>What you receive</span><ul><li>Short pre-call questionnaire</li><li>60-minute private video call</li><li>Focused discussion around one primary brief</li><li>Concise written action summary</li><li>Clearer priorities and recommended next steps</li></ul></article>
          <article><span>What it is not</span><ul><li>A legal, tax, licensing, or regulatory consultation</li><li>A detailed quantitative market-sizing report</li><li>A full go-to-market strategy</li><li>Investment or financial due diligence</li><li>A guarantee of introductions or business outcomes</li></ul></article>
        </div>
        <p className="offerNote">The USD 100 consultation is offered and invoiced directly by Rinintha Pradiza, with payment through PayPal after the request is accepted. The consultation provides practical commercial and cultural perspective based on professional experience. Where specialist legal, regulatory, financial, or technical advice is needed, those questions should be taken to the appropriate qualified adviser.</p>
      </section>

      <section className="consultCredibility" aria-labelledby="why-rinintha">
        <div className="sectionHead"><p className="sectionLabel">Why Rinintha</p><div><h2 id="why-rinintha">Experience on both sides of <em>the bridge.</em></h2><p className="sectionIntro">The advice is grounded in work inside Japanese IP localization, JETRO-backed market-entry programming, media and community building, branded activation, and consumer-facing projects across Indonesia and Japan.</p></div></div>
        <div className="credibilityGrid">
          <article><span>01 · Entertainment localization</span><h3>JKT48</h3><p>Worked within the group&apos;s formative launch period across event and media relations, appearances, partner coordination, production logistics, and Japanese-to-Indonesian lyric adaptation.</p><a className="textLink" href="/work#jkt48">View related work →</a></article>
          <article><span>02 · Market-entry programming</span><h3>Japan Wave Expo</h3><p>Helped build a JETRO-initiated platform combining business matching, buyer and media engagement, test marketing, fashion showcases, and public programming for Japanese companies entering Indonesia.</p><a className="textLink" href="/work#japan-wave">View related work →</a></article>
          <article><span>03 · Audience and partnership building</span><h3>Japanese Station</h3><p>Co-built a Japanese media and community platform into branded content, events, talent representation, sponsorship, research, partnerships, and original intellectual property.</p><a className="textLink" href="/work#japanese-station">View related work →</a></article>
          <article><span>04 · Cross-border execution</span><h3>Indonesia ↔ Japan</h3><p>Experience spans strategy decks, production floors, live stages, exhibitions, buyer relations, PR, retail, and market expansion—connecting commercial intent with what audiences and partners actually experience.</p><a className="textLink" href="/profile">Read the career timeline →</a></article>
        </div>
      </section>

      <section className="consultProcess" aria-labelledby="consult-process">
        <div className="sectionHead"><p className="sectionLabel">How it works</p><div><h2 id="consult-process">A small advisory engagement with a <em>clear outcome.</em></h2><p className="sectionIntro">The preparation keeps the conversation focused, so the hour is spent on your real decisions rather than introductions.</p></div></div>
        <div className="processGrid"><article><span>01</span><h3>Share the context</h3><p>Send your company or IP, what you are considering in Indonesia, your current stage, and the questions you most need answered.</p></article><article><span>02</span><h3>Focus the call</h3><p>Rinintha reviews the brief, confirms whether the session is a good fit, and schedules a private 60-minute video call.</p></article><article><span>03</span><h3>Leave with direction</h3><p>After the call, receive a concise written summary of priorities, risks, useful next questions, and recommended actions.</p></article></div>
      </section>

      <section className="consultRequest">
        <p className="sectionLabel">Request a consultation</p>
        <h2>Bring the question you cannot answer from <em>outside the market.</em></h2>
        <div><p>Send a short brief first. Rinintha will confirm fit, scheduling, and personal PayPal payment details by email before the session.</p><p className="corporatePath">If the conversation develops into a larger strategy, research, activation, production, or Indonesia-based commercial engagement, the next phase may be contracted through PT Garda Citra Nusantara.</p><a className="pillButton" href={consultationMail}>Request a consultation ↗</a></div>
      </section>
      <SiteFooter />
    </PageShell>
  );
}
