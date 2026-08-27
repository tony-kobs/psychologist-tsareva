import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Footer contact / schedule icons — Solar Linear style matching Figma mockup:
 * outline pin, phone with call arcs, unread mail with badge, outline clock.
 */

export function IconFooterPin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth="1.5">
        <path d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.669-6.537 11.531a2.75 2.75 0 0 1-2.926 0C6.553 19.812 4 14.605 4 10.143Z" />
        <circle cx="12" cy="10" r="3" />
      </g>
    </svg>
  );
}

export function IconFooterPhone(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
        <path d="M13.5 2s2.334.212 5.303 3.182C21.773 8.152 21.985 10.485 21.985 10.485" />
        <path d="M14.207 5.536s.99.282 2.475 1.767c1.485 1.485 1.768 2.475 1.768 2.475" />
        <path d="M17.676 20.963c.516-.051.964-.329 1.325-.709l1.421-1.496c.959-1.009.688-2.74-.539-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336l-.455.48s-1.083 1.14-4.038-1.971c-2.955-3.111-1.872-4.251-1.872-4.251l.287-.302c.706-.744.773-1.938.156-2.81L8.373 3.91C7.61 2.83 6.136 2.688 5.261 3.609L3.692 5.261c-.434.457-.724 1.048-.689 1.705.09 1.68.808 5.293 4.812 9.51 4.247 4.47 8.232 4.648 9.861 4.487Z" />
      </g>
    </svg>
  );
}

export function IconFooterMail(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          d="M22 10c.019.727 0 1.054 0 2 0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12s0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h3"
        />
        <path
          strokeLinecap="round"
          d="M6 8l2.159 1.799C9.996 11.33 10.914 12.095 12 12.095c1.086 0 2.004-.765 3.841-2.296"
        />
        <circle cx="19" cy="5" r="3" />
      </g>
    </svg>
  );
}

export function IconFooterClock(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l2.5 2.5" />
      </g>
    </svg>
  );
}
