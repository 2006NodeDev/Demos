import {EventEmitter} from 'events'

//this is a special node js object
//its purpose is to hold event listeners and to send event triggers to those listeners

//we can all the emit() to send an event
//any functions listening to that event on the emitter get triggered in order
export const expressEventEmitter = new EventEmitter()

//definitions for custom events ( mostly so we don't mistype them)
export const customExpressEvents = {
    NEW_USER: 'NEW_USER'
}