"use server";
import { EmailTemplate } from "@/components/email-template/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: any) => {
  const senderEmail = formData.email;
  const message = formData.message;
  const name = formData.name;

  resend.emails.send({
    from: `${name} <${senderEmail}>`,
    to: "kauanvieiraxavierdev@gmail.com",
    reply_to: senderEmail,
    subject: message,
    react: EmailTemplate({ firstName: name }),
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
  });
};
