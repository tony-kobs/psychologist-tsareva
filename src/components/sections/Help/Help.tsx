"use client";

import { Button } from "@/components/ui/Button/Button";
import { Reveal, Stagger } from "@/components/ui/Reveal";
import { HELP } from "@/constants/content";
import styles from "./Help.module.scss";

export function Help() {
  return (
    <section id="help" className={`section ${styles.help}`}>
      <div className={`container ${styles.help__inner}`}>
        <Reveal className={styles.help__checklist} y={24}>
          <img
            src="/images/help-background.png"
            alt=""
            className={styles.help__decor}
            width={277}
            height={587}
            aria-hidden="true"
          />
          <h2 className={styles.help__title}>{HELP.title}</h2>
          <ul className={styles.help__list}>
            {HELP.items.map((item) => (
              <li key={item} className={styles.help__item}>
                <img
                  src="/images/check.svg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.help__check}
                />
                <span className={styles.help__itemText}>{item}</span>
              </li>
            ))}
          </ul>
          <Button href="#contacts" className={styles.help__cta}>
            {HELP.cta}
          </Button>
        </Reveal>

        <div className={styles.help__directions}>
          <Reveal as="h2" className={styles.help__title} delay={0.08}>
            {HELP.directionsTitle}
          </Reveal>
          <Stagger as="ul" className={styles.help__cards} stagger={0.1}>
            {HELP.directions.map((dir) => (
              <li key={dir.title} className={styles.help__card}>
                <div className={styles.help__icon}>
                  <img src={dir.icon} alt="" width={60} height={60} />
                </div>
                <div className={styles.help__cardBody}>
                  <h3 className={styles.help__cardTitle}>{dir.title}</h3>
                  <p className={styles.help__cardText}>{dir.text}</p>
                </div>
              </li>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
