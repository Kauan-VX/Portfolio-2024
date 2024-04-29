"use client";
import { motion } from "framer-motion";
import Image from "next/image";

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
        rel="preload"
        className="flex items-center rounded-3xl py-[0.5rem] px-[0.7rem] font-medium gap-2 dark:text-dark-text text-light-text dark:bg-dark-background-transparent bg-light-background-transparent  shadow-3xl whitespace-nowrap"
        target="_blank"
        href={link}
      >
        <Image
          className="relative z-10 opacity-1 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
          src={imageSrc}
          alt="icon-skill"
          title={skillName}
          width={48}
          height={48}
        />
        <Image
          className="absolute z-0 inset-0 backdrop:object-cover filter blur-lg scale-105 saturate-150 opacity-30 translate-y-1 rounded-large"
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
