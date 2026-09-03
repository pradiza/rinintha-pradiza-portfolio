import {
  featuredProjects as featuredProjectsEn,
  mediaArchive as mediaArchiveEn,
  personalMedia as personalMediaEn,
  projectPress as projectPressEn,
} from "../site-data";
import type { FeaturedProject, TimelineItem } from "../site-data";

const projectCopy: Record<string, Pick<FeaturedProject, "title" | "category" | "role" | "summary" | "stats">> = {
  "japanese-station-hyper-wave": {
    title: "Japanese Station / Hyper Wave Festival",
    category: "メディアプラットフォーム · オリジナルIP · 音楽フェス",
    role: "共同創業者／クリエイティブディレクター／事業開発 · イベントディレクター／エグゼクティブプロデューサー",
    summary: "Japanese Stationを共同創業し、日本人アーティスト3組とインドネシアのバンド5組を迎えた2日間の音楽フェス「Hyper Wave Festival」を企画・制作。ジャカルタで5,000人以上を動員しました。",
    stats: [
      { value: "2", label: "日間開催" },
      { value: "3", label: "日本人アーティスト" },
      { value: "5", label: "インドネシアのバンド" },
      { value: "5,000+", label: "来場者" },
    ],
  },
  jkt48: {
    title: "JKT48 / Dentsu",
    category: "エンターテインメントIP · 立ち上げ期運営",
    role: "メディアリレーション＆イベントマネージャー",
    summary: "JKT48の立ち上げ初年度に、メディア対応、出演、イベント、制作進行、メンバーサポート、日本語楽曲のインドネシア語への歌詞翻案を担当しました。",
    stats: [
      { value: "約30", label: "1週間あたりの出演依頼" },
      { value: "約60", label: "サポートしたタレント数" },
    ],
  },
  "japan-wave": {
    title: "Japan Wave Expo",
    category: "ファッション · 展示会 · ビジネスマッチング",
    role: "クリエイティブ＆デリバリーリード",
    summary: "JETRO発のプラットフォームで、16社の日本企業とインドネシアのバイヤー、メディア、消費者をつなぐ企画・運営を統括しました。",
    stats: [
      { value: "16", label: "参加日本企業" },
      { value: "約1万人", label: "来場者" },
    ],
  },
  "k-content": {
    title: "K-Content Expo Indonesia",
    category: "政府系コンテンツエキスポ · ジャカルタ",
    role: "プロジェクト責任者／ショーディレクター",
    summary: "KOCCAとBEKRAFによる文化コンテンツ展示会で、政府機関、出演者、ベンダー、現地19名のチームをまとめ、プロジェクトとショー全体の実施を指揮しました。",
    stats: [{ value: "19", label: "現地スタッフ・フリーランス" }],
  },
  "nila-baharuddin": {
    title: "Nila Baharuddin",
    category: "ファッション · 日本市場開拓",
    role: "ブランドマーケティングマネージャー",
    summary: "銀座のFEELSEEN、NEW ENERGY Tokyo、大丸東京店へと展開し、ブランド戦略から小売現場まで、Nila Baharuddinの日本市場開拓を主導しました。",
    stats: [
      { value: "100+", label: "FEELSEENオープニング来場者" },
      { value: "¥1M+", label: "大丸東京店での売上" },
    ],
  },
  cecilia: {
    title: "Cecilia / Holywings Group",
    category: "ホスピタリティ · 継続的なブランド運営",
    role: "シニアマーケティングコミュニケーションストラテジスト",
    summary: "Ceciliaのマーケティング方針、プログラム、6名のチームを統括し、ブランドポジショニングと顧客行動を事業成果につなげました。",
    stats: [
      { value: "Rp2.1B+", label: "月間売上" },
      { value: "30%+", label: "フード売上構成比" },
    ],
  },
  shiseido: {
    title: "Shiseido Beauty Redefined",
    category: "ビューティー · 4都市体験型ロードショー",
    role: "クリエイティブ＆デリバリーリード",
    summary: "ジャカルタ、スラバヤ、メダン、バンドンの4都市で、資生堂の体験型ロードショーにおけるクリエイティブと制作進行を統括しました。",
    stats: [
      { value: "4", label: "ジャカルタ · スラバヤ · メダン · バンドン" },
      { value: "2017–18", label: "実施期間" },
    ],
  },
  "side-tokyo": {
    title: "SIDE Co. / Fashion Week Tokyo",
    category: "Amazon Fashion Week TOKYO · Fashion Hong Kong 2018 S/S",
    role: "プロジェクトマネージャー（東京勤務）",
    summary: "東京を拠点に、デザイナー、会場、物流、ポップアップ、VIPイベントを調整し、ファッションウィーク、展示、小売プロジェクトを推進しました。",
    stats: [
      { value: "Tokyo", label: "日本市場での実務経験" },
      { value: "3", label: "ファッションウィーク関連案件" },
    ],
  },
};

