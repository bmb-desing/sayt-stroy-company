const Sequelize = require('sequelize')
const sequelize = new Sequelize(
  process.env.DATABASE_NAME || 'stroy',
  process.env.DATABASE_USERNAME || 'root',
  process.env.DATABASE_PASSWORD || '',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
)
module.exports = sequelize
