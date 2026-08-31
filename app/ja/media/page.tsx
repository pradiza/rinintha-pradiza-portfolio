import type { Metadata } from "next";
import { PageHero, PageShell, SiteFooter } from "../../components";
import { mediaArchiveJa, personalMediaJa, projectPressJa } from "../site-data-ja";

export const metadata: Metadata = {
  title: "メディア掲載",
  description: "リニンタ　プラディザのインタビュー、登壇・出演、アーカイブ、学術資料、プロジェクトに関する第三者報道。",
  alternates: { canonical: "/ja/media", languages: { en: "/media", ja: "/ja/media" } },
};

export default function JapaneseMediaPage() {
  return (
    <PageShell locale="ja">
      <PageHero
        label="メディア掲載 / インタビュー · 出演 · 報道"
        title={<>インタビュー、出演、<br /><em>第三者による記録。</em></>}
        intro="インタビュー、登壇・出演、学術資料、アーカイブ、そして企画・実施に携わったプロジェクトの報道から、リニンタのキャリアをたどる公開記録です。"
      />

      <section className="mediaSection" aria-labelledby="appearances-title-ja">
        <div className="sectionHead"><p className="sectionLabel">出演・本人に関する掲載</p><div><h2 id="appearances-title-ja">公の記録に見る、<br /><em>リニンタの仕事。</em></h2><p className="sectionIntro">リニンタ本人の仕事、視点、出演、専門的な貢献を直接記録した資料です。</p></div></div>
        <div className="mediaLinkGrid">{personalMediaJa.map((item) => <a key={item.href} className="mediaLinkCard" href={item.href} target="_blank" rel="noreferrer"><span>{item.source}</span><h3>{item.title}</h3><p>{item.note}</p><strong>元記事を見る ↗</strong></a>)}</div>
      </section>

      <section className="mediaSection mediaArchiveSection" aria-labelledby="archive-title-ja">
        <div className="sectionHead"><p className="sectionLabel">アーカイブ</p><div><h2 id="archive-title-ja">クレジット、司会、<br /><em>参加の記録。</em></h2><p className="sectionIntro">正式なキャリアタイムラインを補足する、クレジット、MC記録、イベントドキュメントです。</p></div></div>
        <div className="mediaLinkGrid mediaArchiveGrid">{mediaArchiveJa.map((item) => <a key={item.href} className="mediaLinkCard" href={item.href} target="_blank" rel="noreferrer"><span>{item.source}</span><h3>{item.title}</h3><p>{item.note}</p><strong>元記事を見る ↗</strong></a>)}</div>
      </section>

      <section className="pressSection" aria-labelledby="press-title-ja">
        <div className="sectionHead"><p className="sectionLabel">プロジェクト報道</p><div><h2 id="press-title-ja">主な実績を伝える、<br /><em>第三者の記事。</em></h2><p className="sectionIntro">リニンタが企画・実施に携わったプロジェクトについての、独立系メディアおよび機関による報道です。</p></div></div>
        <div className="pressList">{projectPressJa.map((item) => <a key={item.href} href={item.href} target="_blank" rel="noreferrer"><span>{item.source}</span><h3>{item.title}</h3><p>{item.note}</p><strong>読む ↗</strong></a>)}</div>
      </section>

      <SiteFooter locale="ja" />
    </PageShell>
  );
}
