"use client";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import TypingText from "../ui/custom-texts";

export type translationMainType =
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

export interface IHeaderProps {
  translationMain: translationMainType;
  translationTitle: "title";
  translationSubtitle: "subtitle";
}

const HeaderTitle: React.FC<IHeaderProps> = ({
  translationMain,
  translationTitle,
  translationSubtitle,
}) => {
  const t = useTranslations(translationMain);

  const styleMap: { [key: string]: string } = {
    About: "from-[#00bcf2] to-[#00b294]",
    Education: "from-[#e81123] to-[#fff100]",
    Experience: "from-[#737dfe] to-[#ffcac9]",
    Certificate: "from-[#df98fa] to-[#9055ff]",
    Skills: "from-[#FF1BF7] to-[#b249f8]",
    Projects: "from-[#5ea2ef] to-[#0072f5]",
    Contact: "from-[#FF6F5B] to-[#FFB457]",
  };

  const titleStyle = styleMap[translationMain];

  1;
  return (
    <motion.header
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
      className="flex justify-center flex-col items-center my-8"
    >
      <h1
        className={`title text-transparent font-bold bg-gradient-to-b  bg-clip-text animate-gradient text-center ${titleStyle}`}
      >
        {t(translationTitle)}
      </h1>
      <TypingText
        translateMain={translationMain}
        title={translationSubtitle}
        textStyles="dark:text-dark-text text-light-text font-semibold text-2xl phoneMax:text-[1rem] text-center"
      />
    </motion.header>
  );
};

export default HeaderTitle;
