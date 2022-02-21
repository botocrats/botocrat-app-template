# Telegram Bot

[![Botocrat][botocrat-img]][botocrat-url]

This bootstrap project has been created to quick start your botocrat development. `utils`, `middlewares` and `commands` are examples that you can remove if you don't need.

## Features

- Hot reloading with [Nodemon][nodemon-url]
- Production supervising with [Forever][forever-url]
- Logging with [Winston][winston-url]

## Installation

```bash
npm i
```

## Development

Obtain a bot token via [BotFather][botfather-url]

Create environment variable `BOT_TOKEN` before start.

```bash
export BOT_TOKEN=012122123:sDKJNkjsdnajkljndkASJKDNLk
```

Bot token is secret and you should never store in a codebase, also you shouldn't share and paste anywhere, especially in Telegram Bot Talk group :)

### Launch development server

```bash
npm start
```

Go to your bot and send `/start` command.

Start development by editing [bot/index.js](bot/index.js) and have fun!

## Production

Edit `config/app.js` for production parameters.

```bash
node run/production
```

You can test webhooks via [ngrok][ngrok-url] to be sure that works.

After uploading to cloud;

### Launch production server

```bash
npm run prod
```

### Terminate production server

```bash
npm run stop
```

[botocrat-img]: https://img.shields.io/badge/powered%20by-Botocrat%20Framework-000033
[botocrat-url]: https://npmjs.com/@botocrat/core
[botfather-url]: https://t.me/BotFather
[forever-url]: https://npmjs.com/package/forever
[winston-url]: https://npmjs.com/package/winston
[nodemon-url]: https://npmjs.com/package/nodemon
[ngrok-url]: https://ngrok.com
