import { motion } from "framer-motion";


export const Logo7= () => {
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
    viewBox="0 0 7 12"
    className="item "
  >
    <motion.path
    d="M1.63077 11.3108L0.535385 10.8185L5.76615 0.0061543L6.84923 0.516923L1.63077 11.3108Z"
      variants={icon}
      initial="hidden"
      animate="visible"
   
    />
      
  </motion.svg>
  )
}
