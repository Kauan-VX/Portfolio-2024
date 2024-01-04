import { Input, Textarea, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import Linkedin from "/public/contact/linkedin.svg";
import Mail from "/public/contact/mail.svg";
import MailSection from "/public/contact/mailSection.svg";
import Telegram from "/public/contact/telegram.svg";

export default function Connect(){
  return (
    <section className="min-h-[100vh]  w-full dark:bg-dark-background bg-light-background pt-12">
     <header className="flex justify-center ">
        <h1 className="text-5xl text-transparent font-bold bg-gradient-to-b from-[#FF6F5B] to-[#FFB457] bg-clip-text animate-gradient">Conecte-se a mim:</h1>
      </header>
      <ul className="w-full flex justify-center items-center flex-wrap gap-[1rem] my-10 px-4">
      <Tooltip content="Kauan Vieira Xavier"><li><Link className="link-skills"  href="#"><Image src={Linkedin} alt="Linkedin"/> Linkedin</Link></li></Tooltip>
      <li><Link className="link-skills"  href="#"><Image src={Telegram} alt="Telegram"/> Telegram</Link></li>
      <li><Link className="link-skills"  href="#"><Image src={Mail} alt="Email"/> Email</Link></li>
      </ul>
      <div className="contact flex w-full">
        <div className="left w-1/2 flex justify-center"><Image src={MailSection} alt="Mail"/></div>
        <div className="right w-1/2">
          <div className="card-mail  dark:bg-dark-background-transparent bg-light-background-transparent  shadow-3xl p-3 rounded-3xl ">
            <h1>Entre em contato comigo</h1>
            <span>    
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input
      isDisabled
      type="name"
      label="Nome"
      className="max-w-xs"
      
    />
    </div>
            <Input
      isDisabled
      type="email"
      label="Email"
      className="max-w-xs"/></span>
         <Textarea
      label="Descrição"
      placeholder="Escreva uma mensagem aqui"
      className="max-w-xs"
    />
          </div>
        </div>
      </div>
    </section>
  )
}