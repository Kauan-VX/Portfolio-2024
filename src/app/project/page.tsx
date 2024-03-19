'use client'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import CardProject from '../components/card-project/card-project'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import '../../app/[locale]/globals.scss'

// import required modules
import { fadeIn } from '@/utils/motion'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import { PROJECTS } from '../../../public/constants/projects-obj'
import { TypingText } from '../components/ui/custom-texts'

export default function Project() {
  const [domLoaded, setDomLoaded] = useState(false);
  const t = useTranslations('Projects')

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <section
      id="projects"
      // className="h-heightLessNav  w-full  bg-light-background pt-20 dark:bg-dark-background p-4"
    >
      <motion.header
        variants={fadeIn('up', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center flex-col items-center"
      >
        <h1 className="title text-transparent font-bold bg-gradient-to-b from-[#5ea2ef] to-[#0072f5] bg-clip-text animate-gradient text-center">
{t('title')}
        </h1>
        <TypingText
          title={t('subtitle')}
          textStyles="dark:text-dark-text text-light-text font-semibold text-2xl text-center"
        />
      </motion.header>
      <div className="w-full h-full flex justify-center mdMax:hidden">
      {domLoaded && (
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
             )}
      </div>

      <div className="w-full h-full flex flex-col items-center justify-center flex-wrap gap-4 mt-10 md:hidden">
        {PROJECTS.map((project, index) => (
          <CardProject
            key={index}
            link={project.link}
            image={project.image}
            description={project.description}
            stacks={project.stacks}
            title={project.title}
          />
        ))}
      </div>
    </section>
  )
}
