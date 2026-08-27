import { Button } from "@/components/ui/Button/Button";
import { SocialIcons } from "@/components/ui/SocialIcons/SocialIcons";
import { HERO } from "@/constants/content";
import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.hero__media} aria-hidden="true">
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet="/images/hero-photo-desktop-1x.png 1x, /images/hero-photo-desktop-2x.png 2x"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/hero-photo-tablet-1x.png 1x, /images/hero-photo-tablet-2x.png 2x"
          />
          <img
            src="/images/hero-photo-mobile-1x.png"
            srcSet="/images/hero-photo-mobile-1x.png 1x, /images/hero-photo-mobile-2x.png 2x"
            alt=""
            className={styles.hero__image}
            width={393}
            height={772}
            fetchPriority="high"
          />
        </picture>
        <img
          src="/images/gradient-hero.svg"
          alt=""
          className={styles.hero__overlay}
        />
        <div className={styles.hero__leaf} />
      </div>

      <div className={`container ${styles.hero__content}`}>
        <ul className={styles.hero__tags}>
          {HERO.tags.map((tag) => (
            <li key={tag} className={styles.hero__tag}>
              {tag}
            </li>
          ))}
        </ul>

        <div className={styles.hero__bottom}>
          <div className={styles.hero__copy}>
            <h1 id="hero-title" className={styles.hero__title}>
              {HERO.title}
            </h1>
            <p className={styles.hero__subtitle}>
              {HERO.subtitle.split("\n").map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <Button href="#contacts" className={styles.hero__cta}>
              <span className={styles.hero__ctaFull}>{HERO.cta}</span>
              <span className={styles.hero__ctaShort}>{HERO.ctaShort}</span>
            </Button>
          </div>

          <SocialIcons className={styles.hero__socials} variant="brand" />
        </div>
      </div>
    </section>
  );
}
