import { SITE, getSiteUrl } from "@/constants/site";
import { SOCIALS } from "@/constants/content";

export function JsonLd() {
  const url = getSiteUrl();

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${url}/#person`,
    name: SITE.name,
    jobTitle: "Психолог, коуч, арт-терапевт",
    description: SITE.description,
    url,
    email: SITE.email,
    telephone: SITE.phone,
    image: `${url}/images/about-photo.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressCountry: SITE.country,
    },
    sameAs: [SOCIALS.facebook, SOCIALS.instagram, SOCIALS.telegram],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${url}/#business`,
    name: SITE.name,
    description: SITE.description,
    url,
    image: `${url}/images/og.jpg`,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: SITE.city,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressCountry: SITE.country,
    },
    founder: { "@id": `${url}/#person` },
    availableLanguage: ["uk"],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    url,
    name: SITE.title,
    description: SITE.description,
    inLanguage: "uk-UA",
    publisher: { "@id": `${url}/#person` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
