import type { Metadata } from "next";
import { PageHero, PageShell, SiteFooter } from "../../components";
import { email } from "../../site-data";

export const metadata: Metadata = {
  title: "日本企業向けインドネシア市場参入コンサルテーション",
  description: "日本のエンターテインメント、メディア、ポップカルチャー、イベント、ライフスタイル企業向け。オーディエンス、ローカライゼーション、パートナー、アクティベーションを整理する60分の戦略セッション。",
  keywords: ["インドネシア市場参入", "インドネシア進出コンサルタント", "日本企業 インドネシア", "インドネシア エンターテインメント市場", "インドネシア ローカライゼーション", "インドネシア ブランドアクティベーション"],
  alternates: { canonical: "/ja/consultation", languages: { en: "/consultation", ja: "/ja/consultation" } },
  openGraph: {
    title: "日本企業向けインドネシア市場参入コンサルテーション",
    description: "インドネシアのオーディエンス、文化、市場、パートナー、アクティベーションを踏まえた実践的なアドバイス。",
    type: "website",
  },
};

const consultationSubject = encodeURIComponent("インドネシア市場参入ストラテジー相談");
const consultationBody = encodeURIComponent(`会社名またはIP名：
ウェブサイト：
インドネシアで検討していること：
現在の段階：
主な質問・懸念：
この相談で明確にしたいこと：
希望時期：`);
const consultationMail = `mailto:${email}?subject=${consultationSubject}&body=${consultationBody}`;

