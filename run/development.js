import receiveUpdates from '@botocrat/poller'
import client from '../bot/client.js'
import bot from '../bot/index.js'

receiveUpdates(
  bot,
  client,
  1000,
  (err) => console.log('Polling Error \n', err)
).poll()
