"use server"
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const sendEmail = async(formData : any) => {
  try {
    const resend = new Resend("re_e1V5fnGB_B4C3Ks7cAtmKnwpo7Fr6vtsv")
    const {data} = await resend.emails.send({
      from: "kauanvieiraxavierdev@gmail.com",
      to: "kauanvieiraxavierdev@gmail.com",
      subject: "kauanvieiraxavierdev@gmail.com",
      html: 'mock',
    })  
    console.log('foi')

    return NextResponse.json({message : "Email sent" , data})
  } catch (err){
    console.log(err)
    return NextResponse.json({err})
  }
}