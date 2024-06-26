"use client";
import HeaderTitle from "@/components/header-title";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { translateCertificate } from "../../../../public/constants/certificate";
import { translateEducation } from "../../../../public/constants/education";
import { translateExperience } from "../../../../public/constants/experience";

const CardExperience = dynamic(
  () => import("../../../components/card-experience")
);

const CardEducation = dynamic(
  () => import("../../../components/card-education")
);

const CardCertificate = dynamic(
  () => import("../../../components/card-certificate")
);

export default function Education() {
  const constants = useTranslations("Constatants");
  const translateExperienceList = translateExperience(constants);
  const translateCertificateList = translateCertificate(constants);
  const translateEducationList = translateEducation(constants);

  return (
    <section id="education" className="p-4">
      <HeaderTitle
        translationMain="Education"
        translationTitle="title"
        translationSubtitle="subtitle"
      />

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
      <HeaderTitle
        translationMain="Experience"
        translationTitle="title"
        translationSubtitle="subtitle"
      />

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
      <HeaderTitle
        translationMain="Certificate"
        translationTitle="title"
        translationSubtitle="subtitle"
      />
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
