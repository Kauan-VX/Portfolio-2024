"use client"
import { BitbucketIcon } from '../../../public/skills/BitbucketIcon';
import { CssIcon } from '../../../public/skills/CssIcon';
import { DockerIcon } from '../../../public/skills/DockerIcon';
import { GithubIcon } from '../../../public/skills/GithubIcon';
import { HoppscotchIcon } from '../../../public/skills/HoppscotchIcon';
import { NextjsIcon } from '../../../public/skills/NextjsIcon';
import { SassIcon } from '../../../public/skills/SassIcon';
import { SwiftIcon } from '../../../public/skills/SwiftIcon';
import { TailwindIcon } from '../../../public/skills/TailwindIcon';
import { TypescriptIcon } from '../../../public/skills/TypescriptIcon';
import CardSkill from '../components/card-skills/index';

export default function Skills(){
const skillsCurrent = [
  // { component: {},  link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML" , skillName : "Html"},
  { component: <CssIcon/> ,  link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS" , skillName : "Css3"},
  // { component: "/skills/javascript.svg" , link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" , skillName : "JavaScript"},
  { component: <TypescriptIcon/> , link: "https://www.typescriptlang.org/docs/" , skillName : "TypeScript"},
  { component: <SassIcon/> ,  link: "https://sass-lang.com/" , skillName : "Sass/Scss"}, 
  // { component: "/skills/styled.svg" , link: "https://styled-components.com/" , skillName : "Styled Component"},
  // { component: "/skills/react.svg" ,  link: "https://react.dev/" , skillName : "React"},
  { component: <NextjsIcon/> ,  link: "https://nextjs.org/" , skillName : "NextJs"},
  // { component: "/skills/angular.svg" ,  link: "https://angular.io/" , skillName : "Angular"},
  { component: <TailwindIcon/> , link: "https://tailwindcss.com/" , skillName : "Tailwind CSS"},
  // { component: "/skills/git.svg" ,  link: "https://git-scm.com/" , skillName : "Git"},
]

const skillsProductivity = [
  // { component: "/skills/vscode.svg" , link: "https://code.visualstudio.com/" , skillName : "VS Code"},
  { component: <BitbucketIcon/> , link: "https://bitbucket.org/" , skillName : "Bit Bucket"},
  { component: <GithubIcon/>,  link:"https://github.com/" , skillName : "GitHub"},
  // { component: "/skills/postman.svg" ,  link: "https://www.postman.com/" , skillName : "Postman"},
  { component: <HoppscotchIcon/> , link: "https://docs.hoppscotch.io/" , skillName : "Hoppscotch"},
  // { component: "/skills/jira.svg" ,  link: "https://www.atlassian.com/br/software/jira" , skillName : "Jira"},

]

const skillsFuture = [
  // { component: "/skills/node.svg" ,  link: "https://nodejs.org/en" , skillName : "Node"},
  // { component: "/skills/mysql.svg" ,  link: "https://www.mysql.com/" , skillName : "MySql"},
  { component: <DockerIcon/> ,  link: "https://docker.com" , skillName : "Docker"},
  // { component: "/skills/figma.svg" ,  link: "https://www.figma.com/" , skillName : "Figma"},
  { component: <SwiftIcon/> ,  link: "https://www.swift.org/" , skillName : "Swift"},

]
return(
  <section className="min-h-[100vh]  w-full dark:bg-dark-background bg-light-background pt-12">
     <header className="flex justify-center flex-col items-center
     ">
        <h1 className="text-5xl text-transparent font-bold bg-gradient-to-b from-[#FF1BF7] to-[#b249f8]  bg-clip-text animate-gradient">Skills</h1>
        <h2 className="dark:text-dark-text text-light-text font-semibold text-2xl">A seguir as tecnologias que uso:</h2>
      </header>
      <ul className="w-full flex justify-center items-center flex-wrap gap-[1rem] my-10 px-4">
      {skillsCurrent.map((skill, index) => (
        <CardSkill
          key={index}
          component={skill.component}
              link={skill.link}
          skillName={skill.skillName}
          index={index}
        />
      ))}
      </ul>
      <header className="flex justify-center flex-col items-center
     ">
        <h2 className="dark:text-dark-text text-light-text font-semibold text-2xl">Ferramentas para produtividade:</h2>
      </header>
      <ul className="w-full flex justify-center items-center flex-wrap gap-[1rem] my-10  px-4">
     
      {skillsProductivity.map((skill, index) => (
        <CardSkill
          key={index}
          component={skill.component}
              link={skill.link}
          skillName={skill.skillName}
          index={index}
        />
      ))}
      
      </ul>

      <header className="flex justify-center flex-col items-center
     ">
        <h2 className="dark:text-dark-text text-light-text font-semibold text-2xl">Planos de estudos futuros:</h2>
      </header>
      <ul className="w-full flex justify-center items-center flex-wrap gap-[1rem] my-10  px-4">
      {skillsFuture.map((skill, index) => (
        <CardSkill
          key={index}
          component={skill.component}
              link={skill.link}
          skillName={skill.skillName}
          index={index}
        />
      ))}
      
      </ul>
  </section>
)
  }
