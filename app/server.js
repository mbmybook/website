'use strict'

var appConfig = require('./src/appConfig')
var bodyParser = require('body-parser')
var express = require('express')
var fs = require('fs')
var log4js = require('log4js')
var path = require('path')

var app = new express()
app.use(bodyParser.json())

// log4js setup
var logDirectory = path.join(__dirname, 'log')
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
log4js.configure(appConfig.LOG_CONF)
var logger = log4js.getLogger('[server]')
logger.setLevel(appConfig.LOG_LEVEL)
var connectLogger = log4js.getLogger('[connect]')
connectLogger.setLevel(appConfig.LOG_LEVEL)
app.use(log4js.connectLogger(connectLogger, {level: 'auto', format: ':method :url :referrer [status :status] - [:response-time ms]'}))

// if the server started in 'production' mode (on any of our environments), use static build
// if the server started in 'development' mode (on local machine), use the nwb middleware for hot reloading
var middleware
if (process.env.NODE_ENV === 'production') {
  fs.statSync('dist')
  logger.info('Serving static build from dist/')
  middleware = express.static(path.join(__dirname, 'dist'))
} else {
  logger.info('Serving development build with nwb middleware')
  middleware = require('nwb/express')(express)
}

app.get('/logo.png', function(req, res) {
  res.sendfile(path.join(__dirname, 'src/components/shared/img/mb-logo.png'))
})

app.get('/favicon.ico', function(req, res) {
  res.sendfile(path.join(__dirname, 'src/favicon.ico'))
})

// React routing
app.use('/', middleware)
app.use('*', middleware)

// start the server
app.set('port', (process.env.PORT || 80))

app.listen(app.get('port'), function() {
  logger.info('Server started')
})