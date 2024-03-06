'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import CardProject from '../components/card-project/card-project'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import '../../app/globals.scss'

// import required modules
import { useEffect, useState } from 'react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import { PROJECTS } from '../constants/projects-obj'

export default function Project() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Limpe o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Executa apenas uma vez após a montagem inicial

  const isSmallScreen = windowSize.width < 768;
  return (
    <section id='projects' className="min-h-[100vh] w-full  bg-light-background pt-20 dark:bg-dark-background p-4">
      <header className="flex justify-center">
        <h1 className="text-5xl text-transparent font-bold bg-gradient-to-b from-[#5ea2ef] to-[#0072f5] bg-clip-text animate-gradient text-center">
          Projetos
        </h1>
      </header>
      {!isSmallScreen && (
      <div className="w-full h-full flex justify-center">
        <Swiper
          effect={'coverflow'}
          spaceBetween={80}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={2}
          slidesPerView={'auto'}
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
          {PROJECTS.map((project, index) => (
            <SwiperSlide
              key={index}
              className="md:basis-1/2 mdMax:!mr-0 mdMax:!flex mdMax:!justify-center lg:basis-1/3 mt-20 my-9 "
            >
              <CardProject
                key={index}
                link={project.link}
                image={project.image}
                description={project.description}
                stacks={project.stacks}
                title={project.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      )}
      {isSmallScreen && (

      <div className="w-full h-full flex justify-center">
        
        <Swiper
         navigation={true} modules={[Navigation , Pagination]} 
         freeMode={true}
         pagination={true}
          className="mySwiper overflow-visible h-full w-full bg-gradient-to-left from-black to-transparent bg-none"
        >
          {PROJECTS.map((project, index) => (
            <SwiperSlide
            
              key={index}
              className="md:basis-1/2 mdMax:!mr-0 mdMax:!flex mdMax:!justify-center lg:basis-1/3 mt-20 my-9 "
            >
              <CardProject
                key={index}
                link={project.link}
                image={project.image}
                description={project.description}
                stacks={project.stacks}
                title={project.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      )}
    </section>
  )
}
