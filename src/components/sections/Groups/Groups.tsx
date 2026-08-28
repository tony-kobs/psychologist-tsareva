import { Button } from "@/components/ui/Button/Button";
import { GROUPS } from "@/constants/content";
import styles from "./Groups.module.scss";

export function Groups() {
  return (
    <section id="groups" className={`section ${styles.groups}`}>
      <div className="container">
        <h2 className={styles.groups__title}>{GROUPS.title}</h2>
        <ul className={styles.groups__grid}>
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
        </ul>
      </div>
    </section>
  );
}
