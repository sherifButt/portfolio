import nodemailer from "nodemailer";

const contact = async (req, res) => {
   try {
      const data = req.body;

      const message = `Hi ${data.firstName}, 
   I just received your contact information and your message, I will come back to you as soon as possible on ${data.email}.`;

      const mailData = {
         from: process.env.MAIL_USER,
         to: process.env.MAIL_RECEIVER,
         subject: `Message From ${data.firstName} ${data.lastName}`,
         text: data.message + " | Sent from: " + data.email,
         html: `<div>${data.message}</div><p>Sent from:
    ${data.email}</p>`,
      };

      const transporter = await nodemailer.createTransport({
         port: process.env.MAIL_PORT,
         host: process.env.MAIL_HOST,
         auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
         },
         secure: true,
      });

      const info = await transporter.sendMail(mailData);
      console.log(info);
      setTimeout(() => {
         res.status(200).json({ success: true, data, message });
      }, 2000);
   } catch (err) {
      console.error(err);
      res.status(203).json({
         success: false,
         data,
         message: err.response,
         code: err.responseCode,
      });
   }
};
export default contact;
