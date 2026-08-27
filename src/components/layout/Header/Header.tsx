"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { Logo } from "@/components/ui/Logo/Logo";
import {
  MOBILE_NAV_LINKS,
  NAV_LINKS,
  PHONE,
  PHONE_HREF,
} from "@/constants/content";
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
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.header__link}>
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
          <svg viewBox="0 0 48 48" aria-hidden="true" fill="currentColor">
            <path d="M10 16h28a2 2 0 1 1 0 4H10a2 2 0 1 1 0-4zm0 12h28a2 2 0 1 1 0 4H10a2 2 0 1 1 0-4z" />
          </svg>
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
        <div className={styles.menu__phone}>
          <a href={PHONE_HREF} className={styles.menu__phoneLink}>
            <svg
              className={styles.menu__phoneIcon}
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="currentColor"
            >
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
            </svg>
            {PHONE}
          </a>
        </div>

        <div className={`container ${styles.menu__head}`}>
          <Logo />
          <button
            type="button"
            className={styles.menu__close}
            aria-label="Закрити меню"
            onClick={close}
          >
            <svg viewBox="0 0 48 48" aria-hidden="true" fill="none">
              <path
                d="M14 14L34 34M34 14L14 34"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
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
                    index === 0 && styles["menu__link--accent"],
                  )}
                  onClick={close}
                >
                  <span>{link.label}</span>
                  <svg
                    className={styles.menu__chevron}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    fill="none"
                  >
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
