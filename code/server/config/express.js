let express = require('express')
let bodyParser = require('body-parser')
let multer = require('multer')

module.exports = (config, app) => {
  app.set('view engine', 'pug')
  app.set('views', config.rootPath + 'server/views')

  app.use(bodyParser.json())
  // app.use(express.bodyParser({uploadDir:'./uploads'}))
  app.use(express.static(config.rootPath + 'public'))
  app.use(multer({dest: config.rootPath + '/public/images/'}).single('userPhoto'))
}
