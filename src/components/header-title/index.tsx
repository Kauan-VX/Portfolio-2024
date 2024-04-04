"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypingText } from "../ui/custom-texts";
import { fadeIn } from "@/utils/motion";
import { useTranslations } from "next-intl";

export interface ISkills {
  translationMain:
    | "Navbar"
    | "Presentation"
    | "About"
    | "Education"
    | "Experience"
    | "Certificate"
    | "Skills"
    | "Projects"
    | "Contact"
    | "Constatants";
  translationTitle: "title";
  translationSubtitle: "subtitle";
}

const HeaderTitle: React.FC<ISkills> = ({
  translationMain,
  translationTitle,
  translationSubtitle,
}) => {
  const t = useTranslations(translationMain);

  1;
  return (
    <motion.header
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="flex justify-center flex-col items-center"
    >
      <h1 className="title text-transparent font-bold bg-gradient-to-b from-[#5ea2ef] to-[#0072f5] bg-clip-text animate-gradient text-center">
        {t(translationTitle)}
      </h1>
      <TypingText
        title={t(translationSubtitle)}
        textStyles="dark:text-dark-text text-light-text font-semibold text-2xl text-center"
      />
    </motion.header>
  );
};

export default HeaderTitle;
