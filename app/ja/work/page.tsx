import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, PageShell, SiteFooter } from "../../components";
import { featuredProjectsJa } from "../site-data-ja";

export const metadata: Metadata = {
  title: "実績",
  description: "戦略、エンターテインメント、国際イベント、市場参入、体験型マーケティング、ホスピタリティ、インドネシアと日本を結ぶ8つの主要事例。",
  alternates: { canonical: "/ja/work", languages: { en: "/work", ja: "/ja/work" } },
};

const supportingLinks: Record<string, Array<{ label: string; href: string }>> = {
  "japanese-station-hyper-wave": [
    { label: "Universal Music Japan 公式発表", href: "https://www.universal-music.co.jp/vamps/news/2013-10-7/" },
    { label: "Okezone 掲載記事", href: "https://celebrity.okezone.com/read/2013/10/29/391/888926/hyde-larc-en-ciel-tampil-di-jakarta-29-november" },
    { label: "Japanese Station", href: "https://japanesestation.com/" },
  ],
  jkt48: [
    { label: "第2期生オーディション映像", href: "https://www.youtube.com/watch?v=uZU7CJ6P5nI" },
    { label: "Love JKT48 スタッフクレジット", href: "https://www.jkt48stuff.com/lovejkt48-translation/" },
    { label: "歌詞翻案についての投稿", href: "https://x.com/RininthaPradiza/status/1955585027628294279" },
  ],
  "japan-wave": [
    { label: "Japanese Station イベント記事", href: "https://japanesestation.com/events/upcoming-events/japan-wave-expo-2016-26-28-februari-2016-central-park-tribeca-park-jakarta" },
    { label: "アフタームービー", href: "https://www.youtube.com/watch?v=g-DTzeOx1Iw" },
  ],
  "k-content": [
    { label: "The Jakarta Post 掲載記事", href: "https://www.thejakartapost.com/news/2016/10/10/south-korea-opens-creative-agency-office-indonesia" },
    { label: "KOCCA イベント記事", href: "https://koreancontent.tistory.com/3101" },
  ],
  "nila-baharuddin": [
    { label: "Nila Baharuddin 公式サイト", href: "https://www.nila.asia/home" },
    { label: "RRI English 掲載記事", href: "https://rri.co.id/en/business/1700981/indonesian-designer-showcases-eco-friendly-bag-collection-in-tokyo" },
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
    challenge: "オーディエンスと企業パートナーの双方に価値を提供できる日本文化プラットフォームを育て、さらに日本とインドネシアのアーティストを同じ舞台に迎える規模のオリジナル音楽イベントを実現すること。",
    contribution: "Japanese Stationを共同創業し、クリエイティブディレクション、事業開発、スポンサーシップ、メディアパートナーシップ、イベント、タレント育成、提案書・ピッチ、広報窓口、オリジナルIPを担当。Hyper Wave Festivalでは、コンセプト、スポンサー向けストーリー、アーティスト対応、会場、クリエイティブ、エグゼクティブプロデュース、当日のショー運営までを統括しました。",
    outcome: "Japanese Stationは日本文化のコミュニティメディアから、タレント、キャンペーン、イベント、パートナーシップまで扱う事業へ成長。Hyper Wave Festivalは2日間で5,000人以上を動員し、VAMPS、NIDJIを含む日本人アーティスト3組とインドネシアのバンド5組が出演しました。",
  },
  jkt48: {
    challenge: "インドネシアで急速に展開する新しい日本発エンターテインメントIPのために、安定したメディア、出演、イベント、制作運営の仕組みを立ち上げること。",
    contribution: "週約30件の出演依頼を検討し、採否判断を支援。テレビ、雑誌、ウェブメディア、スケジュール、移動、リハーサル、ライダー、取材、控室、食事、制作スタッフ、パートナー、予算を調整しました。日本語楽曲を歌唱可能なインドネシア語歌詞へ翻案し、ボーカルデモも制作しました。",
    outcome: "12名の運営チームの一員として、立ち上げ初年度に約60名のタレントを支援。AKB48 × JKT48、JKT48 School、常設劇場の開設、テレビ放送された第2期生オーディションなどに携わり、オーディションでは審査員を務めました。",
  },
  "japan-wave": {
    challenge: "日本のファッション企業による市場開拓ミッションを、ジャカルタでの認知獲得、バイヤー商談、消費者反応、具体的な商機につながるプラットフォームへ変えること。",
    contribution: "初期構想から、クリエイティブコンセプト、提案・ピッチ、クライアント・スポンサー対応、予算、プログラム、ファッションショー演出、国際調整、B2B向けプレゼンテーション、会場実施を統括しました。",
    outcome: "JETRO発の3日間のプログラムに日本企業16社が参加。Central ParkとTribeca Parkで、ビジネスマッチング、バイヤー・メディア対応、テストマーケティング、ファッションショー、一般向け企画を実施し、約1万人を集客しました。",
  },
  "k-content": {
    challenge: "大規模な韓国・インドネシアのコンテンツ展示会を、一貫した一般向けプログラムとして構成しながら、技術、出演者、政府、ベンダー、VIP対応を同時に管理すること。",
    contribution: "プロジェクト責任者兼ショーディレクターとして、現地スタッフ・フリーランス19名を率い、プログラム、リハーサル、舞台監督、技術、出演者、スタッフ、ベンダー、関係機関、政府・VIPネットワーキングレセプションを統括しました。",
    outcome: "ゲーム、K-POP、K-Beauty、K-Food、テコンドー、コスプレ、上映、公式ネットワーキングまで、予定されたすべてのステージプログラムを実施。一般的なブランドイベントを越える規模と複雑性の中で、ショー全体をリードしました。",
  },
  "nila-baharuddin": {
    challenge: "インドネシア人デザイナーの文化的・商業的な存在感を、ギャラリー、展示会、百貨店という異なる日本の販売環境で構築すること。",
    contribution: "ブランド戦略、文化的ストーリーテリング、生産・品質管理、価格・利益率、在庫、輸送、店頭ツール、KOL、PR、SNS、売場設営、販売支援、レポーティング、日本向けデジタル施策を統括しました。大丸東京店については、日本在住のコンサルタントによる紹介後、バイヤー対応を担い、2週間のポップアップ実現に向けた調整を進めました。",
    outcome: "FEELSEEN銀座からNEW ENERGY Tokyo、大丸東京店へ展開。銀座オープニングには100名以上が来場し、売上は324,400円。大丸東京店の2週間ポップアップでは40点を販売し、売上100万円を超え、バイヤーとの関係も強化しました。",
  },
  cecilia: {
    challenge: "既存のホスピタリティ施設に明確な市場ポジションを与え、単なるコンテンツカレンダーではなく、顧客行動を変える継続的なプログラムをつくること。",
    contribution: "6名のチームを率い、ブランドポジショニング、統合キャンペーン、コンテンツ、SNS、PR、KOL、パートナーシップ、販促、イベント、オーディエンスプログラム、成果分析を担当。Sunday Pilates、Business Brunch、Valentine、Ramadan、Easter、Earth Dayなどを企画しました。",
    outcome: "インサイト、プログラム、マーケティング、事業成果をつなぐ再現可能な運営モデルを構築。期間中、月間売上は約21億ルピアを超え、フード売上が30%以上を占めました。",
  },
  shiseido: {
    challenge: "一つのグローバルビューティーブランド体験を、クリエイティブ、顧客導線、実施水準の一貫性を保ちながら、インドネシア4都市へ展開すること。",
    contribution: "ジャカルタ、スラバヤ、メダン、バンドンで、各地の条件、会場、チーム、ライブプログラム、消費者向け実施を調整し、クリエイティブと制作進行を統括しました。",
    outcome: "4都市すべてでロードショーを実施し、現地メディアでの露出を獲得。資生堂の営業チームがイベント売上目標を達成するための、一貫した体験型プラットフォームを提供しました。",
  },
  "side-tokyo": {
    challenge: "東京の会場、スケジュール、物流、顧客環境の中で、アジア各国のデザイナーによるファッションウィーク、展示、小売プロジェクトを実施すること。",
    contribution: "Asian Fashion Meets Tokyo、Fashion Hong Kong、Destination Tokyo、ラフォーレ原宿、GOOD DESIGN MarunouchiでのPhilippine Design Exhibitionにおいて、デザイナー、スケジュール、会場、輸送・輸入、在庫、小売運営、ポップアップ、VIPイベント、海外顧客対応、現場チームを管理しました。",
    outcome: "日本市場の現場で、複数ブランドと各国代表団のランウェイ、展示、小売施策を調整。この直接的な実務経験が、その後のインドネシアと日本を結ぶ戦略・市場開拓の基盤となっています。",
  },
};

