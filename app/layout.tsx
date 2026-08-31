import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const title = "Rinintha Pradiza — Strategist, Producer & Indonesia–Japan Specialist";
  const description = "Senior cross-disciplinary strategy, research, project leadership, and Indonesia–Japan work across brands, entertainment, culture, and real-world delivery.";
  return {
    metadataBase: base,
    title: { default: title, template: "%s | Rinintha Pradiza" },
    description,
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: { title, description, type: "website", url: base, images: [{ url: new URL("/og.png", base), width: 1728, height: 905, alt: "Rinintha Pradiza — Strategist, Producer and Indonesia–Japan Specialist" }] },
    twitter: { card: "summary_large_image", title, description, images: [new URL("/og.png", base)] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
