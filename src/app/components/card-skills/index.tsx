'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export interface ISkills {
  id?: number
  imageSrc: string
  link: string
  skillName: string
  index?: number
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
  }
  const noAnimations = {}

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
        className="link-skills whitespace-nowrap"
        target="_blank"
        href={link}
        rel="noreferrer"
      >
        <Image
          className="w-full"
          src={imageSrc}
          alt="icon-skill"
          loading="lazy"
          title={skillName}
          width={48}
          height={48}
        />
        {skillName}
      </a>
    </motion.div>
  )
}

export default CardSkill