const archiveItems = [
  { meta: "国際協力 · 2007–2011", title: "JICA 技術協力プロジェクト", text: "鉄道安全、航空事故調査、海上保安の分野で、リサーチ、翻訳、政府・民間関係者の調整、技術セミナー、視察、出張、国際ロジスティクスを担当。" },
  { meta: "広告映像制作 · 2011", title: "AOI Pro. / AOI Asia Indonesia", text: "TVCM、企業映像、JKT48関連制作で、リサーチ、キャスティング、ロケ地、予算、人員、ロジスティクス、制作準備を管理。" },
  { meta: "クライアント向けリサーチ／アドバイザリー · 2019", title: "Project IA", text: "市場構造、ソーシャルリスニング、オーディエンス分析、イベント比較、ケース分析を行い、実行可能な戦略提言にまとめました。" },
  { meta: "PR・クリエイティブエコノミー · 2021–2023", title: "Parallax Network", text: "テクノロジー、エンターテインメント、NFT、クリエイティブエコノミー領域で、PR戦略、ローンチストーリー、提案書、プレスリリース、コンテンツを制作。" },
  { meta: "スポーツ・文化交流 · 2024–2025", title: "Asia Koshien / NB.ACADEMY", text: "NB.ACADEMYのVIPアフターパーティー兼クロージングイベントを担当し、特別ゲスト、政府・スポーツ業界VIP、トーク、スポンサー、出展者、ネットワーキングを調整。" },
  { meta: "体験型・一般向けイベント", title: "Cosmobeauté、AEON、ICC、POPCON", text: "消費者、エンターテインメント、クリエイティブ産業の現場で、SNSライブ制作、周年企画、コンベンション、フェス、ステージ進行、モデレーションを担当。" },
  { meta: "日本ポップカルチャーの基盤づくり", title: "Go Raikon、縁日祭、CLAS:H", text: "インドネシアにおける日本ポップカルチャーの初期成長期に、コミュニティ形成、イベント企画、ステージ構成、コスプレ大会、スポンサー、クリエイティブディレクション、MCを担当。" },
  { meta: "タレント・フォーマット・ローカライゼーション", title: "On! Project、Honeybeat、ZeeMi、翻訳案件", text: "タレントマネジメント、双方向ライブ、オリジナルコンテンツ、パフォーマンス開発、日本語からインドネシア語へのローカライゼーション、歌詞翻案、英語・インドネシア語翻訳。" },
];

