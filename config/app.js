const { BOT_TOKEN, URL, PORT } = process.env

export default {
  // Don't edit 7th line;
  // Create environment variable for BOT_TOKEN
  // https://lmgtfy.app/?q=how+to+create+environment+variable
  username: 'MyTelegramBot',
  token: BOT_TOKEN,
  production: {
    url: URL || 'https://',
    port: PORT || 80
  }
}
