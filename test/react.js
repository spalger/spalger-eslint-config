var expect = require('expect.js')

var getConfig = require('./helpers').getConfig
var baseTests = require('./base')

module.exports = function (fixture){
  describe('React rules', function () {
    it('includes filename extension rule', function () {
      var config = getConfig(fixture)
      expect(config.rules).to.have.property('react/jsx-filename-extension')
      var rule = config.rules['react/jsx-filename-extension']
      expect(rule).to.be.an('array')
      expect(rule[0]).to.be('error')
    })

    baseTests(fixture)
  })
}
