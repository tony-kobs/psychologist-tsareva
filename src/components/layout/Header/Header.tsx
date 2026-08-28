"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { Logo } from "@/components/ui/Logo/Logo";
import { TopBar } from "@/components/layout/TopBar/TopBar";
import { MOBILE_NAV_LINKS, NAV_LINKS } from "@/constants/content";
import styles from "./Header.module.scss";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("is-menu-open", open);
    return () => document.body.classList.remove("is-menu-open");
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__inner}`}>
        <Logo />

        <nav className={styles.header__nav} aria-label="Основна навігація">
          <ul className={styles.header__list}>
            {NAV_LINKS.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={clsx(
                    styles.header__link,
                    index === 0 && styles["header__link--active"],
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={styles.burger}
          aria-label="Відкрити меню"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <img src="/images/burger-menu.svg" alt="" width={48} height={48} />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={clsx(styles.menu, open && styles["menu--open"])}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-label="Мобільне меню"
      >
        <TopBar />

        <div className={styles.menu__head}>
          <Logo />
          <button
            type="button"
            className={styles.menu__close}
            aria-label="Закрити меню"
            onClick={close}
          >
            <img src="/images/burger-menu-close.svg" alt="" width={48} height={48} />
          </button>
        </div>

        <nav className={styles.menu__nav} aria-label="Мобільна навігація">
          <ul className={styles.menu__list}>
            {MOBILE_NAV_LINKS.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={clsx(
                    styles.menu__link,
                    index === 0 && styles["menu__link--active"],
                  )}
                  onClick={close}
                >
                  <span>{link.label}</span>
                  <img
                    src="/images/menu-chevron.svg"
                    alt=""
                    width={29}
                    height={29}
                    className={styles.menu__chevron}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
