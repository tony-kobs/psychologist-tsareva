import { Button } from "@/components/ui/Button/Button";
import { GAME } from "@/constants/content";
import styles from "./Game.module.scss";

export function Game() {
  return (
    <section id="game" className={`section ${styles.game}`}>
      <img
        src="/images/game-background.png"
        alt=""
        className={styles.game__decor}
        aria-hidden="true"
      />
      <div className={`container ${styles.game__inner}`}>
        <div className={styles.game__media}>
          <img
            src="/images/game-photo.jpg"
            srcSet="/images/game-photo.jpg 1x, /images/game-photo@2x.jpg 2x"
            alt="Авторська психологічна гра «Віра в себе»"
            width={299}
            height={431}
            loading="lazy"
          />
        </div>
        <div className={styles.game__content}>
          <h2 className={styles.game__title}>{GAME.title}</h2>
          <p className={styles.game__subtitle}>{GAME.subtitle}</p>
          <div className={styles.game__texts}>
            {GAME.paragraphs.map((p) => (
              <p key={p.slice(0, 28)} className={styles.game__text}>
                {p}
              </p>
            ))}
          </div>
          <Button href="#contacts" variant="secondary" className={styles.game__cta}>
            {GAME.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
