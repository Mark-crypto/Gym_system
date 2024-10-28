import nodemailer from "nodemailer";
import Mailgen from "mailgen";
import dotenv from "dotenv";
dotenv.config();

let nodeConfig = {
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
};
let transporter = nodemailer.createTransport(nodeConfig);
let MailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "Mailgen",
    link: "https://mailgen.js/",
  },
});

export const sendEmail = (req, res) => {
  const { username, email, text, subject } = req.body;
  //body of the email
  let response = {
    body: {
      name: username,
      intro:
        text ||
        "Welcome to Die Hard Gym we are excited to have you as a new member",
      // action: {
      //   instructions: "Please click the button below to validate your email",
      //   button: {
      //     color: "#22BC66",
      //     text: "Validate your email",
      //     link: "https://mailgen.js/",
      //   },
      // },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
  var emailBody = MailGenerator.generate(response);
  let message = {
    from: process.env.EMAIL,
    to: email,
    subject: subject || "Welcome to Die Hard Gym",
    html: emailBody,
  };
  //send mail
  transporter.sendMail(message, (error, info) => {
    if (error) {
      return res.status(500).send({ error });
    }
    return res
      .status(200)
      .send({ message: "You should receive an email from us." });
  });
};
