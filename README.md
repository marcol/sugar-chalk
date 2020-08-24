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
import { info } from 'sugar-chalk'

info('Started script', 'Some message', 'Some other message')
warn('This action will take some tile')
error('there was an error running the script')
```

## API
### `chalk('message')`
Alias to [Chalk](https://github.com/chalk/chalk)

### `clear()`
Clears screen.

### `done('message')`
Sends message with prefix DONE.

### `error('message')`
Sends message with prefix ERROR.

### `info('message')`
Sends message with prefix INFO.

### `log('message')`
Log message with prefix LOG.

### `pass('message')`
Sends message with prefix PASS.

### `warn('message')`
Log message with prefix WARN.
