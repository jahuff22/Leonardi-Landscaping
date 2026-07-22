import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  return {
    title: "Leonardi Landscaping | Landscape Construction in Monroe, WA",
    description: "Residential and commercial landscaping, hardscaping, fencing, and irrigation serving Monroe, Washington and the surrounding area.",
    keywords: ["landscaping Monroe WA", "landscape contractor Monroe", "hardscaping Monroe WA", "retaining walls Monroe", "fence installation Monroe WA", "irrigation Monroe WA"],
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "Leonardi Landscaping | Outdoor spaces, built to belong.",
      description: "Landscape construction, hardscaping, fencing, and irrigation in Monroe, Washington.",
      type: "website",
      locale: "en_US",
      siteName: "Leonardi Landscaping",
      images: [{ url: `${origin}/og.png`, width: 1730, height: 909, alt: "Leonardi Landscaping — Outdoor spaces, built to belong." }],
    },
    twitter: { card: "summary_large_image", title: "Leonardi Landscaping", description: "Outdoor spaces, built to belong.", images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
