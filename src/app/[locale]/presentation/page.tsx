"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { translate } from "../../../../public/constants/words";
import { ScrollIcon } from "../../../components/icons/presentation/scroll";
import { Spotlight } from "../../../components/ui/Spotlight";
import { TypewriterEffect } from "../../../components/ui/typewriter-effect";
import { scroolAnimation } from "../../../utils/motion";

const LangSelect = dynamic(() => import("@/components/language"));

export default function Presentation() {
  const [animation, setAnimation] = useState(false);
  const { theme } = useTheme();

  const t = useTranslations("Presentation");
  const constants = useTranslations("Constatants");

  const wordList = translate(constants);
  return (
    <ScrollTrigger
      onEnter={() => setAnimation(true)}
      onExit={() => setAnimation(false)}
    >
      <section className="h-[100vh] flex flex-col justify-center dark:bg-dark-background bg-light-background p-4 relative">
        <span className="absolute top-2 right-0">
          <LangSelect />
        </span>
        {animation && (
          <Spotlight
            className="-top-6 smallPhoneMax:-top-[11rem] mdMax:-top-[20rem] right-0 md:right-0 md:-top-20 navbarCollapseMax:-top-[13rem]"
            fill={theme === "dark" ? "rgba(255, 255, 255, 1)" : "#6000bf"}
          />
        )}

        <header className="px-8 smMax:px-0   header-presentation flex w-full justify-center relative z-10 items-center flex-col">
          {animation && (
            <b className=" flex  items-center gap-2 text-transparent font-bold bg-gradient-to-r from-purple via-pink to-yellow bg-clip-text animate-gradient">
              <TypewriterEffect words={wordList} />
            </b>
          )}
          <h2 className="dark:text-dark-text text-light-text text-center">
            <strong className="text-5xl md:text-5xl smMax:text-4xl ">
              {t("developer")}
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
  );
}
