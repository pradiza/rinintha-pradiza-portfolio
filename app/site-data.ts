export const cvUrl =
  "https://docs.google.com/document/d/1qZ46JpYMcu3XtEOopaiP4iDhn8wozHf3eMjZI797LYE/export?format=pdf";

export const email = "rininthapradiza@gmail.com";

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/rininthapradiza/" },
  { label: "X / Twitter", href: "https://x.com/RininthaPradiza" },
  { label: "Email", href: `mailto:${email}` },
];

export type FeaturedProject = {
  no: string;
  id: string;
  title: string;
  year: string;
  category: string;
  role: string;
  summary: string;
  summaryHighlights?: string[];
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  secondaryImageWidth?: number;
  secondaryImageHeight?: number;
  tone: "ink" | "lime" | "coral" | "teal" | "paper" | "soft";
  stats?: Array<{ value: string; label: string }>;
};

export const featuredProjects: FeaturedProject[] = [
  {
    no: "01",
    id: "hyper-wave",
    title: "Hyper Wave Festival 2013",
    year: "2013",
    category: "Music festival · Jakarta",
    role: "Event Director · Executive Producer · Creative Director",
    summary:
      "A two-day cross-cultural music festival supported by COOL JAPAN and TokyoGets, bringing three Japanese artists, VAMPS, DJ Kaya, and Reecho, together with five Indonesian bands: Nidji, Pee Wee Gaskins, Thirteen, Vegan, and P.R.I.D.E.",
    image: "/images/hyper-wave-vamps-live.png",
    imageAlt: "VAMPS performing live at Hyper Wave Festival 2013 in Jakarta",
    imageWidth: 800,
    imageHeight: 534,
    secondaryImage: "/images/hyper-wave-poster.png",
    secondaryImageAlt: "Official Honda One Heart Hyper Wave Festival 2013 poster",
    secondaryImageWidth: 900,
    secondaryImageHeight: 1047,
    tone: "ink",
    stats: [
      { value: "3", label: "Japanese artists" },
      { value: "5", label: "Indonesian bands" },
      { value: "5,000+", label: "attendees" },
    ],
  },
  {
    no: "02",
    id: "japan-wave",
    title: "Japan Wave Expo 2016",
    year: "2016",
    category: "Fashion · Exhibition · Business matching",
    role: "Creative & Delivery Lead",
    summary:
      "A JETRO-initiated business and cultural platform designed to connect Japanese fashion companies with the Indonesian market. Across three days in Jakarta, Japan Wave Expo combined B2B business matching, buyer and media engagement, test marketing, fashion showcases, and public programming, giving participating companies direct access to both commercial partners and Indonesian consumers.",
    image: "/images/japan-wave-expo-2016-4k.png",
    imageAlt: "Japan Wave Expo 2016 fashion showcase at Central Park Mall in Jakarta",
    imageWidth: 3840,
    imageHeight: 2160,
    tone: "lime",
    stats: [
      { value: "16", label: "Japanese companies" },
      { value: "≈10K", label: "visitors" },
    ],
  },
  {
    no: "03",
    id: "k-content",
    title: "K-Content Expo Indonesia 2016",
    year: "2016",
    category: "Government-backed content expo · Jakarta",
    role: "Head of Project · Show Director",
    summary:
      "A Korea–Indonesia content and cultural showcase organized with KOCCA and BEKRAF, bringing Korean entertainment, digital content, and lifestyle programming to audiences at ICE BSD. Local production covered games, K-pop, beauty, food, taekwondo, screenings, and a government and VIP networking reception, coordinating multiple stakeholders, talents, and a 19-person local team and freelance crew.",
    summaryHighlights: ["KOCCA", "BEKRAF", "19-person local team and freelance crew"],
    image: "/images/kcontent-expo-panorama.png",
    imageAlt: "Panoramic view of K-Content Expo Indonesia 2016 at ICE BSD",
    imageWidth: 2200,
    imageHeight: 678,
    tone: "coral",
    stats: [{ value: "19", label: "local staff & freelancers led" }],
  },
  {
    no: "04",
    id: "jkt48",
    title: "JKT48",
    year: "2011–2012",
    category: "Entertainment · Dentsu",
    role: "Media Relations & Event Manager",
    summary:
      "Part of the launch-year team behind JKT48, Indonesia’s sister group of AKB48, during the group’s formative first year under Dentsu. The role spanned artist and schedule management, media and commercial opportunities, broadcast coordination, event and press production, member support, and content localization. Key projects included the AKB48 × JKT48 Concert, JKT48 School, and JKT48 Second Generation Audition, alongside Indonesian lyric adaptation and vocal-guide production.",
    image: "/images/jkt48-team.jpg",
    imageAlt: "Rinintha Pradiza with colleagues at the JKT48 Theater in Jakarta",
    imageWidth: 720,
    imageHeight: 960,
    tone: "teal",
  },
  {
    no: "05",
    id: "japanese-station",
    title: "Japanese Station",
    year: "2012–Present",
    category: "Media · Community · Branded entertainment",
    role: "Co-founder · Creative Director & Business Development",
    summary:
      "Built from a community-driven Japanese culture portal into a broader media, entertainment, talent, campaign, and event platform connecting Japanese pop culture with Indonesian audiences and brand partners. The work spanned content and creative direction, commercial partnerships, talent development, PR and campaigns, and original event IP, including JS Navigator, brand collaborations, and large-scale projects such as Hyper Wave Festival.",
    image: "/images/japanese-station-team-event.png",
    imageAlt: "Rinintha Pradiza with the Japanese Station team and event talents",
    imageWidth: 768,
    imageHeight: 512,
    tone: "paper",
    stats: [{ value: "10", label: "JS Navigator talents represented" }],
  },
  {
    no: "06",
    id: "nila-baharuddin",
    title: "Nila Baharuddin",
    year: "2023–2025",
    category: "Fashion · Japan market development",
    role: "Brand Marketing Manager",
    summary:
      "A Japan market-entry and brand activation program positioning Indonesian fashion designer Nila Baharuddin for new audiences in Tokyo. The campaign connected brand strategy, PR, partnerships, event production, and retail activation, progressing from a showcase at FEELSEEN Ginza to NEW ENERGY TOKYO and a two-week pop-up at Daimaru Tokyo. The program built visibility across media, industry, and consumer audiences, welcoming 100+ guests at the Ginza opening and generating ¥1M+ in retail sales at Daimaru.",
    image: "/images/nila5.jpg",
    imageAlt: "A sculptural Nila Baharuddin fashion look",
    imageWidth: 1350,
    imageHeight: 1800,
    tone: "coral",
    stats: [
      { value: "100+", label: "FEELSEEN opening guests" },
      { value: "¥1M+", label: "Daimaru retail sales" },
    ],
  },
];

