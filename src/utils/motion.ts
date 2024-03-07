// import { Variant } from 'framer-motion'

type Direction = 'left' | 'right' | 'down' | 'up'

// export const navVariants = {
//   hidden: {
//     opacity: 0,
//     y: -50,
//     transition: {
//       type: 'spring',
//       stiffness: 300,
//       damping: 140,
//     },
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: 'spring',
//       stiffness: 80,
//       delay: 1,
//     },
//   },
// }

// export const slideIn = (
//   direction: Direction,
//   type: Variant,
//   delay: Variant,
//   duration: Variant
// ) => ({
//   hidden: {
//     x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
//     y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
//   },
//   show: {
//     x: 0,
//     y: 0,
//     transition: {
//       type,
//       delay,
//       duration,
//       ease: 'easeOut',
//     },
//   },
// })

// export const staggerContainer = (
//   staggerChildren: Variant,
//   delayChildren: Variant
// ) => ({
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren,
//       delayChildren,
//     },
//   },
// })

// export const textVariant = (delay: number) => ({
//   hidden: {
//     y: 50,
//     opacity: 0,
//   },
//   show: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: 'spring',
//       duration: 1.25,
//       delay,
//     },
//   },
// })

// export const textContainer = {
//   hidden: {
//     opacity: 0,
//   },
//   show: (i = 1) => ({
//     opacity: 1,
//     transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
//   }),
// }

// export const textVariant2 = {
//   hidden: {
//     opacity: 0,
//     y: 20,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: 'tween',
//       ease: 'easeIn',
//     },
//   },
// }

// export const fadeIn = (
//   direction: Direction,
//   type: Variant,
//   delay: number,
//   duration: number
// ) => ({
//   hidden: {
//     x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
//     y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
//     opacity: 0,
//   },
//   show: {
//     x: 0,
//     y: 0,
//     opacity: 1,
//     transition: {
//       type,
//       delay,
//       duration,
//       ease: 'easeOut',
//     },
//   },
// })

// export const planetVariants = (direction: 'left' | 'right') => ({
//   hidden: {
//     x: direction === 'left' ? '-100%' : '100%',
//     rotate: 120,
//   },
//   show: {
//     x: 0,
//     rotate: 0,
//     transition: {
//       type: 'spring',
//       duration: 1.8,
//       delay: 0.5,
//     },
//   },
// })

// export const zoomIn = (delay: number, duration: number) => ({
//   hidden: {
//     scale: 0,
//     opacity: 0,
//   },
//   show: {
//     scale: 1,
//     opacity: 1,
//     transition: {
//       type: 'tween',
//       delay,
//       duration,
//       ease: 'easeOut',
//     },
//   },
// })

// export const footerVariants = {
//   hidden: {
//     opacity: 0,
//     y: 50,
//     transition: {
//       type: 'spring',
//       stiffness: 300,
//       damping: 140,
//     },
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: 'spring',
//       stiffness: 80,
//       delay: 0.5,
//     },
//   },
// }

export const fadeIn = (direction: Direction, delay: number) => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -20 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -20 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  }
}

export const slideIn = (
  direction: Direction,
  type: string,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
})
