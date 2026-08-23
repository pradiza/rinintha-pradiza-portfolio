import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, PageShell, SiteFooter } from "../components";
import { featuredProjects } from "../site-data";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Selected work by Rinintha Pradiza across entertainment, festivals, media, fashion, branded content, and Indonesia–Japan projects.",
};

const supportingLinks: Record<string, Array<{ label: string; href: string }>> = {
  "hyper-wave": [
    { label: "Universal Music Japan announcement", href: "https://www.universal-music.co.jp/vamps/news/2013-10-7/" },
    { label: "Okezone coverage", href: "https://celebrity.okezone.com/read/2013/10/29/391/888926/hyde-larc-en-ciel-tampil-di-jakarta-29-november" },
    { label: "VAMPS video message", href: "https://www.youtube.com/watch?v=Cfjf8vOibBI" },
  ],
  "japan-wave": [
    { label: "Japanese Station event page", href: "https://japanesestation.com/events/upcoming-events/japan-wave-expo-2016-26-28-februari-2016-central-park-tribeca-park-jakarta" },
    { label: "Watch the after movie", href: "https://www.youtube.com/watch?v=g-DTzeOx1Iw" },
  ],
  "k-content": [
    { label: "The Jakarta Post coverage", href: "https://www.thejakartapost.com/news/2016/10/10/south-korea-opens-creative-agency-office-indonesia" },
    { label: "KOCCA event coverage", href: "https://koreancontent.tistory.com/3101" },
  ],
  jkt48: [
    { label: "Watch the second-generation audition", href: "https://www.youtube.com/watch?v=uZU7CJ6P5nI" },
    { label: "Love JKT48 staff credit", href: "https://www.jkt48stuff.com/lovejkt48-translation/" },
    { label: "Read the lyric-translation thread", href: "https://x.com/RininthaPradiza/status/1955585027628294279" },
  ],
  "japanese-station": [
    { label: "Visit Japanese Station", href: "https://japanesestation.com/" },
    { label: "Podcast with Hiroaki Kato", href: "https://japanesestation.com/japanese-station-tv/videos/jspodcast-s01-eps-05-meraih-mimpi-merah-putih-w-at-hiroaki-kato" },
  ],
  "nila-baharuddin": [
    { label: "Visit the Nila Baharuddin website", href: "https://www.nila.asia/home" },
    { label: "RRI English coverage", href: "https://rri.co.id/en/business/1700981/indonesian-designer-showcases-eco-friendly-bag-collection-in-tokyo" },
  ],
};

const details: Record<string, { challenge: string; contribution: string; outcome: string }> = {
  "hyper-wave": { challenge: "Create a credible cross-cultural live platform where Japanese and Indonesian artists could share one festival identity—and where local audiences had an accessible entry point into Japanese rock and club culture.", contribution: "Led the concept, proposals, sponsor story, artist liaison, venue coordination, creative direction, executive production, and show delivery with TokyoGets and TG Rights Studio.", outcome: "A two-day Honda One Heart festival featuring three Japanese artists—VAMPS, DJ Kaya, and Reecho—and five Indonesian bands: NIDJI, Pee Wee Gaskins, Thirteen, Vegan, and P.R.I.D.E. The event drew more than 5,000 attendees and marked VAMPS’ first performance in Indonesia." },
  "japan-wave": { challenge: "Translate a Japanese fashion-business mission into a public experience, business-matching platform, and media story that worked in Jakarta.", contribution: "Led creative concepts, proposals, pitches, client and sponsor relationships, budgets, programming, fashion-show direction, international coordination, and venue delivery from ideation onward.", outcome: "Sixteen Japanese companies joined the program, with successful business matching, press activity, client satisfaction, and approximately 10,000 visitors across the open Central Park and Tribeca areas." },
  "k-content": { challenge: "Turn a broad Korean-content showcase into a coherent public stage and a polished networking experience for industry and government stakeholders.", contribution: "As Head of Project and Show Director, led 19 local staff and freelancers across programming, stage management, rehearsals, technical delivery, staffing, and the VIP networking reception.", outcome: "Every planned public-stage program was executed: gaming, K-pop cover dance and singing, K-beauty, K-food, taekwondo, costume play, screenings, and official networking." },
  jkt48: { challenge: "Build reliable media, event, and appearance operations around a new entertainment property moving at extraordinary speed.", contribution: "Reviewed around 30 appearance offers per week, recommended which to accept, and coordinated television, magazines, portals, schedules, transport, rehearsals, riders, media interviews, meals, dressing rooms, crews, partners, and budgets.", outcome: "Supported roughly 60 talents with a 12-person management team, handled major moments including AKB48 × JKT48, and appeared as a judge on the televised second-generation audition." },
  "japanese-station": { challenge: "Grow a community-run Japanese news portal into a sustainable platform without losing credibility with its core audience.", contribution: "Co-founded the business and led creative direction, business development, sponsorship, media partnerships, events, client proposals, talent development, branded content, spokesperson duties, and original intellectual property.", outcome: "Japanese Station built a recognized media and talent ecosystem, delivered campaigns for brands including Nissin and Digital Hollywood University, represented up to 10 JS Navigators, and created Hyper Wave Festival." },
  "nila-baharuddin": { challenge: "Build an Indonesian designer’s commercial and cultural presence in Japan across gallery, trade-fair, and department-store environments.", contribution: "Led brand strategy, production and quality control, pricing, inventory, shipping, retail materials, KOLs, PR, social content, buyer relations, store setup, sales support, reporting, and the bilingual website with a Japanese colleague.", outcome: "Progressed from FEELSEEN Ginza and NEW ENERGY Tokyo to a 2025 Daimaru Tokyo pop-up, generating more than ¥1 million in two-week retail sales and opening relationships with Japanese buyers and future exhibitions." },
};

