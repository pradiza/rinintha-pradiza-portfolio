import type { Metadata } from "next";
import { PageHero, PageShell, SiteFooter } from "../components";
import { mediaArchive, personalMedia, projectPress } from "../site-data";

export const metadata: Metadata = {
  title: "Media & Press",
  description: "Selected interviews, appearances, archival credits, academic references, and independent coverage connected to Rinintha Pradiza and her work.",
  alternates: { canonical: "/media", languages: { en: "/media", ja: "/ja/media" } },
};

export default function MediaPage() {
  return (
    <PageShell>
      <PageHero
        label="Media & Press / Interviews · appearances · coverage"
        title={<>Interviews, appearances<br />&amp; <em>independent coverage.</em></>}
        intro="A selected public record of Rinintha’s career: interviews, speaking appearances, academic references, archival credits, and press coverage connected to projects she helped shape and deliver."
      />

      <section className="mediaSection" id="manekineko-voice-2026" aria-labelledby="judging-title">
        <div className="sectionHead"><p className="sectionLabel">Judging · 2026</p><div>
          <h2 id="judging-title">Manekineko Voice <em>2026.</em></h2>
          <p className="sectionIntro">Rinintha joins the judging panel for Manekineko Voice 2026, a singing competition presented by Karaoke Manekineko Indonesia, with an international Grand Final in Malaysia.</p>
          <p>The organizer announced the judging panel on 25 November 2026.</p>
          <p><a className="textLink" href="https://www.instagram.com/p/DgKex3uBDVG/" target="_blank" rel="noreferrer">Meet the judges ↗</a></p>
          <p><a className="textLink" href="https://www.instagram.com/p/DfCYrHHEjWj/" target="_blank" rel="noreferrer">Competition announcement ↗</a></p>
        </div></div>
      </section>

      <section className="mediaSection" aria-labelledby="appearances-title">
        <div className="sectionHead"><p className="sectionLabel">Appearances &amp; mentions</p><div><h2 id="appearances-title">Rinintha in the<br /><em>public conversation.</em></h2><p className="sectionIntro">Sources that directly document Rinintha’s work, perspective, appearances, or professional contribution.</p></div></div>
        <div className="mediaLinkGrid">{personalMedia.map((item) => <a key={item.href} className="mediaLinkCard" href={item.href} target="_blank" rel="noreferrer"><span>{item.source}</span><h3>{item.title}</h3><p>{item.note}</p><strong>Open source ↗</strong></a>)}</div>
      </section>

      <section className="mediaSection mediaArchiveSection" aria-labelledby="archive-title">
        <div className="sectionHead"><p className="sectionLabel">Selected archive</p><div><h2 id="archive-title">Credits, hosting &amp;<br /><em>documented participation.</em></h2><p className="sectionIntro">Archival credits, hosting records, and event documentation that add context to the formal career timeline.</p></div></div>
        <div className="mediaLinkGrid mediaArchiveGrid">{mediaArchive.map((item) => <a key={item.href} className="mediaLinkCard" href={item.href} target="_blank" rel="noreferrer"><span>{item.source}</span><h3>{item.title}</h3><p>{item.note}</p><strong>Open source ↗</strong></a>)}</div>
      </section>

      <section className="pressSection" aria-labelledby="press-title">
        <div className="sectionHead"><p className="sectionLabel">Projects in the press</p><div><h2 id="press-title">Independent coverage<br />of <em>selected work.</em></h2><p className="sectionIntro">Independent and institutional reporting on projects Rinintha helped shape and deliver.</p></div></div>
        <div className="pressList">{projectPress.map((item) => <a key={item.href} href={item.href} target="_blank" rel="noreferrer"><span>{item.source}</span><h3>{item.title}</h3><p>{item.note}</p><strong>Read ↗</strong></a>)}</div>
      </section>

      <SiteFooter />
    </PageShell>
  );
}
