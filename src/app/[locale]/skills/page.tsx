"use client";
import { motion } from "framer-motion";
import {
  SKILLS_CURRENT,
  SKILLS_FUTURE,
  SKILLS_PRODUCTIVITY,
} from "../../../../public/constants/skills-obj";
import { fadeIn } from "../../../utils/motion";
import CardSkill from "../../../components/card-skills/index";
import TypingText from "../../../components/ui/custom-texts";
import HeaderTitle from "@/components/header-title";

export default function Skills() {
  return (
    <section id="skills" className="flex justify-center flex-col items-center ">
      <HeaderTitle
        translationMain="Skills"
        translationTitle="title"
        translationSubtitle="subtitle"
      />

      <motion.header
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center  flex-col items-center
     "
      >
        <TypingText
          translateMain="Skills"
          title="technologies_use"
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
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center  flex-col items-center
     "
      >
        <TypingText
          translateMain="Skills"
          title="productivity_tools"
          textStyles="dark:text-dark-text text-light-text font-semibold text-2xl text-center"
        />
      </motion.header>
      <div className="w-full flex  m-auto justify-center items-center flex-wrap gap-[1rem] my-10  px-4">
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
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center  flex-col items-center
     "
      >
        <TypingText
          translateMain="Skills"
          title="future_study"
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
  );
}
