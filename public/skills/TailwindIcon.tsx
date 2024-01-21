import { motion } from "framer-motion";


export const TailwindIcon = () => {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "#44a8b3",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "#44a8b3",
    },
  };

  return (
    <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="item w-[2rem] h-[2rem] fill-green-900"
  >
    <motion.path
    className=" fill-green-900"
    d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
      variants={icon}
      initial="hidden"
      animate="visible"
      transition={{
        default: { fill: '' , duration: 2, ease: "easeInOut" },
        fill: { fill: '' , duration: 2, ease: [1, 0, 0.8, 1] },
      }}
    />
  </motion.svg>
  )
}
