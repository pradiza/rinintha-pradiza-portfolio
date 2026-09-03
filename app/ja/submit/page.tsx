import type { Metadata } from "next";
import { PageShell } from "../../components";
import { TallyForm } from "../../tally-form";

export const metadata: Metadata = {
  title: "コンサルテーションのお申し込み",
  description: "リニンタ・プラディザとのインドネシア市場参入コンサルテーション申込フォーム。",
  alternates: { canonical: "/ja/submit", languages: { en: "/submit", ja: "/ja/submit" } },
};

export default function JapaneseSubmitPage() {
  return (
    <PageShell locale="ja">
      <section className="submitPage">
        <header className="submitHeader">
          <p className="sectionLabel">コンサルテーションのお申し込み</p>
          <div>
            <h1><span className="jaLine">インドネシア市場</span><wbr /><span className="jaLine">コンサルテーション</span></h1>
            <p>60分のアドバイザリーセッションに向けて、相談内容の確認および事前準備に必要な範囲でご記入ください。</p>
          </div>
        </header>
        <TallyForm formId="XxbP9e" title="インドネシア市場コンサルテーション お申し込み" />
      </section>
    </PageShell>
  );
}
