import { motion } from "framer-motion";


const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "#000000"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
    transition : {
      duration: 2,
      staggerChildren:2,
    }
  },
  star:{
    opacity: 0,
    transition: {
      duration: 3 ,
      repeat: Infinity,
                }
  }
};

export const SunIcon = () => (
  <motion.svg
    width="2em"
    height="2em"
    viewBox="0 0 24 24"
  >
    <motion.g fill="currentColor">
      <motion.path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <motion.path   
       d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z"    
      variants={icon}
      initial="hidden"
      animate="visible"
      transition={{
        default: { duration: 2, ease: "easeInOut" },
        fill: { duration: 2, ease: [1, 0, 0.8, 1] },
      }} 
      />
    </motion.g>
  </motion.svg>
);
