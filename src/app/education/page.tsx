'use client'
import { slideIn } from '@/utils/motion';
import { motion } from 'framer-motion';
import CardEducation from "../components/card-education";

export default function Education(){
  return (
         <section id="education" className="min-h-[100vh] w-full flex-col justify-center items-center dark:bg-dark-background bg-light-background bg-green-400 p-4">
      <motion.header variants={slideIn('up' , 'easeOut' , 0.5 , 0.5 )} initial='hidden' whileInView={'show'} viewport={{ once: false , amount : 0.7}} className="flex justify-center ">
        <h1 className="title text-transparent font-bold bg-gradient-to-b from-[#e81123] to-[#fff100] bg-clip-text animate-gradient">Educação</h1>
      </motion.header>
      <div className="card flex w-full h-full justify-center items-center ">
      <CardEducation></CardEducation>
      </div>
    </section>
  )
}