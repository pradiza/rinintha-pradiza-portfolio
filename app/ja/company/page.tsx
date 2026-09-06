import type { Metadata } from "next";
import { PageShell, SiteFooter } from "../../components";

export const metadata: Metadata = {
  title: "PT Garda Citra Nusantara",
  description: "リニンタ　プラディザが主導する、戦略、クリエイティブ、制作、インドネシアと日本を結ぶプロジェクトのためのインドネシア法人です。",
  alternates: { canonical: "/ja/company", languages: { en: "/company", ja: "/ja/company" } },
};

const capabilities = [
  {
    no: "01",
    title: "戦略・リサーチ",
    text: "市場情報、オーディエンス理解、ポジショニング、提案設計、意思決定のための実践的な支援。",
  },
  {
    no: "02",
    title: "クリエイティブ・アクティベーション",
    text: "キャンペーンの方向性、ブランド体験、パートナーシップ、実際の市場と人に届くアイデア。",
  },
  {
    no: "03",
    title: "イベント・制作",
    text: "展示会、コミュニティプログラム、ローンチ、パートナーやベンダーを横断する複雑な現場実装。",
  },
  {
    no: "04",
    title: "インドネシア ↔ 日本",
    text: "市場参入プログラム、文化的な翻訳、現地調整、国境を越えるプロジェクトのリード。",
  },
];

export default function JapaneseCompanyPage() {
  return (
    <PageShell locale="ja">
      <header className="companyHero">
        <div className="companyHeroTopline">
          <p className="sectionLabel">法人・プロジェクト運営体制</p>
          <p>インドネシア・ジャカルタ · 2026年設立</p>
        </div>
        <div className="companyHeroName">PT Garda<br />Citra Nusantara<span>.</span></div>
        <div className="companyHeroStatement">
          <h1><span className="jaLine">アイデアを、</span><br /><em><span className="jaLine">責任ある実行へ。</span></em></h1>
          <p>戦略、クリエイティブ制作、国境を越えるプロジェクトのための、創業者主導のインドネシア法人。優れた考えを、正式で確かな実行につなげます。</p>
        </div>
      </header>

      <section className="companyModel">
        <div className="sectionHead">
          <p className="sectionLabel">運営モデル</p>
          <div>
            <h2><span className="jaLine">一人のリード。</span><br /><span className="jaLine">最適なチーム。</span><br /><em><span className="jaLine">正式な実行体制。</span></em></h2>
            <p className="sectionIntro">リニンタ　プラディザがすべての案件を直接リードします。PT Garda Citra Nusantaraは、契約、請求、ベンダー調整、より大規模な実施のための法人基盤を担います。</p>
          </div>
        </div>
        <div className="companyModelGrid">
          <article><span>01 · リーダーシップ</span><h3>最初から最後まで、シニアが直接担当。</h3><p>初回の打ち合わせ後に引き継ぐのではなく、戦略から実施までリニンタが直接関わります。</p></article>
          <article><span>02 · コラボレーション</span><h3>課題に合わせて、必要な専門性を編成。</h3><p>各プロジェクトの要件に応じて、専門家、制作パートナー、ベンダーと連携します。</p></article>
          <article><span>03 · ガバナンス</span><h3>明確な法人窓口。</h3><p>正式な案件は、インドネシア法人を通じて契約・請求することができます。</p></article>
        </div>
      </section>

      <section className="companyCapabilities">
        <div className="companyCapabilitiesIntro">
          <p className="sectionLabel">主な対応領域</p>
          <h2><span className="jaLine">問いから、</span><br /><em><span className="jaLine">現実の成果へ。</span></em></h2>
        </div>
        <div className="companyCapabilityList">
          {capabilities.map((capability) => (
            <article key={capability.no}>
              <span>{capability.no}</span>
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="companyRelationship">
        <p className="sectionLabel">ひとつながりの価値</p>
        <h2><span className="jaLine">人がリードし、</span><br /><em><span className="jaLine">法人が実行を支える。</span></em></h2>
        <div className="companyRelationshipGrid">
          <article>
            <span>Rinintha Pradiza</span>
            <h3>専門性・リーダーシップ</h3>
            <p>戦略的な視点、シニアレベルの顧客対応、クリエイティブディレクション、実践的なプロジェクトリード。</p>
            <a className="textLink" href="/ja/profile">プロフィールを見る →</a>
          </article>
          <article>
            <span>PT Garda Citra Nusantara</span>
            <h3>法人基盤・実行</h3>
            <p>インドネシアにおける契約、請求、ベンダー登録、プロジェクト実施のための正式な運営法人。</p>
            <a className="textLink" href="/ja/services">サービスを見る →</a>
          </article>
        </div>
      </section>

      <section className="companyDetails">
        <div><span>法人名</span><strong>PT Garda Citra Nusantara</strong></div>
        <div><span>拠点</span><strong>インドネシア・ジャカルタ</strong></div>
        <div><span>形態</span><strong>インドネシア登録法人</strong></div>
        <div><span>対応</span><strong>契約・請求・プロジェクト実施</strong></div>
      </section>

      <SiteFooter locale="ja" />
    </PageShell>
  );
}