export type TimelineItem = {
  period: string;
  title: string;
  role: string;
  text: string;
  textHighlights?: string[];
};

export const timeline: TimelineItem[] = [
  { period: "2003–2004", title: "U FM Radio · Cupang (Cuma Jepang)", role: "Guest Presenter, “Miss Gossip”", text: "Researched Japanese artists and music independently, then turned that knowledge into Indonesian-language radio segments for a wider audience." },
  { period: "2004–Present", title: "MC, Moderator & Translator", role: "Independent", text: "A paid MC career that grew from Japanese pop-culture events into festivals, exhibitions, corporate programs, concerts, government seminars, and major fan conventions." },
  { period: "2007–2011", title: "Japan International Cooperation Agency", role: "Project Secretary · Three technical-cooperation projects", text: "Supported railway safety, aircraft-accident investigation, and maritime-security cooperation through research, translation, logistics, stakeholder coordination, seminars, and site visits." },
  { period: "2008–2013", title: "Go Raikon & independent music projects", role: "Founder · Event Producer · Talent Manager", text: "Developed early Japanese pop-culture programs including Nihon no Matsuri, Little Tokyo Ennichisai, CLAS:H, and the Japan–Indonesia Friendship Fashion Show; managed On! Project, Honeybeat, and Proudly Presents across schedules, promotion, styling, media, merchandise, income, and original music." },
  { period: "2011", title: "AOI Pro. / AOI Asia Indonesia", role: "Production Manager", text: "Led research, staffing, casting and talent processes, locations, budgets, and production preparation across the Honda CBR150R TVC with Casey Stoner, Bank of Tokyo-Mitsubishi UFJ corporate film, and JKT48 TVCs and music videos." },
  { period: "2011–2012", title: "Dentsu / JKT48", role: "Media Relations & Event Manager", text: "Managed media opportunities, appearances, events, production logistics, partner coordination, and Japanese-to-Indonesian lyric adaptation during JKT48’s formative first year, later serving as a judge for the televised second-generation audition.", textHighlights: ["Japanese-to-Indonesian lyric adaptation"] },
  { period: "2012–Present", title: "Japanese Station", role: "Co-founder · Creative Director & Business Development", text: "Built a media and community platform into branded content, events, talent representation, sponsorship, business development, and original intellectual property including Hyper Wave Festival." },
  { period: "2015–2018", title: "ZeeMi · Zygma Organizer · 7Dimension", role: "Content Producer · Co-founder/CCO · Head of Creative", text: "Produced interactive livestream formats and led creative, commercial, and show delivery for exhibitions, roadshows, festivals, Korean-content programs, beauty brands, and corporate clients." },
  { period: "2017", title: "SIDE Co., Ltd. · Tokyo Fashion Week projects", role: "Project Manager (relocated to Tokyo)", text: "Managed cross-border fashion projects across Asian Fashion Meets Tokyo and Fashion Hong Kong, coordinating designers, venues, shipping and imports, retail and pop-up operations, inventory, VIP events, and international customer engagement." },
  { period: "2021–2023", title: "Parallax Network", role: "Head of Public Relations / Creative Team", text: "Led PR strategy, launch narratives, proposals, content, decks, and press materials across technology, entertainment, NFT, and creative-economy projects." },
  { period: "2023–2025", title: "Nila Baharuddin", role: "Brand Marketing Manager", text: "Led brand strategy, campaigns, partnerships, sales support, exhibitions, and Japan-market expansion—from cultural narrative and PR to shipping, buyers, retail execution, and reporting." },
  { period: "2024–2025", title: "Asia Koshien / NB.ACADEMY", role: "Event Organizer for NB.ACADEMY · VIP Afterparty & Cross-Cultural Sports Program", text: "Served as NB.ACADEMY’s event organizer for the 2024 No Border Asia Community VIP afterparty at JS Luwansa—the official closing celebration and awards event for Asia Koshien—coordinating special guests, government and sports-industry VIPs, talk sessions, sponsors, exhibitors, networking, and hybrid participation; also contributed to the 2025 Jakarta program and Japanese-language community outreach materials." },
  { period: "2025–2026", title: "HW Group", role: "Marketing Communication Strategist → Senior Creative Strategist", text: "Worked first as brand owner across Cecilia, H Social House, and H Bar Kuala Lumpur, then as an agency-side creative team head across hospitality and premium beverage accounts." },
  { period: "2026", title: "PT Garda Citra Nusantara", role: "Founder", text: "Established an independent Indonesian legal entity to support larger professional engagements and corporate collaborations across creative strategy, research, events, brand activations, media, and Indonesia–Japan projects." },
];

