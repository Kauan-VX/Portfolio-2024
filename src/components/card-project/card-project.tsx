import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ISkills } from "../card-skills";

const CardSkill = dynamic(() => import("../card-skills"));

export interface IProject {
  link: string;
  image: string;
  title: string;
  description: string;
  stacks: ISkills[];
}

const Meteors = dynamic(
  () => import("../ui/meteors").then((module) => module.Meteors),
  { ssr: false }
);

const CardProject = ({ image, title, description, stacks }: IProject) => {
  const t = useTranslations("Projects");
  return (
    <div className=" w-full relative max-w-xl ">
      <div className="transition ease-in-out duration-700 absolute inset-0 h-full  w-full bg-gradient-to-r from-blue-500 dark:to-dark-meteors to-light-meteors transform scale-[0.80] dark:bg-dark-meteors bg-light-meteors rounded-full blur-3xl" />
      <div className="transition ease-in-out duration-700 relative shadow-xl mdMax:min-h-[600px]  dark:bg-dark-background bg-light-background border border-slate-200 dark:border-gray-800 px-4 py-8   overflow-hidden rounded-2xl flex flex-col justify-between items-start">
        <Image
          src={image}
          width={1000}
          height={1000}
          alt={title}
          className="object-cover w-full z-10"
        />

        <h1 className="dark:text-dark-text t600xt-light-text font-semibold text-3xl z-10">
          {title}
        </h1>

        <p className="text-base font-medium text-neutral-600 dark:text-neutral-400">
          {description}
        </p>

        <div className="flex flex-col mt-2 gap-4">
          <h2 className="dark:text-dark-text text-light-text font-semibold text-xl">
            {t("technologies_used")}
          </h2>
          <div className="w-full  m-auto flex justify-start items-center flex-wrap gap-[1rem] ">
            {stacks.map((stack, index) => (
              <CardSkill
                key={index}
                id={stack.id}
                imageSrc={stack.imageSrc}
                link={stack.link}
                skillName={stack.skillName}
              />
            ))}
          </div>
        </div>

        {/* Meaty part - Meteor effect */}
        <div>
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
};
export default CardProject;
