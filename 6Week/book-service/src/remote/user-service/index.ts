import axios from 'axios'

//an optional env for host address or localhost default
let baseURL = process.env['LB_USER_SERVICE_HOST'] || 'http://localhost:2006'


export const userServiceBaseClient = axios.create({
    baseURL,
    headers:{
        'Content-Type': 'application/json',
    },
})