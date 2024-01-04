"use client"
import CardSkill from '../components/card-skills/index';

export default function Skills(){
const skillsCurrent = [
  { imageSrc: "/skills/html.svg" , altText: "Html", link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML" , skillName : "Html"},
  { imageSrc: "/skills/css.svg" , altText: "Css3", link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS" , skillName : "Css3"},
  { imageSrc: "/skills/javascript.svg" , altText: "JavaScript", link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" , skillName : "JavaScript"},
  { imageSrc: "/skills/typescript.svg" , altText: "TypeScript", link: "https://www.typescriptlang.org/docs/" , skillName : "TypeScript"},
  { imageSrc: "/skills/sass.svg" , altText: "Sass/Scss", link: "https://sass-lang.com/" , skillName : "Sass/Scss"}, 
  { imageSrc: "/skills/styled.svg" , altText: "Styled Component", link: "https://styled-components.com/" , skillName : "Styled Component"},
  { imageSrc: "/skills/react.svg" , altText: "React", link: "https://react.dev/" , skillName : "React"},
  { imageSrc: "/skills/nextjs.svg" , altText: "NextJs", link: "https://nextjs.org/" , skillName : "NextJs"},
  { imageSrc: "/skills/angular.svg" , altText: "Angular", link: "https://angular.io/" , skillName : "Angular"},
  { imageSrc: "/skills/tailwind.svg" , altText: "Tailwind CSS", link: "https://tailwindcss.com/" , skillName : "Tailwind CSS"},
  { imageSrc: "/skills/git.svg" , altText: "Git", link: "https://git-scm.com/" , skillName : "Git"},
]

const skillsProductivity = [
  { imageSrc: "/skills/vscode.svg" , altText: "Visual Studio Code", link: "https://code.visualstudio.com/" , skillName : "Vs Code"},
  { imageSrc: "/skills/bitbucket.svg" , altText: "BitBucket", link: "https://bitbucket.org/" , skillName : "Bit Bucket"},
  { imageSrc: "/skills/github.svg" , altText: "GitHub", link: "https://github.com/" , skillName : "GitHub"},
  { imageSrc: "/skills/postman.svg" , altText: "Postman", link: "https://www.postman.com/" , skillName : "Vs Code"},
  { imageSrc: "/skills/hoppscotch.svg" , altText: "Hoppscotch", link: "https://docs.hoppscotch.io/" , skillName : "Hoppscotch"},
  { imageSrc: "/skills/jira.svg" , altText: "Jira", link: "https://www.atlassian.com/br/software/jira" , skillName : "Jira"},

]

const skillsFuture = [
  { imageSrc: "/skills/node.svg" , altText: "Node", link: "https://nodejs.org/en" , skillName : "Node"},
  { imageSrc: "/skills/mysql.svg" , altText: "MySql", link: "https://www.mysql.com/" , skillName : "MySql"},
  { imageSrc: "/skills/docker.svg" , altText: "Docker", link: "https://docker.com" , skillName : "Docker"},
  { imageSrc: "/skills/figma.svg" , altText: "Figma", link: "https://www.figma.com/" , skillName : "Figma"},
  { imageSrc: "/skills/swift.svg" , altText: "Swift", link: "https://www.swift.org/" , skillName : "Jira"},

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
          imageSrc={skill.imageSrc}
          altText={skill.altText}
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
          imageSrc={skill.imageSrc}
          altText={skill.altText}
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
          imageSrc={skill.imageSrc}
          altText={skill.altText}
          link={skill.link}
          skillName={skill.skillName}
          index={index}
        />
      ))}
      
      </ul>
  </section>
)
  }
