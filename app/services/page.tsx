import type { Metadata } from "next";
import { PageHero, PageShell, SiteFooter } from "../components";
import { services, specialistCapabilities } from "../site-data";

export const metadata: Metadata = {
  title: "Services & Consultation",
  description: "Work with Rinintha Pradiza on Indonesia market entry, research, creative strategy, campaigns, special projects, proposals, MC work, and localization.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero label="Ways to work together" title={<>Where I can<br />be <em>useful.</em></>} intro="Senior strategy, research, and project leadership for work that crosses audiences, partners, markets, and real-world delivery." />

      <section className="servicesSection"><div className="sectionHead"><p className="sectionLabel">01 · Core services</p><div><h2>Three commercial<br /><em>territories.</em></h2><p className="sectionIntro">Engagements can be structured around a defined strategy question, a project requiring senior leadership, or a cross-border brief between Indonesia and Japan.</p></div></div><div className="serviceList">{services.map((service) => <article key={service.no}><span>{service.no}</span><h3>{service.title}</h3><p>{service.text}</p></article>)}</div><div className="specialistCapabilities"><p className="sectionLabel">Supporting capabilities</p><div className="specialistCapabilityList">{specialistCapabilities.map((capability) => <span key={capability}>{capability}</span>)}</div></div><a className="pillButton" href="/contact">Discuss a project ↗</a></section>

      <section className="consultTeaser servicesConsultTeaser">
        <div><p className="sectionLabel">02 · Specialist consultation</p><h2>Enter Indonesia with <em>clarity.</em></h2></div>
        <div className="consultTeaserCopy"><p>A focused 60-minute Indonesia Market Entry Strategy Call for Japanese entertainment, media, pop-culture, event, lifestyle, and consumer-facing companies.</p><p>Bring one real decision involving audiences, positioning, partners, activation, localization, or a potential entry route.</p><div className="priceLine"><strong>USD 100</strong><span>introductory rate · 60 minutes</span></div><a className="pillButton lightButton" href="/consultation">See the scope and credentials ↗</a></div>
      </section>
      <SiteFooter />
    </PageShell>
  );
}
