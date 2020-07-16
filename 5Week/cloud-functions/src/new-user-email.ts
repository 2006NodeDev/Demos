/**
 * Triggered from a message on a Cloud Pub/Sub topic.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */
exports.newUserEmail = (event, context) => {
    const message = event.data
      ? Buffer.from(event.data, 'base64').toString()
      : 'Hello, World';
    console.log(message);
  };
 
  

//for testing the function by mimicing a pub event
let payload = {
    username:'Alec',
    jobTitle:'Complicated'
}
//to mimic the event
let event = {
    data: Buffer.from(JSON.stringify(payload), 'binary')
}

exports.newUserEmail(event)