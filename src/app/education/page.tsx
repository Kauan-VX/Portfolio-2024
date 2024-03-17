'use client'
import { fadeIn } from '@/utils/motion'
import { motion } from 'framer-motion'
import CardCertificate from '../components/card-certificate'
import CardEducation from '../components/card-education'
import CardExperience from '../components/card-experience'
import { CERTIFICATE } from '../constants/certificate'
import { EXPERIENCE } from '../constants/experience'

export default function Education() {
  return (
    <section
      id="education"
      // className="h-heightLessNav  w-full flex-col justify-center items-center dark:bg-dark-background bg-light-background p-4"
    >
      <motion.header
        variants={fadeIn('up', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center p-"
      >
        <h1 className="title text-transparent font-bold bg-gradient-to-b from-[#e81123] to-[#fff100] bg-clip-text animate-gradient my-12">
          Educação
        </h1>
      </motion.header>
      <div className="card flex w-full h-full justify-center items-center ">
        <CardEducation></CardEducation>
      </div>
      <motion.header
        variants={fadeIn('up', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center "
      >
        <h1 className="title text-transparent font-bold bg-gradient-to-b from-[#737dfe] to-[#ffcac9] bg-clip-text animate-gradient my-12">
          Experiência
        </h1>
      </motion.header>
      <div className="card flex w-full h-full justify-center items-center ">
        {EXPERIENCE.map((experience, index) => (
          <CardExperience
            key={index}
            company_name={experience.company_name}
            initial_date={experience.initial_date}
            finish_date={experience.finish_date}
            job_title={experience.job_title}
            job_description={experience.job_description}
          />
        ))}
      </div>
      <motion.header
        variants={fadeIn('up', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center "
      >
        <h1 className="title text-transparent font-bold bg-gradient-to-b from-[#df98fa] to-[#9055ff] bg-clip-text animate-gradient my-12">
          Certificados
        </h1>
      </motion.header>
      <div className="card flex w-full h-full justify-center items-center gap-8 flex-wrap">
        {CERTIFICATE.map((certificate, index) => (
          <CardCertificate
            key={index}
            platform={certificate.platform}
            title={certificate.title}
          />
        ))}
      </div>
    </section>
  )
}
