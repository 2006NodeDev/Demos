//this index is going to be for setting up the base axios client
import axios from 'axios'
import { lbBaseUrl } from '../../environment'


// we will use this object to send off all of the other request we make to the lightlyburning api
export const lightlyburningClient = axios.create({
    baseURL:lbBaseUrl,
    headers:{
        'Content-Type': 'application/json',
    },
})