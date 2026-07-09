import { motion, useReducedMotion } from "framer-motion";

const presets = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  up: {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0 },
  },
  image: {
    hidden: { opacity: 0, y: 18, clipPath: "inset(0 0 10% 0)" },
    visible: { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" },
  },
};

export function ReferenceReveal({
  as = "div",
  children,
  className = "",
  delay = 0,
  duration = 0.78,
  preset = "up",
  amount = 0.18,
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();
  const Element = as;
  const MotionElement = motion[as] || motion.div;

  if (prefersReducedMotion) {
    return (
      <Element className={className} {...props}>
        {children}
      </Element>
    );
  }

  return (
    <MotionElement
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={presets[preset] || presets.up}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </MotionElement>
  );
}
