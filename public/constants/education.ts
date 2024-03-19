"use client"

import { IEducation } from "@/app/components/card-education"



export const translateEducation = (t : any) : IEducation[] => {
  return [
    {
      initial_date :  t('education.computer_science.initial_date'),
    finish_date: t('education.computer_science.finish_date'),
    higher_education :  t('education.computer_science.higher_education'),
    institution :  t('education.computer_science.institution'),
    location :  t('education.computer_science.location'),
    title :  t('education.computer_science.title'),
    type :  t('education.computer_science.type'),
    },
  ] 
}
