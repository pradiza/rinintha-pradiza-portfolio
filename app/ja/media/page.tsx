import type { Metadata } from "next";
import { PageHero, PageShell, SiteFooter } from "../../components";
import { mediaArchiveJa, personalMediaJa, projectPressJa } from "../site-data-ja";

export const metadata: Metadata = {
  title: "メディア掲載",
  description: "リニンザ　プラディザのインタビュー、登壇・出演、アーカイブ、学術資料、プロジェクトに関する第三者報道。",
  alternates: { canonical: "/ja/media", languages: { en: "/media", ja: "/ja/media" } },
};

export default function JapaneseMediaPage() {
  return (
    <PageShell locale="ja">
      <PageHero
        label="メディア掲載 / インタビュー · 出演 · 報道"
        title={<><span className="jaLine">インタビュー、</span><wbr /><span className="jaLine">出演、</span><br /><em><span className="jaLine jaLineMobileTight">第三者による記録。</span></em></>}
        intro="インタビュー、登壇・出演、学術資料、アーカイブ、そして企画・実施に携わったプロジェクトの報道から、リニンザのキャリアをたどる公開記録です。"
      />

      <section className="mediaSection" id="manekineko-voice-2026" aria-labelledby="judging-title-ja">
        <div className="sectionHead"><p className="sectionLabel">審査員 · 2026年</p><div>
          <h2 id="judging-title-ja">Manekineko Voice <em>2026.</em></h2>
          <p className="sectionIntro">リニンザは、Karaoke Manekineko Indonesiaが開催する歌唱コンテスト「Manekineko Voice 2026」の審査員を務めます。国際グランドファイナルはマレーシアで開催される大会です。</p>
          <p>主催者による審査員発表：2026年11月25日。</p>
          <p><a className="textLink" href="https://www.instagram.com/p/DgKex3uBDVG/" target="_blank" rel="noreferrer">審査員紹介を見る ↗</a></p>
          <p><a className="textLink" href="https://www.instagram.com/p/DfCYrHHEjWj/" target="_blank" rel="noreferrer">大会の公式告知を見る ↗</a></p>
        </div></div>
      </section>

      <section className="mediaSection" aria-labelledby="appearances-title-ja">
        <div className="sectionHead"><p className="sectionLabel">出演・本人に関する掲載</p><div><h2 id="appearances-title-ja"><span className="jaLine">公の記録に見る、</span><br /><em><span className="jaLine">リニンザの仕事。</span></em></h2><p className="sectionIntro">リニンザ本人の仕事、視点、出演、専門的な貢献を直接記録した資料です。</p></div></div>
        <div className="mediaLinkGrid">{personalMediaJa.map((item) => <a key={item.href} className="mediaLinkCard" href={item.href} target="_blank" rel="noreferrer"><span>{item.source}</span><h3>{item.title}</h3><p>{item.note}</p><strong>元記事を見る ↗</strong></a>)}</div>
      </section>

      <section className="mediaSection mediaArchiveSection" aria-labelledby="archive-title-ja">
        <div className="sectionHead"><p className="sectionLabel">アーカイブ</p><div><h2 id="archive-title-ja"><span className="jaLine">クレジット、</span><wbr /><span className="jaLine">司会、</span><br /><em><span className="jaLine">参加の記録。</span></em></h2><p className="sectionIntro">正式なキャリアタイムラインを補足する、クレジット、MC記録、イベントドキュメントです。</p></div></div>
        <div className="mediaLinkGrid mediaArchiveGrid">{mediaArchiveJa.map((item) => <a key={item.href} className="mediaLinkCard" href={item.href} target="_blank" rel="noreferrer"><span>{item.source}</span><h3>{item.title}</h3><p>{item.note}</p><strong>元記事を見る ↗</strong></a>)}</div>
      </section>

      <section className="pressSection" aria-labelledby="press-title-ja">
        <div className="sectionHead"><p className="sectionLabel">プロジェクト報道</p><div><h2 id="press-title-ja"><span className="jaLine">主な実績を伝える、</span><br /><em><span className="jaLine">第三者の記事。</span></em></h2><p className="sectionIntro">リニンザが企画・実施に携わったプロジェクトについての、独立系メディアおよび機関による報道です。</p></div></div>
        <div className="pressList">{projectPressJa.map((item) => <a key={item.href} href={item.href} target="_blank" rel="noreferrer"><span>{item.source}</span><h3>{item.title}</h3><p>{item.note}</p><strong>読む ↗</strong></a>)}</div>
      </section>

      <SiteFooter locale="ja" />
    </PageShell>
  );
}
