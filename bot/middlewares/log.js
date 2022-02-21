// logs each incoming update
import logger from '../utils/logger.js'

export default (req, res, next) => {
  logger.info(JSON.stringify(req, null, 1))
  next()
}
