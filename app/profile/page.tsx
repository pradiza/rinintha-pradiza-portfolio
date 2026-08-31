import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, PageShell, SiteFooter } from "../components";
import { cvUrl, mediaArchive, personalMedia, projectPress, socials, timeline } from "../site-data";
import type { TimelineItem } from "../site-data";

export const metadata: Metadata = {
  title: "Profile",
  description: "Meet Rinintha Pradiza: career timeline, media appearances, project coverage, capabilities, and social links.",
};

const capabilities = ["Integrated marketing", "Creative strategy", "Market research", "PR & media", "Experiential production", "Partnerships", "Indonesia–Japan localization", "Proposal development", "MC & moderation", "Translation & lyric adaptation"];

const professionalMoments = [
  { src: "/images/moment-dhu-japanese-station.png", width: 1440, height: 1440, label: "Webinar production", title: "Japanese Station Team for Digital Hollywood University Open Campus Webinar" },
  { src: "/images/moment-nila-new-energy-tokyo.png", width: 1440, height: 1800, label: "Japan market development", title: "Nila Baharuddin in NEW ENERGY Tokyo" },
  { src: "/images/moment-cosmobeaute-social-production.png", width: 1080, height: 906, label: "Live social media production", title: "Live Social Media Production During Cosmobeauté Indonesia" },
  { src: "/images/moment-aeon-bsd-anniversary.png", width: 1080, height: 852, label: "Event production", title: "AEON MALL BSD City 3rd Anniversary" },
  { src: "/images/moment-popcon-asia-mc.png", width: 960, height: 720, label: "Live hosting", title: "MC for POPCON Asia" },
  { src: "/images/moment-kcontent-show-team.jpg", width: 815, height: 720, label: "Show management", title: "Show Management Team at K'Content Expo" },
];

function TimelineText({ item }: Readonly<{ item: TimelineItem }>) {
  if (!item.textHighlights?.length) return item.text;

  const escapedHighlights = item.textHighlights.map((highlight) =>
    highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );
  const highlights = new Set(item.textHighlights);
  const parts = item.text.split(new RegExp(`(${escapedHighlights.join("|")})`, "g"));

  return parts.map((part, index) =>
    highlights.has(part) ? <strong key={`${part}-${index}`}>{part}</strong> : part,
  );
}

