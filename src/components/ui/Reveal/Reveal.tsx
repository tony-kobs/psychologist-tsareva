"use client";

import { ElementType, ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import clsx from "clsx";

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: keyof typeof motion | ElementType;
  delay?: number;
  y?: number;
  inView?: boolean;
} & Omit<HTMLMotionProps<"div">, "children" | "className">;

function resolveMotionComponent(as: RevealProps["as"]) {
  if (typeof as === "string" && as in motion) {
    return motion[as as keyof typeof motion] as typeof motion.div;
  }
  return motion.create(as as ElementType);
}

export function Reveal({
  children,
  className,
  as = "div",
  delay = 0,
  y = 24,
  inView = true,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const Component = resolveMotionComponent(as);

  const hidden = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y };
  const visible = { opacity: 1, y: 0 };

  const transition = {
    duration: reduce ? 0 : 0.55,
    delay: reduce ? 0 : delay,
    ease: EASE,
  };

  if (inView) {
    return (
      <Component
        className={clsx(className)}
        initial={hidden}
        whileInView={visible}
        viewport={{ once: true, amount: 0.2, margin: "0px 0px -40px 0px" }}
        transition={transition}
        {...rest}
      >
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={clsx(className)}
      initial={hidden}
      animate={visible}
      transition={transition}
      {...rest}
    >
      {children}
    </Component>
  );
}
