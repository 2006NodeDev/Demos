import { expressEventEmitter, expressEvents } from "../../express-event-emitter";
import { PubSub, Topic } from '@google-cloud/pubsub'

const pubSubClient = new PubSub()



let userTopic:Topic

(async function getUserTopic(){
    let [topics] = await pubSubClient.getTopics()//get all topics
    userTopic = topics.find((topic)=>{//do gross sideffect bullshit
        return topic.name === 'projects/tenacious-text-279818/topics/user-topic'//match topic name 
    })
})()

expressEventEmitter.on(expressEvents.newUser, (newUser)=>{//wait for new user event
    setImmediate(async ()=>{//makes it async
        try{
            userTopic.publishJSON(newUser)
        }catch(e){
            console.log(e);
        }
        
    })
})





