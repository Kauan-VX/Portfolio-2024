import { CalendarIcon } from "../icons/card-education/calendar";
import { CaretRightIcon } from "../icons/card-experience/caret-right";
import { NoclafIcon } from "../icons/card-experience/noclaf";

export interface IExperience {
  company_name: "Noclaf" | "";
  initial_date: string;
  finish_date: string;
  job_title: string;
  job_description_1: string;
  job_description_2: string;
}

type PlatformIcons = {
  [key: string]: JSX.Element;
};

export default function CardExperience({
  company_name,
  finish_date,
  initial_date,
  job_title,
  job_description_1: job_description1,
  job_description_2: job_description2,
}: IExperience) {
  const platformIcons: PlatformIcons = {
    Noclaf: <NoclafIcon />,
  };

  const platformIcon =
    company_name in platformIcons ? platformIcons[company_name] : null;
  return (
    <div className="relative w-[30rem] dark:bg-dark-background-transparent bg-light-background-transparent  shadow-3xl p-3 rounded-3xl ">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <span className="flex items-center font-semibold dark:text-dark-text text-light-text gap-4  dark:bg-dark-background  bg-light-background-transparent shadow-3xl rounded-2xl p-2">
          {platformIcon}
          {company_name}
        </span>
        <span className="flex items-center gap-2 dark:text-dark-text text-light-text dark:bg-dark-background  bg-light-background-transparent shadow-3xl rounded-2xl p-2">
          <CalendarIcon />
          {initial_date} - {finish_date}
        </span>
      </div>
      <div className="my-4">
        <span className=" dark:text-dark-text text-light-text gap-2  dark:bg-dark-background  bg-light-background-transparent shadow-3xl rounded-2xl p-2">
          {job_title}
        </span>
      </div>
      <div className="flex justify-center flex-col gap-3 mt-2">
        <ul className="flex items-center flex-col gap-4">
          <li className="flex items-center gap-4">
            <CaretRightIcon className="dark:fill-dark-text fill-light-text" />
            {job_description1}
          </li>
          <li className="flex items-center gap-4">
            <CaretRightIcon className="dark:fill-dark-text fill-light-text" />
            {job_description2}
          </li>
        </ul>
      </div>
    </div>
  );
}
