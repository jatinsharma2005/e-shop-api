const nodemailer = require("nodemailer")
const dotenv = require("dotenv").config();

const sendEmail = (options) => {
  const transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    port: 465,
    secure: true,
    auth: {
      user: 'geoffrey.crist35@ethereal.email',
      pass:"65QnVvmZADwpHPk9ZF",
    },
    from: process.env.EMAIL_USERNAME
  });

  const mailOptions = {
    from: `my Comany <jatinkumar20056@gmail.com>`,
    to: options.to,
    subject: options.subject,
    html: options.emailhtml,
    text: options?.emailtext || options.emailhtml,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;
