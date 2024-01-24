import { motion } from "framer-motion";


export const Logo8= () => {
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
     d="M0.636923 0.603077L5.39385 3.54462V4.73231L0.673846 7.67385L-0.003077 6.70154L4.21231 4.14154L-0.003077 1.61846L0.636923 0.603077Z"
      variants={icon}
      initial="hidden"
      animate="visible"
   
    />
      
  </motion.svg>
  )
}
