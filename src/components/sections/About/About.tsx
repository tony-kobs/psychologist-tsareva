import { Button } from "@/components/ui/Button/Button";
import { ABOUT } from "@/constants/content";
import styles from "./About.module.scss";

export function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={`container ${styles.about__wrap}`}>
        <h2 className={styles.about__title}>{ABOUT.title}</h2>

        <div className={styles.about__inner}>
          <div className={styles.about__media}>
            <img
              src="/images/about-photo.jpg"
              alt="Царьова Юлія"
              className={styles.about__image}
              width={391}
              height={402}
            />
          </div>

          <div className={styles.about__content}>
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
          </div>
        </div>
      </div>
    </section>
  );
}
