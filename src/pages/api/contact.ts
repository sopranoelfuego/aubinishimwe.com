import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default function (req: NextApiRequest, res: NextApiResponse) {
 console.log('process.env.email:', process.env.EMAIL)
 console.log('process.env.password:', process.env.PASSWORD)
 if (req.method === 'POST') {
  const transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
    user: `${process.env.EMAIL}`,
    pass: `${process.env.PASSWORD}`,
   },
  })

  const message = {
   from: req.body.email,
   to: `${process.env.EMAIL}`,
   subject: 'suggestion',
   text: `my name is ${req.body.name} and, ${req.body.suggestion}`,
  }

  transporter.sendMail(message, function (error, info) {
   if (error) {
    console.log(error)
    return res.json({ success: false, message: error })
   } else {
    console.log('info:', info)
    return res.json({ success: true, message: info })
   }
  })
 }
}
