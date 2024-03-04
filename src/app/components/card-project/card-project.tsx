import Image from "next/image";

export interface IProject{
  link: string,
  image: string,
  title: string,
  description: string,
  stacks: string[],
}



const CardProject = ({image , title , description  , stacks}: IProject) => {
  return (
    <div className="rounded-[22px]  flex flex-col max-w-3xl dark:bg-dark-background-transparent bg-light-background-transparent shadow-3xl">
   <Image
          src={image}
          width={250}
          height={250}
          alt={title}
          className="object-cover w-full h-full"
        />

<div className="h-72">
<p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
        {title}
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
         {description}
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span> Tecnologias usadas: </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
        {stacks.map((stack, index) =>(
          <div key={index}>{stack}</div>
        ))}
          </span>
        </button>
        </div>
  </div>
 
  )
}
export default CardProject