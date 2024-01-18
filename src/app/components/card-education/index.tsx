import { CalendarIcon } from "../../components/icons/card-education/calendar";
import { GraduationIcon } from "../../components/icons/card-education/graduation";
import { LocationIcon } from "../../components/icons/card-education/location";
import { UnivercityIcon } from "../../components/icons/card-education/univercity";

export default function CardEducation(){
  
  return(
    <div className="relative w-[30rem] dark:bg-dark-background-transparent bg-light-background-transparent  shadow-3xl p-3 rounded-3xl ">
      {/* <span className="h-16 w-4 bg-blue-600 shadow right-[50%] top-[50%] absolute shadow-cyan-500/100"></span> */}
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-2 text-cerenity-blue font-semibold bg-black rounded-2xl p-1">
       <CalendarIcon />
 2022 - 2025
        </span>
        <span className="flex items-center font-semibold text-cerenity-blue gap-2  bg-white rounded-2xl p-1">   <GraduationIcon/> Graduação</span>
      </div>
      <div>
        <span className=" dark:bg-dark-background-transparent bg-light-background-transparent">Bacharelado</span>
      </div>
      <header>
        <h1 className="font-semibold text-xl">Ciências da Computação</h1>
      </header>
      <div className="flex flex-col">
        <span  className="flex items-center gap-2">    <UnivercityIcon/>Unifeso (Centro Universitário Serra dos Órgãos)</span>
        <span  className="flex items-center gap-2">   <LocationIcon/> Teresópolis , RJ</span>
      </div>
    </div>
  )
}