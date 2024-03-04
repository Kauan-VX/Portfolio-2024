import Autoplay from "embla-carousel-autoplay"
import CardProject, { IProject } from "../components/card-project/card-project"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel"
 
export default function Project(){
  const projets : IProject[] = [
    { image: "/project/personal-finance-dashboard.png" ,  link: "https://nodejs.org/en" , title : "Painel de Finanças Pessoais" , description : '' , stacks : []},
    { image: "/project/personal-finance-dashboard.png" ,  link: "https://nodejs.org/en" , title : "Node" , description : '' , stacks : []},
    { image: "/project/personal-finance-dashboard.png" ,  link: "https://nodejs.org/en" , title : "Node" , description : '' , stacks : []},
    { image: "/project/personal-finance-dashboard.png" ,  link: "https://nodejs.org/en" , title : "Node" , description : '' , stacks : []},
    { image: "/project/personal-finance-dashboard.png" ,  link: "https://nodejs.org/en" , title : "Node" , description : '' , stacks : []},
    { image: "/project/personal-finance-dashboard.png" ,  link: "https://nodejs.org/en" , title : "Node" , description : '' , stacks : []},
  ]


  return (

          <section className="min-h-[100vh] w-full dark:bg-dark-background bg-light-background pt-12">
      <header className="flex justify-center ">
        <h1 className="text-5xl text-transparent font-bold bg-gradient-to-b from-[#5ea2ef] to-[#0072f5] bg-clip-text animate-gradient">Projetos</h1>
      </header>
      <div className="">
      <Carousel className="mt-10" 
       plugins={[
        Autoplay({
          delay: 5000,
        stopOnFocusIn: true,
        stopOnInteraction: true,
        stopOnMouseEnter: true
        }),
      ]}>
  <CarouselContent className="w-full">
  {projets.map((project, index) => (
           <CarouselItem key={index} className="bg-transparent"><CardProject key={index} link={project.link} image={project.image} description={project.description} stacks={project.stacks} title={project.title}/></CarouselItem>
      ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
      </div>
    </div>
  </section>

   
  )
}