import type { Metadata } from "next";
import { PageShell, ProjectCard, SiteFooter } from "../components";
import { featuredProjectsJa } from "./site-data-ja";

export const metadata: Metadata = {
  title: "リニンタ　プラディザ — インドネシア×日本の戦略・プロジェクト支援",
  description: "リサーチ、クリエイティブ戦略、パートナーシップ、複雑な現場実装をつなぐ、インドネシア拠点のストラテジスト兼プロデューサー。",
  alternates: { canonical: "/ja", languages: { en: "/", ja: "/ja" } },
};

const homeTerritories = [
  { no: "01", title: "戦略・リサーチ", text: "ブランド、オーディエンス、キャンペーン、市場での意思決定に向けた調査と戦略設計。" },
  { no: "02", title: "プロジェクト・体験設計", text: "キャンペーン、イベント、アクティベーション、複雑な現場実装をシニアレベルでリード。" },
  { no: "03", title: "インドネシア ↔ 日本", text: "市場理解、ローカライゼーション、パートナーシップ、国際プロジェクトの実務支援。" },
];

export default function JapaneseHome() {
  return (
    <PageShell locale="ja">
      <header className="hero">
        <div className="eyebrow"><span>ジャカルタ首都圏 ↔ 東京</span><span>クリエイティブ戦略・アクティベーション · 統合マーケティング · リサーチ</span></div>
        <div className="heroStage">
          <div className="heroMessage">
            <h1>インサイト →<br />アイデア →<br /><em>心動く体験!</em></h1>
            <a className="roundLink" href="/ja/work" aria-label="実績を見る">→</a>
          </div>
          <div className="heroMobilePhoto" aria-hidden="true" />
          <figure className="heroPortrait">
            <figcaption><strong>Rinintha Pradiza</strong><span>リニンタ　プラディザは、分野を横断するストラテジスト、プロデューサー、インドネシアと日本をつなぐ専門家です。15年以上にわたり、リサーチ、クリエイティブディレクション、パートナーシップ、複雑な現場実装をつないできました。</span></figcaption>
          </figure>
        </div>
        <div className="marquee" aria-hidden="true"><span>リサーチ — 戦略 — ストーリーテリング — キャンペーン — 体験設計 — 文化翻訳 — リサーチ — 戦略 — ストーリーテリング — キャンペーン — 体験設計 — 文化翻訳 —</span></div>
      </header>

      <section className="proof" aria-label="主な実績">
        <div><strong>15<span>+</span></strong><p>戦略、リサーチ、ブランド、エンターテインメント、複雑なプロジェクトに携わった年数</p></div>
        <div><strong>16</strong><p>Japan Wave Expoを通じ、インドネシアのバイヤー、メディア、消費者と接点を持った日本企業数</p></div>
        <div><strong>5K<span>+</span></strong><p>Hyper Wave Festival来場者</p></div>
        <div><strong>¥1M<span>+</span></strong><p>大丸東京店2週間ポップアップの小売売上</p></div>
      </section>

      <section className="homeTerritories" aria-labelledby="territories-title-ja">
        <div className="sectionHead"><p className="sectionLabel">提供価値の中心</p><div><h2 id="territories-title-ja">領域を越える経験。<br /><em>明確な3つの軸。</em></h2><p className="sectionIntro">扱う業界は多岐にわたりますが、仕事の軸は、戦略、人、市場、実施を切り離さずに考える3つの領域にあります。</p></div></div>
        <div className="serviceList">{homeTerritories.map((service) => <article key={service.no}><span>{service.no}</span><h3>{service.title}</h3><p>{service.text}</p></article>)}</div>
      </section>

      <section className="featuredSection" aria-labelledby="selected-work-title-ja">
        <div className="sectionHead"><p className="sectionLabel">主な実績 / 01—08</p><div><h2 id="selected-work-title-ja">8つのプロジェクト。<br /><em>異なる角度からの実証。</em></h2><p className="sectionIntro">戦略上のオーナーシップ、規模、事業成果、国際連携、そしてアイデアを実働するプロジェクトへ変える力を示す事例です。</p></div></div>
        <div className="featuredGrid">{featuredProjectsJa.map((project) => <ProjectCard key={project.id} project={project} locale="ja" />)}</div>
        <a className="pillButton" href="/ja/work">すべての実績を見る ↗</a>
      </section>

      <section className="profileTeaser">
        <p className="sectionLabel">職歴だけでは語れないこと</p>
        <div><p className="bigCopy"><strong><em>好奇心</em>と文化の翻訳が形づくったキャリア。</strong></p><p className="sectionIntro">深夜の日本音楽ラジオから、エンターテインメント、国際協力、メディア、フェスティバル、クリエイティブリーダーシップ、インドネシアと日本の市場開拓へ。</p><a className="pillButton" href="/ja/profile">プロフィールを見る ↗</a></div>
      </section>

      <section className="consultTeaser">
        <div><p className="sectionLabel">新サービス · 1対1コンサルテーション</p><h2>インドネシア市場へ、<em>明確な視点を。</em></h2></div>
        <div className="consultTeaserCopy">
          <p>インドネシア進出を検討する日本のエンターテインメント、メディア、ポップカルチャー、イベント、ライフスタイル企業向けの、英語による60分の戦略セッションです。</p>
          <p>オーディエンス、ポジショニング、現地パートナー、アクティベーション、文化的なニュアンス、参入ルートなど、実際の意思決定を一つ持ち込んでください。</p>
          <a className="pillButton lightButton" href="/ja/consultation">内容を確認する ↗</a>
        </div>
      </section>

      <SiteFooter locale="ja" />
    </PageShell>
  );
}
