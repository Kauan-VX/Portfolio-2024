'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import { ScrollIcon } from '../components/icons/presentation/scroll'

export default function Presentation() {
  const textVariants = {
    initialLeft: {
      x: -500,
      opacity: 0,
    },
    animateLeft: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 1,
      },
    },
    initialRight: {
      opacity: 0,
    },
    animateRight: {
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 2,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 3,
        repeat: Infinity,
      },
    },
  }
  return (
    <section className=" h-[100vh]  dark:bg-dark-background bg-light-background p-6">
      <div className="flex items-center mt-10">
        <motion.header
          className="px-8  header-presentation flex w-full justify-center  flex-col"
          variants={textVariants}
          initial="initialLeft"
          animate="animateLeft"
        >
          <motion.h1 variants={textVariants} className="flex   text-3xl">
            {' '}
            <b className="flex dark:text-dark-text text-light-text">
              Olá! Eu sou o{' '}
            </b>{' '}
            <b className=" flex items-center gap-2 text-transparent font-bold bg-gradient-to-r from-purple via-pink to-yellow bg-clip-text animate-gradient ml-2">
              <Typewriter
                options={{
                  strings: [
                    'Kauan',
                    'Kauan Vieira',
                    'Kauan Xavier',
                    'Kauan Dev',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </b>
          </motion.h1>
          <motion.h2
            variants={textVariants}
            className="dark:text-dark-text text-light-text"
          >
            <strong className="text-4xl">Desenvolvedor Frond-End</strong>
          </motion.h2>
          <motion.span
            className="w-full max-w-10"
            variants={textVariants}
            animate="scrollButton"
          >
            <ScrollIcon />
          </motion.span>
          {/* <p className="dark:text-dark-text text-light-text">tenho <span>1 ano(s)</span> de experiência</p>  */}
        </motion.header>
        <motion.div
          className="flex justify-center w-2/4 mr-8"
          variants={textVariants}
          initial="initialRight"
          animate="animateRight"
        >
          {/* <DevIcon /> */}
          <Image src="/presentation/dev3.png" width={600} height={600}/>
        </motion.div>
      </div>
    </section>
  )
}