export default function ProfilePage() {
  return (
    <PageShell>
      <PageHero label="Profile / About Rinintha" title={<>The person behind<br />the <em>projects.</em></>} intro={<>A strategist, producer, and builder working at the intersection of <strong>brands, culture, entertainment, and experience</strong>, with a career spanning integrated marketing, events, media, and cross-border projects between Indonesia and Japan.</>} />

      <section className="profileImageLead" aria-label="Portraits of Rinintha Pradiza">
        <div className="profileMainImage"><Image src="/images/rinintha-profile.jpg" alt="Rinintha Pradiza at a cultural event in Japan" width={1080} height={1080} sizes="(max-width: 820px) 100vw, 62vw" priority /></div>
        <div className="profileImageCopy"><p className="sectionLabel">Strategist · Producer · Cross-cultural operator</p><p>I have never been interested in staying in one lane. The useful work happens where the lanes meet.</p><div className="profileSmallImage"><Image src="/images/rinintha-profile-bw.jpg" alt="Black-and-white portrait of Rinintha Pradiza" width={960} height={960} sizes="(max-width: 820px) 100vw, 32vw" /></div></div>
      </section>

      <section className="profileStatement">
        <p className="sectionLabel">The through-line</p>
        <div>
          <p className="bigCopy">Translating between markets, audiences, and creative ambition.</p>
          <div className="bioColumns">
            <p>My career began in late-night Japanese music radio, explaining why an artist or song mattered to Indonesian listeners. That instinct, to research deeply, find the human context, and translate it clearly, still sits underneath everything I do.</p>
            <p>Since then, I have worked across international cooperation, television, idol management, media, festivals, branded entertainment, fashion, hospitality, research, PR, and retail. I move comfortably between a proposal deck, a production floor, a media room, a stage, and a cross-border business meeting.</p>
            <p>I&apos;m fluent in Indonesian and English, conversational in Japanese, and especially experienced at helping Japanese ideas, brands, and entertainment properties make sense in Indonesia without losing what makes them distinctive.</p>
          </div>
          <div className="capabilityCloud" aria-label="Core capabilities">{capabilities.map((capability) => <span key={capability}>{capability}</span>)}</div>
        </div>
      </section>

      <section className="timelineSection" aria-labelledby="timeline-title">
        <div className="sectionHead"><p className="sectionLabel">Career timeline</p><div><h2 id="timeline-title">From a microphone<br />to <em>market strategy.</em></h2><p className="sectionIntro">The longer story behind the work and the connective tissue between each chapter.</p></div></div>
        <div className="timeline">{timeline.map((item) => <article key={`${item.period}-${item.title}`}><span className="timelinePeriod">{item.period}</span><div><h3>{item.title}</h3><p className="timelineRole">{item.role}</p><p><TimelineText item={item} /></p></div></article>)}</div>
        <a className="pillButton" href={cvUrl} target="_blank" rel="noreferrer">Download the latest master CV ↗</a>
      </section>

      <section className="momentsSection" aria-labelledby="moments-title">
        <div className="sectionHead"><p className="sectionLabel">Professional moments</p><div><h2 id="moments-title">In the room,<br /><em>doing the work.</em></h2><p className="sectionIntro">A few glimpses of the teams, stages, and market-facing environments behind the formal job titles.</p></div></div>
        <div className="momentsGrid">{professionalMoments.map((moment) => <figure key={moment.src}><Image src={moment.src} alt={moment.title} width={moment.width} height={moment.height} sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw" /><figcaption><span>{moment.label}</span>{moment.title}</figcaption></figure>)}</div>
      </section>

      <section className="mediaSection" aria-labelledby="media-title">
        <div className="sectionHead"><p className="sectionLabel">In the media & public conversations</p><div><h2 id="media-title">Work, words &<br /><em>recognition.</em></h2><p className="sectionIntro">Selected interviews, press references, speaking appearances, academic research, and third-party coverage connected to Rinintha&apos;s career.</p></div></div>
        <div className="mediaLinkGrid">{personalMedia.map((item) => <a key={item.href} className="mediaLinkCard" href={item.href} target="_blank" rel="noreferrer"><span>{item.source}</span><h3>{item.title}</h3><p>{item.note}</p><strong>Open source ↗</strong></a>)}</div>
        <div className="mediaArchiveHead"><p className="sectionLabel">Selected archive</p><p>Archival credits, hosting records, and event documentation.</p></div>
        <div className="mediaLinkGrid mediaArchiveGrid">{mediaArchive.map((item) => <a key={item.href} className="mediaLinkCard" href={item.href} target="_blank" rel="noreferrer"><span>{item.source}</span><h3>{item.title}</h3><p>{item.note}</p><strong>Open source ↗</strong></a>)}</div>
      </section>

      <section className="pressSection" aria-labelledby="press-title">
        <div className="sectionHead"><p className="sectionLabel">Projects in the press</p><div><h2 id="press-title">Work that travelled<br /><em>beyond the room.</em></h2><p className="sectionIntro">Independent and institutional coverage of selected projects Rinintha helped shape and deliver.</p></div></div>
        <div className="pressList">{projectPress.map((item) => <a key={item.href} href={item.href} target="_blank" rel="noreferrer"><span>{item.source}</span><h3>{item.title}</h3><p>{item.note}</p><strong>Read ↗</strong></a>)}</div>
      </section>

      <section className="socialSection">
        <p className="sectionLabel">Follow & connect</p>
        <div><h2>Find me in<br /><em>the wild.</em></h2><div className="socialLinks">{socials.map((social) => social.href.startsWith("mailto:") ? <a key={social.label} href={social.href}>{social.label} ↗</a> : <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} ↗</a>)}</div><a className="textLink" href="/contact">Or start a focused conversation →</a></div>
      </section>

      <SiteFooter />
    </PageShell>
  );
}
