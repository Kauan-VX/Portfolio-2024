'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ISkills {
  imageSrc: string
  link: string
  skillName: string
  index: number
}

const CardSkill: React.FC<ISkills> = ({
  imageSrc,
  link,
  skillName,
  index,
}) => {
  

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

  return (

    <motion.div
      variants={fadeInAnimationsVariants}
      initial="initial"
      whileInView="animate"
            exit="exit"
      viewport={{
        once: true,
      }}
      custom={index}
    >
      <a className="link-skills whitespace-nowrap" target="_blank" href={link}>
        <Image
          className="w-full"
          src={imageSrc}
          alt={skillName}
          width={48}
          height={48}
        />
        {skillName}
      </a>
    </motion.div>
  )
}
export default CardSkill