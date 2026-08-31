import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, PageShell, SiteFooter } from "../components";
import { featuredProjects } from "../site-data";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Eight flagship projects by Rinintha Pradiza across strategy, entertainment, international events, market entry, experiential marketing, hospitality, and Indonesia–Japan work.",
};

const supportingLinks: Record<string, Array<{ label: string; href: string }>> = {
  "japanese-station-hyper-wave": [
    { label: "Universal Music Japan announcement", href: "https://www.universal-music.co.jp/vamps/news/2013-10-7/" },
    { label: "Okezone coverage", href: "https://celebrity.okezone.com/read/2013/10/29/391/888926/hyde-larc-en-ciel-tampil-di-jakarta-29-november" },
    { label: "Visit Japanese Station", href: "https://japanesestation.com/" },
  ],
  jkt48: [
    { label: "Watch the second-generation audition", href: "https://www.youtube.com/watch?v=uZU7CJ6P5nI" },
    { label: "Love JKT48 staff credit", href: "https://www.jkt48stuff.com/lovejkt48-translation/" },
    { label: "Read the lyric-adaptation thread", href: "https://x.com/RininthaPradiza/status/1955585027628294279" },
  ],
  "japan-wave": [
    { label: "Japanese Station event page", href: "https://japanesestation.com/events/upcoming-events/japan-wave-expo-2016-26-28-februari-2016-central-park-tribeca-park-jakarta" },
    { label: "Watch the after movie", href: "https://www.youtube.com/watch?v=g-DTzeOx1Iw" },
  ],
  "k-content": [
    { label: "The Jakarta Post coverage", href: "https://www.thejakartapost.com/news/2016/10/10/south-korea-opens-creative-agency-office-indonesia" },
    { label: "KOCCA event coverage", href: "https://koreancontent.tistory.com/3101" },
  ],
  "nila-baharuddin": [
    { label: "Visit the Nila Baharuddin website", href: "https://www.nila.asia/home" },
    { label: "RRI English coverage", href: "https://rri.co.id/en/business/1700981/indonesian-designer-showcases-eco-friendly-bag-collection-in-tokyo" },
  ],
  cecilia: [],
  shiseido: [],
  "side-tokyo": [
    { label: "Asian Fashion Meets Tokyo · Thailand", href: "https://rakutenfashionweektokyo.com/en/brands/detail/asian-fashion-meets-tokyo-thailand-2018ss/" },
    { label: "Asian Fashion Meets Tokyo · Philippines", href: "https://rakutenfashionweektokyo.com/en/brands/detail/asian-fashion-meets-tokyo-philippines-2018ss/" },
    { label: "Fashion Hong Kong", href: "https://rakutenfashionweektokyo.com/en/brands/detail/fashion-hong-kong/" },
  ],
};

