"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { translateCertificate } from "../../../../public/constants/certificate";
import { translateEducation } from "../../../../public/constants/education";
import { translateExperience } from "../../../../public/constants/experience";
import { fadeIn } from "../../../utils/motion";
import CardCertificate from "../../../components/card-certificate";
import CardEducation from "../../../components/card-education";
import CardExperience from "../../../components/card-experience";

export default function Education() {
  const ed = useTranslations("Education");
  const ex = useTranslations("Experience");
  const ce = useTranslations("Certificate");
  const constants = useTranslations("Constatants");
  const translateExperienceList = translateExperience(constants);
  const translateCertificateList = translateCertificate(constants);
  const translateEducationList = translateEducation(constants);

  return (
    <section id="education">
      <motion.header
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center p-"
      >
        <h1 className="title text-transparent font-bold bg-gradient-to-b from-[#e81123] to-[#fff100] bg-clip-text animate-gradient my-12">
          {ed("title")}
        </h1>
      </motion.header>
      <div className="card flex w-full h-full justify-center items-center ">
        {translateEducationList.map((education, index) => (
          <CardEducation
            key={index}
            finish_date={education.finish_date}
            initial_date={education.initial_date}
            higher_education={education.higher_education}
            institution={education.institution}
            location={education.location}
            title={education.title}
            type={education.type}
          />
        ))}
      </div>
      <motion.header
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center "
      >
        <h1 className="title text-transparent font-bold bg-gradient-to-b from-[#737dfe] to-[#ffcac9] bg-clip-text animate-gradient my-12">
          {ex("title")}
        </h1>
      </motion.header>
      <div className="card flex w-full h-full justify-center items-center ">
        {translateExperienceList.map((experience, index) => (
          <CardExperience
            key={index}
            company_name={experience.company_name}
            initial_date={experience.initial_date}
            finish_date={experience.finish_date}
            job_title={experience.job_title}
            job_description_1={experience.job_description_1}
            job_description_2={experience.job_description_2}
          />
        ))}
      </div>
      <motion.header
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center "
      >
        <h1 className="title text-transparent font-bold bg-gradient-to-b from-[#df98fa] to-[#9055ff] bg-clip-text animate-gradient my-12">
          {ce("title")}
        </h1>
      </motion.header>
      <div className="card flex w-full h-full justify-center items-center gap-8 flex-wrap">
        {translateCertificateList.map((certificate, index) => (
          <CardCertificate
            key={index}
            platform={certificate.platform}
            title={certificate.title}
          />
        ))}
      </div>
    </section>
  );
}