export default function JapaneseWorkPage() {
  return (
    <PageShell locale="ja">
      <PageHero label="主な実績 / 8つの事例" title={<><span className="jaLine">戦略、</span><wbr /><span className="jaLine">人、</span><wbr /><span className="jaLine">市場、</span><br /><em><span className="jaLine">そして実施。</span></em></>} intro="戦略上の責任範囲、規模、事業成果、関係者の多さ、そして戦略と実行を行き来する力を示す8つのプロジェクトです。" />

      <div className="workStories">
        {featuredProjectsJa.map((project) => {
          const detail = details[project.id];
          const links = supportingLinks[project.id] ?? [];
          return (
            <section className={`workStory tone-${project.tone}`} id={project.id} key={project.id}>
              <div className={`workStoryVisual${project.secondaryImage ? " doubleVisual" : ""}`}>
                {project.image ? <Image src={project.image} alt={project.imageAlt ?? ""} width={project.imageWidth ?? 1200} height={project.imageHeight ?? 800} sizes="(max-width: 820px) 100vw, 50vw" /> : <div className="projectNumberVisual">{project.stats?.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>}
                {project.secondaryImage ? <Image src={project.secondaryImage} alt={project.secondaryImageAlt ?? ""} width={project.secondaryImageWidth ?? 900} height={project.secondaryImageHeight ?? 900} sizes="(max-width: 820px) 100vw, 25vw" /> : null}
              </div>
              <div className="workStoryCopy">
                <p className="caseMeta">{project.no} · {project.category} · {project.year}</p>
                <h2>{project.title}</h2>
                <p className="projectRole">{project.role}</p>
                <div className="storySections">
                  <div><span>課題</span><p>{detail.challenge}</p></div>
                  <div><span>担当範囲</span><p>{detail.contribution}</p></div>
                  <div><span>成果と意義</span><p>{detail.outcome}</p></div>
                </div>
                {links.length ? <div className="sourceLinks">{links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div> : null}
              </div>
            </section>
          );
        })}
      </div>

      <section className="archiveSection">
        <div className="sectionHead"><p className="sectionLabel">8つの主要事例以外</p><div><h2><span className="jaLine">その他の仕事。</span><br /><em><span className="jaLine">経験の広がり。</span></em></h2><p className="sectionIntro">主要事例を補完するプロジェクトです。リサーチの規律、制作現場への理解、人前での進行、異文化間の実務など、ポートフォリオ全体を支える経験を示します。</p></div></div>
        <div className="archiveGrid">{archiveItems.map((item) => <article key={item.title}><span>{item.meta}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>
      <SiteFooter locale="ja" />
    </PageShell>
  );
}
