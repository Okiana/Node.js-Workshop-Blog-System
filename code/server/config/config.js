let path = require('path')

let rootPath = path.normalize(path.join(__dirname, '/../../'))

module.exports = {
  development: {
    rootPath: rootPath,
    port: 3000
  },
  production: {
    rootPath: rootPath,
    port: process.env.port
  }
}

