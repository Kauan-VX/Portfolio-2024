import { motion } from "framer-motion";


export const Logo4 = () => {
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
    d="M1.47385 0.501539V5.04308C1.47385 5.42872 1.54974 5.70359 1.70154 5.86769C1.85744 6.03179 2.09128 6.11385 2.40308 6.11385C2.69846 6.11385 2.98359 6.02564 3.25846 5.84923C3.53333 5.67282 3.75077 5.45744 3.91077 5.20308V0.501539H5.28923V7H4.10154L4.01538 6.16923C3.77333 6.49333 3.46769 6.74154 3.09846 6.91385C2.72923 7.08205 2.35179 7.16615 1.96615 7.16615C1.33436 7.16615 0.864615 6.99385 0.556923 6.64923C0.249231 6.30051 0.0953846 5.82256 0.0953846 5.21538V0.501539H1.47385Z"
      variants={icon}
      initial="hidden"
      animate="visible"
   
    />
       
  </motion.svg>
  )
}
