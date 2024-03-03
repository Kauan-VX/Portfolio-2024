import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

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
    <Swiper
    
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={'auto'}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    pagination={true}
    modules={[EffectCoverflow, Pagination]}
    className="mySwiper w-full pt-[50px] pb-[50px]"
  >
     <SwiperSlide className='w-[300px] h-[300px] bg-cover Class
Properties
bg-bottom	background-position: bottom;
bg-center  '>
          <img className='block max-w-96 w-full' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className='w-[300px] h-[300px] bg-cover Class
Properties
bg-bottom	background-position: bottom;
bg-center  '>
          <img className='block max-w-96 w-full' src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
{/* {projectData.map((project , index) => (
  <CardProject
  key={index}
  imageBg={project.imageBg}
  name={project.name}

  index={index}
  />
  
  ))} */}
  </Swiper>
      //    <section className="min-h-[100vh] w-full dark:bg-dark-background bg-light-background pt-12">
      // <header className="flex justify-center ">
      //   <h1 className="text-5xl text-transparent font-bold bg-gradient-to-b from-[#5ea2ef] to-[#0072f5] bg-clip-text animate-gradient">Projetos</h1>
      // </header>
      // <div className="card p-7 flex mt-16 items-center justify-center gap-6">
  
      // </div>
    // </section>
  )
}