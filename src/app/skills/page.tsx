'use client'
import { fadeIn } from '@/utils/motion'
import { motion } from 'framer-motion'
import CardSkill from '../components/card-skills/index'
import { TypingText } from '../components/ui/custom-texts'
import {
  SKILLS_CURRENT,
  SKILLS_FUTURE,
  SKILLS_PRODUCTIVITY,
} from '../constants/skills-obj'

export default function Skills() {
  return (
    <section
      id="skills"
      // className="h-heightLessNav   w-full dark:bg-dark-background bg-light-background p-4"
    >
      <motion.header
        variants={fadeIn('up', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center flex-col items-center mb-12
     "
      >
        <h1 className="title text-transparent font-bold bg-gradient-to-b from-[#FF1BF7] to-[#b249f8]  bg-clip-text animate-gradient ">
          Skills
        </h1>
        <TypingText
          title="| Minhas Stacks |"
          textStyles="dark:text-dark-text text-light-text font-semibold text-2xl text-center"
        />
      </motion.header>

      <motion.header
        variants={fadeIn('up', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center  flex-col items-center
     "
      >
        <TypingText
          title="Tecnologias que uso:"
          textStyles="dark:text-dark-text text-light-text font-semibold text-2xl text-center"
        />
      </motion.header>
      <div className="w-full  max-w-[80%] m-auto flex justify-center items-center flex-wrap gap-[1rem] my-10 px-4">
        {SKILLS_CURRENT.map((skill, index) => (
          <CardSkill
            key={skill.id}
            id={skill.id}
            imageSrc={skill.imageSrc}
            link={skill.link}
            skillName={skill.skillName}
            index={index}
          />
        ))}
      </div>
      <motion.header
        variants={fadeIn('up', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center  flex-col items-center
     "
      >
        <TypingText
          title="Ferramentas de produtividade:"
          textStyles="dark:text-dark-text text-light-text font-semibold text-2xl text-center"
        />
      </motion.header>
      <div className="w-full flex max-w-[80%] m-auto justify-center items-center flex-wrap gap-[1rem] my-10  px-4">
        {SKILLS_PRODUCTIVITY.map((skill, index) => (
          <CardSkill
            key={skill.id}
            id={skill.id}
            imageSrc={skill.imageSrc}
            link={skill.link}
            skillName={skill.skillName}
            index={index}
          />
        ))}
      </div>

      <motion.header
        variants={fadeIn('up', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center  flex-col items-center
     "
      >
        <TypingText
          title="Planos de estudos futuros:"
          textStyles="dark:text-dark-text text-light-text font-semibold text-2xl text-center"
        />
      </motion.header>
      <div className="w-full max-w-[80%] m-auto flex justify-center items-center flex-wrap gap-[1rem] my-10  px-4">
        {SKILLS_FUTURE.map((skill, index) => (
          <CardSkill
            key={skill.id}
            id={skill.id}
            imageSrc={skill.imageSrc}
            link={skill.link}
            skillName={skill.skillName}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
