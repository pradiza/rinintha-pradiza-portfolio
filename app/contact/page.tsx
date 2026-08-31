import type { Metadata } from "next";
import { PageShell } from "../components";
import { email, socials } from "../site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Rinintha Pradiza about project work, roles, consultations, MC engagements, translation, and Indonesia–Japan collaboration.",
  alternates: { canonical: "/contact", languages: { en: "/contact", ja: "/ja/contact" } },
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="contactPage">
        <p className="sectionLabel">Start a conversation</p>
        <h1>What are we<br /><em>making happen?</em></h1>
        <p className="contactLead">Share the context, desired outcome, timing, and where you think Rinintha can help. A focused brief gets the fastest useful response.</p>
        <div className="contactOptions"><a href={`mailto:${email}?subject=Project%20enquiry%20for%20Rinintha`}>Project enquiry <span>↗</span><small>Strategy, campaigns, research, events, and special projects</small></a><a href="/consultation">Indonesia consultation <span>↗</span><small>USD 100 · 60-minute Indonesia Market Entry Strategy Call</small></a><a href={`mailto:${email}?subject=Role%20opportunity%20for%20Rinintha`}>Role opportunity <span>↗</span><small>Permanent, fractional, or senior project leadership</small></a><a href={`mailto:${email}?subject=MC%20or%20translation%20enquiry`}>MC / translation <span>↗</span><small>Indonesian–English stage work and selected localization</small></a></div>
        <div className="corporateEngagement"><span>Corporate engagements</span><p>For larger projects requiring formal contracting, local implementation, vendor onboarding, or extended collaboration in Indonesia, engagements may be structured through PT Garda Citra Nusantara.</p></div>
        <div className="directContact"><a href={`mailto:${email}`}>{email} ↗</a><a href="tel:+6281289168740">+62 812 8916 8740</a>{socials.slice(0,2).map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} ↗</a>)}</div>
        <div className="contactLocation"><span>Greater Jakarta, Indonesia</span><span>Working across Indonesia, Japan, and selected Asian markets</span></div>
        <div className="footerMark" aria-hidden="true">RP<span>.</span></div>
      </section>
    </PageShell>
  );
}
