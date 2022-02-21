import Botocrat from '@botocrat/core'
import commands from './commands/index.js'
import { logRequests, onText } from './middlewares/index.js'
import { welcomeNewMembers } from './features/index.js'

export default new Botocrat()
  .use(logRequests)
  .use(onText(/he[l]+o/gm, (req, res, matches) =>
    // regex matches helo, hello, helllllo etc.
    res.reply(`Hi! (${matches.join(', ')})`)
  ))
  .use(commands)

  .on('new_chat_members', welcomeNewMembers)

  .get('message', async (req, res) =>
    await res.delete())
  .get('channel_post', async (req, res) =>
    res.send("Channel Post")
  )
  .get('my_chat_member', async (req, res) =>
    res.delete(1)
  ) 