export const personalMedia = [
  { source: "MerahPutih · Indonesia", title: "Penerjemah Gokil di Balik Lirik ‘Ganjil’ JKT48", note: "A detailed interview traces Rinintha’s path from production work connected with Yasushi Akimoto to JKT48 management and Japanese-to-Indonesian lyric adaptation.", href: "https://www.merahputih.com/post/read/penerjemah-gokil-di-balik-lirik-ganjil-jkt48" },
  { source: "Jakarta Shimbun · Japan", title: "イ代表、世界大会出場へ 名古屋のコスプレサミット 8月に20カ国が参加", note: "Japanese-language coverage quotes Rinintha on Indonesia’s World Cosplay Summit participation and traces her involvement back to the 2008 Indonesia–Japan Expo.", href: "https://www.jakartashimbun.com/free/detail/4357.html" },
  { source: "Jakarta Shimbun · Japan", title: "魂を込めたイベント　ギャル書道家のなちゅさん", note: "Japanese coverage credits Rinintha with inviting former SDN48 member and calligrapher Nachu to perform in Indonesia after discovering her work.", href: "https://www.jakartashimbun.com/free/detail/25059.html" },
  { source: "KapanLagi · Indonesia", title: "Akhirnya, JKT48 Bakal Resmikan Teater Permanen", note: "Rinintha, then leading public relations for JKT48 Theatre, discusses the launch and purpose of the group’s permanent performance venue.", href: "https://www.kapanlagi.com/showbiz/selebriti/akhirnya-jkt48-bakal-resmikan-teater-permanen-5fd9a6.html" },
  { source: "JPNN · Indonesia", title: "JKT48 Kedatangan Personel dari Jepang", note: "JPNN quotes Rinintha as part of JKT48 management regarding the planned arrival of AKB48 members Aki Takajo and Haruka Nakagawa in Indonesia.", href: "https://www.jpnn.com/news/jkt48-kedatangan-personel-dari-jepang" },
  { source: "Espos / Solopos · Indonesia", title: "TEATER: JKT48 Kini Miliki Teater Permanen", note: "Contemporary coverage identifies Rinintha as JKT48 Event & PR Manager and quotes her explaining the group’s permanent-theatre concept.", href: "https://entertainment.espos.id/teater-jkt48-kini-miliki-teater-permanen-326942" },
  { source: "Liputan6 · Indonesia", title: "Teenebelle dan Tulus Bakal Meriahkan Japan Wave Expo 2016", note: "Liputan6 quotes Rinintha as Chief Creative Officer and Hyper Wave Festival concept creator on building a Japan–Indonesia pop-culture exchange through music.", href: "https://www.liputan6.com/showbiz/read/2445953/teenebelle-dan-tulus-bakal-meriahkan-japan-wave-expo-2016" },
  { source: "ELLE Indonesia", title: "Atreyu Moniaga Project Hadirkan Selebrasi Seni di CAN’S Gallery", note: "ELLE Indonesia names Rinintha among the cultural and creative-industry figures photographed at Atreyu Moniaga Project’s AARO exhibition.", href: "https://elle.co.id/culture/atreyu-moniaga-project-hadirkan-selebrasi-seni-di-cans-gallery" },
  { source: "Japanese Station", title: "5 Playlist Lagu Jepang #JSJukeBox yang Bisa Bikin Tambah Semangat!", note: "A profile section traces Rinintha’s path from MC and JKT48 media relations to Japanese Station and major Japanese-artist events.", href: "https://japanesestation.com/entertainment/music/5-playlist-lagu-jepang-jsjukebox-yang-bisa-bikin-tambah-semangat" },
  { source: "GirlsNews · Japan", title: "インドネシアでSTARMARIEが快挙！！！", note: "Japanese coverage of STARMARIE in Indonesia names Rinintha as MC for the CLAS:H pop-culture stage and documents her media appearance.", href: "https://www.girlsnews.tv/unit/222371" },
  { source: "Chi’e · Japanese Learning and Teaching", title: "Translation Techniques in Adapting AKB48 Japanese Songs into JKT Indonesian Versions", note: "An academic study based on interviews with Rinintha and analysis of four of her singable JKT48 lyric adaptations.", href: "https://journal.unnes.ac.id/journals/chie/article/download/16032/3442/68608" },
  { source: "YouTube · Industry Conversation", title: "Bincang Industri Musik Jepang #1: Tokyolite", note: "Rinintha joins a public discussion about Japanese music, media, and industry development in Indonesia.", href: "https://www.youtube.com/watch?v=Kjq8VhNOlkk" },
  { source: "UPN Veteran Jakarta", title: "Unboxing Foreign Policy: Cultural Diplomacy Through Study Exchange in Japan", note: "Rinintha is featured as a speaker discussing Japanese culture, education, and cultural diplomacy between Indonesia and Japan.", href: "https://fisip.upnvj.ac.id/2021/03/03/press-release-unboxing-foreign-policy-culture-diplomacy-through-study-exchange-in-japan/" },
];

