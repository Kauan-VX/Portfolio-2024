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
<div className="">
<div className=" w-full relative max-w-xl h-full">
  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-[#5ea2ef] transform scale-[0.80] bg-[#0072f5] rounded-full blur-3xl" />
  <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8  h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
    <Image
       src={image}
       width={1000}
       height={1000}
       alt={title}
       className="object-cover w-full z-10"
     />

    <h1 className="dark:text-dark-text text-light-text font-semibold text-3xl">
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
</div>
 
  )
}
export default CardProject


{/* <div className="rounded-[22px]  flex flex-col w-full  dark:bg-dark-background-transparent bg-light-background-transparent shadow-3xl">
<Image
       src={image}
       width={1000}
       height={1000}
       alt={title}
       className="object-cover w-full "
     />

<div className="h-full flex flex-col  p-4 gap-2">
<p className="dark:text-dark-text text-light-text font-semibold text-3xl">
     {title}
     </p>

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
     </div>
</div> */}