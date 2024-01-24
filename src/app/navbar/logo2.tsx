import { motion } from "framer-motion";


export const Logo2 = () => {
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
    viewBox="0 0 7 9"
    className="item "
  >
    <motion.path
     d="M1.50462 9H0.076923V0.507693H1.50462V9ZM1.56615 4.46462L4.52 0.507693H6.08923L3.11692 4.36615L6.32308 9H4.61231L1.56615 4.46462Z" 
      variants={icon}
      initial="hidden"
      animate="visible"
   
    />
 
  
  </motion.svg>
  )
}
