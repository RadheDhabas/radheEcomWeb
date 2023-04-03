import { SMTPClient } from 'emailjs'; 
import WelcomeEmail from '@/Components/WelEmail';
import type { NextApiRequest, NextApiResponse } from 'next'
import { useRouter } from 'next/router';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   
  const {items, user } = req.body; 
  const total_cartvalue = items.reduce((a: any, b: any) => a + b.quantity * b.price, 0);
  const html_content = items.map((i:any)=>` 
  <tr> 
  <td style="background-color: #F5F9FE;border: 1px solid #BCDEFC;border-radius: 5px;padding: 10px;margin-bottom: 10px;">
  <table style="width:100%">
  <tr>
  <td style="display:inline-block;vertical-align:middle;padding-right:20px">
  <img src=${i.image} style="max-width:70px;width:100%" alt="" />
 </td>  
 <td  style="width:45%;display:inline-block;vertical-align:middle;padding-right:30px">${i.title} <br><br> Quantity: ${i.quantity}</td>  
 <td style="display:inline-block;vertical-align:middle;"> Total Price <br><br> ₹${i.price * i.quantity}</td>
  </tr>
  </table> 
  </td>
  </tr>
 `);  
 const html = html_content.reduce((a:any,b:any)=>a+b); 
  const client = new SMTPClient({
    user: process.env.mail,
    password: process.env.password,
    host: 'smtp.gmail.com',
    ssl: true
  });

  try {
    const message = client.sendAsync({
      text: `username:${user.name}}`,
      from: `${process.env.mail}`,
      to: user.email,
      subject: 'testing emailjs', 
      attachment: [
        { data: `<html>  
        <div style="margin-bottom:10px;color:#262626;font:weight:600;font-size:18px">
        Order placed by: ${user.name} <br>
        Email address: ${user.email}
        </div>
        <div> 
        <table style="width:100%;max-width:600px;margin:auto;">${html}
        <tr> 
        <td style="background-color: #F5F9FE;border: 1px solid #BCDEFC;border-radius: 5px;padding: 10px;margin-bottom: 10px;">
        Total Cart Value: <span style="font-weight:700;font-size:20px;color:#262626">${total_cartvalue}</span>
        </td>
        </tr>
        </table> 
        </div> 
      </html>`, alternative: true }, 
      ],
    });
      res.status(200).end(JSON.stringify({ message: {
  name:user.name,
     email:user.email,
     total_cartvalue:total_cartvalue
  } }))
  }
  catch (e) {
    res.status(400).end(JSON.stringify({ message: "Error" }))
    return;
  }

 
}

 


