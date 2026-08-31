import Image from "next/image";
import type { FeaturedProject } from "./site-data";
import { email, socials } from "./site-data";
import { ScrollReveal } from "./scroll-reveal";
import { SiteNav, type Locale } from "./site-nav";

export type { Locale } from "./site-nav";

export function PageShell({ children, locale = "en" }: Readonly<{ children: React.ReactNode; locale?: Locale }>) {
  return <main lang={locale} className={locale === "ja" ? "localeJa" : undefined}><a className="skipLink" href="#content">{locale === "ja" ? "本文へ移動" : "Skip to content"}</a><SiteNav locale={locale} /><ScrollReveal /><div id="content">{children}</div></main>;
}

export function SiteFooter({ locale = "en" }: Readonly<{ locale?: Locale }>) {
  if (locale === "ja") {
    return (
      <footer className="siteFooter">
        <div><p className="sectionLabel">お問い合わせ</p><h2>動き始めたプロジェクトを、<em>一緒に前へ。</em></h2></div>
        <div className="footerLinks"><a href="/ja/consultation">インドネシア市場コンサルテーション ↗</a><a href="/ja/contact">ご相談・お問い合わせ ↗</a><a href={`mailto:${email}`}>{email} ↗</a>{socials.slice(0, 2).map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} ↗</a>)}</div>
        <div className="footerBottom"><span>インドネシア・ジャカルタ首都圏</span><span>プロジェクト、役職、コンサルテーションのご相談を承ります</span></div>
        <div className="footerMark" aria-hidden="true">RP<span>.</span></div>
      </footer>
    );
  }

  return (
    <footer className="siteFooter">
      <div><p className="sectionLabel">Start a conversation</p><h2>Got a project in motion? <em>Let&apos;s collaborate.</em></h2></div>
      <div className="footerLinks"><a href="/consultation">Indonesia consultation ↗</a><a href="/contact">Contact & enquiries ↗</a><a href={`mailto:${email}`}>{email} ↗</a>{socials.slice(0, 2).map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} ↗</a>)}</div>
      <div className="footerBottom"><span>Greater Jakarta, Indonesia</span><span>Available for select roles, projects, and consultations</span></div>
      <div className="footerMark" aria-hidden="true">RP<span>.</span></div>
    </footer>
  );
}

export function PageHero({ label, title, intro }: Readonly<{ label: string; title: React.ReactNode; intro: React.ReactNode }>) {
  return <header className="pageHero"><p className="sectionLabel">{label}</p><h1>{title}</h1><p className="pageIntro">{intro}</p></header>;
}

function ProjectSummary({ project }: Readonly<{ project: FeaturedProject }>) {
  if (!project.summaryHighlights?.length) return project.summary;

  const escapedHighlights = project.summaryHighlights.map((highlight) =>
    highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );
  const highlights = new Set(project.summaryHighlights);
  const parts = project.summary.split(new RegExp(`(${escapedHighlights.join("|")})`, "g"));

  return parts.map((part, index) =>
    highlights.has(part) ? <strong key={`${part}-${index}`}>{part}</strong> : part,
  );
}

export function ProjectCard({ project, locale = "en" }: Readonly<{ project: FeaturedProject; locale?: Locale }>) {
  const headlineStat = project.stats?.slice(0, 1);

  return (
    <article className={`projectCard project-${project.id} tone-${project.tone}`}>
      {project.image ? <div className="projectImage"><Image src={project.image} alt={project.imageAlt ?? ""} width={project.imageWidth ?? 1200} height={project.imageHeight ?? 800} sizes="(max-width: 820px) 100vw, 50vw" /></div> : <div className="projectNumberVisual" aria-label="Project scale">{headlineStat?.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>}
      <div className="projectCardCopy">
        <div className="projectTopline"><span>{project.no}</span><span>{project.category}</span><span>{project.year}</span></div>
        <h3>{project.title}</h3><p className="projectRole">{project.role}</p><p><ProjectSummary project={project} /></p>
        {project.image && headlineStat ? <div className="projectStats">{headlineStat.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div> : null}
        <a className="textLink" href={`${locale === "ja" ? "/ja" : ""}/work#${project.id}`}>{locale === "ja" ? "事例を見る" : "View the story"} →</a>
      </div>
    </article>
  );
}
