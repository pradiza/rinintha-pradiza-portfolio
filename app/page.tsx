import type { Metadata } from "next";
import { PageShell, ProjectCard, SiteFooter } from "./components";
import { featuredProjects } from "./site-data";

export const metadata: Metadata = {
  alternates: { canonical: "/", languages: { en: "/", ja: "/ja" } },
};

const homeTerritories = [
  { no: "01", title: "Strategy & research", text: "Research and strategic direction for brands, audiences, campaigns, and market decisions." },
  { no: "02", title: "Projects & experiences", text: "Senior leadership for campaigns, events, activations, and complex live delivery." },
  { no: "03", title: "Indonesia ↔ Japan", text: "Market context, localization, partnerships, and cross-border project support." },
];

export default function Home() {
  return (
    <PageShell>
      <header className="hero">
        <div className="eyebrow"><span>Greater Jakarta ↔ Tokyo</span><span>Creative strategy &amp; activation · Integrated marketing · Research</span></div>
        <div className="heroStage">
          <div className="heroMessage">
            <h1>Insight →<br />Ideas →<br /><em>Impact!</em></h1>
            <a className="roundLink" href="/work" aria-label="Explore selected work">→</a>
          </div>
          <div className="heroMobilePhoto" aria-hidden="true" />
          <figure className="heroPortrait">
            <figcaption><strong>Rinintha Pradiza</strong><span>Senior cross-disciplinary strategist, producer, and Indonesia–Japan specialist. Fifteen-plus years connecting research, creative direction, partnerships, and complex real-world delivery.</span></figcaption>
          </figure>
        </div>
        <div className="marquee" aria-hidden="true"><span>RESEARCH — STRATEGY — STORYTELLING — CAMPAIGNS — EXPERIENCES — CULTURAL TRANSLATION — RESEARCH — STRATEGY — STORYTELLING — CAMPAIGNS — EXPERIENCES — CULTURAL TRANSLATION —</span></div>
      </header>

      <section className="proof" aria-label="Selected career highlights">
        <div><strong>15<span>+</span></strong><p>years across strategy, research, brands, entertainment, and complex projects</p></div>
        <div><strong>16</strong><p>Japanese companies connected with Indonesian buyers, media, and audiences through Japan Wave Expo</p></div>
        <div><strong>5K<span>+</span></strong><p>attendees at Hyper Wave Festival</p></div>
        <div><strong>¥1M<span>+</span></strong><p>retail sales at a two-week Daimaru Tokyo pop-up</p></div>
      </section>

      <section className="homeTerritories" aria-labelledby="territories-title">
        <div className="sectionHead"><p className="sectionLabel">Where I am most useful</p><div><h2 id="territories-title">Cross-disciplinary range.<br /><em>Clear commercial territories.</em></h2><p className="sectionIntro">The work crosses sectors, but it is organized around three areas where strategy, people, markets, and delivery need to stay connected.</p></div></div>
        <div className="serviceList">{homeTerritories.map((service) => <article key={service.no}><span>{service.no}</span><h3>{service.title}</h3><p>{service.text}</p></article>)}</div>
      </section>

      <section className="featuredSection" aria-labelledby="selected-work-title">
        <div className="sectionHead"><p className="sectionLabel">Selected work / 01—08</p><div><h2 id="selected-work-title">Eight projects.<br /><em>Different kinds of proof.</em></h2><p className="sectionIntro">Strategic ownership, scale, commercial outcomes, international coordination, and the ability to move from an idea into a working project.</p></div></div>
        <div className="featuredGrid">{featuredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
        <a className="pillButton" href="/work">Explore all selected work ↗</a>
      </section>

      <section className="profileTeaser">
        <p className="sectionLabel">More than a résumé</p>
        <div><p className="bigCopy"><strong>A career shaped by <em>curiosity</em> and cultural translation.</strong></p><p className="sectionIntro">From late-night Japanese music radio to entertainment, international cooperation, media, festivals, creative leadership, and Indonesia–Japan market expansion.</p><a className="pillButton" href="/profile">Get to know Rinintha ↗</a></div>
      </section>

      <section className="consultTeaser">
        <div><p className="sectionLabel">New · One-to-one consultation</p><h2>Enter Indonesia with <em>clarity.</em></h2></div>
        <div className="consultTeaserCopy">
          <p>A focused 60-minute English-language strategy call for Japanese entertainment, media, pop-culture, event, and lifestyle companies exploring Indonesia.</p>
          <p>Discuss one real decision involving audiences, positioning, local partnerships, activation opportunities, cultural nuance, or a potential entry route.</p>
          <a className="pillButton lightButton" href="/consultation">See what the consultation includes ↗</a>
        </div>
      </section>

      <SiteFooter />
    </PageShell>
  );
}
