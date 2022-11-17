const nodemailer = require('nodemailer')

var correo_origen='liberfitapp@gmail.com';
var password_origen='bduvihpclyoaaiei';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: correo_origen, 
      pass: password_origen, 
    },
    tls: {
      rejectUnauthorized: false
  }
});

  transporter.verify().then(()=>{
    console.log("listo para enviar emails");
  })
  
module.exports={ transporter};