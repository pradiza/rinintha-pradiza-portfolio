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
      <PageHero label="Ways to work together" title={<>Strategy grounded<br />in <em>delivery.</em></>} intro="Focused advice, research, creative direction, and project leadership—grounded in how audiences, partners, media, and production actually work." />

      <section className="servicesSection"><div className="sectionHead"><p className="sectionLabel">Project services</p><div><h2>Need more than<br /><em>one conversation?</em></h2><p className="sectionIntro">Rinintha can join as a senior strategy partner, project lead, or cross-border operator—from the question and commercial story through delivery.</p></div></div><div className="serviceList">{services.map((service) => <article key={service.no}><span>{service.no}</span><h3>{service.title}</h3><p>{service.text}</p></article>)}</div><div className="specialistCapabilities"><p className="sectionLabel">Specialist capabilities</p><div className="specialistCapabilityList">{specialistCapabilities.map((capability) => <span key={capability}>{capability}</span>)}</div></div><a className="pillButton" href="/contact">Discuss a project ↗</a><div className="serviceConsultNote"><div><span>One-to-one consultation</span><p>Need one focused Indonesia market-entry conversation rather than a larger engagement?</p></div><a href="/consultation">View the consultation ↗</a></div></section>
      <SiteFooter />
    </PageShell>
  );
}
