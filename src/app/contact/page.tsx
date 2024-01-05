import { Input, Textarea } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { MailIcon } from './mail'
import Linkedin from '/public/contact/linkedin.svg'
import Mail from '/public/contact/mail.svg'
import Telegram from '/public/contact/telegram.svg'

export default function Connect() {
  return (
    <section className="min-h-[100vh]  w-full bg-light-background pt-12 dark:bg-dark-background">
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
        <div className="left flex w-1/2 justify-center">
        <MailIcon/>
        </div>
        <div className="right flex w-1/2 justify-center">
          <div className="card-mail w-full max-w-[40rem] rounded-3xl bg-light-background-transparent  p-3 shadow-3xl dark:bg-dark-background-transparent">
            <h1 className="text-2xl font-semibold text-light-text dark:text-dark-text">
              Entre em contato comigo
            </h1>
            <span className='flex w-full items-center gap-6'>
              <Input type="Nome" placeholder='Nome' />
              <Input type="Nome" placeholder='Nome' />
            </span>

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
