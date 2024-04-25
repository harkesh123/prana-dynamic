import type { NextApiRequest, NextApiResponse } from "next";

export default function ( req: NextApiRequest,
    res: NextApiResponse<any>) {
    
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.resend.com",
      auth: {
        user: 'resend',
        pass: process.env.NEXT_RESEND_API_KEY,
      },
      secure: true,
    })
    const mailData = {
        from: 'getintouch@pranawear.com',
        to: ['info@pranasystems.in'],
        subject: 'Hello New Contact From your website',
      html:`<div><p><strong>Name</strong>:-${req.body.formName}</p><p><strong>Email ID</strong>:-${req.body.formEmail}</p><p><strong>Phone Number</strong>:- +91 -${req.body.formNumber}</p></div>`
    }
    transporter.sendMail(mailData, function (err:any, info:any) {
      if(err)
        console.log(err)
      if(info)
      res.status(200).json({ message: "Email send success" });
    })
    res.status(200)
  }