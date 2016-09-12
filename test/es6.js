var expect = require('expect.js')

var getConfig = require('./helpers').getConfig
var baseTests = require('./base')

module.exports = function (fixture) {
  describe('ES6 rules', function () {
    it('does not include react rules', function () {
      var config = getConfig(fixture)
      expect(config.rules).to.not.have.property('react/jsx-filename-extension')
    })

    baseTests(fixture)
  })
}