export default function JapaneseConsultationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "インドネシア市場参入ストラテジー相談",
    description: "インドネシア進出を検討する日本のエンターテインメント、メディア、ポップカルチャー、イベント、ライフスタイル企業向けの60分コンサルテーション。",
    provider: { "@type": "Person", name: "リニンタ　プラディザ" },
    areaServed: { "@type": "Country", name: "Indonesia" },
    audience: { "@type": "BusinessAudience", audienceType: "インドネシア市場を検討する日本企業" },
    offers: { "@type": "Offer", price: "100", priceCurrency: "USD" },
  };

  return (
    <PageShell locale="ja">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <PageHero
        label="日本企業向けインドネシア市場参入コンサルテーション"
        title={<>インドネシア市場へ、<em>明確な視点を。</em></>}
        intro="インドネシア進出を検討する日本のエンターテインメント、メディア、ポップカルチャー、イベント、ライフスタイル企業向け。リニンタ　プラディザとの60分の市場参入ストラテジーセッションです。"
      />

      <section className="consultOffer consultationScope" id="scope">
        <div className="consultOfferHead">
          <p className="sectionLabel">アドバイザリーセッション</p>
          <h2>目の前の意思決定に必要な、<em>実践的な市場理解。</em></h2>
          <p>一般的なインドネシア市場の紹介ではありません。実際の事業、プロジェクト、IPに関する問いを一つお持ちください。前提を検討し、現地文脈が重要になる部分を見極め、現実的な参入・アクティベーションの選択肢と次の行動を整理します。</p>
        </div>
        <div className="offerPrice"><strong>USD 100</strong><span>導入価格 · 60分</span><a className="pillButton lightButton" href={consultationMail}>相談を申し込む ↗</a><small>セッションは英語またはインドネシア語で実施します</small></div>
        <div className="offerGrid">
          <article><span>対象となる方</span><ul><li>インドネシア市場との適合性を検討中のチーム</li><li>日本のエンターテインメント・文化IP</li><li>メディア、イベント、ライフスタイル、消費者向けブランド</li><li>意味のあるローカライゼーションが必要な企画</li><li>現地文脈を踏まえて判断したい具体的な論点がある方</li></ul></article>
          <article><span>検討できる内容</span><ul><li>オーディエンスとファンコミュニティの行動</li><li>ポジショニングと文化的なニュアンス</li><li>現地パートナーと関係者のタイプ</li><li>メディア、イベント、アクティベーション、コミュニティへの接点</li><li>リスク、前提、次に調べるべき問い</li></ul></article>
          <article><span>提供内容</span><ul><li>事前の簡易質問票</li><li>60分の非公開ビデオ通話</li><li>一つの主要テーマに絞ったディスカッション</li><li>簡潔なアクションサマリー</li><li>優先順位と次のステップの整理</li></ul></article>
          <article><span>対象外</span><ul><li>法務、税務、許認可、規制に関する相談</li><li>詳細な定量市場規模レポート</li><li>完全なGo-to-Market戦略の策定</li><li>投資・財務デューデリジェンス</li><li>紹介や事業成果の保証</li></ul></article>
        </div>
        <p className="offerNote">USD 100のコンサルテーションは、リニンタ　プラディザ個人が提供・請求し、依頼をお受けした後にPayPalでお支払いいただきます。内容は実務経験に基づく商業・文化的な視点の提供です。法務、規制、財務、技術の専門的助言が必要な場合は、各分野の有資格者へご相談ください。</p>
      </section>

      <section className="consultCredibility" aria-labelledby="why-rinintha-ja">
        <div className="sectionHead"><p className="sectionLabel">リニンタに相談する理由</p><div><h2 id="why-rinintha-ja">橋の両側で得た、<em>実務経験。</em></h2><p className="sectionIntro">日本発IPのローカライゼーション、JETRO関連の市場参入企画、メディア・コミュニティ形成、ブランドアクティベーション、インドネシアと日本の消費者向けプロジェクトで得た経験をもとにお話しします。</p></div></div>
        <div className="credibilityGrid">
          <article><span>01 · エンターテインメントのローカライゼーション</span><h3>JKT48</h3><p>立ち上げ初期に、イベント・メディアリレーション、出演、パートナー調整、制作ロジスティクス、日本語からインドネシア語への歌詞翻案を担当。</p><a className="textLink" href="/ja/work#jkt48">関連実績を見る →</a></article>
          <article><span>02 · 市場参入プログラム</span><h3>Japan Wave Expo</h3><p>JETRO発の企画で、日本企業向けのビジネスマッチング、バイヤー・メディア対応、テストマーケティング、ファッションショー、一般向けプログラムを組み合わせた市場接点を構築。</p><a className="textLink" href="/ja/work#japan-wave">関連実績を見る →</a></article>
          <article><span>03 · オーディエンスとパートナー形成</span><h3>Japanese Station</h3><p>日本文化のメディア・コミュニティを、ブランドコンテンツ、イベント、タレントマネジメント、スポンサー、リサーチ、パートナーシップ、オリジナルIPへ展開。</p><a className="textLink" href="/ja/work#japanese-station-hyper-wave">関連実績を見る →</a></article>
          <article><span>04 · 国際プロジェクトの実施</span><h3>インドネシア ↔ 日本</h3><p>戦略資料、制作現場、ライブステージ、展示会、バイヤー対応、PR、小売、市場開拓まで、事業意図とオーディエンス・パートナーが実際に体験するものをつないできました。</p><a className="textLink" href="/ja/profile">キャリアを見る →</a></article>
        </div>
      </section>

      <section className="consultProcess" aria-labelledby="consult-process-ja">
        <div className="sectionHead"><p className="sectionLabel">進め方</p><div><h2 id="consult-process-ja">小さな相談でも、<em>明確な成果を。</em></h2><p className="sectionIntro">事前準備によって紹介に時間を使わず、60分を実際の意思決定に集中させます。</p></div></div>
        <div className="processGrid"><article><span>01</span><h3>背景を共有</h3><p>会社またはIP、インドネシアで検討していること、現在の段階、最も答えが必要な問いをお送りください。</p></article><article><span>02</span><h3>論点を絞る</h3><p>リニンタが内容を確認し、セッションとの適合性をお伝えしたうえで、60分の非公開ビデオ通話を設定します。</p></article><article><span>03</span><h3>次の方向を明確に</h3><p>セッション後、優先事項、リスク、次に問うべきこと、推奨アクションを簡潔にまとめてお送りします。</p></article></div>
      </section>

      <section className="consultRequest">
        <p className="sectionLabel">コンサルテーションのお申し込み</p>
        <h2>市場の外からは答えにくい問いを、<em>お持ちください。</em></h2>
        <div><p>まず簡潔な概要をお送りください。内容との適合性、日程、個人PayPalでのお支払い方法をメールでご案内します。</p><p className="corporatePath">相談後、戦略、リサーチ、アクティベーション、制作、インドネシアでの事業実施へ発展する場合は、次の段階をPT Garda Citra Nusantaraとの法人契約として組成することも可能です。</p><a className="pillButton" href={consultationMail}>相談を申し込む ↗</a></div>
      </section>
      <SiteFooter locale="ja" />
    </PageShell>
  );
}
