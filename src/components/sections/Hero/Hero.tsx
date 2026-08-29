"use client";

import { Button } from "@/components/ui/Button/Button";
import { SocialIcons } from "@/components/ui/SocialIcons/SocialIcons";
import { Reveal } from "@/components/ui/Reveal";
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
            media="(min-width: 768px) and (max-width: 1439px)"
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
        <div className={styles.hero__gradient} />
      </div>

      <div className={styles.hero__leaf} aria-hidden="true" />

      <div className={`container ${styles.hero__content}`}>
        <Reveal as="ul" className={styles.hero__tags} inView={false} delay={0.05} y={16}>
          {HERO.tags.map((tag) => (
            <li key={tag} className={styles.hero__tag}>
              {tag}
            </li>
          ))}
        </Reveal>

        <div className={styles.hero__bottom}>
          <div className={styles.hero__copy}>
            <Reveal as="h1" id="hero-title" className={styles.hero__title} inView={false} delay={0.15} y={20}>
              {HERO.title}
            </Reveal>
            <Reveal as="p" className={styles.hero__subtitle} inView={false} delay={0.28} y={16}>
              {HERO.subtitle.split("\n").map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </Reveal>
            <Reveal inView={false} delay={0.4} y={14}>
              <Button href="#contacts" className={styles.hero__cta}>
                <span className={styles.hero__ctaFull}>{HERO.cta}</span>
                <span className={styles.hero__ctaShort}>{HERO.ctaShort}</span>
              </Button>
            </Reveal>
          </div>

          <Reveal inView={false} delay={0.52} y={12}>
            <SocialIcons className={styles.hero__socials} variant="brand" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
