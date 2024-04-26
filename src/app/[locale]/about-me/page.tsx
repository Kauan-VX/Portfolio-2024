"use client";
import HeaderTitle from "@/components/header-title";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function About() {
  const [repos, setRepos] = useState([]);
  const [counterOn, setCounterOn] = useState(false);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/Kauan-VX/repos"
        );
        const data = await response.json();
        setRepos(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    }

    fetchRepos();
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const age = currentYear - 2003;
  const timeExperience = currentYear - 2023;
  return (
    <section className="h-heightLessNav  w-full dark:bg-dark-background bg-light-background p-4">
      <HeaderTitle
        translationMain="About"
        translationTitle="title"
        translationSubtitle="subtitle"
      />

      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
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
        <p className=" text-lg">
          Com {age} anos de idade e uma paixão ardente pela criação de
          experiências visuais envolventes, sou um desenvolvedor Front-end
          dedicado com um ano de experiência sólida. Busco incessantemente
          aprimorar minhas habilidades, sempre mantendo-me atualizado com as
          últimas tendências e tecnologias do mundo do desenvolvimento web. Meu
          objetivo final é transcender para o universo Full Stack, combinando
          minha expertise em design e interatividade para construir soluções web
          abrangentes e inovadoras. Ao navegar pelo meu portfolio, você
          encontrará um compilado de projetos que refletem minha paixão pela
          programação e meu comprometimento em oferecer experiências digitais
          excepcionais
        </p>
      </div>
    </section>
  );
}
