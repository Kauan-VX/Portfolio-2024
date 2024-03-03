'use client'
import { TypewriterEffect } from "@/app/components/ui/typewriter-effect"
import { motion } from 'framer-motion'
import { ScrollIcon } from '../components/icons/presentation/scroll'

export default function Presentation() {
  const textVariants = {
    initialLeft: {
      // x: -500,
      // opacity: 0,
    },
    animateLeft: {
      // x: 0,
      // opacity: 1,
      // transition: {
      //   duration: 1,
      //   staggerChildren: 1,
      // },
    },
    initialRight: {
      // opacity: 0,
    },
    animateRight: {
      // opacity: 1,
      // transition: {
      //   duration: 2,
      //   staggerChildren: 2,
      // },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 3,
        staggerChildren: 5,
        repeat: Infinity,
      },
    },
  }
  const words = [
    {
      text: "Olá",
      className: "text-6xl"
          },
    {
      text: "eu",
      className: "text-6xl"
    },
    {
      text: "sou",
      className: "text-6xl"
    },
    {
      text: "Kauan",
       className: "text-blue-500 text-6xl dark:text-blue-500",

    },
    {
      text: "Vieira",
       className: "text-blue-500 text-6xl dark:text-blue-500",

    },
    {
      text: "Xavier",
       className: "text-blue-500 text-6xl dark:text-blue-500",
    },
  ];
  return (
    <section className=" h-[100vh] flex flex-col justify-center dark:bg-dark-background bg-light-background p-6">
      <div className="flex flex-col justify-center items-center mt-10">
        <motion.header
          className="px-8  header-presentation flex w-full justify-center items-center flex-col"
          variants={textVariants}
          initial="initialLeft"
          animate="animateLeft"
        >
         
            <b className=" flex  items-center gap-2 text-transparent font-bold bg-gradient-to-r from-purple via-pink to-yellow bg-clip-text animate-gradient ml-2">
            <TypewriterEffect words={words} />
            </b>{' '}
            <b className=" flex items-center gap-2 text-transparent font-bold bg-gradient-to-r from-purple via-pink to-yellow bg-clip-text animate-gradient ml-2">
            </b>
          <motion.h2
            variants={textVariants}
            className="dark:text-dark-text text-light-text text-"
          >
            <strong className="text-5xl">Desenvolvedor Frond-End</strong>
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
      </div>
    </section>
  )
}

      // <motion.div
      //     className="flex justify-center w-2/4 mr-8"
      //     variants={textVariants}
      //     initial="initialRight"
      //     animate="animateRight"
      //   >
      //     {/* <DevIcon /> */}
      //     <Image  alt="" src="/presentation/dev3.png" width={600} height={600}/>
      //   </motion.div> 