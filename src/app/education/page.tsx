'use client'
import { fadeIn } from '@/utils/motion';
import { motion } from 'framer-motion';
import CardEducation from "../components/card-education";

export default function Education(){
  return (
         <section id="education" className="h-heightLessNav  w-full flex-col justify-center items-center dark:bg-dark-background bg-light-background p-4">
      <motion.header variants={fadeIn('up' , 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false , amount : 0.7}} className="flex justify-center ">
        <h1 className="title text-transparent font-bold bg-gradient-to-b from-[#e81123] to-[#fff100] bg-clip-text animate-gradient">Educação</h1>
      </motion.header>
      <div className="card flex w-full h-full justify-center items-center ">
      <CardEducation></CardEducation>
      </div>
      <motion.header variants={fadeIn('up' , 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false , amount : 0.7}} className="flex justify-center ">
        <h1 className="title text-transparent font-bold bg-gradient-to-b from-[#737dfe] to-[#ffcac9] bg-clip-text animate-gradient">Experiência</h1>
      </motion.header>
      <div className="card flex w-full h-full justify-center items-center ">
      <CardEducation></CardEducation>
      </div>
      <motion.header variants={fadeIn('up' , 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false , amount : 0.7}} className="flex justify-center ">
        <h1 className="title text-transparent font-bold bg-gradient-to-b from-[#df98fa] to-[#9055ff] bg-clip-text animate-gradient">Certificados</h1>
      </motion.header>
      <div className="card flex w-full h-full justify-center items-center ">
      <CardEducation></CardEducation>
      </div>
      
    </section>
  )
}