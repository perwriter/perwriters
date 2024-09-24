import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(req: Request) {
  if (req.method === "POST") {

    try {

    const {
      first_name,
      last_name,
      email,
     
      company_name,
      help,
      company_size,
      info,
    } = await req.json();


      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "perwriters@gmail.com",
          pass: "bsel kcxt drvb srcx",
        },
      });

      const mailOptions = { 
        from: email,
        to: "perwriters@gmail.com",
        subject: "Contact Form Submission",
        html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h1 style="background-color: #4CAF50; color: white; padding: 10px 20px;">Contact Form Submission</h1>
                <div style="padding: 20px; border: 1px solid #ddd; background-color: #f9f9f9;">
                    <p style="font-size: 16px;"><strong>First Name:</strong> ${first_name}</p>
                    <p style="font-size: 16px;"><strong>Last Name:</strong> ${last_name}</p>
                    <p style="font-size: 16px;"><strong>Work Email:</strong> <a href="mailto:${email}" style="color: #4CAF50;">${email}</a></p>
                    <p style="font-size: 16px;"><strong>Company Name:</strong> ${company_name}</p>
                    <p style="font-size: 16px;"><strong>Company Size:</strong> ${company_size}</p>
                    <p style="font-size: 16px;"><strong>Help Needed:</strong> ${help}</p>
                    <p style="font-size: 16px;"><strong>Additional Info:</strong> ${info}</p>
                </div>
                <p style="font-size: 14px; color: #999; text-align: center;">This is an automated message from your website's contact form.</p>
            </div>
        `,
    };
    

 
      await transporter.sendMail(mailOptions);

      return NextResponse.json("email has been sent");
    } catch (error) {
      return NextResponse.json("email has not been sent");
    }
  } else {
    return NextResponse.json('method not allowed');
  }

}