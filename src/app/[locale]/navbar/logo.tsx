"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export const Logo = () => {
  const { theme } = useTheme();

  const icon = {
    hidden: {
      opacity: 1,
      pathLength: 0,
      fill: theme === "dark" ? "rgba(255, 255, 255, 0)" : "rgba(0, 0, 0, 0)",
      transition: {
        default: {
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 15,
        },
        fill: {
          duration: 2,
          ease: [1, 0, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 15,
        },
      },
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: theme === "dark" ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)",
      transition: {
        default: {
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 15,
        },
        fill: {
          duration: 2,
          ease: [1, 0, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 15,
        },
      },
    },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 55 12"
      className="item logo smMax:size-12 p-2 rounded-md w-full max-w-40"
    >
      {/* / */}
      <motion.path
        //  className="dark:fill-dark-fill fill-light-fill transition ease-in-out duration-100"
        d="M43.6338 11.3046L42.5385 10.8123L47.7692 0L48.8523 0.510769L43.6338 11.3046Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      {/* K */}
      <motion.path
        // className="dark:fill-dark-fill fill-light-fill transition ease-in-out duration-100"

        d="M7.08 9.99385H8.50769V1.50154H7.08V9.99385Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      {/* K */}
      <motion.path
        //  className="dark:fill-dark-fill fill-light-fill transition ease-in-out duration-100"

        d="M11.5231 1.50154L8.56923 5.45846L11.6154 9.99385H13.3262L10.12 5.36L13.0923 1.50154H11.5231Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      {/* < */}
      <motion.path
        className="fill-purple"
        // className="dark:fill-dark-fill fill-light-fill transition ease-in-out duration-100"

        d="M5.39692 3.59385L4.76308 2.59692L0 5.54462V6.72615L4.72 9.66769L5.39692 8.67692L1.18769 6.13538L5.39692 3.59385Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      {/* a2 */}
      <motion.path
        // className="dark:fill-dark-fill fill-light-fill transition ease-in-out duration-100"

        d="M34.0646 8.4C34.0646 8.65846 34.1036 8.84513 34.1815 8.96C34.2595 9.07487 34.3846 9.16102 34.5569 9.21846L34.2492 10.1538C33.9292 10.1169 33.6523 10.0287 33.4185 9.88923C33.1887 9.74974 33.0164 9.53846 32.9015 9.25538C32.6636 9.55897 32.3621 9.78667 31.9969 9.93846C31.6318 10.0862 31.2421 10.16 30.8277 10.16C30.1672 10.16 29.6462 9.97538 29.2646 9.60615C28.8831 9.23282 28.6923 8.74462 28.6923 8.14154C28.6923 7.45641 28.959 6.92923 29.4923 6.56C30.0256 6.19077 30.7887 6.00615 31.7815 6.00615H32.7108V5.58154C32.7108 5.15897 32.5836 4.85744 32.3292 4.67692C32.0749 4.49231 31.72 4.4 31.2646 4.4C31.0513 4.4 30.7928 4.42872 30.4892 4.48615C30.1856 4.53949 29.8677 4.62359 29.5354 4.73846L29.1969 3.76615C29.6031 3.61436 30.001 3.50359 30.3908 3.43385C30.7805 3.36 31.1415 3.32308 31.4738 3.32308C32.3436 3.32308 32.9918 3.5159 33.4185 3.90154C33.8492 4.28718 34.0646 4.82051 34.0646 5.50154V8.4ZM31.2462 9.14461C31.5251 9.14461 31.7979 9.07077 32.0646 8.92308C32.3313 8.77538 32.5467 8.5682 32.7108 8.30154V6.86769H31.9477C31.2995 6.86769 30.8359 6.97641 30.5569 7.19385C30.2779 7.40718 30.1385 7.70256 30.1385 8.08C30.1385 8.78974 30.5077 9.14461 31.2462 9.14461Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      {/* U */}
      <motion.path
        // className="dark:fill-dark-fill fill-light-fill transition ease-in-out duration-100"

        d="M23.4769 8.03692V3.49538H22.0985V8.20923C22.0985 8.81641 22.2523 9.29436 22.56 9.64308C22.8677 9.98769 23.3374 10.16 23.9692 10.16C24.3549 10.16 24.7323 10.0759 25.1015 9.90769C25.4708 9.73538 25.7764 9.48718 26.0185 9.16308L26.1046 9.99385H27.2923V3.49538H25.9138V8.19692C25.7538 8.45128 25.5364 8.66667 25.2615 8.84308C24.9867 9.01949 24.7015 9.10769 24.4062 9.10769C24.0944 9.10769 23.8605 9.02564 23.7046 8.86154C23.5528 8.69744 23.4769 8.42256 23.4769 8.03692Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />

      {/* a1 */}
      <motion.path
        // className="dark:fill-dark-fill fill-light-fill transition ease-in-out duration-100"

        d="M20.0646 8.4C20.0646 8.65846 20.1036 8.84513 20.1815 8.96C20.2595 9.07487 20.3846 9.16102 20.5569 9.21846L20.2492 10.1538C19.9292 10.1169 19.6523 10.0287 19.4185 9.88923C19.1887 9.74974 19.0164 9.53846 18.9015 9.25538C18.6636 9.55897 18.3621 9.78667 17.9969 9.93846C17.6318 10.0862 17.2421 10.16 16.8277 10.16C16.1672 10.16 15.6462 9.97538 15.2646 9.60615C14.8831 9.23282 14.6923 8.74462 14.6923 8.14154C14.6923 7.45641 14.959 6.92923 15.4923 6.56C16.0256 6.19077 16.7887 6.00615 17.7815 6.00615H18.7108V5.58154C18.7108 5.15897 18.5836 4.85744 18.3292 4.67692C18.0749 4.49231 17.72 4.4 17.2646 4.4C17.0513 4.4 16.7928 4.42872 16.4892 4.48615C16.1856 4.53949 15.8677 4.62359 15.5354 4.73846L15.1969 3.76615C15.6031 3.61436 16.001 3.50359 16.3908 3.43385C16.7805 3.36 17.1415 3.32308 17.4738 3.32308C18.3436 3.32308 18.9918 3.5159 19.4185 3.90154C19.8492 4.28718 20.0646 4.82051 20.0646 5.50154V8.4ZM17.2462 9.14461C17.5251 9.14461 17.7979 9.07077 18.0646 8.92308C18.3313 8.77538 18.5467 8.5682 18.7108 8.30154V6.86769H17.9477C17.2995 6.86769 16.8359 6.97641 16.5569 7.19385C16.2779 7.40718 16.1385 7.70256 16.1385 8.08C16.1385 8.78974 16.5077 9.14461 17.2462 9.14461Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      {/* N */}
      <motion.path
        // className="dark:fill-dark-fill fill-light-fill transition ease-in-out duration-100"

        d="M36.0985 3.49538V9.99385H37.4769V5.32923C37.6533 5.08308 37.8708 4.86359 38.1292 4.67077C38.3918 4.47385 38.681 4.37538 38.9969 4.37538C39.3908 4.37538 39.6431 4.49641 39.7538 4.73846C39.8687 4.97641 39.9262 5.37641 39.9262 5.93846V9.99385H41.3046V5.25538C41.3046 4.6482 41.1528 4.17436 40.8492 3.83385C40.5497 3.49333 40.0964 3.32308 39.4892 3.32308C39.0995 3.32308 38.72 3.41128 38.3508 3.58769C37.9815 3.76 37.6615 4.01026 37.3908 4.33846L37.2862 3.49538H36.0985Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
      {/* > */}
      <motion.path
        // className="dark:fill-dark-fill fill-light-fill transition ease-in-out duration-100"

        d="M54.3969 5.53846L49.64 2.59692L49 3.61231L53.2154 6.13538L49 8.69538L49.6769 9.66769L54.3969 6.72615V5.53846Z"
        variants={icon}
        initial="hidden"
        animate="visible"
      />
    </motion.svg>
  );
};
