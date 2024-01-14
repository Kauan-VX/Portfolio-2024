import CardProject from "../components/card-project/card-project";

export default function Project(){
const projectData = [
  {
    imageBg : "/project/login-animation.png" , name : "Login" , 
  }, 
  {
    imageBg : "/project/interface-user.png" , name : "Interface de usuário" , 
  }
]

  return (
         <section className="min-h-[100vh] w-full dark:bg-dark-background bg-light-background pt-12">
      <header className="flex justify-center ">
        <h1 className="text-5xl text-transparent font-bold bg-gradient-to-b from-[#5ea2ef] to-[#0072f5] bg-clip-text animate-gradient">Projetos</h1>
      </header>
      <div className="card p-7 flex mt-16 items-center justify-center gap-6">
    {projectData.map((project , index) => (
      <CardProject
      key={index}
      imageBg={project.imageBg}
      name={project.name}

      index={index}
      />

    ))}
      </div>
    </section>
  )
}