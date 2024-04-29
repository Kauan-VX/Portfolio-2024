import { CalendarIcon } from "../../components/icons/card-education/calendar";
import { GraduationIcon } from "../../components/icons/card-education/graduation";
import { LocationIcon } from "../../components/icons/card-education/location";
import { UnivercityIcon } from "../../components/icons/card-education/univercity";

export interface IEducation {
  initial_date: string;
  finish_date: string;
  higher_education: string;
  type: string;
  title: string;
  institution: string;
  location: string;
}

export default function CardEducation({
  initial_date,
  finish_date,
  higher_education,
  type,
  title,
  institution,
  location,
}: IEducation) {
  return (
    <div className="relative w-[30rem] dark:bg-dark-background-transparent bg-light-background-transparent  shadow-3xl p-3 rounded-3xl ">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <span className="flex items-center gap-2 dark:text-dark-text text-light-text dark:bg-dark-background  bg-light-background-transparent shadow-3xl rounded-2xl p-2">
          <CalendarIcon />
          {initial_date} - {finish_date}
        </span>
        <span className="flex items-center font-semibold dark:text-dark-text text-light-text gap-1  dark:bg-dark-background  bg-light-background-transparent shadow-3xl rounded-2xl p-2">
          <GraduationIcon />
          {higher_education}
        </span>
      </div>
      <div className="my-4">
        <span className=" dark:text-dark-text text-light-text gap-2  dark:bg-dark-background  bg-light-background-transparent shadow-3xl rounded-2xl p-2">
          {type}
        </span>
      </div>
      <header>
        <h1 className="font-semibold text-xl">{title}</h1>
      </header>
      <div className="flex justify-center flex-col gap-3 mt-2">
        <span className="flex items-center gap-2">
          {" "}
          <UnivercityIcon />
          {institution}{" "}
        </span>
        <span className="flex items-center gap-2">
          {" "}
          <LocationIcon /> {location}
        </span>
      </div>
    </div>
  );
}
