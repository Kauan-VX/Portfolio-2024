import EmailTemplate from "@/components/email-template/email-template";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY || "re_SGRC2rJN_KWJmmpzQ33scQgCickqhSbjs"
);

export async function POST(request: Request) {
  const { name, message, email } = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfólio <onboarding@resend.dev>",
      to: "kauanvieiraxavierk@gmail.com",
      reply_to: email,
      subject: `${name} mandou mensagem através do Portfólio!`,
      react: EmailTemplate({ name, message }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
