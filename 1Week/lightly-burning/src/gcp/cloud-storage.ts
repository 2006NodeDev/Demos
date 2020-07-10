import {Storage} from '@google-cloud/storage'

export const bucketName = 'node-dev-2006-image-bucket'//process.env['Bucket_name']
export const baseBucketUrl = `https://storage.googleapis.com/${bucketName}`


export const imageBucket = new Storage().bucket(bucketName)


