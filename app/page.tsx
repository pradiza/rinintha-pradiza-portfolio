import { PageShell, ProjectCard, SiteFooter } from "./components";
import { featuredProjects, services } from "./site-data";

export default function Home() {
  return (
    <PageShell>
      <header className="hero">
        <div className="eyebrow"><span>Greater Jakarta ↔ Tokyo</span><span>Strategy &amp; research · Projects &amp; experiences · Indonesia ↔ Japan</span></div>
        <div className="heroStage">
          <div className="heroMessage">
            <h1>Strategy for<br />what happens<br /><em>next.</em></h1>
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
        <div className="serviceList">{services.map((service) => <article key={service.no}><span>{service.no}</span><h3>{service.title}</h3><p>{service.text}</p></article>)}</div>
        <a className="pillButton" href="/services">Explore ways to work together ↗</a>
      </section>

      <section className="featuredSection" aria-labelledby="selected-work-title">
        <div className="sectionHead"><p className="sectionLabel">Selected work / 01—08</p><div><h2 id="selected-work-title">Eight projects.<br /><em>Different kinds of proof.</em></h2><p className="sectionIntro">Strategic ownership, scale, commercial outcomes, international coordination, and the ability to move from an idea into a working project.</p></div></div>
        <div className="featuredGrid">{featuredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
        <a className="pillButton" href="/work">Explore all selected work ↗</a>
      </section>

      <section className="profileTeaser">
        <p className="sectionLabel">More than a résumé</p>
        <div><p className="bigCopy"><strong>Curiosity, cultural translation, and <em>making ideas real.</em></strong></p><p className="sectionIntro">The route runs from late-night Japanese music radio to international cooperation, entertainment, media, festivals, hospitality, research, and Japan-market development. The connective tissue is the work of making unfamiliar ideas function for real people, partners, and markets.</p><a className="pillButton" href="/profile">Read the longer story ↗</a></div>
      </section>

      <section className="consultTeaser">
        <div><p className="sectionLabel">New · One-to-one consultation</p><h2>Enter Indonesia with <em>clarity.</em></h2></div>
        <div className="consultTeaserCopy">
          <p>Specialist advisory access for Japanese entertainment, media, pop-culture, event, lifestyle, and consumer-facing companies exploring Indonesia.</p>
          <p>Bring one real decision involving audiences, positioning, local partners, activation opportunities, cultural nuance, or a potential entry route.</p>
          <div className="priceLine"><strong>USD 100</strong><span>introductory rate · 60 minutes</span></div><a className="pillButton lightButton" href="/consultation">See what the consultation includes ↗</a>
        </div>
      </section>

      <SiteFooter />
    </PageShell>
  );
}
