const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')
const compression = require('compression')
const router = require('./src/routes/index')
const logger = require('./src/config/logger')

const app = express()

// set security HTTP headers
app.use(helmet())

// parse json request body
// app.use(express.json())
app.use(bodyParser.json({limit: '1mb'}))
// parse urlencoded request body
// app.use(express.urlencoded({extended: true}))
// extended - 当设置为false时，会使用querystring库解析URL编码的数据；当设置为true时，会使用qs库解析URL编码的数据。
app.use(bodyParser.urlencoded({extended: false}))

// gzip compression
app.use(compression())

// enable cors
app.use(cors())
app.options('*', cors())

app.use((req, res, next) => {
    // log request params
    var params = null
    if (req.method === 'GET') {
        params = JSON.stringify(req.query)
    }
    if (req.method === 'POST') {
        params = JSON.stringify(req.body)
    }

    logger.info(`ip: ${req.ip}, host: ${req.hostname}, url: ${req.url}, params: ${params}`)
    
    next()
})

app.use('/api/v1', router)

module.exports = app