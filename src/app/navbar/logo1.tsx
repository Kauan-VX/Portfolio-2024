import { motion } from "framer-motion";


export const Logo1 = () => {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
      // transition: {
      //   default: { duration: 2, ease: "easeInOut" ,  repeat: Infinity , repeatDelay: 15},
      //   fill: { duration: 2, ease: [1, 0, 0.8, 1] ,  repeat: Infinity , repeatDelay: 15},
      // }
    },
  };

  return (
    <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 6 8"
    className="item "
  >
    <motion.path
    d="M4.76 0.603077L5.39385 1.6L1.18462 4.14154L5.39385 6.68308L4.71692 7.67385L-0.003077 4.73231V3.55077L4.76 0.603077Z"
      variants={icon}
      initial="hidden"
      animate="visible"
   
    />

  </motion.svg>
  )
}
