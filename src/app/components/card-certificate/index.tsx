import { CalendarIcon } from '../icons/card-education/calendar'

export default function CardCertificate() {
  return (
    <div className="relative w-[30rem] dark:bg-dark-background-transparent bg-light-background-transparent  shadow-3xl p-3 rounded-3xl ">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <span className="flex items-center gap-2 dark:text-dark-text text-light-text dark:bg-dark-background  bg-light-background-transparent shadow-3xl rounded-2xl p-2">
          <CalendarIcon />
          Udemy
        </span>
      </div>
      <div className="my-4"></div>
      <header>
        <h1 className="font-semibold text-xl">Ciências da Computação</h1>
      </header>
    </div>
  )
}
