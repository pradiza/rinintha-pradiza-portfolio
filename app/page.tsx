import { PageShell, ProjectCard, SiteFooter } from "./components";
import { featuredProjects } from "./site-data";

export default function Home() {
  return (
    <PageShell>
      <header className="hero">
        <div className="eyebrow"><span>Greater Jakarta ↔ Tokyo</span><span>Creative strategy &amp; activation · Integrated marketing · Research</span></div>
        <div className="heroStage">
          <div className="heroMessage">
            <h1>Turning insight<br />into ideas<br /><em>people feel.</em></h1>
            <a className="roundLink" href="/work" aria-label="Explore selected work">→</a>
          </div>
          <div className="heroMobilePhoto" aria-hidden="true" />
          <figure className="heroPortrait">
            <figcaption><strong>Rinintha Pradiza</strong><span>Senior brand and creative strategist with 15+ years of experience in integrated campaigns, event and brand activation, experiential marketing, partnerships, and Indonesia–Japan collaborations.</span></figcaption>
          </figure>
        </div>
        <div className="marquee" aria-hidden="true"><span>RESEARCH — STRATEGY — STORYTELLING — CAMPAIGNS — EXPERIENCES — CULTURAL TRANSLATION — RESEARCH — STRATEGY — STORYTELLING — CAMPAIGNS — EXPERIENCES — CULTURAL TRANSLATION —</span></div>
      </header>

      <section className="proof" aria-label="Selected career highlights">
        <div><strong>15<span>+</span></strong><p>years across brands, media, events, and special projects</p></div>
        <div><strong>16</strong><p>Japanese companies connected with Indonesian buyers, media, and audiences through Japan Wave Expo</p></div>
        <div><strong>5K<span>+</span></strong><p>attendees at Hyper Wave Festival</p></div>
        <div><strong>¥1M<span>+</span></strong><p>retail sales at a two-week Daimaru Tokyo pop-up</p></div>
      </section>

      <section className="featuredSection" aria-labelledby="selected-work-title">
        <div className="sectionHead"><p className="sectionLabel">Selected work / 01—06</p><div><h2 id="selected-work-title">Selected work across<br /><em>markets and formats.</em></h2><p className="sectionIntro">Six projects that show the range: music, fashion, entertainment, media, public programming, branded content, and cross-border market development.</p></div></div>
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
          <div className="priceLine"><strong>USD 100</strong><span>introductory rate · 60 minutes</span></div><a className="pillButton lightButton" href="/consultation">See what the consultation includes ↗</a>
        </div>
      </section>

      <SiteFooter />
    </PageShell>
  );
}
