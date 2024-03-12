'use client'
import { scroolAnimation } from '@/utils/motion'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { ScrollIcon } from '../components/icons/presentation/scroll'
import { Spotlight } from '../components/ui/Spotlight'
import { TypewriterEffect } from '../components/ui/typewriter-effect'
import { WORDS } from '../constants/words'

export default function Presentation() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section
      id="about"
      className=" h-[100vh] flex flex-col justify-center dark:bg-dark-background bg-light-background p-4"
    >
      <Spotlight
        className="-top-40 right-0 md:right-0 md:-top-20"
        fill={theme === 'dark' ? '#fff' : '#8a00c2'}
      />
      <header className="px-8 smMax:px-0 header-presentation flex w-full justify-center relative z-10 items-center flex-col">
        <b className=" flex  items-center gap-2 text-transparent font-bold bg-gradient-to-r from-purple via-pink to-yellow bg-clip-text animate-gradient ml-2">
          <TypewriterEffect words={WORDS} />
        </b>{' '}
        <h2 className="dark:text-dark-text text-light-text text-center">
          <strong className="md:text-5xl smMax:text-3xl ">
            Desenvolvedor Frond-End
          </strong>
        </h2>
        <motion.span
          className="w-full max-w-10"
          variants={scroolAnimation}
          animate="scrollButton"
        >
          <ScrollIcon />
        </motion.span>
      </header>
    </section>
  )
}
