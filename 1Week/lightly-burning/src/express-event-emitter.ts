import {EventEmitter} from 'events'

export const expressEvents = {
    newUser: 'NEW_USER'
}

export const expressEventEmitter = new EventEmitter();