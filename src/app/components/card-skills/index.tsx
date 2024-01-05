"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface ISkills{
  imageSrc: string,
  altText: string,
  link: string,
  skillName: string,
  index: number,
}

const CardSkill: React.FC<ISkills> = ({ imageSrc, altText, link, skillName ,index }) => {
  const fadeInAnimationsVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ( {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      
      },
    }),
  };

  return (
    <motion.li
      variants={fadeInAnimationsVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
    >
      <a className="link-skills whitespace-nowrap" target="_blank" href={link}>
        <Image
          className="w-full"
          src={imageSrc}
          alt={altText}
          width={48}
          height={48}
        />
        {skillName}
      </a>
    </motion.li>
  );
};
export default CardSkill;