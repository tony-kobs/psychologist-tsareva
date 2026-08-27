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

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}
