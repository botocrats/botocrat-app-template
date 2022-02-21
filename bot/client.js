import createClient from '@botocrat/telegram'
import config from '../config/app.js'
import logger from './utils/logger.js'

export default createClient({
  token: config.token,
  debug: (error) => {
    logger.error(JSON.stringify(error))
  },
  interceptor: (method) => {
    method !== 'getUpdates' && logger.info('request:' + method)
  }
})