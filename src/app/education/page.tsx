import CardEducation from "../components/card-education";

export default function Education(){
  return (
         <section id="education" className="min-h-[100vh] w-full dark:bg-dark-background bg-light-background p-4">
      <header className="flex justify-center ">
        <h1 className="text-5xl text-transparent font-bold bg-gradient-to-b from-[#5ea2ef] to-[#0072f5] bg-clip-text animate-gradient">Educação</h1>
      </header>
      <div className="card flex justify-center">
      <CardEducation></CardEducation>
      </div>
    </section>
  )
}