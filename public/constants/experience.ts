"use client";

import { IExperience } from "../../src/components/card-experience";

export const translateExperience = (t: Function): IExperience[] => {
  return [
    {
      company_name: `Noclaf`,
      initial_date: t("experience.noclaf.initial_date"),
      finish_date: t("experience.noclaf.finish_date"),
      job_title: t("experience.noclaf.job_title"),
      job_description_1: t("experience.noclaf.job_description_1"),
      job_description_2: t("experience.noclaf.job_description_2"),
    },
  ];
};