const details: Record<string, { challenge: string; contribution: string; outcome: string }> = {
  "japanese-station-hyper-wave": {
    challenge: "Build a credible Japanese-culture platform that could serve audiences and commercial partners, then create an original live property with enough scale to bring Japanese and Indonesian artists onto one festival stage.",
    contribution: "Co-founded Japanese Station and led creative direction, business development, sponsorship, media partnerships, events, talent development, proposals, spokesperson duties, and original IP. For Hyper Wave Festival, owned the concept, sponsor story, artist liaison, venue, creative direction, executive production, and show delivery.",
    outcome: "Japanese Station grew from a community-run portal into a wider media, talent, campaign, event, and partnership ecosystem. Hyper Wave Festival drew 5,000+ attendees across two days and presented three Japanese artists with five Indonesian bands, including VAMPS and NIDJI.",
  },
  jkt48: {
    challenge: "Build reliable media, appearance, event, and production operations around a newly launched Japanese entertainment property moving at exceptional speed in Indonesia.",
    contribution: "Reviewed roughly 30 appearance offers per week and helped decide which to accept, then coordinated television, magazines, portals, schedules, transport, rehearsals, riders, interviews, dressing rooms, meals, crews, partners, and budgets. The work also included Japanese-to-Indonesian singable lyric adaptation and vocal demo guides.",
    outcome: "Supported approximately 60 talents with a 12-person management team during JKT48’s formative first year. Major work included AKB48 × JKT48, JKT48 School, the permanent theatre launch, and the televised second-generation audition, where Rinintha served as a judge.",
  },
  "japan-wave": {
    challenge: "Turn a Japanese fashion-business mission into a platform that could generate market exposure, buyer conversations, consumer response, and practical commercial opportunity in Jakarta.",
    contribution: "Led creative concepts, proposals, pitches, client and sponsor relationships, budgets, programming, fashion-show direction, international coordination, business-facing presentation, and venue delivery from ideation onward.",
    outcome: "Sixteen Japanese companies joined the three-day JETRO-initiated program. Business matching, buyer and media engagement, test marketing, fashion showcases, and public programming reached approximately 10,000 visitors across Central Park and Tribeca Park.",
  },
  "k-content": {
    challenge: "Turn a broad Korea–Indonesia content showcase into a coherent public program while managing the technical, talent, government, vendor, and VIP demands of a large international event.",
    contribution: "As Head of Project and Show Director, led 19 local staff and freelancers across programming, rehearsals, stage management, technical delivery, talent, staffing, vendors, stakeholder coordination, and the government and VIP networking reception.",
    outcome: "Every planned public-stage program was executed across gaming, K-pop, K-beauty, K-food, taekwondo, costume play, screenings, and official networking—demonstrating leadership at a scale and complexity beyond a conventional brand event.",
  },
  "nila-baharuddin": {
    challenge: "Build an Indonesian designer’s commercial and cultural presence in Japan across gallery, trade-fair, and department-store environments.",
    contribution: "Led brand strategy, cultural storytelling, production and quality control, pricing and margins, inventory, shipping, retail materials, KOL coordination, PR, social content, buyer relations, store setup, sales support, reporting, and Japan-facing digital work.",
    outcome: "The program progressed from FEELSEEN Ginza to NEW ENERGY Tokyo and Daimaru Tokyo. The Ginza opening welcomed 100+ guests and generated ¥324,400 in sales; the two-week Daimaru pop-up sold 40 units and surpassed ¥1 million in retail sales while strengthening buyer relationships.",
  },
  cecilia: {
    challenge: "Give an established hospitality venue a clearer market position and an ongoing program that could shape audience behavior, not simply fill a content calendar.",
    contribution: "Owned brand positioning, integrated campaigns, content, social media, PR, KOLs, partnerships, promotions, events, audience programming, and performance analysis while leading a six-person team. Programs included Sunday Pilates, Business Brunch, Valentine, Ramadan, Easter, and Earth Day activity.",
    outcome: "The work established a repeatable link between insight, programming, marketing, and commercial performance. During the period, monthly revenue surpassed approximately Rp2.1 billion, with food contributing around 30% or more.",
  },
  shiseido: {
    challenge: "Carry one global beauty-brand experience across four Indonesian cities without losing consistency in the creative idea, consumer journey, or delivery standard.",
    contribution: "Led creative and production delivery across Jakarta, Surabaya, Medan, and Bandung, coordinating local requirements, venues, teams, live programming, and consumer-facing execution across the roadshow.",
    outcome: "The multi-city program was executed across all four markets, supported local media visibility, and gave Shiseido’s sales teams a consistent experiential platform while they achieved their event sales targets.",
  },
  "side-tokyo": {
    challenge: "Deliver fashion-week, exhibition, and retail projects for designers from several Asian markets while working directly inside Tokyo’s venues, schedules, logistics, and customer environment.",
    contribution: "Managed designers, schedules, venues, shipping and imports, inventory, retail operations, pop-ups, VIP events, international customer engagement, and on-site teams across Asian Fashion Meets Tokyo, Fashion Hong Kong, Destination Tokyo, Laforet Harajuku, and the Philippine Design Exhibition.",
    outcome: "Delivered cross-border fashion work from inside the Japanese market, coordinating runway, exhibition, and retail-facing activity across multiple brands and national delegations. The experience provides direct operational grounding for later Indonesia–Japan strategy and market-development work.",
  },
};

