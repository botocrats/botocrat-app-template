import { Commands } from '@botocrat/core'
import { pkg } from '../utils/index.js'
import config from '../../config/app.js'

const sticker = "CAACAgQAAxkBAANlYhGVP9HdPK1ScyYDs7M7F2xZ4tEAAg0OAAKKdohQ1i8j_zvmZEojBA"

export default Commands({
  async start(req, res) {
    return res.send({ sticker })
      .send('Congratulations, you started the bot!')
      .sent.silent.reply({ text: 'Follow @Botocrat for updates.' })
  },
  async version(req, res) {
    return res.send(`Current bot version: ${pkg.version}`)
  }
}, config.username)
