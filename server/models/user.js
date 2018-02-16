const crypt = require('../helpers/hashPassword')
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('users', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'email'
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    hooks: {
      beforeUpdate: user => {
        user.password = crypt.crypt(user.password)
      },
      beforeCreate: user => {
        user.password = crypt.crypt(user.password)
      }
    }
  })
}
