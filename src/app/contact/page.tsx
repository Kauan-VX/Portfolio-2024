import { Button } from '@nextui-org/react';
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { MailIcon } from './mail';
import Linkedin from '/public/contact/linkedin.svg';
import Mail from '/public/contact/mail.svg';
import Telegram from '/public/contact/telegram.svg';

export default function Connect() {

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
    <section className="min-h-[100vh] w-full overflow-hidden bg-light-background pt-20 dark:bg-dark-background">
      <header className="flex justify-center ">
        <h1 className="animate-gradient bg-gradient-to-b from-[#FF6F5B] to-[#FFB457] bg-clip-text text-5xl font-bold text-transparent">
          Conecte-se a mim:
        </h1>
      </header>
      <ul className="my-10 flex w-full flex-wrap items-center justify-center gap-[1rem] px-4">
          <li>
            <Link className="link-skills" href="#">
              <Image src={Linkedin} alt="Linkedin" /> Linkedin
            </Link>
          </li>
        <li>
          <Link className="link-skills" href="#">
            <Image src={Telegram} alt="Telegram" /> Telegram
          </Link>
        </li>
        <li>
          <Link className="link-skills" href="#">
            <Image src={Mail} alt="Email" /> Email
          </Link>
        </li>
      </ul>
      <div className="contact flex w-full">
        <motion.div variants={textVariants} initial='initialLeft'     whileInView="animateLeft"
      viewport={{
        once: true,
      }} className="left flex w-1/2 justify-center">
        <MailIcon/>
        </motion.div>
        <motion.div  variants={textVariants} initial='initialRight'     whileInView="animateRight"
      viewport={{
        once: true,
      }} className="right flex w-1/2 justify-center p-8">
          <div className="card-mail w-full max-w-[40rem] rounded-3xl bg-light-background-transparent  p-3 shadow-3xl dark:bg-dark-background-transparent">
            <h1 className="text-2xl font-semibold text-center my-4 text-light-text dark:text-dark-text">
              Entre em contato comigo
            </h1>
            
            <span className='flex w-full items-center justify-between gap-4 mb-4'>
              <input className='dark:bg-dark-background-transparent bg-light-background-transparent outline-none shadow-3xl p-4 w-[50%] rounded-2xl' type="Nome" placeholder='Nome' />
              <input className='dark:bg-dark-background-transparent bg-light-background-transparent outline-none shadow-3xl p-4  w-[50%] rounded-2xl' type="Nome" placeholder='Nome' />
            </span>

            <textarea
              placeholder="Escreva uma mensagem aqui"
              className="w-full dark:bg-dark-background-transparent bg-light-background-transparent  outline-none shadow-3xl p-4 rounded-2xl resize-none"
            />
            <span className='w-full flex justify-end'>
             <Button className='dark:bg-dark-mail-color bg-light-mail-color py-2 px-6 rounded-2xl ' color="primary" variant="shadow">
        Enviar
      </Button> 
      </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
