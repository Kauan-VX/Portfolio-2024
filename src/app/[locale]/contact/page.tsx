"use client";
import HeaderTitle from "@/components/header-title";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Textarea } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { CONTACT } from "../../../../public/constants/contact";
import {
  fadeIn2,
  planetVariants,
  staggerContainer,
} from "../../../utils/motion";
import { MailIcon } from "./components/mail";
import { MailIconInput } from "./components/mail-icon";
import { MessageIconInput } from "./components/message-icon";
import { NameIconInput } from "./components/name-icon";
import { SendIcon } from "./components/send-icon";
import { SendLoading } from "./components/send-loading";

const CardSkill = dynamic(() => import("../../../components/card-skills"));

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();
  const t = useTranslations("Contact");

  const validationSchema = z.object({
    name: z.string().min(1, { message: t("form.messages_errors.name") }),
    message: z.string(),
    email: z
      .string()
      .min(1, { message: t("form.messages_errors.email.required") })
      .email({
        message: t("form.messages_errors.email.valid"),
      }),
  });
  type Person = z.infer<typeof validationSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Person>({
    resolver: zodResolver(validationSchema),
  });

  const resend = async (form: Person, event?: Event) => {
    setLoading(true);
    event?.preventDefault();
    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();

      if (data) {
        toast.success(t("toast.success"), {
          style: {
            borderRadius: "10px",
            background: theme === "dark" ? "#000000" : "#ffffff",
            border: `1.5px solid ${theme === "dark" ? "#ffffff" : "#000000"}`,
            color: theme === "dark" ? "#ffffff" : "#000000",
          },
        });
        reset();
        setLoading(false);
      } else {
        toast.error(t("toast.error_1"), {
          style: {
            borderRadius: "10px",
            background: theme === "dark" ? "#000000" : "#ffffff",
            border: `1.5px solid ${theme === "dark" ? "#ffffff" : "#000000"}`,
            color: theme === "dark" ? "#ffffff" : "#000000",
          },
        });
      }
    } catch (error) {
      toast.error(t("toast.error_2"), {
        style: {
          borderRadius: "10px",
          background: theme === "dark" ? "#000000" : "#ffffff",
          border: `1.5px solid ${theme === "dark" ? "#ffffff" : "#000000"}`,
          color: theme === "dark" ? "#ffffff" : "#000000",
        },
      });
    }
  };

  const onSubmit: SubmitHandler<Person> = (data) => {
    resend(data);
  };

  return (
    <section id="contact" className="overflow-x-hidden p-4">
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
          <div className="card-mail w-full max-w-[40rem] h-full  rounded-3xl bg-light-background-transparent  p-3 shadow-3xl dark:bg-dark-background-transparent flex flex-col">
            <h1 className="text-2xl font-semibold text-center my-4 text-light-text dark:text-dark-text">
              {t("form.contact_me")}
            </h1>

            <p className=" text-light-text dark:text-dark-text text-center text-lg">
              {t("form.text")}
              <a
                className="dark:text-dark-mail-color text-light-mail-color font-medium text-lg"
                href="mailto:kauanvieiraxavierdev@gmail.com?subject=Vim através do seu Portfólio"
              >
                kauanvieiraxavierdev@gmail.com
              </a>
              .
            </p>
            <form
              className="flex flex-col h-full gap-4 mt-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                type="name"
                placeholder={t("form.name")}
                {...register("name")}
                errorMessage={errors.name?.message}
                startContent={
                  <NameIconInput className="text-2xl text-default-400 pointer-events-none flex-shrink-0 mr-1" />
                }
              />

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
                  className="dark:bg-dark-mail-color bg-light-mail-color py-2 px-6 rounded-2xl shadow-none font-semibold text-base flex items-center"
                  variant="shadow"
                  endContent={
                    loading ? (
                      <SendLoading className="animate-spin h-5 w-5 text-current" />
                    ) : (
                      <SendIcon className="text-2xl  pointer-events-none flex-shrink-0 mr-1 dark:fill-dark-text fill-light-text" />
                    )
                  }
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
