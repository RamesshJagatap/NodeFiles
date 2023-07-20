const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'rjagtap18699@gmail.com', // Your email address
    pass: 'your_password' // Your email password or app password for Gmail
  }
});

// Prepare the email data
const mailOptions = {
  from: 'rjagtap18699@gmail.com', // Sender address
  to: 'jagtapramesh431@example.com', // List of recipients
  subject: 'Hello from Nodemailer', // Subject line
  text: 'Hello, this is a test email sent from Nodemailer!', // Plain text body
  html: '<b>Hello, this is a test email sent from Nodemailer!</b>' // HTML body
};

// Send the email
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