export const featuredProjectsJa: FeaturedProject[] = featuredProjectsEn.map((project) => ({
  ...project,
  ...projectCopy[project.id],
}));

export const timelineJa: TimelineItem[] = [
  { period: "2026", title: "PT Garda Citra Nusantara", role: "創業者", text: "クリエイティブ戦略、リサーチ、イベント、ブランドアクティベーション、メディア、インドネシアと日本を結ぶプロジェクトなど、より大規模な業務や法人間連携を支えるため、インドネシアで法人を設立。" },
  { period: "2025–2026", title: "Holywings Group", role: "シニアマーケティングコミュニケーションストラテジスト → シニアクリエイティブストラテジスト", text: "2025年9月より、Cecilia、H Social Club、H Bar Kuala Lumpurのマーケティングコミュニケーションを担当。2026年4月よりHWC（Holywings Creative）のシニアクリエイティブストラテジストとして、Martell、Clase Azulなど外部ブランドのキャンペーンを企画・実施しました。" },
  { period: "2024–2025", title: "Asia Koshien / NB.ACADEMY", role: "NB.ACADEMY イベントオーガナイザー", text: "2024年Asia Koshien公式クロージング兼表彰イベントであるNo Border Asia Community VIPアフターパーティーを、NB.ACADEMYのイベントオーガナイザーとして担当。特別ゲスト、政府・スポーツ業界VIP、トークセッション、スポンサー、出展者、ネットワーキング、ハイブリッド参加を調整し、2025年ジャカルタプログラムと日本語でのコミュニティ発信にも携わりました。" },
  { period: "2023–2025", title: "Nila Baharuddin", role: "ブランドマーケティングマネージャー", text: "ブランド戦略、キャンペーン、パートナーシップ、販売支援、展示会、日本市場展開を統括。文化的なストーリー設計やPRから、輸送、バイヤー対応、小売実務、レポーティングまで一貫して担当しました。" },
  { period: "2021–2023", title: "Parallax Network", role: "PR責任者／クリエイティブチーム", text: "テクノロジー、エンターテインメント、NFT、クリエイティブエコノミー領域で、PR戦略、ローンチストーリー、提案書、コンテンツ、プレゼンテーション、プレス資料を担当しました。" },
  { period: "2017", title: "SIDE Co., Ltd. · Fashion Week Tokyo関連プロジェクト", role: "プロジェクトマネージャー（東京へ転居）", text: "Asian Fashion Meets Tokyo、Fashion Hong Kongなどの国際ファッション案件で、デザイナー、会場、輸送・輸入、小売・ポップアップ運営、在庫、VIPイベント、海外顧客対応を調整しました。" },
  { period: "2015–2018", title: "ZeeMi · Zygma Organizer · 7Dimension", role: "コンテンツプロデューサー · 共同創業者／CCO · クリエイティブ責任者", text: "双方向ライブ配信フォーマットを制作し、展示会、ロードショー、フェスティバル、韓国コンテンツ、ビューティーブランド、法人案件で、企画、営業、ショーの実施を統括しました。" },
  { period: "2012–現在", title: "Japanese Station", role: "共同創業者 · クリエイティブディレクター／事業開発", text: "メディアとコミュニティのプラットフォームを、ブランドコンテンツ、イベント、タレントマネジメント、スポンサーシップ、事業開発、そしてHyper Wave FestivalなどのオリジナルIPへ発展させました。" },
  { period: "2011–2012", title: "Dentsu / JKT48", role: "メディアリレーション＆イベントマネージャー", text: "JKT48の立ち上げ初年度に、メディア対応、出演、イベント、制作ロジスティクス、パートナー連携、日本語からインドネシア語への歌詞翻案を担当。その後、テレビ放送された第2期生オーディションの審査員も務めました。", textHighlights: ["日本語からインドネシア語への歌詞翻案"] },
  { period: "2011", title: "AOI Pro. / AOI Asia Indonesia", role: "プロダクションマネージャー", text: "ケーシー・ストーナー出演のHonda CBR150R TVCM、三菱東京UFJ銀行の企業映像、JKT48のTVCM・ミュージックビデオにおいて、リサーチ、スタッフ編成、キャスティング、ロケ地、予算、制作準備を担当しました。" },
  { period: "2008–2013", title: "Go Raikon／インディペンデント音楽プロジェクト", role: "創業者 · イベントプロデューサー · タレントマネージャー", text: "Nihon no Matsuri、Little Tokyo Ennichisai、CLAS:H、日イ友好ファッションショーなど、日本のポップカルチャーを扱う初期の企画を展開。On! Project、Honeybeat、Proudly Presentsでは、スケジュール、広報、スタイリング、メディア、物販、収支、オリジナル楽曲を管理しました。" },
  { period: "2007–2011", title: "国際協力機構（JICA）", role: "プロジェクト秘書 · 技術協力3案件", text: "鉄道安全、航空事故調査、海上保安の技術協力で、リサーチ、翻訳、ロジスティクス、関係者調整、セミナー、現地視察を支援しました。" },
  { period: "2004–現在", title: "MC・モデレーター・翻訳", role: "フリーランス", text: "日本のポップカルチャーイベントから始まったMCの仕事を、フェスティバル、展示会、企業イベント、コンサート、政府系セミナー、大型ファンコンベンションへ広げてきました。" },
  { period: "2003–2004", title: "U FM Radio · Cupang（Cuma Jepang）", role: "ゲストプレゼンター「Miss Gossip」", text: "日本のアーティストと音楽を自主的に調べ、その背景や魅力をインドネシア語のラジオコーナーとして幅広いリスナーに紹介しました。" },
];

