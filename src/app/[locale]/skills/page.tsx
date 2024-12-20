"use client";
import HeaderTitle from "@/components/header-title";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import {
  SKILLS_CURRENT,
  SKILLS_PRODUCTIVITY,
} from "../../../../public/constants/skills-obj";
import TypingText from "../../../components/ui/custom-texts";
import { fadeIn } from "../../../utils/motion";

const CardSkill = dynamic(() => import("../../../components/card-skills"));

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
        viewport={{ once: true, amount: 0.7 }}
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
        viewport={{ once: true, amount: 0.7 }}
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
    </section>
  );
}
