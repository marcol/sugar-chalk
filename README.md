[![NPM Downloads](https://img.shields.io/npm/dt/sugar-chalk?logo=npm&style=flat-square)](https://www.npmjs.com/package/sugar-chalk)
[![NPM Version](https://img.shields.io/npm/v/sugar-chalk?logo=npm&style=flat-square)](https://www.npmjs.com/package/sugar-chalk)
[![CI Tests](https://img.shields.io/github/workflow/status/marcol/sugar-chalk/CI?logo=github&style=flat-square)](https://github.com/marcol/sugar-chalk)

# sugar-chalk
Sugar syntax for [Chalk](https://github.com/chalk/chalk)

## Install
```bash
yarn add sugar-chalk --dev
```
or
```bash
npm install sugar-chalk --save-dev
```

## Usage
```js
const { info } = require('sugar-chalk')

info('Started script', 'Some message', 'Some other message')
```

## API
### `chalk('message')`
Alias to [Chalk](https://github.com/chalk/chalk)

### `clear()`
Clears screen.

### `done('message')`
Sends message (`console.info`) with prefix DONE.

### `fail('message')`
Sends message (`console.error`) with prefix FAIL.

### `pass('message')`
Sends message (`console.info`) with prefix PASS.

### `error('message')`
Sends message (`console.error`) with prefix ERROR.

### `info('message')`
Sends message (`console.info`) with prefix INFO.

### `log('message')`
Log message (`console.log`) with prefix LOG and time of the log.

### `debug('message')`
Log message (`console.debug`) with prefix DEBUG.

### `warn('message')`
Log message (`console.warn`) with prefix WARN.

### Suppress logs
You can suppress logs by setting `process.env.TEST` to true.
