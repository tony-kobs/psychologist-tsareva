"use client";

import { Button } from "@/components/ui/Button/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ABOUT } from "@/constants/content";
import styles from "./About.module.scss";

export function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={`container ${styles.about__wrap}`}>
        <Reveal as="h2" className={styles.about__title}>
          {ABOUT.title}
        </Reveal>

        <div className={styles.about__inner}>
          <Reveal className={styles.about__media} y={28}>
            <img
              src="/images/about-photo.jpg"
              alt="Царьова Юлія"
              className={styles.about__image}
              width={391}
              height={402}
            />
          </Reveal>

          <Reveal className={styles.about__content} delay={0.12} y={20}>
            <h3 className={styles.about__heading}>{ABOUT.heading}</h3>

            <div className={styles.about__description}>
              {ABOUT.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className={styles.about__text}>
                  {p}
                </p>
              ))}
            </div>

            <Button href="#help" variant="secondary" className={styles.about__cta}>
              {ABOUT.cta}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
