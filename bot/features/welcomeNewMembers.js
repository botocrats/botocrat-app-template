import { MD, linkedUser } from '../utils/index.js'
import logger from '../utils/logger.js'

// Welcomes new users and deletes 'xyz joined to group' message

export default (req, res) => {
  const names = req.new_chat_members
    .map(linkedUser)
    .join(', ')
  const ids = req.new_chat_members
    .map(i => i.id)

  // Logs new members in a chat
  logger.info(`new_chat_members(${req.chat.id}): ${ids}`)
  res.send(MD(`Welcome ${names}\\!`))
    .sent.then(() =>
      res.delete()) // Deletes the service message
}