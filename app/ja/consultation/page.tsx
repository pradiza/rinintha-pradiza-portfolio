import type { Metadata } from "next";
import { PageHero, PageShell, SiteFooter } from "../../components";

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

const consultationForm = "/ja/submit";

export default function JapaneseConsultationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "インドネシア市場参入に関する戦略相談",
    description: "インドネシア進出を検討する日本のエンターテインメント、メディア、ポップカルチャー、イベント、ライフスタイル企業向けの60分コンサルテーション。",
    provider: {
      "@type": "Organization",
      name: "PT Garda Citra Nusantara",
      employee: { "@type": "Person", name: "リニンタ　プラディザ" },
    },
    areaServed: { "@type": "Country", name: "Indonesia" },
    audience: { "@type": "BusinessAudience", audienceType: "インドネシア市場を検討する日本企業" },
    offers: { "@type": "Offer", price: "100", priceCurrency: "USD" },
  };

  return (
    <PageShell locale="ja">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <PageHero
        label="日本企業向けインドネシア市場参入コンサルテーション"
        title={<><span className="jaLine jaLineMobileTight">インドネシア市場へ、</span><wbr /><em><span className="jaLine">明確な視点を。</span></em></>}
        intro="インドネシア進出を検討する日本のエンターテインメント、メディア、ポップカルチャー、イベント、ライフスタイル企業向け。リニンタ　プラディザとの60分の市場参入に関する戦略セッションです。"
      />

      <section className="consultOffer consultationScope" id="scope">
        <div className="consultOfferHead">
          <p className="sectionLabel">アドバイザリーセッション</p>
          <h2><span className="jaLine">目の前の</span><wbr /><span className="jaLine">意思決定に必要な、</span><wbr /><em><span className="jaLine">実践的な市場理解。</span></em></h2>
          <p>一般的なインドネシア市場の紹介ではありません。実際に検討中の事業、プロジェクト、IPに関する具体的な問いを一つお持ちください。前提を検討し、現地の文脈が重要になる部分を見極め、現実的な参入・アクティベーションの選択肢と次の行動を整理します。</p>
        </div>
        <div className="offerPrice"><strong>USD 100</strong><span>導入価格 · 60分</span><a className="pillButton lightButton" href={consultationForm}>相談を申し込む ↗</a><small>セッションは英語またはインドネシア語で実施します</small></div>
        <div className="offerGrid">
          <article><span>対象となる方</span><ul><li>インドネシア市場との適合性を検討中のチーム</li><li>日本のエンターテインメント・文化IP</li><li>メディア、イベント、ライフスタイル、消費者向けブランド</li><li>表面的ではないローカライゼーションが必要な企画</li><li>現地の文脈を踏まえて判断したい具体的な論点がある方</li></ul></article>
          <article><span>検討できる内容</span><ul><li>オーディエンスとファンコミュニティの行動</li><li>ポジショニングと文化的なニュアンス</li><li>必要となる現地パートナーや関係者</li><li>メディア、イベント、アクティベーション、コミュニティへの接点</li><li>リスク、前提、次に調べるべき問い</li></ul></article>
          <article><span>提供内容</span><ul><li>事前の簡易質問票</li><li>60分の非公開ビデオ通話</li><li>一つの主要テーマに絞ったディスカッション</li><li>簡潔なアクションサマリー</li><li>優先順位と次のステップの整理</li></ul></article>
          <article><span>対象外</span><ul><li>法務、税務、許認可、規制に関する相談</li><li>詳細な定量市場規模レポート</li><li>完全なGo-to-Market戦略の策定</li><li>投資・財務デューデリジェンス</li><li>紹介や事業成果の保証</li></ul></article>
        </div>
        <p className="offerNote">USD 100のコンサルテーションは、リニンタ　プラディザが担当し、PT Garda Citra Nusantaraとの契約・請求により提供します。お支払い方法は、相談内容をお受けした後にご案内します。内容は実務経験に基づく、事業面・文化面からの実践的な視点の提供です。法務、規制、財務、技術の専門的助言が必要な場合は、各分野の有資格者へご相談ください。</p>
      </section>

      <section className="consultCredibility" aria-labelledby="why-rinintha-ja">
        <div className="sectionHead"><p className="sectionLabel">リニンタに相談する理由</p><div><h2 id="why-rinintha-ja"><span className="jaLine">両市場で培った、</span><wbr /><em><span className="jaLine">実務経験。</span></em></h2><p className="sectionIntro">日本発IPのローカライゼーション、JETRO関連の市場参入企画、メディア運営とコミュニティ形成、ブランドアクティベーション、インドネシアと日本の消費者向けプロジェクトで培った経験をもとにお話しします。</p></div></div>
        <div className="credibilityGrid">
          <article><span>01 · エンターテインメントのローカライゼーション</span><h3>JKT48</h3><p>立ち上げ初期に、イベント・メディアリレーション、出演、パートナー調整、制作ロジスティクス、日本語からインドネシア語への歌詞翻案を担当。</p><a className="textLink" href="/ja/work#jkt48">関連実績を見る →</a></article>
          <article><span>02 · 市場参入プログラム</span><h3>Japan Wave Expo</h3><p>JETRO発の企画で、日本企業向けのビジネスマッチング、バイヤー・メディア対応、テストマーケティング、ファッションショー、一般向けプログラムを組み合わせ、市場との接点を設計。</p><a className="textLink" href="/ja/work#japan-wave">関連実績を見る →</a></article>
          <article><span>03 · オーディエンスとパートナー形成</span><h3>Japanese Station</h3><p>日本文化のメディア・コミュニティを、ブランドコンテンツ、イベント、タレントマネジメント、スポンサー、リサーチ、パートナーシップ、オリジナルIPへ展開。</p><a className="textLink" href="/ja/work#japanese-station-hyper-wave">関連実績を見る →</a></article>
          <article><span>04 · 国際プロジェクトの実施</span><h3>インドネシア ↔ 日本</h3><p>戦略資料、制作現場、ライブステージ、展示会、バイヤー対応、PR、小売、市場開拓まで、事業意図とオーディエンス・パートナーが実際に体験するものをつないできました。</p><a className="textLink" href="/ja/profile">キャリアを見る →</a></article>
        </div>
      </section>

      <section className="consultProcess" aria-labelledby="consult-process-ja">
        <div className="sectionHead"><p className="sectionLabel">進め方</p><div><h2 id="consult-process-ja"><span className="jaLine">小さな相談でも、</span><wbr /><em><span className="jaLine">明確な成果を。</span></em></h2><p className="sectionIntro">事前準備によって紹介に時間を使わず、60分を具体的な意思決定に充てられるようにします。</p></div></div>
        <div className="processGrid"><article><span>01</span><h3>背景を共有</h3><p>会社またはIP、インドネシアで検討していること、現在の段階、最も整理したい問いをお送りください。</p></article><article><span>02</span><h3>適合性を確認</h3><p>リニンタが内容を確認し、2営業日以内にご連絡します。相談内容をお受けできない場合、請求は発生しません。</p></article><article><span>03</span><h3>請求・日程調整</h3><p>お受けできる場合は、PT Garda Citra Nusantaraからの請求書、お支払い方法、非公開の予約リンクをご案内します。</p></article><article><span>04</span><h3>セッション・要点整理</h3><p>60分の非公開ビデオ通話を実施し、2営業日以内に簡潔なアクションサマリーをお送りします。</p></article></div>
      </section>

      <section className="consultRequest">
        <p className="sectionLabel">コンサルテーションのお申し込み</p>
        <h2><span className="jaLine">市場の外からは</span><wbr /><span className="jaLine">見えにくい問いを、</span><wbr /><em><span className="jaLine">お持ちください。</span></em></h2>
        <div><p>まず簡潔な概要をお送りください。リニンタが内容を確認し、セッションとの適合性を2営業日以内にご連絡します。</p><p className="corporatePath">現段階では必要な範囲のみご記入ください。送信内容は、相談との適合性の確認および事前準備にのみ使用します。</p><p className="corporatePath">コンサルテーションは単独で完結する場合も、より大きなプロジェクトの第一歩となる場合もあります。その後のリサーチ、戦略、パートナーシップ、アクティベーション、実施支援は、PT Garda Citra Nusantaraを通じて別途ご提案します。</p><a className="pillButton" href={consultationForm}>申込フォームを開く ↗</a></div>
      </section>
      <SiteFooter locale="ja" />
    </PageShell>
  );
}
