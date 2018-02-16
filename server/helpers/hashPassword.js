const bcrypt = require('bcrypt-nodejs')
module.exports = {
  crypt (hash) {
    return bcrypt.hashSync(hash)
  },
  decrypt (pass, hash) {
    return bcrypt.compareSync(pass, hash)
  }
}
