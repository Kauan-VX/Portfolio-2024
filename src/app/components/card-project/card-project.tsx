'use client'
import Image from "next/image";
import CardSkill, { ISkills } from "../card-skills";
import { Meteors } from "../ui/meteors";

export interface IProject{
  link: string,
  image: string,
  title: string,
  description: string,
  stacks: ISkills[],
}



const CardProject = ({image , title , description  , stacks}: IProject) => {

  return (
<div className=" w-full relative max-w-xl h-full">
  <div className="transition ease-in-out duration-700 absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 dark:to-dark-meteors to-light-meteors transform scale-[0.80] dark:bg-dark-meteors bg-light-meteors rounded-full blur-3xl" />
  <div className="transition ease-in-out duration-700 relative shadow-xl  dark:bg-dark-background bg-light-background border border-slate-200 dark:border-gray-800 px-4 py-8   overflow-hidden rounded-2xl flex flex-col justify-between items-start">
    <Image
       src={image}
       width={1000}
       height={1000}
       alt={title}
       className="object-cover w-full z-10"
     />

    <h1 className="dark:text-dark-text text-light-text font-semibold text-3xl z-10">
     {title}
     </h1>

      <p className="text-base font-medium text-neutral-600 dark:text-neutral-400">
      {description}
     </p>

     <div className="flex flex-col mt-2 gap-4">
       <h2 className="dark:text-dark-text text-light-text font-semibold text-xl"> Tecnologias usadas: </h2>
       <span   className="w-full  m-auto flex justify-start items-center flex-wrap gap-[1rem] ">
     {stacks.map((stack, index) =>(
       <CardSkill key={index} imageSrc={stack.imageSrc} link={stack.link} skillName={stack.skillName}/>
     ))}
       </span>
     </div>

    {/* Meaty part - Meteor effect */}
    <Meteors number={20} />
  </div>
</div>
 
  )
}
export default CardProject

