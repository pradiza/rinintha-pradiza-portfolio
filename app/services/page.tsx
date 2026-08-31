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
      <PageHero label="Ways to work together" title={<>Strategy with<br />its sleeves <em>rolled up.</em></>} intro="Focused advice, research, creative direction, and project leadership—grounded in how audiences, partners, media, and production actually work." />

      <section className="consultTeaser servicesConsultTeaser">
        <div><p className="sectionLabel">01 · One-to-one consultation</p><h2>Enter Indonesia with <em>clarity.</em></h2></div>
        <div className="consultTeaserCopy"><p>A focused 60-minute strategy call for Japanese companies exploring Indonesia—centered on one real decision involving audiences, positioning, partnerships, activation, or a market-entry route.</p><div className="priceLine"><strong>USD 100</strong><span>introductory rate · 60 minutes</span></div><a className="pillButton lightButton" href="/consultation">Explore the consultation ↗</a></div>
      </section>

      <section className="servicesSection"><div className="sectionHead"><p className="sectionLabel">02 · Project services</p><div><h2>Need more than<br /><em>one conversation?</em></h2><p className="sectionIntro">Rinintha can join as a senior strategy partner, project lead, or cross-border operator—from the question and commercial story through delivery.</p></div></div><div className="serviceList">{services.map((service) => <article key={service.no}><span>{service.no}</span><h3>{service.title}</h3><p>{service.text}</p></article>)}</div><div className="specialistCapabilities"><p className="sectionLabel">Specialist capabilities</p><div className="specialistCapabilityList">{specialistCapabilities.map((capability) => <span key={capability}>{capability}</span>)}</div></div><a className="pillButton" href="/contact">Discuss a project ↗</a></section>
      <SiteFooter />
    </PageShell>
  );
}
