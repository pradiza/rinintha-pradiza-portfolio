import type { Metadata } from "next";
import { PageShell, SiteFooter } from "../components";

export const metadata: Metadata = {
  title: "PT Garda Citra Nusantara",
  description: "The Indonesian company supporting Rinintha Pradiza’s strategy, creative, production, and Indonesia–Japan engagements.",
  alternates: { canonical: "/company", languages: { en: "/company", ja: "/ja/company" } },
};

const capabilities = [
  {
    no: "01",
    title: "Strategy & research",
    text: "Market intelligence, audience insight, positioning, proposals, and practical decision support.",
  },
  {
    no: "02",
    title: "Creative & activation",
    text: "Campaign direction, brand experiences, partnerships, and ideas designed for real audiences and contexts.",
  },
  {
    no: "03",
    title: "Events & production",
    text: "Exhibitions, community programs, launches, and complex delivery across partners, vendors, and venues.",
  },
  {
    no: "04",
    title: "Indonesia ↔ Japan",
    text: "Market-entry programs, cultural translation, local coordination, and cross-border project leadership.",
  },
];

export default function CompanyPage() {
  return (
    <PageShell>
      <header className="companyHero">
        <div className="companyHeroTopline">
          <p className="sectionLabel">Company & operating structure</p>
          <p>Jakarta, Indonesia · Established 2026</p>
        </div>
        <div className="companyHeroName">PT Garda<br />Citra Nusantara<span>.</span></div>
        <div className="companyHeroStatement">
          <h1>Ideas, made<br /><em>accountable.</em></h1>
          <p>A founder-led Indonesian company for strategy, creative production, and cross-border projects. Built to carry good thinking into formal, well-managed delivery.</p>
        </div>
      </header>

      <section className="companyModel">
        <div className="sectionHead">
          <p className="sectionLabel">How the company works</p>
          <div>
            <h2>One lead.<br />The right team.<br /><em>Formal delivery.</em></h2>
            <p className="sectionIntro">Rinintha Pradiza leads every engagement personally. PT Garda Citra Nusantara provides the corporate structure for contracts, invoicing, vendor coordination, and larger-scale implementation.</p>
          </div>
        </div>
        <div className="companyModelGrid">
          <article><span>01 · Leadership</span><h3>Senior attention from start to finish.</h3><p>Strategy and delivery are led directly by Rinintha—not handed off after the first conversation.</p></article>
          <article><span>02 · Collaboration</span><h3>Expertise assembled around the brief.</h3><p>Specialists, production partners, and vendors are brought in according to the needs of each project.</p></article>
          <article><span>03 · Governance</span><h3>A clear commercial counterpart.</h3><p>Formal engagements can be contracted and invoiced through an Indonesian legal entity.</p></article>
        </div>
      </section>

      <section className="companyCapabilities">
        <div className="companyCapabilitiesIntro">
          <p className="sectionLabel">Core capabilities</p>
          <h2>From the question<br />to the <em>real world.</em></h2>
        </div>
        <div className="companyCapabilityList">
          {capabilities.map((capability) => (
            <article key={capability.no}>
              <span>{capability.no}</span>
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="companyRelationship">
        <p className="sectionLabel">One connected proposition</p>
        <h2>The person leads.<br /><em>The company enables.</em></h2>
        <div className="companyRelationshipGrid">
          <article>
            <span>Rinintha Pradiza</span>
            <h3>Expertise & leadership</h3>
            <p>The strategic point of view, senior client relationship, creative direction, and hands-on project leadership.</p>
            <a className="textLink" href="/profile">View profile →</a>
          </article>
          <article>
            <span>PT Garda Citra Nusantara</span>
            <h3>Structure & delivery</h3>
            <p>The formal operating entity for contracting, invoicing, vendor onboarding, and project implementation in Indonesia.</p>
            <a className="textLink" href="/services">Explore services →</a>
          </article>
        </div>
      </section>

      <section className="companyDetails">
        <div><span>Legal name</span><strong>PT Garda Citra Nusantara</strong></div>
        <div><span>Based in</span><strong>Jakarta, Indonesia</strong></div>
        <div><span>Structure</span><strong>Registered Indonesian company</strong></div>
        <div><span>Engagements</span><strong>Contracts, invoicing & implementation</strong></div>
      </section>

      <SiteFooter />
    </PageShell>
  );
}
