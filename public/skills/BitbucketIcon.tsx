import { motion } from "framer-motion";


export const BitbucketIcon = () => {
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
    },
  };

  return (
    <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    className="item w-[2rem] h-[2rem]"
  >
    <motion.path
    d="M1.403 2.15A.43.43 0 011.73 2l12.54.002a.43.43 0 01.424.496l-1.81 11.135a.43.43 0 01-.425.36H3.693a.585.585 0 01-.568-.478l-1.82-11.02a.425.425 0 01.098-.345zm5.203 7.814H9.41l.677-3.93H5.859l.747 3.93z"
      variants={icon}
      initial="hidden"
      animate="visible"
      transition={{
        default: { duration: 2, ease: "easeInOut" },
        fill: { duration: 2, ease: [1, 0, 0.8, 1] },
      }}
    />
  </motion.svg>
  )
}
