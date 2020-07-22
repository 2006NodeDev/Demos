//this is where we set up the cloud storage bucket and the like
import {Storage} from '@google-cloud/storage'
//bucket Name
export const bucketName = 'node-dev-2006-image-bucket'

//full http path to that bucket // the base path for images
export const bucketBaseUrl = `https://storage.googleapis.com/${bucketName}`


//bucket itself
export const imageBucket = new Storage().bucket(bucketName)
