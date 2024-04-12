"use client";
import HeaderTitle from "@/components/header-title";
import { Button, Input, Textarea } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { z } from "zod";
import { sendEmail } from "../../../../actions/sendEmail";
import { CONTACT } from "../../../../public/constants/contact";
import CardSkill from "../../../components/card-skills";
import {
  fadeIn2,
  planetVariants,
  staggerContainer,
} from "../../../utils/motion";
import { MailIcon } from "./mail";

export default function Contact() {
  const validationSchema = z.object({
    name: z.string().min(1, { message: "Firstname is required" }),
    message: z.string().min(1, { message: "Lastname is required" }),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
  });
  type Person = z.infer<typeof validationSchema>;
  const t = useTranslations("Contact");

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<Person>({
  //   resolver: zodResolver(validationSchema),
  // });

  // async function send() {
  //   "use server";
  //   const resend = new Resend("re_ffh5Hb2K_BJEvjAfQvYggdHhZgAuLSvnG");

  //   const { data } = await resend.emails.send({
  //     from: "kauanvieiraxavierdev@gmail.com",
  //     to: "kauanvieiraxavierk@gmail.com",
  //     subject: "Hello",
  //     react: React.createElement(EmailTemplate, {
  //       firstName: "a",
  //     }),
  //   });
  //   console.log(data);
  // }

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
          <div className="card-mail w-full max-w-[40rem] rounded-3xl bg-light-background-transparent  p-3 shadow-3xl dark:bg-dark-background-transparent ">
            <h1 className="text-2xl font-semibold text-center my-4 text-light-text dark:text-dark-text">
              {t("form.contact_me")}
            </h1>
            <form className="flex flex-col gap-4" action={sendEmail}>
              <Input
                classNames={{
                  label: "text-black/50 dark:text-white/90",
                  input: [
                    "bg-transparent",
                    "text-black/90 dark:text-white/90",
                    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                  ],
                  innerWrapper: "bg-transparent",
                  inputWrapper: [
                    "shadow-xl",
                    "bg-default-200/50",
                    "dark:bg-default/60",
                    "backdrop-blur-xl",
                    "backdrop-saturate-200",
                    "hover:bg-default-200/70",
                    "dark:hover:bg-default/70",
                    "group-data-[focused=true]:bg-default-200/50",
                    "dark:group-data-[focused=true]:bg-default/60",
                    "!cursor-text",
                  ],
                }}
                type="email"
                placeholder={t("form.email")}
                // {...register("email")}
                // errorMessage={errors.email?.message}
              />
              <Textarea
                placeholder={t("form.message")}
                classNames={{
                  label: "text-black/50 dark:text-white/90",
                  input: [
                    "bg-transparent",
                    "text-black/90 dark:text-white/90",
                    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                  ],
                  innerWrapper: "bg-yellow-500",
                  inputWrapper: [
                    "shadow-xl",
                    "bg-default-200/50",
                    "dark:bg-default/60",
                    "backdrop-blur-xl",
                    "backdrop-saturate-200",
                    "hover:bg-default-200/70",
                    "dark:hover:bg-default/70",
                    "group-data-[focused=true]:bg-default-200/50",
                    "dark:group-data-[focused=true]:bg-default/60",
                    "!cursor-text",
                  ],
                }}
                // {...register("message")}
                // errorMessage={errors.message?.message}
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
