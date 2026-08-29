import clsx from "clsx";
import type { ComponentType, SVGProps } from "react";
import { SOCIALS } from "@/constants/content";
import {
  IconFacebookBrand,
  IconFacebookLight,
  IconFacebookTopbar,
  IconInstagramBrand,
  IconInstagramTopbar,
  IconTelegramBrand,
  IconTelegramLight,
  IconViberBrand,
  IconViberLight,
} from "./icons";
import styles from "./SocialIcons.module.scss";

type SocialKey = "facebook" | "instagram" | "viber" | "telegram";

type SocialIconsProps = {
  className?: string;
  variant?: "brand" | "mono" | "light" | "topbar";
  items?: SocialKey[];
};

type IconCmp = ComponentType<SVGProps<SVGSVGElement>>;

const LABELS = {
  facebook: "Facebook",
  instagram: "Instagram",
  viber: "Viber",
  telegram: "Telegram",
} as const;

const BRAND: Record<SocialKey, IconCmp> = {
  facebook: IconFacebookBrand,
  instagram: IconInstagramBrand,
  viber: IconViberBrand,
  telegram: IconTelegramBrand,
};

const LIGHT: Record<SocialKey, IconCmp> = {
  facebook: IconFacebookLight,
  instagram: IconInstagramTopbar,
  viber: IconViberLight,
  telegram: IconTelegramLight,
};

const TOPBAR: Partial<Record<SocialKey, IconCmp>> = {
  facebook: IconFacebookTopbar,
  instagram: IconInstagramTopbar,
};

function pickIcon(variant: SocialIconsProps["variant"], key: SocialKey): IconCmp {
  if (variant === "light") return LIGHT[key];
  if (variant === "topbar") return TOPBAR[key] ?? LIGHT[key];
  return BRAND[key];
}

export function SocialIcons({
  className,
  variant = "brand",
  items = ["facebook", "instagram", "viber", "telegram"],
}: SocialIconsProps) {
  return (
    <ul className={clsx(styles.socials, styles[`socials--${variant}`], className)}>
      {items.map((key) => {
        const Icon = pickIcon(variant, key);
        return (
          <li key={key}>
            <a
              href={SOCIALS[key]}
              className={clsx(styles.socials__link, styles[`socials__link--${key}`])}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={LABELS[key]}
            >
              <Icon className={styles.socials__icon} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
