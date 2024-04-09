"use server";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "../../../components/email-template/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(request: Request) {
  const { firstName } = await request.json();
  // const senderEmail = formData.email;
  // const message = formData.message;
  // const name = formData.name;

  // resend.emails.send({
  //   from: `${name} <${senderEmail}>`,
  //   to: "kauanvieiraxavierdev@gmail.com",
  //   reply_to: senderEmail,
  //   subject: message,
  //   react: EmailTemplate({ firstName: name }),
  //   headers: {
  //     Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
  //   },
  // });

  const { data } = await resend.emails.send({
    from: `kauanvieiraxavier@gmail.com`,
    to: "kauanvieiraxavierdev@gmail.com",
    reply_to: "kauanvieiraxavier@gmail.com",
    subject: "Hello",
    react: EmailTemplate({ firstName }),
    // headers: {
    //   Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    // },
  });

  console.log(data);

  return NextResponse.json({
    status: "Ok",
  });
}
