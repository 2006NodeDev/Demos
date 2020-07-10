import { User } from "../models/User";
import { saveOneUser } from "../daos/user-dao";
import { imageBucket, baseBucketUrl } from "../gcp/cloud-storage";
import { Stream } from "stream";






export async function saveUserService(user: User): Promise<User> {

    let [dataType, imageBase64] = user.image.split(';base64,')
    let contentType = dataType.split('/').pop()

    user.image = `${baseBucketUrl}/${user.username}/profile.${contentType}` //set the path for the file
    let savedUser = await saveOneUser(user) // save the user or error
    try {
        //make a stream to convert the file
        let bufferStream = new Stream.PassThrough();
        bufferStream.end(Buffer.from(imageBase64, 'base64'));

        //make an image in the bucket
        let newImage = imageBucket.file(`${user.username}/profile.${contentType}`)
        //stream the data to the file in the bucket
        bufferStream.pipe(newImage.createWriteStream({
            metadata: {
                contentType//set content Type metadata
            }
        }))
        //successful image save

    } catch (e) {
        console.log(e);
        throw e
    }
    return savedUser

}