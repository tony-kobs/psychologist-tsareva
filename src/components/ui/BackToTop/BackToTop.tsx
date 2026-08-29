"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./BackToTop.module.scss";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      className={clsx(styles.backToTop, visible && styles["backToTop--visible"])}
      aria-label="Повернутися вгору"
    >
      <svg
        width={80}
        height={80}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M40.0001 73.3332C58.4096 73.3332 73.3334 58.4093 73.3334 39.9998C73.3334 21.5903 58.4096 6.6665 40.0001 6.6665C21.5906 6.6665 6.66675 21.5903 6.66675 39.9998C6.66675 58.4093 21.5906 73.3332 40.0001 73.3332Z"
          fill="#C9785E"
          stroke="#FBF4EF"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M55 45L40 30L25 45"
          stroke="#FEFBF7"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
