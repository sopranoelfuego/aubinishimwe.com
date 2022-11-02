import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default function (req: NextApiRequest, res: NextApiResponse) {
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
    return res.json({ success: false, message: error })
   } else {
    return res.json({ success: true, message: info })
   }
  })
 }
}
