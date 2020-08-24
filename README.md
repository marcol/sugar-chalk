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

info('Started script')
warn('This action will take some tile')
error('there was an error running the script')
```

## API
### `chalk('message')`
Alias to [Chalk](https://github.com/chalk/chalk)

### `done('message')`
### `error('message')`
### `info('message')`
### `log('message')`
Log message with empty prefix.

### `warn('message')`