const translateNotes = <T extends { note: string }>(items: T[], notes: string[]) =>
  items.map((item, index) => ({ ...item, note: notes[index] ?? item.note }));

export const personalMediaJa = translateNotes(personalMediaEn, [
  "制作会社での秋元康関連プロジェクトからJKT48運営、日本語楽曲のインドネシア語歌詞翻案に至る経歴を詳しく紹介したインタビュー。",
  "インドネシアのWorld Cosplay Summit参加についてリニンタのコメントを掲載し、2008年の日イ友好イベントから続く関与を紹介。",
  "元SDN48メンバーで書道家のなちゅをインドネシアへ招聘した経緯とリニンタの役割を取り上げた記事。",
  "JKT48 TheatreのPR責任者として、常設劇場の開設とその目的について説明。",
  "AKB48の高城亜樹と仲川遥香のインドネシア移籍計画について、JKT48運営側としてコメント。",
  "JKT48のEvent & PR Managerとして、常設劇場の仕組みと意義を説明した当時の記事。",
  "CCOおよびHyper Wave Festivalの企画者として、音楽を通じた日イ・ポップカルチャー交流についてコメント。",
  "Atreyu Moniaga ProjectのAARO展で撮影された文化・クリエイティブ業界関係者の一人として紹介。",
  "MC、JKT48のメディアリレーション、Japanese Station、日本人アーティスト関連イベントへと続く活動を紹介。",
  "インドネシアでのSTARMARIE公演を報じ、CLAS:HのMCとしてリニンタを紹介した日本語記事。",
  "リニンタへの取材と4曲のJKT48歌詞翻案をもとに、日本語楽曲のインドネシア語化を分析した学術研究。",
  "インドネシアにおける日本音楽、メディア、業界形成について語る公開ディスカッション。",
  "日本文化、教育、日イ文化外交について語る登壇者として紹介。",
]);

