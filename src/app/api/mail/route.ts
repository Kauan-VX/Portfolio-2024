import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(data: any) {
  console.log(data);

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "kauanvieiraxavierk@gmail.com",
      subject: "Hello world",
      react: "<h1>FEWF</h1>",
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
