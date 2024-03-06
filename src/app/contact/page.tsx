import { Button } from '@nextui-org/react';
import { motion } from "framer-motion";
import CardSkill from '../components/card-skills';
import { MailIcon } from './mail';

export default function Connect() {

  const contact = [
    { imageSrc: "/contact/mail.svg" ,  link: "https://nodejs.org/en" , skillName : "E-mail"},
    { imageSrc: "/contact/linkedin.svg" ,  link: "https://www.mysql.com/" , skillName : "Linkedin"},
    { imageSrc: "/skills/github.svg" ,  link: "https://github.com/Kauan-VX" , skillName : "GitHub"},
  
  ]

  const textVariants = {
    initialLeft: {
      x : -500,
      opacity: 0,
    },
    animateLeft: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
      }
    },
    initialRight: {
      x: 500,
      opacity: 0,
    },
    animateRight: {
      x : 0,
      opacity: 1,
      transition: {
        duration: 1.5,
      }
    },
 
  }
  return (
    <section className="min-h-[100vh] w-full  bg-light-background pt-20 dark:bg-dark-background overflow-hidden p-4">
      <header className="flex justify-center ">
        <h1 className="animate-gradient bg-gradient-to-b from-[#FF6F5B] to-[#FFB457] bg-clip-text
         text-5xl font-bold text-transparent text-center">
          Conecte-se a mim:
        </h1>
      </header>
      <div className="flex flex-row items-center justify-center flex-wrap  gap-10 my-10 w-full">
      {contact.map((skill, index) => (
        <CardSkill
          key={index}
          imageSrc={skill.imageSrc}
              link={skill.link}
          skillName={skill.skillName}
          index={index}
        />
      ))}
    </div>
      <div className="contact mt-28 flex w-full lgMax:flex-col lgMax:justify-center lgMax:items-center">
        <motion.div variants={textVariants} initial='initialLeft'     whileInView="animateLeft"
      viewport={{
        once: true,
      }} className="left flex w-1/2 justify-center lgMax:w-full">
        <MailIcon/>
        </motion.div>
        <motion.div  variants={textVariants} initial='initialRight' whileInView="animateRight"
      viewport={{
        once: true,
      }} className="right flex w-1/2 justify-center p-8 lgMax:w-full">
          <div className="card-mail w-full max-w-[40rem] rounded-3xl bg-light-background-transparent  p-3 shadow-3xl dark:bg-dark-background-transparent ">
            <h1 className="text-2xl font-semibold text-center my-4 text-light-text dark:text-dark-text">
              Entre em contato comigo
            </h1>
            
            <span className='flex w-full items-center justify-between gap-4 mb-4 smMax:flex-col'>
              <input className='dark:bg-dark-background-transparent bg-light-background-transparent outline-none shadow-3xl p-4 w-[50%] rounded-2xl smMax:w-full' type="Nome" placeholder='Nome' />
              <input className='dark:bg-dark-background-transparent bg-light-background-transparent outline-none shadow-3xl p-4  w-[50%] rounded-2xl smMax:w-full' type="Nome" placeholder='E-mail para contato' />
            </span>

            <textarea
              placeholder="Escreva uma mensagem aqui"
              className="w-full dark:bg-dark-background-transparent bg-light-background-transparent  outline-none shadow-3xl p-4 rounded-2xl resize-none"
            />
            <span className='w-full flex justify-end'>
             <Button className='dark:bg-dark-mail-color bg-light-mail-color py-2 px-6 rounded-2xl shadow-none'  variant="shadow">
        Enviar
      </Button> 
      </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
