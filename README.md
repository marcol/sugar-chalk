[![NPM Downloads](https://img.shields.io/npm/dt/sugar-chalk?logo=npm&style=flat-square)](https://www.npmjs.com/package/sugar-chalk)
[![NPM Version](https://img.shields.io/npm/v/sugar-chalk?logo=npm&style=flat-square)](https://www.npmjs.com/package/sugar-chalk)
[![CI Tests](https://img.shields.io/github/actions/workflow/status/marcol/sugar-chalk/.github/workflows/ci.yml?branch=main&logo=github&style=flat-square)](https://github.com/marcol/sugar-chalk)

# sugar-chalk

Sugar syntax for [Chalk](https://github.com/chalk/chalk). Take advantage of the
usage of `console` and send objects, arrays... Make your logs more readable
with a leading tag categorising the type of log.

## Install

```bash
yarn add sugar-chalk --dev
```

or if you are using npm: `npm install sugar-chalk --save-dev`

## Usage

```js
const { info, error } = require('sugar-chalk')

info('Started script', 'Some message', 'Some other message')
info({ a: 1, b:2 })
error(Error)
```

## API

### `chalk`

[Chalk](https://github.com/chalk/chalk) alias.
```js
console.log(chalk.blue('message'))
```

### `clear()`

Clears screen.

### `debug({...*})`

Log message (`console.debug`) with prefix DEBUG.

### `done({...*})`

Sends message (`console.info`) with prefix DONE.

### `error({...*})`

Sends message (`console.error`) with prefix ERROR.

### `fail({...*})`

Sends message (`console.error`) with prefix FAIL.

### `info({...*})`

Sends message (`console.info`) with prefix INFO.

### `log({...*})`

Log message (`console.log`) with prefix LOG and time of the log.

### `pass({...*})`

Sends message (`console.info`) with prefix PASS.

### `silent(true|false)`

Silences logs and receives messages as returns. This is ideal to use with
other tools like ORA.

### `warn({...*})`

Log message (`console.warn`) with prefix WARN.

### Suppressing logs

You can suppress logs by calling silent() or setting `process.env.TEST` to true.

## Development
If you want to develop to the package you need to install the Husky's hooks by
running `yarn husky install` or `npx husky install`.
