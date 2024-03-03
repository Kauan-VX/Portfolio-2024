export default function About(){
  const currentDate = new Date()
const currentYear = currentDate.getFullYear()
const age = currentYear - 2003
  return (
    <section className=" h-[100vh] pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-250 group-hover:opacity-100" >
 <header className="flex justify-center ">
        <h1 className="text-5xl text-transparent font-bold bg-gradient-to-b from-[#FF705B] to-[#FFB457] bg-clip-text animate-gradient"></h1>
Sobre mim
      </header>
      <div className="flex justify-center my-12">
      <p className="w-full max-w-[50rem] dark:bg-dark-background-transparent bg-light-background-transparent  shadow-3xl p-3 rounded-3xl ">Com {age} anos de idade e uma paixão ardente pela criação de experiências visuais envolventes, sou um desenvolvedor Front-end dedicado com um ano de experiência sólida. Busco incessantemente aprimorar minhas habilidades, sempre mantendo-me atualizado com as últimas tendências e tecnologias do mundo do desenvolvimento web. Meu objetivo final é transcender para o universo Full Stack, combinando minha expertise em design e interatividade para construir soluções web abrangentes e inovadoras. Ao navegar pelo meu portfolio, você encontrará um compilado de projetos que refletem minha paixão pela programação e meu comprometimento em oferecer experiências digitais excepcionais</p>

      </div>
</section>

  )
}