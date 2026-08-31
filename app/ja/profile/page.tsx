import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, PageShell, SiteFooter } from "../../components";
import { socials } from "../../site-data";
import type { TimelineItem } from "../../site-data";
import { timelineJa } from "../site-data-ja";

export const metadata: Metadata = {
  title: "プロフィール",
  description: "リニンタ　プラディザの経歴、キャリアタイムライン、専門性、プロジェクト現場をご紹介します。",
  alternates: { canonical: "/ja/profile", languages: { en: "/profile", ja: "/ja/profile" } },
};

const professionalMoments = [
  { src: "/images/moment-dhu-japanese-station.png", width: 1440, height: 1440, label: "ウェビナー制作", title: "デジタルハリウッド大学オープンキャンパス・ウェビナー Japanese Stationチーム" },
  { src: "/images/moment-nila-new-energy-tokyo.png", width: 1440, height: 1800, label: "日本市場開拓", title: "NEW ENERGY TokyoでのNila Baharuddin" },
  { src: "/images/moment-cosmobeaute-social-production.png", width: 1080, height: 906, label: "SNSライブ制作", title: "Cosmobeauté IndonesiaでのリアルタイムSNS制作" },
  { src: "/images/moment-aeon-bsd-anniversary.png", width: 1080, height: 852, label: "イベント制作", title: "AEON MALL BSD CITY 3周年イベント" },
  { src: "/images/moment-popcon-asia-mc.png", width: 960, height: 720, label: "ステージMC", title: "POPCON Asia MC" },
  { src: "/images/moment-kcontent-show-team.jpg", width: 815, height: 720, label: "ショーマネジメント", title: "K-Content Expo ショーマネジメントチーム" },
];

function TimelineText({ item }: Readonly<{ item: TimelineItem }>) {
  if (!item.textHighlights?.length) return item.text;
  const escaped = item.textHighlights.map((highlight) => highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const highlights = new Set(item.textHighlights);
  return item.text.split(new RegExp(`(${escaped.join("|")})`, "g")).map((part, index) => highlights.has(part) ? <strong key={`${part}-${index}`}>{part}</strong> : part);
}

export default function JapaneseProfilePage() {
  return (
    <PageShell locale="ja">
      <PageHero label="プロフィール / リニンタについて" title={<>プロジェクトを動かす、<br /><em>その人について。</em></>} intro={<>ブランド、文化、エンターテインメント、体験が交わる場所で仕事をするストラテジスト兼プロデューサー。統合マーケティング、イベント、メディア、インドネシアと日本を結ぶプロジェクトに携わってきました。</>} />

      <section className="profileImageLead" aria-label="リニンタ　プラディザのポートレート">
        <div className="profileMainImage"><Image src="/images/rinintha-profile.jpg" alt="日本の文化イベントに参加するリニンタ　プラディザ" width={1080} height={1080} sizes="(max-width: 820px) 100vw, 62vw" priority /></div>
        <div className="profileImageCopy"><p className="sectionLabel">ストラテジスト · プロデューサー · 異文化プロジェクト実務者</p><p>一つの領域にとどまるよりも、領域が交わる場所にこそ、価値のある仕事があると考えています。</p><div className="profileSmallImage"><Image src="/images/rinintha-profile-bw.jpg" alt="リニンタ　プラディザのモノクロポートレート" width={960} height={960} sizes="(max-width: 820px) 100vw, 32vw" /></div></div>
      </section>

      <section className="profileStatement">
        <p className="sectionLabel">一貫してきたこと</p>
        <div>
          <p className="bigCopy">市場、オーディエンス、クリエイティブの意図を翻訳する。</p>
          <div className="bioColumns">
            <p>キャリアの出発点は、深夜の日本音楽ラジオでした。あるアーティストや楽曲がなぜインドネシアのリスナーにとって意味を持つのかを伝える仕事です。深く調べ、人間的な背景を見つけ、わかりやすく翻訳する。その姿勢は今も、すべての仕事の土台にあります。</p>
            <p>その後、国際協力、テレビ、アイドル運営、メディア、フェスティバル、ブランドエンターテインメント、ファッション、ホスピタリティ、リサーチ、PR、小売へと領域を広げました。提案書、制作現場、メディアルーム、ステージ、国際商談の間を自在に行き来できます。</p>
            <p>インドネシア語と英語は流暢、日本語は日常会話レベルです。日本のアイデア、ブランド、エンターテインメントIPが、本来の個性を失わずにインドネシアで伝わる形へ整えることを得意としています。</p>
          </div>
        </div>
      </section>

      <section className="timelineSection" aria-labelledby="timeline-title-ja">
        <div className="sectionHead"><p className="sectionLabel">キャリアタイムライン</p><div><h2 id="timeline-title-ja">マイクから、<br /><em>市場戦略へ。</em></h2><p className="sectionIntro">それぞれの時期に何を学び、次の仕事へどうつながったのか。キャリア全体の流れをご紹介します。</p></div></div>
        <div className="timeline">{timelineJa.map((item) => <article key={`${item.period}-${item.title}`}><span className="timelinePeriod">{item.period}</span><div><h3>{item.title}</h3><p className="timelineRole">{item.role}</p><p><TimelineText item={item} /></p></div></article>)}</div>
        <a className="pillButton" href="https://www.linkedin.com/in/rinintha-pradiza/" target="_blank" rel="noreferrer">LinkedInを見る ↗</a>
      </section>

      <section className="momentsSection" aria-labelledby="moments-title-ja">
        <div className="sectionHead"><p className="sectionLabel">現場の写真</p><div><h2 id="moments-title-ja">仕事の風景。<br /><em>現場の中で。</em></h2><p className="sectionIntro">肩書きの背後にあるチーム、ステージ、市場と向き合う現場の一部です。</p></div></div>
        <div className="momentsGrid">{professionalMoments.map((moment) => <figure key={moment.src}><Image src={moment.src} alt={moment.title} width={moment.width} height={moment.height} sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw" /><figcaption><span>{moment.label}</span>{moment.title}</figcaption></figure>)}</div>
      </section>

      <section className="socialSection">
        <p className="sectionLabel">フォロー・つながる</p>
        <div><h2>仕事の外側も、<br /><em>こちらから。</em></h2><div className="socialLinks">{socials.map((social) => social.href.startsWith("mailto:") ? <a key={social.label} href={social.href}>{social.label} ↗</a> : <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} ↗</a>)}</div><a className="textLink" href="/ja/contact">具体的な相談を始める →</a></div>
      </section>

      <SiteFooter locale="ja" />
    </PageShell>
  );
}
