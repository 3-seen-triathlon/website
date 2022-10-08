import nodemailer from "nodemailer";

// TODO: add environment variables
// sending takes a while - why is this?
// can we have something like an eventbus so that 
// the user can still continue on the website?

const hostname = "";
const username = "";
const password = "";

const transporter = nodemailer.createTransport({
  host: hostname,
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: username,
    pass: password,
  },
  logger: true
});

export default function handler(req: any, res: any) {
  const body = req.body

  console.log('body: ', body)

  if (!body.first || !body.last) {
    return res.status(400).json({ data: 'First or last name not found' })
  }

  transporter.sendMail({
    from: '"Dreiseenstafette" <webmaster@dreiseenstafette.ch>',
    to: 'mischa@ninetyfour.ch',
    subject: 'Email Formular Test',
    text: 'Test der DSS Email API.',
  }, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ data: `${body.first} ${body.last}` });
      return
    }
    console.log(info);
    res.status(200).json({ data: `${body.first} ${body.last}` });
  });
}
