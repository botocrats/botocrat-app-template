import { Commands } from '@botocrat/core'
import { pkg, MD } from '../utils/index.js'

export default Commands({
  async start(req, res) {
    return res.send({ sticker: "CAACAgQAAxkBAANlYhGVP9HdPK1ScyYDs7M7F2xZ4tEAAg0OAAKKdohQ1i8j_zvmZEojBA" })
      .send('Congratulations, you started the bot!')
      .sent.reply({ text: 'Follow @Botocrat for updates.', disable_notification: true })
  },
  async version(req, res) {
    res.send(MD('Current bot version: `' + pkg.version.replace(/\./g, '\\.') + '`'))
  }
})
