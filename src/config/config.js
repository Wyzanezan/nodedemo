const path = require('path')
const dotenv = require('dotenv')


dotenv.config({path: path.join(__dirname, '../../.env')})

// 导出之前，还可以对配置数据进行校验，可以使用Joi模块

module.exports = {
    serverPort: process.env.SERVER_PORT,
    db: {
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        database: process.env.MYSQL_DATABASE
    },
    redis: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
}