export const mediaArchive = [
  { source: "Japanese Station", title: "Akhirnya, Sesi Tanda Tangan OGB JKT48 Diadakan", note: "Rinintha speaks as JKT48 Public Relations about scheduling and fan access for the group’s first Official Guide Book signing sessions.", href: "https://japanesestation.com/entertainment/music/akhirnya-sesi-tanda-tangan-ogb-jkt48-diadakan" },
  { source: "JKT48 Fanblog · Archive", title: "Episode Pertama JKT48 2nd Generation Audition", note: "A recap of the televised audition documents Rinintha representing the JKT48 Operation Team and interviewing second-generation candidates.", href: "http://jkt48fanblog.blogspot.com/2012/09/episode-pertama-jkt48-2nd-generation.html" },
  { source: "Japanese Station", title: "POPCON ASIA 2014: ‘Be Pop, Be You’", note: "Event coverage and photographs show Rinintha hosting the main stage across film, fashion, creative-industry, and guest talk-show segments.", href: "https://japanesestation.com/events/event-coverage/popcon-asia-2014-be-pop-be-you-inilah-wadah-pameran-talenta-kreatif-indonesia" },
  { source: "Japanese Station", title: "Cosplay Nation at Lippo Mall Puri", note: "Coverage identifies Rinintha as MC and event representative for a multi-week Japanese music and cosplay program in Jakarta.", href: "https://japanesestation.com/events/event-coverage/cosplay-nation-sukses-memeriahkan-lippo-mall-puri-dengan-cosplay-dan-musik-jepang" },
  { source: "Japanese Station", title: "WAKUWAKU JAPAN Snow Festival 2015", note: "Rinintha appears as event MC, interviewing Gamba Osaka players and guiding the Japanese entertainment festival’s live program.", href: "https://japanesestation.com/events/event-coverage/video-petualangan-jsnavigator-jesslyn-dan-nada-di-waku-waku-japan-snow-festival-2015-mall-gandaria-city" },
  { source: "KAORI Nusantara", title: "Japan Foundation JF Kara OK Compe Grand Final 2016", note: "Rinintha is named as a competition judge alongside representatives from Amuse and Indonesia’s music community.", href: "https://www.kaorinusantara.or.id/newsline/44342/japan-foundation-mempersembahkan-jf-kara-ok-compe-grand-final-2016" },
  { source: "Japanese Station Podcast", title: "Meraih Mimpi Merah Putih — with Hiroaki Kato", note: "A long-form conversation hosted by Rinintha about music, culture, and building a career across Indonesia and Japan.", href: "https://japanesestation.com/japanese-station-tv/videos/jspodcast-s01-eps-05-meraih-mimpi-merah-putih-w-at-hiroaki-kato" },
  { source: "Japanese Station Podcast", title: "Belakang Layar Bersama Melody Laksani", note: "Rinintha hosts a behind-the-scenes conversation with Melody Laksani about performance and the entertainment industry.", href: "https://japanesestation.com/japanese-station-tv/videos/jspodcast-s01-eps-07-belakang-layar-bersama-melody-laksani" },
  { source: "JKT48Stuff", title: "Love JKT48 Translation — Staff Credits", note: "An archival staff credit listing Rinintha under Event & Media Relation during JKT48’s early period.", href: "https://www.jkt48stuff.com/lovejkt48-translation/" },
];

