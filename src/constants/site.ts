/** Site-wide SEO / brand constants. Override URL via NEXT_PUBLIC_SITE_URL. */
export const SITE = {
  name: "Царьова Юлія",
  title: "Царьова Юлія — психолог, коуч, арт-терапія у Харкові",
  titleTemplate: "%s | Царьова Юлія",
  description:
    "Психолог Царьова Юлія допомагає повертати себе собі. Індивідуальні консультації, коучинг, арт-терапія та авторська гра «Віра в себе» у Харкові та онлайн.",
  locale: "uk_UA",
  language: "uk",
  city: "Харків",
  country: "UA",
  phone: "+380665185120",
  email: "tsareva@gmail.com",
  keywords: [
    "психолог Харків",
    "Царьова Юлія",
    "коуч",
    "арт-терапія",
    "психологічна консультація",
    "онлайн психолог",
    "гра Віра в себе",
  ],
} as const;

/** Canonical public site URL for metadata, sitemap, JSON-LD. */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;

  // Vercel production domain — NOT the per-deployment preview URL (VERCEL_URL),
  // which may be SSO-protected and breaks og:image in messengers.
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.replace(/\/$/, "");
  if (production) {
    return production.startsWith("http") ? production : `https://${production}`;
  }

  const vercel = process.env.VERCEL_URL?.replace(/\/$/, "");
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}
