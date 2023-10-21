const path = require('path')
const { createLogger, format, transports } = require("winston");


const logger = createLogger({
  format: format.combine(
    format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
    format.printf((info) => {return `${info.level}: ${info.timestamp}: ${info.message}`})
  ),
  transports: [
    new transports.Console(),
    new transports.File({
        filename: path.join(__dirname, '../../logs/server.log'),
        level: "info"
    })
  ]
})


module.exports = logger