export const projectPress = [
  { source: "Universal Music Japan", title: "『Hyper Wave Festival 2013』にVAMPSの出演が決定！！", note: "Official announcement of VAMPS as the festival’s Jakarta headliner.", href: "https://www.universal-music.co.jp/vamps/news/2013-10-7/" },
  { source: "Okezone Celebrity", title: "Hyde ‘LArc-en-Ciel’ Tampil di Jakarta 29 November", note: "Coverage of the two-day Hyper Wave Festival line-up featuring NIDJI and VAMPS.", href: "https://celebrity.okezone.com/read/2013/10/29/391/888926/hyde-larc-en-ciel-tampil-di-jakarta-29-november" },
  { source: "Japanese Station", title: "JAPAN WAVE EXPO 2016 — Central Park & Tribeca Park, Jakarta", note: "Event coverage naming JETRO, SYZYGY99, the fashion exhibition, and participating Japanese companies.", href: "https://japanesestation.com/events/upcoming-events/japan-wave-expo-2016-26-28-februari-2016-central-park-tribeca-park-jakarta" },
  { source: "Ultimagz · Indonesia", title: "Fashion Berbalut Musik di Japan Wave Expo", note: "Independent coverage identifies Rinintha as the concept creator behind Hyper Wave Festival and explains its integration of business, fashion, music, and cultural exchange.", href: "https://ultimagz.com/event/12757/" },
  { source: "The Jakarta Post", title: "South Korea opens creative agency office in Indonesia", note: "Coverage of K-Content Expo Indonesia 2016 and KOCCA’s local creative-industry expansion.", href: "https://www.thejakartapost.com/news/2016/10/10/south-korea-opens-creative-agency-office-indonesia" },
  { source: "RRI English", title: "Indonesian Designer Showcases Eco-Friendly Bag Collection in Tokyo", note: "English-language coverage of Nila Baharuddin’s 2025 Daimaru Tokyo pop-up.", href: "https://rri.co.id/en/business/1700981/indonesian-designer-showcases-eco-friendly-bag-collection-in-tokyo" },
  { source: "FEELSEEN / NEWSCAST Japan", title: "日本でファッションを学んだインドネシア人デザイナーによる期間限定ショップin銀座", note: "Japanese announcement of Nila Baharuddin’s limited Ginza exhibition and retail program.", href: "https://newscast.jp/news/4542079" },
];

export const services = [
  { no: "01", title: "Strategy & research", text: "Market landscaping, audience and community insight, competitor analysis, positioning, campaign strategy, PR, partnership planning, and practical recommendations." },
  { no: "02", title: "Projects & experiences", text: "Creative direction and leadership for campaigns, events, exhibitions, festivals, pop-ups, branded content, show production, budgets, vendors, and on-site delivery." },
  { no: "03", title: "Indonesia ↔ Japan", text: "Market-entry support, cultural adaptation, localization, partner mapping, buyer and media relations, and cross-border project leadership." },
];

export const specialistCapabilities = [
  "Proposals, sponsorship decks & pitch development",
  "Bilingual MC & moderation",
  "English–Indonesian translation",
  "Japanese–Indonesian localization",
  "Singable lyric adaptation",
];
