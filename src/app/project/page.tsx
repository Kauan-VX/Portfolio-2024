import { Swiper, SwiperSlide } from 'swiper/react';
import CardProject, { IProject } from "../components/card-project/card-project";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../../app/globals.scss';


// import required modules
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
 
export default function Project(){
  const projets : IProject[] = [
    { image: "/project/mockup-dashboard.svg" ,  link: "https://nodejs.org/en" , title : "Painel de Finanças Pessoais" , description : `
    Desenvolvi um website com o propósito de oferecer controle financeiro pessoal, incluindo gráficos explicativos e resumos concisos para uma compreensão aprimorada. O site oferece funcionalidades que permitem inserção, modificação e exclusão de gastos, além de um sistema de status para uma organização mais eficiente dos dados financeiros.` , 
    stacks : [
      { imageSrc: "/skills/nextjs.svg" ,  link: "https://nextjs.org/" , skillName : "NextJs" },
      { imageSrc: "/skills/tailwind.svg" , link: "https://tailwindcss.com/" , skillName : "Tailwind CSS"}
    
    ]},
    { image: "/project/mackup-church-app.svg" ,  link: "https://nodejs.org/en" , title : "Facilitando a Administração na Igreja" , description : `
    

    O aplicativo simplifica a gestão eclesiástica, com cadastro de membros, controle de frequência, eventos, contribuições, equipes voluntárias e comunicação. Adaptável e intuitivo, fortalece a conexão entre os membros da igreja.` , 
    stacks : [
      { imageSrc: "/skills/react-native.svg" ,  link: "https://reactnative.dev/" , skillName : "React Native" },
      { imageSrc: "/skills/nativewind.svg" , link: "https://www.nativewind.dev/" , skillName : "NativeWind"},
      { imageSrc: "/skills/expo.svg" , link: "https://expo.dev/" , skillName : "Expo"}
    
    ]},
   
    { image: "/project/mockup-docente.svg" ,  link: "https://nodejs.org/en" , title : "Contratação de Docentes" , description : `
    Um site web foi desenvolvido para simplificar a contratação de docentes, promovendo eficiência e praticidade no processo de recrutamento educacional. Ele oferece uma interface intuitiva para postagem de vagas, gerenciamento de candidatos e comunicação entre recrutadores e candidatos.` , 
    stacks : [
      { imageSrc: "/skills/nextjs.svg" ,  link: "https://nextjs.org/" , skillName : "NextJs" },
      { imageSrc: "/skills/tailwind.svg" , link: "https://tailwindcss.com/" , skillName : "Tailwind CSS"}
    
    ]},

    { image: "/project/mackup-login-animate.svg" ,  link: "https://nodejs.org/en" , title : "Tela de Login Animado" , description : `
    Esta tela de login apresenta um design animado e harmonioso, tornando-a mais atraente para o usuário.` , 
    stacks : [
      { imageSrc: "/skills/angular.svg" ,  link: "https://angular.io/" , skillName : "Angular" },
      { imageSrc: "/skills/sass.svg" , link: "https://sass-lang.com/" , skillName : "Sass/Scss"}
    
    ]},
  
  ]


  return (

          <section className="h-full w-full  dark:bg-dark-background bg-light-background  pt-12">
      <header className="flex justify-center ">
        <h1 className="text-5xl text-transparent font-bold bg-gradient-to-b from-[#5ea2ef] to-[#0072f5] bg-clip-text animate-gradient">Projetos</h1>
      </header>
      <div className='w-full h-full mt-10'>
      <Swiper
        effect={'coverflow'}
        spaceBetween={80}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        freeMode={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 0.5,
          slideShadows: false,
        }}
   
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper overflow-visible h-full w-full bg-gradient-to-left from-black to-transparent bg-none"
      >
        {projets.map((project, index) => (
           <SwiperSlide  key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 mt-20 my-9"><CardProject key={index} link={project.link} image={project.image} description={project.description} stacks={project.stacks} title={project.title}/></SwiperSlide>
      ))}
        
      </Swiper>
      </div>
  </section>

   
  )
}