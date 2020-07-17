let nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
  auth: {
    user: process.env['EMAIL'],
    pass: process.env['PASSWORD']
  }
})

const messageTemplate = {
    from: process.env['EMAIL'],
    to: '',
    subject: 'Welcome to Lightly Burning',
    text: 'I hope you have fun with your new account'
}



/**
 * Triggered from a message on a Cloud Pub/Sub topic.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */
exports.newUserEmail = (event, context) => {
    let newUser = JSON.parse(Buffer.from(event.data, 'base64').toString())
    messageTemplate.to = newUser.email
    transporter.sendMail(messageTemplate)
};
 
  

// //for testing the function by mimicing a pub event
// let payload = {
//     username:'Alec',
//     jobTitle:'Complicated',
//     email:'2006nodedev@gmail.com'
// }
// //to mimic the event
// let event = {
//     data: Buffer.from(JSON.stringify(payload), 'binary')
// }

// exports.newUserEmail(event)