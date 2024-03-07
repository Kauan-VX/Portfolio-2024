import { CalendarIcon } from "../../components/icons/card-education/calendar";
import { GraduationIcon } from "../../components/icons/card-education/graduation";
import { LocationIcon } from "../../components/icons/card-education/location";
import { UnivercityIcon } from "../../components/icons/card-education/univercity";

export default function CardEducation(){
  
  return(
    <div className="relative w-[30rem] dark:bg-dark-background-transparent bg-light-background-transparent  shadow-3xl p-3 rounded-3xl ">
      {/* <span className="h-16 w-4 bg-blue-600 shadow right-[50%] top-[50%] absolute shadow-cyan-500/100"></span> */}
      <div className="flex justify-between items-center flex-wrap gap-2">
        <span className="flex items-center gap-2 dark:text-dark-text text-light-text dark:bg-dark-background  bg-light-background-transparent shadow-3xl rounded-2xl p-2">
       <CalendarIcon />
 2022 - 2025
        </span>
        <span className="flex items-center font-semibold dark:text-dark-text text-light-text gap-1  dark:bg-dark-background  bg-light-background-transparent shadow-3xl rounded-2xl p-2">  
         <GraduationIcon/>Graduação
         </span>
      </div>
      <div className="my-4">
        <span className=" dark:text-dark-text text-light-text gap-2  dark:bg-dark-background  bg-light-background-transparent shadow-3xl rounded-2xl p-1">Bacharelado</span>
      </div>
      <header>
        <h1 className="font-semibold text-xl">Ciências da Computação</h1>
      </header>
      <div className="flex justify-center flex-col gap-3 mt-2">
        <span  className="flex items-center gap-2">    <UnivercityIcon/>Unifeso </span>
        <span  className="flex items-center gap-2">   <LocationIcon/> Teresópolis , RJ</span>
      </div>
    </div>
  )
}