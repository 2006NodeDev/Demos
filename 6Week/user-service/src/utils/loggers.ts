import { configure, getLogger } from 'log4js'



configure({
    appenders: {
        console: { type: 'stdout', layout: { type: 'coloured' } },
        errorFile: { type: 'file', filename: 'logs/errors.log' }
    },
    categories: {
        default: { appenders: ['console'], level: 'ALL' },
        error: { appenders: ['errorFile'], level: 'WARN' }
    }
})

export const logger = getLogger()
export const errorLogger = getLogger('error')