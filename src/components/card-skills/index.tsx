"use client";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";

export interface ISkills {
  id?: number;
  imageSrc: string;
  link: string;
  skillName: string;
  index?: number;
}

const CardSkill: React.FC<ISkills> = ({ imageSrc, link, skillName, index }) => {
  const fadeInAnimationsVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.09 * index,
      },
    }),
    exit: {
      opacity: 0,
      y: 100,
    },
  };
  const noAnimations = {};

  return (
    <motion.div
      key={index}
      variants={skillName ? fadeInAnimationsVariants : noAnimations}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
        amount: 0.5,
      }}
      custom={index}
    >
      <a
        className="flex items-center rounded-3xl py-[0.5rem] px-[0.7rem] font-medium gap-2 dark:text-dark-text text-light-text dark:bg-dark-background-transparent bg-light-background-transparent  shadow-3xl whitespace-nowrap"
        target="_blank"
        href={link}
        rel="noreferrer"
      >
        <Image
          isBlurred
          className=" w-full max-w-[48px]"
          src={imageSrc}
          alt="icon-skill"
          title={skillName}
          width={48}
          height={48}
        />
        {skillName}
      </a>
    </motion.div>
  );
};

export default CardSkill;
