import { motion } from "framer-motion";


export const Logo6 = () => {
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
      //   default: { duration: 2, ease: "easeInOut" ,  repeat: Infinity , repeatDelay: 5},
      //   fill: { duration: 2, ease: [1, 0, 0.8, 1] ,  repeat: Infinity , repeatDelay: 5},
      // }
    },
  };

  return (
    <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 6 7"
    className="item "
  >
    <motion.path
    d="M0.0953846 7V0.501539H1.28308L1.38769 1.34462C1.65846 1.01641 1.97846 0.766154 2.34769 0.593846C2.71692 0.417436 3.09641 0.329231 3.48615 0.329231C4.09333 0.329231 4.54667 0.499487 4.84615 0.84C5.14974 1.18051 5.30154 1.65436 5.30154 2.26154V7H3.92308V2.94462C3.92308 2.38256 3.86564 1.98256 3.75077 1.74462C3.64 1.50256 3.38769 1.38154 2.99385 1.38154C2.67795 1.38154 2.38872 1.48 2.12615 1.67692C1.86769 1.86974 1.65026 2.08923 1.47385 2.33538V7H0.0953846Z"
      variants={icon}
      initial="hidden"
      animate="visible"
   
    />
    
  </motion.svg>
  )
}
