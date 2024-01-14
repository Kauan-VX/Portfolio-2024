import { motion } from "framer-motion";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 1)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "#000000",
    transition : {
      duration: 2,
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

export const MoonIcon = () => (
  <motion.svg
    aria-hidden="true"
    width="1.5rem"
    height="1.5em"
    viewBox="0 0 16 16"
  >
    <motion.path
      d="M8,16c1.257,0,2.442-0.298,3.5-0.815C8.838,13.886,7,11.161,7,8s1.838-5.886,4.5-7.185C10.442,0.298,9.257,0,8,0  C3.582,0,0,3.582,0,8S3.582,16,8,16z"

    />
    <motion.path
      d="M14,3c0,1.105-0.895,2-2,2c1.105,0,2,0.895,2,2c0-1.105,0.895-2,2-2C14.895,5,14,4.105,14,3z"
      variants={icon}
      initial="hidden"
      animate="visible"
      transition={{
        default: { duration: 2, ease: "easeInOut" },
        fill: { duration: 2, ease: [1, 0, 0.8, 1] },
      }}
    />
    <motion.path
      d="M10,6c0,1.105-0.895,2-2,2c1.105,0,2,0.895,2,2c0-1.105,0.895-2,2-2C10.895,8,10,7.105,10,6z"
   variants={icon}
      initial="hidden"
      animate="visible"
      transition={{
        default: { duration: 2, ease: "easeInOut" },
        fill: { duration: 2, ease: [1, 0, 0.8, 1] },
      }}
    />
    <motion.path
      d="M13,13c0-1.105,0.895-2,2-2c-1.105,0-2-0.895-2-2c0,1.105-0.895,2-2,2C12.105,11,13,11.895,13,13z"
   variants={icon}
      initial="hidden"
      animate="visible"
      transition={{
        default: { duration: 2, ease: "easeInOut" },
        fill: { duration: 2, ease: [1, 0, 0.8, 1] },
      }}
    />
  </motion.svg>
);
