import Script from "next/script";

export function TallyForm({ formId, title }: Readonly<{ formId: string; title: string }>) {
  const embedUrl = `https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;

  return (
    <div className="tallyEmbedShell">
      <iframe
        className="tallyEmbedFrame"
        data-tally-src={embedUrl}
        src={embedUrl}
        loading="eager"
        title={title}
      />
      <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
    </div>
  );
}
