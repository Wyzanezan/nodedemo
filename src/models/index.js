const config = require('../config/config')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    {
        host: config.db.host,
        dialect: 'mysql',
        dialectOptions: {
            supportBigNumber: true
        },
        operatorsAliases: false
    }
)

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require('./user.model').user(sequelize)


module.exports = db
