import { log, info, debug, done, pass, warn, error, fail, silent } from './src/index.js'
import mock from './__mocks__/mocks.js'

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
