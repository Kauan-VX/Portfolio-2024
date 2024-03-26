"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { CONTACT } from "../../../public/constants/contact";
import {
  fadeIn,
  fadeIn2,
  planetVariants,
  staggerContainer,
} from "../../../utils/motion";
import { sendEmail } from "../api/send/send-email";
import CardSkill from "../components/card-skills";
import { TypingText } from "../components/ui/custom-texts";
import { MailIcon } from "./mail";

export default function Connect() {
  const validationSchema = z.object({
    name: z.string().min(1, { message: "Firstname is required" }),
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
    formState: { errors },
  } = useForm<Person>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<Person> = (data) => sendEmail(data);

  return (
    <section id="connect">
      <motion.header
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center flex-col items-center"
      >
        <h1
          className="animate-gradient bg-gradient-to-b from-[#FF6F5B] to-[#FFB457] bg-clip-text
         title font-bold text-transparent text-center"
        >
          {t("title")}
        </h1>
        <TypingText
          title={t("subtitle")}
          textStyles="dark:text-dark-text text-light-text font-semibold text-2xl text-center"
        />
      </motion.header>
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
        viewport={{ once: false, amount: 0.25 }}
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
          <div className="card-mail w-full max-w-[40rem] rounded-3xl bg-light-background-transparent  p-3 shadow-3xl dark:bg-dark-background-transparent ">
            <h1 className="text-2xl font-semibold text-center my-4 text-light-text dark:text-dark-text">
              {t("form.contact_me")}
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <span className="flex w-full items-center justify-between gap-4 mb-4 smMax:flex-col">
                <input
                  className="dark:bg-dark-background-transparent bg-light-background-transparent outline-none shadow-3xl p-4 w-[50%] rounded-2xl smMax:w-full"
                  type="text"
                  placeholder={t("form.name")}
                  {...register("name")}
                />

                <input
                  className="dark:bg-dark-background-transparent bg-light-background-transparent outline-none shadow-3xl p-4  w-[50%] rounded-2xl smMax:w-full"
                  type="email"
                  placeholder={t("form.email")}
                  {...register("email")}
                />
              </span>
              <textarea
                placeholder={t("form.message")}
                className="w-full dark:bg-dark-background-transparent bg-light-background-transparent  outline-none shadow-3xl p-4 rounded-2xl resize-none"
                {...register("message")}
              />
              <span className="w-full flex justify-end">
                <Button
                  type="submit"
                  className="dark:bg-dark-mail-color bg-light-mail-color py-2 px-6 rounded-2xl shadow-none"
                  variant="shadow"
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
