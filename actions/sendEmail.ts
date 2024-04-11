"use server";
import { EmailTemplate } from "@/components/email-template/email-template";
import { getErrorMessage, validateString } from "@/utils/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface IForm {
  email: string;
  message: string;
  name: string;
}

export const sendEmail = async (formData: IForm) => {
  const senderEmail = formData.email;
  const message = formData.message;
  const name = formData.name;

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    resend.emails.send({
      from: `${name} <${senderEmail}>`,
      to: "kauanvieiraxavierdev@gmail.com",
      reply_to: senderEmail,
      subject: message,
      react: React.createElement(EmailTemplate, {
        firstName: name,
      }),
    });
    console.log("enviouuuuuuu");
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
