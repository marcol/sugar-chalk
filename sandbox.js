const { log, done, error } = require('./index')
const { MSG, ERR, OBJ } = require('./__mocks__/mocks')

log(OBJ)
error(ERR)
done(MSG)
