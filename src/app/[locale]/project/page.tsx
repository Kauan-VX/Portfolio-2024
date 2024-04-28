"use client";
import HeaderTitle from "@/components/header-title";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { translateProject } from "../../../../public/constants/projects-obj";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

const CardProject = dynamic(
  () => import("../../../components/card-project/card-project")
);

export default function Project() {
  const [domLoaded, setDomLoaded] = useState(false);
  const t = useTranslations("Projects");
  const constants = useTranslations("Constatants");
  const translateProjectList = translateProject(constants);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <section
      id="projects"
      className="flex justify-center flex-col items-center overflow-x-hidden p-4"
    >
      <HeaderTitle
        translationMain="Projects"
        translationTitle="title"
        translationSubtitle="subtitle"
      />

      <div className="w-full h-full flex justify-center mdMax:hidden">
        {domLoaded && (
          <Swiper
            effect={"coverflow"}
            spaceBetween={80}
            grabCursor={true}
            centeredSlides={true}
            initialSlide={2}
            slidesPerView={"auto"}
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
            {translateProjectList.map((project, index) => (
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
        {translateProjectList.map((project, index) => (
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
  );
}
