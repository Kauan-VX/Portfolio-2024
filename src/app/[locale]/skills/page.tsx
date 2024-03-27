"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  SKILLS_CURRENT,
  SKILLS_FUTURE,
  SKILLS_PRODUCTIVITY,
} from "../../../../public/constants/skills-obj";
import { fadeIn } from "../../../utils/motion";
import CardSkill from "../../../components/card-skills/index";
import { TypingText } from "../../../components/ui/custom-texts";

export default function Skills() {
  const t = useTranslations("Skills");
  return (
    <section
      id="skills"
      // className="h-heightLessNav   w-full dark:bg-dark-background bg-light-background p-4"
    >
      <motion.header
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center flex-col items-center mb-12
     "
      >
        <h1 className="title text-transparent font-bold bg-gradient-to-b from-[#FF1BF7] to-[#b249f8]  bg-clip-text animate-gradient ">
          {t("title")}
        </h1>
        <TypingText
          title={t("subtitle")}
          textStyles="dark:text-dark-text text-light-text font-semibold text-2xl text-center"
        />
      </motion.header>

      <motion.header
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center  flex-col items-center
     "
      >
        <TypingText
          title={t("technologies_use")}
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
          title={t("productivity_tools")}
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
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center  flex-col items-center
     "
      >
        <TypingText
          title={t("future_study")}
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
