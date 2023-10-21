const app = require('./app')
const config = require('./src/config/config')
const logger = require('./src/config/logger')

app.listen(config.serverPort, () => {
    logger.info("server start ...")
})