const archiveItems = [
  { meta: "International cooperation · 2007–2011", title: "JICA technical-cooperation projects", text: "Research, translation, government and private-sector coordination, technical seminars, site visits, travel, and international logistics across railway safety, aircraft-accident investigation, and maritime security." },
  { meta: "Commercial production · 2011", title: "AOI Pro. / AOI Asia Indonesia", text: "Production management across research, casting, locations, budgets, staffing, logistics, and preparation for television commercials, corporate film, and JKT48 productions." },
  { meta: "Market research · 2019", title: "Project IA", text: "Market landscaping, social listening, audience profiling, event comparison, case-study analysis, and practical strategic recommendations for a named client project." },
  { meta: "PR & creative economy · 2021–2023", title: "Parallax Network", text: "PR strategy, launch narratives, decks, proposals, press releases, and content for technology, entertainment, NFT, and creative-economy projects." },
  { meta: "Sports & cultural exchange · 2024–2025", title: "Asia Koshien / NB.ACADEMY", text: "Event organizer for NB.ACADEMY’s VIP afterparty and closing celebration, coordinating special guests, government and sports-industry VIPs, talk sessions, sponsors, exhibitors, and networking." },
  { meta: "Experiential & public events", title: "Cosmobeauté, AEON, ICC & POPCON", text: "Live social-media production, anniversary programming, convention and festival work, stage delivery, and moderation across consumer, entertainment, and creative-industry environments." },
  { meta: "Japanese pop-culture foundations", title: "Go Raikon, Ennichisai & CLAS:H", text: "Community building, event creation, stage programming, cosplay competition development, sponsorship, creative direction, and MC work across the early growth of Japanese pop culture in Indonesia." },
  { meta: "Talent, formats & localization", title: "On! Project, Honeybeat, ZeeMi & selected translation", text: "Talent management, interactive live formats, original content, performance development, Japanese-to-Indonesian localization, singable lyric adaptation, and selected English–Indonesian translation." },
];

export default function WorkPage() {
  return (
    <PageShell>
      <PageHero
        label="Selected work / Eight flagship cases"
        title={<>Strategy, people,<br />markets &amp; <em>delivery.</em></>}
        intro="Eight projects selected for ownership, scale, commercial relevance, stakeholder complexity, and what they reveal about working across strategy and execution."
      />

      <div className="workStories">
        {featuredProjects.map((project) => {
          const detail = details[project.id];
          const links = supportingLinks[project.id] ?? [];
          return (
            <section className={`workStory tone-${project.tone}`} id={project.id} key={project.id}>
              <div className={`workStoryVisual${project.secondaryImage ? " doubleVisual" : ""}`}>
                {project.image ? (
                  <Image src={project.image} alt={project.imageAlt ?? ""} width={project.imageWidth ?? 1200} height={project.imageHeight ?? 800} sizes="(max-width: 820px) 100vw, 50vw" />
                ) : (
                  <div className="projectNumberVisual">{project.stats?.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
                )}
                {project.secondaryImage ? <Image src={project.secondaryImage} alt={project.secondaryImageAlt ?? ""} width={project.secondaryImageWidth ?? 900} height={project.secondaryImageHeight ?? 900} sizes="(max-width: 820px) 100vw, 25vw" /> : null}
              </div>
              <div className="workStoryCopy">
                <p className="caseMeta">{project.no} · {project.category} · {project.year}</p>
                <h2>{project.title}</h2>
                <p className="projectRole">{project.role}</p>
                <div className="storySections">
                  <div><span>The challenge</span><p>{detail.challenge}</p></div>
                  <div><span>Rinintha&apos;s responsibility</span><p>{detail.contribution}</p></div>
                  <div><span>Result and significance</span><p>{detail.outcome}</p></div>
                </div>
                {links.length ? <div className="sourceLinks">{links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div> : null}
              </div>
            </section>
          );
        })}
      </div>

      <section className="archiveSection">
        <div className="sectionHead"><p className="sectionLabel">Additional work</p><div><h2>More chapters.<br /><em>Supporting evidence.</em></h2><p className="sectionIntro">These projects broaden the record without competing with the eight flagship cases. Together they show the research discipline, production fluency, public-facing experience, and cross-cultural work behind the main portfolio.</p></div></div>
        <div className="archiveGrid">{archiveItems.map((item) => <article key={item.title}><span>{item.meta}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>
      <SiteFooter />
    </PageShell>
  );
}
