export const rightColumnVariants = {
  initial: { opacity: 0, x: 20, scale: 0.98 },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
      mass: 0.8,
    },
  },
  exit: {
    opacity: 0,
    x: -20,
    scale: 0.98,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 35,
      mass: 0.6,
    },
  },
}

export const contentVariants = {
  initial: { opacity: 0, y: 15 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 25,
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 35,
    },
  },
}

export const itemVariants = {
  initial: { opacity: 0, x: -15 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 25,
    },
  },
}

export const compositionItemVariants = {
  initial: { opacity: 0, y: 15 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 25,
    },
  },
}
