const { resolve } = require('path')

module.exports = name =>
  resolve(__dirname, '../../fixtures', name)
