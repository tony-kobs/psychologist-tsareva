import { Logo } from "@/components/ui/Logo/Logo";
import { SocialIcons } from "@/components/ui/SocialIcons/SocialIcons";
import {
  EMAIL,
  FOOTER,
  FOOTER_NAV,
  LOCATION,
  PHONE,
  PHONE_HREF,
} from "@/constants/content";
import {
  IconFooterClock,
  IconFooterMail,
  IconFooterPhone,
  IconFooterPin,
} from "./FooterIcons";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__grid}`}>
        <div className={`${styles.footer__col} ${styles["footer__col--contacts"]}`}>
          <h3 className={styles.footer__title}>Контакти</h3>

          <ul className={styles.footer__contacts}>
            <li>
              <p className={styles.footer__row}>
                <IconFooterPin className={styles.footer__icon} />
                <span>{LOCATION.address}</span>
              </p>
            </li>
            <li>
              <a href={PHONE_HREF} className={styles.footer__row}>
                <IconFooterPhone className={styles.footer__icon} />
                <span>{PHONE}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className={styles.footer__row}>
                <IconFooterMail className={styles.footer__icon} />
                <span>{EMAIL}</span>
              </a>
            </li>
          </ul>

          <SocialIcons
            className={styles.footer__socials}
            variant="light"
            items={["viber", "telegram", "facebook", "instagram"]}
          />
        </div>

        <div className={`${styles.footer__col} ${styles["footer__col--nav"]}`}>
          <h3 className={styles.footer__title}>Категорії</h3>
          <ul className={styles.footer__nav}>
            {FOOTER_NAV.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.footer__col} ${styles["footer__col--schedule"]}`}>
          <h3 className={styles.footer__title}>Графік роботи</h3>
          <div className={styles.footer__schedule}>
            <IconFooterClock className={styles.footer__clock} />
            <ul className={styles.footer__hours}>
              {FOOTER.schedule.map((item) => (
                <li key={item.days}>
                  {item.days}: {item.hours}
                </li>
              ))}
            </ul>
          </div>
          <Logo variant="light" className={styles.footer__logo} />
        </div>
      </div>

      <div className={`container ${styles.footer__bottom}`}>
        <p>{FOOTER.tagline}</p>
      </div>
    </footer>
  );
}
