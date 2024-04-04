"use client";
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../../utils/motion";
import { useTranslations } from "next-intl";
import { translationMainType } from "../header-title";

interface ICustomTexts {
  title: string;
  textStyles: string;
  translateMain: translationMainType;
}

export default function TypingText({
  title,
  textStyles,
  translateMain,
}: ICustomTexts) {
  const t = useTranslations(translateMain);

  return (
    <motion.p
      variants={textContainer}
      className={`phoneMax:text-xl ${textStyles}`}
    >
      {Array.from(t(title)).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
}
