// set up pub sub topics
import {PubSub} from '@google-cloud/pubsub'

const pubSubClient = new PubSub()

//definitely easier
//create a local topic object that isn't actually in GCP but can be connected
export const userServiceSubscription = pubSubClient.subscription('book-service-to-user-service')


// export const userTopic2 = getUserTopic()
// //probably better, because it fetchs all the information from gcp about the topic
// async function getUserTopic(){
//     let [topics] = await pubSubClient.getTopics()//get all topics
//     return topics.find((topic)=>{//do gross sideffect bullshit
//         return topic.name === 'projects/tenacious-text-279818/topics/user-service'//match topic name 
//     })
// }