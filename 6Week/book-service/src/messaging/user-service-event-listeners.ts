import { userServiceSubscription } from ".";



//you can set up filters on messages that use your metadata
//imagine you set metadata saying this is a user update or this is newUser
//your subscriptions could filter to only get particular messages

userServiceSubscription.on('message', (message)=>{
    
    try{
        //to update some reference in the databse because something changed
        //if we succeed
        let parsedData = JSON.parse(Buffer.from(message.data, 'base64').toString())
        console.log(parsedData);
        message.ack()
    }catch(e){
        //must have failed to update db for some reason
        message.nack()
    }
})