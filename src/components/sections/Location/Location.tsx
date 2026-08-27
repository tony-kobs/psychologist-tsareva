import { Button } from "@/components/ui/Button/Button";
import { LOCATION, PHONE, PHONE_HREF } from "@/constants/content";
import styles from "./Location.module.scss";

export function Location() {
  return (
    <section className={`section ${styles.location}`} aria-labelledby="location-title">
      <div className={`container ${styles.location__inner}`}>
        <div className={styles.location__content}>
          <h2 id="location-title" className={styles.location__title}>
            {LOCATION.title}
          </h2>
          <p className={styles.location__text}>{LOCATION.text}</p>
          <a href={PHONE_HREF} className={styles.location__phone}>
            {PHONE}
          </a>
          <Button href="#contacts" className={styles.location__cta}>
            {LOCATION.cta}
          </Button>
        </div>

        <div className={styles.location__map}>
          <iframe
            title="Карта кабінету — Київ"
            src="https://maps.google.com/maps?q=Kyiv%20Khreshchatyk&t=&z=14&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
