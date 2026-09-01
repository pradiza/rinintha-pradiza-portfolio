import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const title = "Rinintha Pradiza — Strategy, Projects & Indonesia–Japan";
  const description = "Senior cross-disciplinary strategist, producer, and Indonesia–Japan specialist.";
  return {
    metadataBase: base,
    title: { default: title, template: "%s | Rinintha Pradiza" },
    description,
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: { title, description, type: "website", url: base, images: [{ url: new URL("/og-rinintha-2026.png", base), width: 1732, height: 908, alt: "Rinintha Pradiza — Strategy, Projects, and Indonesia–Japan" }] },
    twitter: { card: "summary_large_image", title, description, images: [new URL("/og-rinintha-2026.png", base)] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body suppressHydrationWarning>{children}</body></html>;
}