export const mediaArchiveJa = translateNotes(mediaArchiveEn, [
  "JKT48広報として、初のOfficial Guide Bookサイン会の日程とファン参加について説明。",
  "テレビ放送された第2期生オーディションで、JKT48 Operation Teamを代表して候補者に面接する様子を記録。",
  "映画、ファッション、クリエイティブ産業、ゲストトークを含むPOPCON ASIA 2014のメインステージMCとして紹介。",
  "ジャカルタで複数週にわたり開催された日本音楽・コスプレイベントのMCおよび主催側代表として掲載。",
  "ガンバ大阪の選手へのインタビューなど、WAKUWAKU JAPAN Snow FestivalのMCとして登場。",
  "Amuseおよびインドネシア音楽業界関係者とともに、コンテスト審査員として紹介。",
  "音楽、文化、インドネシアと日本をまたぐキャリアについて、加藤ひろあき氏を迎えて進行したロングインタビュー。",
  "Melody Laksani氏と、パフォーマンスやエンターテインメント業界の舞台裏を語る対談を進行。",
  "JKT48初期のEvent & Media Relation担当として氏名が掲載されたアーカイブ。",
]);

export const projectPressJa = translateNotes(projectPressEn, [
  "VAMPSのHyper Wave Festival 2013出演を発表したユニバーサル ミュージック ジャパンの公式告知。",
  "NIDJIとVAMPSが出演した2日間のHyper Wave Festivalを報じた記事。",
  "JETRO、SYZYGY99、ファッション展示、参加日本企業を紹介したJapan Wave Expo 2016の記事。",
  "Hyper Wave Festivalの企画者としてリニンタを紹介し、ビジネス、ファッション、音楽、文化交流の組み合わせを解説。",
  "K-Content Expo Indonesia 2016とKOCCAのインドネシア拠点開設を報じた記事。",
  "Nila Baharuddinによる2025年の大丸東京店ポップアップを紹介した英語記事。",
  "インドネシア人デザイナーNila Baharuddinの銀座期間限定展示・販売を紹介した日本語告知。",
]);

export const servicesJa = [
  { no: "01", title: "戦略・リサーチ", text: "市場・オーディエンス調査、ポジショニング、キャンペーン・ブランド戦略、競合環境、PR方針、パートナーシップ設計。意思決定に必要な論点に絞って整理します。" },
  { no: "02", title: "プロジェクト・体験設計", text: "キャンペーン、イベント、展示会、フェス、ポップアップ、ブランドコンテンツ、特別企画をシニアレベルでリード。企画と事業ストーリーから、予算、チーム、ベンダー、実施までつなぎます。" },
  { no: "03", title: "インドネシア ↔ 日本", text: "市場参入の視点、文化・オーディエンス理解、ローカライゼーション、パートナー候補の整理、バイヤー・メディア対応、国際連携。日本からインドネシアへ、またはインドネシアから日本へ進出する案件を実務面から支援します。" },
];

export const specialistCapabilitiesJa = [
  "提案書・スポンサー資料・ピッチ開発",
  "バイリンガルMC・モデレーション",
  "英語–インドネシア語翻訳",
  "日本語–インドネシア語ローカライゼーション",
  "歌唱可能な歌詞翻案",
];
