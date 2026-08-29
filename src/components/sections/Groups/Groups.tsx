"use client";

import { Button } from "@/components/ui/Button/Button";
import { Reveal, Stagger } from "@/components/ui/Reveal";
import { GROUPS } from "@/constants/content";
import styles from "./Groups.module.scss";

export function Groups() {
  return (
    <section id="groups" className={`section ${styles.groups}`}>
      <div className="container">
        <Reveal as="h2" className={styles.groups__title}>
          {GROUPS.title}
        </Reveal>
        <Stagger as="ul" className={styles.groups__grid} stagger={0.1}>
          {GROUPS.items.map((item) => (
            <li key={item.title} className={styles.groups__card}>
              <div className={styles.groups__icon}>
                <img src={item.icon} alt="" width={120} height={120} />
              </div>
              <h3 className={styles.groups__cardTitle}>{item.title}</h3>
              <p className={styles.groups__cardText}>{item.text}</p>
              <Button href={item.href} className={styles.groups__btn}>
                {item.cta}
              </Button>
            </li>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
