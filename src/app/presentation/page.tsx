'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger'
import { translate } from '../../../public/constants/words'
import { scroolAnimation } from '../../../utils/motion'
import { ScrollIcon } from '../components/icons/presentation/scroll'
import { Spotlight } from '../components/ui/Spotlight'
import { TypewriterEffect } from '../components/ui/typewriter-effect'

export default function Presentation() {
  const [animation, setAnimation] = useState(false)
  const t = useTranslations('Presentation')
  const constants = useTranslations('Constatants')

  const wordList = translate(constants)
  return (
    <ScrollTrigger
      onEnter={() => setAnimation(true)}
      onExit={() => setAnimation(false)}
    >
      <section
        id="about"
        className="h-[100vh] flex flex-col justify-center dark:bg-dark-background bg-light-background p-4"
      >
        {animation && (
          <Spotlight className="-top-40 right-0 md:right-0 md:-top-20" />
        )}

        <header className="px-8 smMax:px-0 smMax:pb-24  header-presentation flex w-full justify-center relative z-10 items-center flex-col">
          {animation && (
            <b className=" flex  items-center gap-2 text-transparent font-bold bg-gradient-to-r from-purple via-pink to-yellow bg-clip-text animate-gradient ml-2 md:text-5xl smMax:text-3xl">
              <TypewriterEffect words={wordList} />
            </b>
          )}
          <h2 className="dark:text-dark-text text-light-text text-center">
            <strong className="md:text-5xl smMax:text-3xl ">
              {t('developer')}
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
    </ScrollTrigger>
  )
}
