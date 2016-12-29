'use strict'

var env = process.env.NODE_ENV
var logLevel
switch(env) {
  case 'production':
    logLevel = 'INFO'
    break;
  case 'development':
    logLevel = 'ALL'
    break;
  default:
    logLevel = 'ALL'
    break;
}

var log4jsConf = {
  'appenders': [
    {
      'type': 'dateFile',
      'filename': 'log/website.log',
      'pattern': '-yyyy-MM-dd',
      'maxLogSize': 104857600,
      'backups': 3,
      'alwaysIncludePattern': false
    },
    {
      'type': 'console'
    }
  ],
  'replaceConsole': true
}

var appConfig = {
  'EVENTS_URL': 'https://public-api.wordpress.com/rest/v1.1/sites/mbmybook.wordpress.com/posts',
  'LOG_CONF': log4jsConf,
  'LOG_LEVEL': logLevel
}

module.exports = appConfig