"use client";
import HeaderTitle from "@/components/header-title";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { translateAboutMe } from "../../../../public/constants/about";

export default function About() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const age = currentYear - 2003;
  const timeExperience = currentYear - 2023;
  const [repos, setRepos] = useState([]);
  const [counterOn, setCounterOn] = useState(false);
  const t = useTranslations("About");
  const aboutMe = translateAboutMe(t, age);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/Kauan-VX/repos"
        );
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    }

    fetchRepos();
  }, []);

  return (
    <section
      id="about"
      className="h-heightLessNav  w-full dark:bg-dark-background bg-light-background p-4"
    >
      <HeaderTitle
        translationMain="About"
        translationTitle="title"
        translationSubtitle="subtitle"
      />

      <ScrollTrigger onEnter={() => setCounterOn(true)}>
        <div className="w-full justify-center items-center my-8">
          <ul className="flex w-full justify-center gap-6 flex-wrap">
            <li className="dark:bg-dark-background-transparent bg-light-background-transparent shadow-3xl rounded-3xl w-40 p-4">
              <span className="flex flex-col items-center justify-center gap-2">
                <h1 className="font-bold text-4xl text-[#00b294]">
                  {counterOn && (
                    <CountUp
                      scrollSpyDelay={0}
                      start={0}
                      end={timeExperience}
                      duration={5}
                    />
                  )}
                  +
                </h1>
                <h2 className="text-center font-semibold">
                  Ano(s) de experiência
                </h2>
              </span>
            </li>
            <li className="dark:bg-dark-background-transparent bg-light-background-transparent shadow-3xl rounded-3xl w-40 p-4">
              <span className="flex flex-col items-center justify-center gap-2">
                <h1 className="font-bold text-4xl text-[#00b294]">
                  {counterOn && (
                    <CountUp start={0} end={repos.length} duration={5} />
                  )}
                  +
                </h1>
                <h2 className="text-center font-semibold">
                  Projetos concluídos
                </h2>
              </span>
            </li>
          </ul>
        </div>
      </ScrollTrigger>
      <div className="flex w-full max-w-[60rem] justify-center my-12 mx-auto dark:bg-dark-background-transparent bg-light-background-transparent shadow-3xl p-8 rounded-3xl">
        <p className=" text-lg">{aboutMe}</p>
      </div>
    </section>
  );
}
