"use client";
import HeaderTitle from "@/components/header-title";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Textarea } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { CONTACT } from "../../../../public/constants/contact";
import CardSkill from "../../../components/card-skills";
import {
  fadeIn2,
  planetVariants,
  staggerContainer,
} from "../../../utils/motion";
import { MailIcon } from "./components/mail";
import { MailIconInput } from "./components/mail-icon";
import { MessageIconInput } from "./components/message-icon";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const validationSchema = z.object({
    message: z.string().min(1, { message: "Lastname is required" }),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
  });
  type Person = z.infer<typeof validationSchema>;
  const t = useTranslations("Contact");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Person>({
    resolver: zodResolver(validationSchema),
  });

  const resend = async (data: Person, event?: any) => {
    setLoading(true);
    event?.preventDefault();
    const email = "kauanvieiraxavierk@gmail.com";
    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (data) {
        toast.success("Email enviado com sucesso");
        reset();
        setLoading(false);
      } else {
        toast.error("Ops, tivemos um erro");
      }
    } catch (error: any) {
      toast.error("Nem chegamos a tentar enviar");
    }
  };

  const onSubmit: SubmitHandler<Person> = (data) => {
    // Chamada da função resend
    resend(data);
  };

  return (
    <section id="connect" className="overflow-x-hidden">
      <HeaderTitle
        translationMain="Contact"
        translationTitle="title"
        translationSubtitle="subtitle"
      />

      <div className="flex flex-row items-center justify-center flex-wrap  gap-10 my-10 w-full">
        {CONTACT.map((skill, index) => (
          <CardSkill
            id={index}
            key={index}
            imageSrc={skill.imageSrc}
            link={skill.link}
            skillName={skill.skillName}
            index={index}
          />
        ))}
      </div>
      <motion.div
        variants={staggerContainer(1, 2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="contact mt-28 flex w-full lgMax:flex-col lgMax:justify-center lgMax:items-center"
      >
        <motion.div
          variants={planetVariants("left")}
          className="left flex w-1/2 justify-center lgMax:w-full"
        >
          <MailIcon />
        </motion.div>
        <motion.div
          variants={fadeIn2("left", "tween", 0.2, 1)}
          className="right flex w-1/2 justify-center p-8 lgMax:w-full lgMax:p-0"
        >
          <div className="card-mail w-full max-w-[40rem] h-full max-h-[300px] rounded-3xl bg-light-background-transparent  p-3 shadow-3xl dark:bg-dark-background-transparent flex flex-col">
            <h1 className="text-2xl font-semibold text-center my-4 text-light-text dark:text-dark-text">
              {t("form.contact_me")}
            </h1>
            <form
              className="flex flex-col h-full gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                type="email"
                placeholder={t("form.email")}
                {...register("email")}
                errorMessage={errors.email?.message}
                startContent={
                  <MailIconInput className="text-2xl text-default-400 pointer-events-none flex-shrink-0 mr-1" />
                }
              />

              <Textarea
                placeholder={t("form.message")}
                className="h-32! "
                {...register("message")}
                errorMessage={errors.message?.message}
                startContent={
                  <MessageIconInput className="text-2xl text-default-400 pointer-events-none flex-shrink-0 mr-1" />
                }
              />
              <span className="w-full flex justify-end">
                <Button
                  type="submit"
                  className="dark:bg-dark-mail-color bg-light-mail-color py-2 px-6 rounded-2xl shadow-none font-semibold text-base"
                  variant="shadow"
                  isLoading={loading}
                >
                  {t("form.submit")}
                </Button>
              </span>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
