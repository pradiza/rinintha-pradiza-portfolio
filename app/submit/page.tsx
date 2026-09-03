import type { Metadata } from "next";
import { PageShell } from "../components";
import { TallyForm } from "../tally-form";

export const metadata: Metadata = {
  title: "Consultation Request",
  description: "Request an Indonesia market entry consultation with Rinintha Pradiza.",
  alternates: { canonical: "/submit", languages: { en: "/submit", ja: "/ja/submit" } },
};

export default function SubmitPage() {
  return (
    <PageShell>
      <section className="submitPage">
        <header className="submitHeader">
          <p className="sectionLabel">Consultation request</p>
          <div>
            <h1>Indonesia Market Entry Consultation</h1>
            <p>Share the context needed to assess and prepare for a focused 60-minute advisory session.</p>
          </div>
        </header>
        <TallyForm formId="aQMqzy" title="Indonesia Market Entry Consultation Request" />
      </section>
    </PageShell>
  );
}
