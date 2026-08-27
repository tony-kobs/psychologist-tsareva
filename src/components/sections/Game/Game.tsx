import { Button } from "@/components/ui/Button/Button";
import { GAME } from "@/constants/content";
import styles from "./Game.module.scss";

export function Game() {
  return (
    <section id="game" className={`section ${styles.game}`}>
      <div className={`container ${styles.game__inner}`}>
        <div className={styles.game__media}>
          <img
            src="/images/game-photo.png"
            alt="Авторська психологічна гра «Віра в себе»"
            width={560}
            height={420}
            loading="lazy"
          />
        </div>
        <div className={styles.game__content}>
          <h2 className={styles.game__title}>
            {GAME.title}
            <span className={styles.game__subtitle}>{GAME.subtitle}</span>
          </h2>
          {GAME.paragraphs.map((p) => (
            <p key={p.slice(0, 28)} className={styles.game__text}>
              {p}
            </p>
          ))}
          <Button href="#contacts" variant="secondary" className={styles.game__cta}>
            {GAME.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
