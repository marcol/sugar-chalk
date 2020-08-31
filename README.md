[![NPM Downloads](https://img.shields.io/npm/dt/sugar-chalk?logo=npm&style=flat-square)](https://www.npmjs.com/package/sugar-chalk)
[![NPM Version](https://img.shields.io/npm/v/sugar-chalk?logo=npm&style=flat-square)](https://www.npmjs.com/package/sugar-chalk)
[![CI Tests](https://img.shields.io/github/workflow/status/marcol/sugar-chalk/CI?logo=github&style=flat-square)](https://github.com/marcol/sugar-chalk)

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

#### `chalk`

[Chalk](https://github.com/chalk/chalk) alias.
```js
console.log(chalk.blue('message'))
```

#### `clear()`

Clears screen.

#### `done({...*})`

Sends message (`console.info`) with prefix DONE.

#### `fail({...*})`

Sends message (`console.error`) with prefix FAIL.

#### `pass({...*})`

Sends message (`console.info`) with prefix PASS.

#### `error({...*})`

Sends message (`console.error`) with prefix ERROR.

#### `info({...*})`

Sends message (`console.info`) with prefix INFO.

#### `log({...*})`

Log message (`console.log`) with prefix LOG and time of the log.

#### `debug({...*})`

Log message (`console.debug`) with prefix DEBUG.

#### `warn({...*})`

Log message (`console.warn`) with prefix WARN.

#### Suppressing logs

You can suppress logs by setting `process.env.TEST` to true.
