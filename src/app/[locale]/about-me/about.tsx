"use client";
import HeaderTitle from "@/components/header-title";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function About() {
  const [repos, setRepos] = useState([]);
  const [counterOn, setCounterOn] = useState(false);
  const [age, setAge] = useState(0);
  const t = useTranslations("About");

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

    // Calculating age
    const currentDate = new Date();
    const birthDate = new Date("2003-03-29");
    const diffInMilliseconds = currentDate.getTime() - birthDate.getTime();
    const ageDate = new Date(diffInMilliseconds);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    setAge(calculatedAge);
  }, []);

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)}>
      <section>
        <HeaderTitle
          translationMain="About"
          translationTitle="title"
          translationSubtitle="subtitle"
        />

        <div className="w-full justify-center items-center my-8">
          <ul className="flex w-full justify-center gap-6 flex-wrap">
            <li className="dark:bg-dark-background-transparent bg-light-background-transparent shadow-3xl rounded-3xl w-40 p-4">
              <span className="flex flex-col items-center justify-center gap-2">
                <h1 className="font-bold text-4xl text-[#00b294]">
                  {counterOn && (
                    <CountUp
                      scrollSpyDelay={1}
                      start={0}
                      end={1}
                      duration={5}
                    />
                  )}
                  +
                </h1>
                <h2 className="text-center font-semibold">
                  {t("years_experience")}
                </h2>
              </span>
            </li>
            <li className="dark:bg-dark-background-transparent bg-light-background-transparent shadow-3xl rounded-3xl w-40 p-4">
              <span className="flex flex-col items-center justify-center gap-2">
                <h1 className="font-bold text-4xl text-[#00b294]">
                  {counterOn && repos && (
                    <CountUp
                      scrollSpyDelay={0}
                      start={0}
                      end={repos.length}
                      duration={5}
                    />
                  )}
                  +
                </h1>
                <h2 className="text-center font-semibold">
                  {t("finished_projects")}
                </h2>
              </span>
            </li>
          </ul>
        </div>
        <div className="flex w-full max-w-[60rem] justify-center my-12 mx-auto dark:bg-dark-background-transparent bg-light-background-transparent shadow-3xl p-8 rounded-3xl">
          <p className="text-base smMax:text-sm">{t("text", { age })}</p>
        </div>
      </section>
    </ScrollTrigger>
  );
}
