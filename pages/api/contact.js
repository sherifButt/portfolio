import nodemailer from "nodemailer";

const contact = (req, res) => {
   const data = req.body;
   console.log(
      "data",
      data,

      process.env.MAIL_PORT,
      process.env.MAIL_HOST,
      process.env.MAIL_USER,
      process.env.MAIL_PASSWORD
   );
   const message = `Hi ${data.firstName}, 
   I just received your contact information and your message, I will come back to you as soon as possible on ${data.email}.`;
   const mail = {
      port: process.env.MAIL_PORT,
      host: process.env.MAIL_HOST,
      auth: {
         user: process.env.MAIL_USER,
         //  user: "process.env.MAIL_USER",
         pass: process.env.MAIL_PASSWORD,
      },
      secure: true,
   };

   const transporter = nodemailer.createTransport(mail);
   const mailData = {
      from: "loyalleadsltd@gmail.com",
      to: "sherif.butt@gmail.com",
      subject: `Message From ${data.firstName} ${data.lastName}`,
      text: data.message + " | Sent from: " + data.email,
      html: `<div>${data.message}</div><p>Sent from:
    ${data.email}</p>`,
   };
   transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.error( err );
        
         res.status(201).json({
            success: false,
            data,
            message: err.response,
            code: err.responseCode,
         });
      } else {
        console.log( info );
        
         res.status(200).json({ success: true, data, message });
      }
   });
};
export default contact;
