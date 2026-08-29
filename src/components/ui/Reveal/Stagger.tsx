"use client";

import {
  Children,
  ElementType,
  ReactNode,
  isValidElement,
  type ReactElement,
} from "react";
import { motion, useReducedMotion } from "motion/react";
import clsx from "clsx";

const EASE = [0.22, 1, 0.36, 1] as const;

type StaggerProps = {
  children: ReactNode;
  className?: string;
  as?: keyof typeof motion | ElementType;
  stagger?: number;
  y?: number;
};

function resolveMotionComponent(as: StaggerProps["as"]) {
  if (typeof as === "string" && as in motion) {
    return motion[as as keyof typeof motion] as typeof motion.div;
  }
  return motion.create(as as ElementType);
}

export function Stagger({
  children,
  className,
  as = "div",
  stagger = 0.08,
  y = 20,
}: StaggerProps) {
  const reduce = useReducedMotion();
  const Container = resolveMotionComponent(as);

  const itemVariants = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.5, ease: EASE },
    },
  };

  return (
    <Container
      className={clsx(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -32px 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduce ? 0 : stagger,
            delayChildren: reduce ? 0 : 0.06,
          },
        },
      }}
    >
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return child;

        const el = child as ReactElement<Record<string, unknown>>;
        const childType = el.type;
        const MotionChild =
          typeof childType === "string" && childType in motion
            ? (motion[childType as keyof typeof motion] as typeof motion.div)
            : motion.create(childType as ElementType);

        return (
          <MotionChild key={el.key} {...el.props} variants={itemVariants} />
        );
      })}
    </Container>
  );
}
