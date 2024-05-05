const nodemailer = require("nodemailer")
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const sendEmail = (options) => {
  const transporter = nodemailer.createTransport({
    host: 'geoffrey.crist35@ethereal.email',
    port: 587, 
    secure: true,
    auth: {
      user: 'geoffrey.crist35@ethereal.email',
      pass:"65QnVvmZADwpHPk9ZF",
    },
    from: 'geoffrey.crist35@ethereal.email'
  });


  const mailOptions = {
    from: `my Comany <jatinkumar20056@gmail.com>`,
    to: options.to,
    subject: options.subject,
    html: options.emailhtml,
    text: options?.emailtext || options.emailhtml,
  };

  transporter.sendMail(mailOptions,  (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;