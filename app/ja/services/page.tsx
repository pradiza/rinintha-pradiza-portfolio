import type { Metadata } from "next";
import { PageHero, PageShell, SiteFooter } from "../../components";
import { servicesJa, specialistCapabilitiesJa } from "../site-data-ja";

export const metadata: Metadata = {
  title: "サービス",
  description: "インドネシア市場参入、リサーチ、クリエイティブ戦略、キャンペーン、特別企画、提案書、MC、ローカライゼーションを支援します。",
  alternates: { canonical: "/ja/services", languages: { en: "/services", ja: "/ja/services" } },
};

export default function JapaneseServicesPage() {
  return (
    <PageShell locale="ja">
      <PageHero label="ご一緒できること" title={<><span className="jaLine jaLineMobileTight">実施までを見据えた、</span><br /><em><span className="jaLine">戦略。</span></em></>} intro="オーディエンス、パートナー、メディア、制作現場の実情を踏まえた、アドバイス、リサーチ、クリエイティブディレクション、プロジェクトリーダーシップを提供します。" />

      <section className="servicesSection"><div className="sectionHead"><p className="sectionLabel">プロジェクトサービス</p><div><h2><span className="jaLine">一度の相談を越えて、</span><br /><em><span className="jaLine">伴走が必要なとき。</span></em></h2><p className="sectionIntro">シニア戦略パートナー、プロジェクトリード、または国際案件の実務担当として、問いの整理と事業ストーリーから実施まで参加できます。</p></div></div><div className="serviceList">{servicesJa.map((service) => <article key={service.no}><span>{service.no}</span><h3>{service.title}</h3><p>{service.text}</p></article>)}</div><div className="specialistCapabilities"><p className="sectionLabel">専門スキル</p><div className="specialistCapabilityList">{specialistCapabilitiesJa.map((capability) => <span key={capability}>{capability}</span>)}</div></div><a className="pillButton" href="/ja/contact">プロジェクトについて相談する ↗</a><div className="serviceConsultNote"><div><span>契約形態</span><p>リニンタがすべての案件を直接リードします。コンサルテーションおよび規模の大きなプロジェクトは、PT Garda Citra Nusantaraを通じて正式に契約・請求できます。</p></div><a href="/ja/consultation">コンサルテーションを見る ↗</a></div></section>
      <SiteFooter locale="ja" />
    </PageShell>
  );
}
