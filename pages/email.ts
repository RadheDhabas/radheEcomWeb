import { SMTPClient } from 'emailjs'; 
import type { NextApiRequest, NextApiResponse } from 'next'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const {items, user } = req.body; 
  const client = new SMTPClient({
    user: process.env.mail,
    password: process.env.password,
    host: 'smtp.gmail.com',
    ssl: true
  });

  try {
    const message = client.sendAsync({
      text: `username:${user.name} , ${items.map((i:any)=>i.title)}`,
      from: `${process.env.mail}`,
      to: user.email,
      subject: 'testing emailjs'
      ,
    });
  }
  catch (e) {
    res.status(400).end(JSON.stringify({ message: "Error" }))
    return;
  }

  res.status(200).end(JSON.stringify({ message: 'Send Mail' }))
}