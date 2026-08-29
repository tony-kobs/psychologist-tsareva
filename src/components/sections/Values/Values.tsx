"use client";

import { VALUES } from "@/constants/content";
import { Stagger } from "@/components/ui/Reveal";
import styles from "./Values.module.scss";

export function Values() {
  return (
    <section className={styles.values} aria-label="Цінності">
      <Stagger as="div" className={`container ${styles.values__grid}`} stagger={0.1}>
        {VALUES.map((item) => (
          <article key={item.title} className={styles.values__card}>
            <div className={styles.values__iconWrap}>
              <img src={item.icon} alt="" width={60} height={60} />
            </div>
            <div className={styles.values__body}>
              <h3 className={styles.values__title}>{item.title}</h3>
              <p className={styles.values__text}>{item.text}</p>
            </div>
          </article>
        ))}
      </Stagger>
    </section>
  );
}
