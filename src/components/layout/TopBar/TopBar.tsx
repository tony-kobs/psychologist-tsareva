import { SocialIcons } from "@/components/ui/SocialIcons/SocialIcons";
import { PHONE, PHONE_HREF } from "@/constants/content";
import styles from "./TopBar.module.scss";

export function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={`container ${styles.topBar__inner}`}>
        <a href={PHONE_HREF} className={styles.topBar__phone}>
          {PHONE}
        </a>
        <SocialIcons
          className={styles.topBar__socials}
          variant="topbar"
          items={["facebook", "instagram"]}
        />
      </div>
    </div>
  );
}
