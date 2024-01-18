'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'

interface ISkills {
  imageSrc: string
  altText: string
  link: string
  skillName: string
  index: number
}

const CardSkill: React.FC<ISkills> = ({
  imageSrc,
  altText,
  link,
  skillName,
  index,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const { clientX, clientY } = e
      const { width, height, left } = ref.current.getBoundingClientRect()
      const x = clientX - (left + width / 2)
      const y = clientY - (left + height / 2)
      setPosition({ x, y })
    }
  }

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position

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
  }

  return (
    // onMouseMove={mouseMove}
    // onMouseLeave={mouseLeave}
    // ref={ref}
    // animate={{ x, y }}
    // transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    <motion.div
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
    </motion.div>
  )
}
export default CardSkill
