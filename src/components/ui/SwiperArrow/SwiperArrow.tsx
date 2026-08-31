import clsx from "clsx";
import styles from "./SwiperArrow.module.scss";

type SwiperArrowProps = {
  direction: "prev" | "next";
  className?: string;
  "aria-label": string;
  onClick?: () => void;
  disabled?: boolean;
};

const CHEVRON = {
  prev: "M7.33337 13.3335L1.33337 7.3335L7.33337 1.3335",
  next: "M1.33325 13.3335L7.33325 7.3335L1.33325 1.3335",
} as const;

export function SwiperArrow({
  direction,
  className,
  onClick,
  disabled = false,
  "aria-label": ariaLabel,
}: SwiperArrowProps) {
  return (
    <button
      type="button"
      className={clsx(styles.arrow, className)}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      <svg
        className={styles.arrow__circle}
        width={30}
        height={30}
        viewBox="0 0 30 30"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M14.6667 28.0002C7.30267 28.0002 1.33333 22.0308 1.33333 14.6668C1.33333 7.30283 7.30267 1.3335 14.6667 1.3335C22.0307 1.3335 28 7.30283 28 14.6668C28 22.0308 22.0307 28.0002 14.6667 28.0002Z"
          stroke="currentColor"
          strokeWidth="2.66667"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className={styles.arrow__chevron}
        width={9}
        height={15}
        viewBox="0 0 9 15"
        fill="none"
        aria-hidden="true"
      >
        <path
          d={CHEVRON[direction]}
          stroke="currentColor"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
