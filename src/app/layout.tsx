import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE, getSiteUrl } from "@/constants/site";
import "./globals.scss";

const lato = Lato({
  // Lato includes Cyrillic on Google Fonts; next/font types omit it
  subsets: ["latin", "latin-ext", "cyrillic"] as ("latin" | "latin-ext")[],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#C9785E" },
    { media: "(prefers-color-scheme: dark)", color: "#C9785E" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE.title,
    template: SITE.titleTemplate,
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: siteUrl }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "health",
  alternates: {
    canonical: "/",
    languages: {
      "uk-UA": "/",
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: siteUrl,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — психолог, коуч, арт-терапія. м. ${SITE.city}`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/images/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  other: {
    "geo.region": "UA-63",
    "geo.placename": SITE.city,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={SITE.language}>
      <body className={lato.variable}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
