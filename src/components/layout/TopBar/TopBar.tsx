import { PHONE, PHONE_HREF, SOCIALS } from "@/constants/content";
import styles from "./TopBar.module.scss";

const TOPBAR_SOCIALS = [
  { key: "facebook", href: SOCIALS.facebook, icon: "/images/social/topbar-facebook.svg", label: "Facebook" },
  { key: "instagram", href: SOCIALS.instagram, icon: "/images/social/topbar-instagram.svg", label: "Instagram" },
] as const;

export function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={`container ${styles.topBar__inner}`}>
        <a href={PHONE_HREF} className={styles.topBar__phone}>
          {PHONE}
        </a>
        <ul className={styles.topBar__socials} aria-label="Соціальні мережі">
          {TOPBAR_SOCIALS.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                className={styles.topBar__socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
              >
                <img src={item.icon} alt="" width={32} height={32} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
