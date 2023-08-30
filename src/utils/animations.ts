// While in view
export const animate = {
  initial: 'hidden',
  animate: 'show',
}

// While in view
export const whileInView = {
  initial: 'hidden',
  whileInView: 'show',
  viewport: { once: true, amount: 0.3 },
}

// Transitions
export const transitions = {
  default: {
    duration: 0.5,
    ease: 'easeInOut',
  },
  slow: {
    duration: 1,
    ease: 'easeInOut',
  },
  staggerChildren: {
    duration: 0.5,
    ease: 'easeInOut',
    delayChildren: 0.2,
    staggerChildren: 0.2,
  },
  staggerChildrenQuick: {
    duration: 0.5,
    ease: 'easeInOut',
    staggerChildren: 0.2,
  },
}

// Variants
export const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transitionEnd: { y: 0, x: 0 },
    },
  },
  fadeInDownRotate: {
    hidden: { opacity: 0, y: -10, rotate: 3 },
    show: { opacity: 1, y: 0, rotate: 0 },
  },
  staggerChildren: {
    show: {
      transition: transitions.staggerChildren,
    },
  },
  staggerChildrenQuick: {
    show: {
      transition: transitions.staggerChildrenQuick,
    },
  },
}
