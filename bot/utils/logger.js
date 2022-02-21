import { createLogger, transports, format } from 'winston'

const logger = createLogger({
  level: 'info',
  format: format.json(),
  defaultMeta: {
    get timestamp() { return Math.ceil(Date.now() / 1000) }
  },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new transports.File({ filename: 'logs/info.log', level: 'info' }),
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
  ]
})
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.simple(),
  }))
}
export default logger