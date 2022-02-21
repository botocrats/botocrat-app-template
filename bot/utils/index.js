import fs from 'fs'
export const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'))

export const linkedUser = ({ first_name, id }) =>
  `[${first_name}](tg://user?id=${id})`

export const createKeyboard = (buttons, perLine=1) => { 
  let inline_keyboard = []
  if (perLine === 1) {
    inline_keyboard = buttons.map(i => [i])
  } else {
    let line = []
    buttons.forEach((button, i) => {
      if (i % perLine === 0) {
        line.length && inline_keyboard.push(line)
        line = []
      }
      line.push(button)
    })
    line.length && inline_keyboard.push(line)
  }
  return JSON.stringify({inline_keyboard})
}

export const MD = (text) => ({ text, parse_mode: 'MarkdownV2' })

