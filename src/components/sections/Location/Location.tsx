"use client";

import { Button } from "@/components/ui/Button/Button";
import { Reveal } from "@/components/ui/Reveal";
import { LOCATION, PHONE, PHONE_HREF } from "@/constants/content";
import styles from "./Location.module.scss";

export function Location() {
  return (
    <section
      className={`section ${styles.location}`}
      aria-labelledby="location-title"
    >
      <img
        src="/images/decor-map-leaf.svg"
        alt=""
        className={styles.location__decor}
        aria-hidden="true"
      />

      <div className={`container ${styles.location__inner}`}>
        <Reveal className={styles.location__content} y={20}>
          <h2 id="location-title" className={styles.location__title}>
            {LOCATION.title}
          </h2>
          <p className={styles.location__text}>{LOCATION.text}</p>
          <a href={PHONE_HREF} className={styles.location__phone}>
            {PHONE}
          </a>
          <Button href="#contacts" className={styles.location__cta}>
            <span className={styles.location__ctaFull}>{LOCATION.cta}</span>
            <span className={styles.location__ctaShort}>{LOCATION.ctaShort}</span>
          </Button>
        </Reveal>

        <Reveal className={styles.location__map} delay={0.12} y={24}>
          <iframe
            title={`Карта кабінету — ${LOCATION.address}`}
            src="https://maps.google.com/maps?q=Kharkiv&t=&z=14&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  );
}
