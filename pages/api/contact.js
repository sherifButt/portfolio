import nodemailer from "nodemailer";


const mail = {
    port: process.env.MAIL_PORT,
    host: process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
    secure: true,
  }

const contact = (req, res) => {
   const transporter = nodemailer.createTransport(mail);
   const data = req.body;
console.log('process.env.MAIL_HOST', process.env.MAIL_HOST)
   const message = `Hi ${data.firstName}, 
   I just received your contact information and your message, I will come back to you as soon as possible on ${data.email}.`;
   console.log("data", data);
   res.json({ success: true, data, message });
};
export default contact;