export default function WorkPage() {
  return (
    <PageShell>
      <PageHero label="Selected work / 2011—2025" title={<>Culture, commerce,<br />and experience—<em>in practice.</em></>} intro="Six projects showing how strategy, cultural intelligence, commercial thinking, and delivery come together." />
      <div className="workStories">{featuredProjects.map((project) => { const detail = details[project.id]; return <section className={`workStory tone-${project.tone}`} id={project.id} key={project.id}><div className={`workStoryVisual${project.secondaryImage ? " doubleVisual" : ""}`}>{project.image ? <Image src={project.image} alt={project.imageAlt ?? ""} width={project.imageWidth ?? 1200} height={project.imageHeight ?? 800} sizes="(max-width: 820px) 100vw, 50vw" /> : <div className="projectNumberVisual">{project.stats?.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>}{project.secondaryImage ? <Image src={project.secondaryImage} alt={project.secondaryImageAlt ?? ""} width={project.secondaryImageWidth ?? 900} height={project.secondaryImageHeight ?? 900} sizes="(max-width: 820px) 100vw, 25vw" /> : null}</div><div className="workStoryCopy"><p className="caseMeta">{project.no} · {project.category} · {project.year}</p><h2>{project.title}</h2><p className="projectRole">{project.role}</p><div className="storySections"><div><span>The challenge</span><p>{detail.challenge}</p></div><div><span>Rinintha&apos;s contribution</span><p>{detail.contribution}</p></div><div><span>The outcome</span><p>{detail.outcome}</p></div></div><div className="sourceLinks">{supportingLinks[project.id].map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div></div></section>; })}</div>

      <section className="archiveSection"><div className="sectionHead"><p className="sectionLabel">Additional work</p><div><h2>More worlds,<br /><em>same through-line.</em></h2><p className="sectionIntro">Project IA remains part of the wider archive, while the six stories above carry the main portfolio narrative.</p></div></div><div className="archiveGrid"><article><span>Sports & cultural exchange · 2024—2025</span><h3>Asia Koshien / No Border Asia Community</h3><p>Event organizer for NB.ACADEMY’s VIP afterparty and official closing celebration, coordinating awards, special guests, government and sports-industry VIPs, talk sessions, sponsors, exhibitors, and networking.</p></article><article><span>Music & talent · 2008—2013</span><h3>On! Project, Honeybeat & Proudly Presents</h3><p>Artist and talent development across scheduling, promotion, media, styling, original music, merchandise, performance opportunities, and income management.</p></article><article><span>Beauty · 2017—2018</span><h3>Shiseido Beauty Redefined</h3><p>Four-city strategy and roadshow production across Jakarta, Surabaya, Medan, and Bandung.</p></article><article><span>Fashion · Tokyo · 2017</span><h3>Tokyo Fashion Week projects</h3><p>Logistics, designer communications, inventory, retail operations, and international customer engagement.</p></article><article><span>Technology & culture · 2021—2023</span><h3>Parallax Network</h3><p>PR, launch strategy, press materials, decks, and creative narratives for Mindblowon, Playground, and the Museum of Crypto Art exhibition.</p></article><article><span>Research · 2019</span><h3>Project IA</h3><p>Market landscaping, social listening, audience profiling, event comparison, and strategic recommendations for a named client project.</p></article></div></section>
      <SiteFooter />
    </PageShell>
  );
}
