import type { Metadata } from "next";
import { PageShell } from "../../components";
import { email, socials } from "../../site-data";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "プロジェクト、役職、コンサルテーション、MC、翻訳、インドネシアと日本を結ぶ協業について、リニンタ　プラディザへお問い合わせください。",
  alternates: { canonical: "/ja/contact", languages: { en: "/contact", ja: "/ja/contact" } },
};

export default function JapaneseContactPage() {
  return (
    <PageShell locale="ja">
      <section className="contactPage">
        <p className="sectionLabel">お問い合わせ</p>
        <h1><span className="jaLine">次に動かすのは、</span><br /><em><span className="jaLine">どんな</span><wbr /><span className="jaLine">プロジェクトですか。</span></em></h1>
        <p className="contactLead">背景、実現したい成果、時期、そしてリニンタに期待する役割をお知らせください。要点を簡潔にお送りいただければ、より具体的にご回答できます。</p>
        <div className="contactOptions"><a href={`mailto:${email}?subject=Project%20enquiry%20for%20Rinintha`}>プロジェクトのご相談 <span>↗</span><small>戦略、キャンペーン、リサーチ、イベント、特別企画</small></a><a href="/ja/consultation">インドネシア市場コンサルテーション <span>↗</span><small>60分の市場参入戦略セッション · 内容と料金を見る</small></a><a href={`mailto:${email}?subject=Role%20opportunity%20for%20Rinintha`}>採用・参画のご相談 <span>↗</span><small>正社員、業務委託、シニアプロジェクトリーダー</small></a><a href={`mailto:${email}?subject=MC%20or%20translation%20enquiry`}>MC・翻訳 <span>↗</span><small>インドネシア語・英語でのステージ進行、ローカライゼーション</small></a></div>
        <div className="corporateEngagement"><span>法人契約</span><p>正式な契約、現地実施、ベンダー登録、継続的な協業が必要な案件は、PT Garda Citra Nusantaraとの法人契約で対応できます。</p></div>
        <div className="directContact"><a href={`mailto:${email}`}>{email} ↗</a><a href="tel:+6281289168740">+62 812 8916 8740</a>{socials.slice(0,3).map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} ↗</a>)}</div>
        <div className="contactLocation"><span>インドネシア・ジャカルタ首都圏</span><span>インドネシア、日本、その他アジア市場で対応</span></div>
        <div className="footerMark" aria-hidden="true">RP<span>.</span></div>
      </section>
    </PageShell>
  );
}
