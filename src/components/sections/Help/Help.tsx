import { Button } from "@/components/ui/Button/Button";
import { HELP } from "@/constants/content";
import styles from "./Help.module.scss";

export function Help() {
  return (
    <section id="help" className={`section ${styles.help}`}>
      <div className={`container ${styles.help__inner}`}>
        <div className={styles.help__checklist}>
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
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button href="#contacts" className={styles.help__cta}>
            {HELP.cta}
          </Button>
        </div>

        <div className={styles.help__directions}>
          <h2 className={styles.help__title}>{HELP.directionsTitle}</h2>
          <ul className={styles.help__cards}>
            {HELP.directions.map((dir) => (
              <li key={dir.title} className={styles.help__card}>
                <div className={styles.help__icon}>
                  <img src={dir.icon} alt="" width={36} height={36} />
                </div>
                <div>
                  <h3>{dir.title}</h3>
                  <p>{dir.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
