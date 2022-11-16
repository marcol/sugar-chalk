const { log, info, debug, done, pass, warn, error, fail, silent } = require('./dist/index.cjs')
const mock = {
  OBJ: { a: 1, b: 2 },
  MSG: 'My test message'
}

log(mock.OBJ)
info(mock.MSG)
debug(mock.MSG)
warn(mock.MSG)
error(mock.MSG)
fail(mock.MSG)
done(mock.MSG)
pass(mock.MSG)
silent(true)
log('Silent mode - should not be visible')
silent(false)
log('Ended silent mode - message should be visible')
