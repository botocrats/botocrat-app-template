
import createMiddleware from '@botocrat/express'
import express from 'express'
import config from '../config/app.js'
import client from '../bot/client.js'
import bot from '../bot/index.js'

const { port, url } = config.production

const botMiddleware = createMiddleware({
  bot, client, url
})

express()
  .use('/' + config.token, botMiddleware)
  .listen(port)

process.once('SIGINT', () => client.deleteWebhook())
process.once('SIGTERM', () => bot.stop('SIGTERM'))