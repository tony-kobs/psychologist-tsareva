import clsx from "clsx";
import styles from "./Logo.module.scss";

type LogoProps = {
  className?: string;
  variant?: "default" | "light";
  compact?: boolean;
};

/**
 * ArtScript has no usable Ukrainian «і» (U+0456) glyph — browser falls back
 * to a system sans. Latin «i» (U+0069) exists in the font and matches the script.
 * Visible text uses Latin i; aria-label keeps correct Ukrainian spelling.
 */
export function Logo({ className, variant = "default", compact = false }: LogoProps) {
  return (
    <a
      href="#top"
      className={clsx(
        styles.logo,
        styles[`logo--${variant}`],
        compact && styles["logo--compact"],
        className,
      )}
      aria-label="Царьова Юлія — на початок сторінки"
    >
      <span className={styles.logo__line} aria-hidden="true">
        Царьова
      </span>
      <span className={styles.logo__line} aria-hidden="true">
        Юлiя
      </span>
    </a>
  );
}
