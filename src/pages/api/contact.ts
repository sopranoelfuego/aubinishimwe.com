import { NextRequest, NextResponse } from 'next/server'

export default function (req: NextRequest, res: NextResponse) {
 let nodemailer = require('nodemailer')
 const transporter = nodemailer.createTransport({})
 console.log(req.body)
}
