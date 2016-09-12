var expect = require('expect.js')

var getConfig = require('./helpers').getConfig

module.exports = function (fixture) {
  describe('Base rules', function () {
    it('includes base rules', function () {
      var config = getConfig(fixture)
      expect(config.rules).to.have.property('max-len')
      expect(config.rules['max-len']).to.have.eql([ 'error', 120 ])
    })

    it('includes babel overrides', function () {
      var config = getConfig(fixture)

      expect(config.rules).to.have.property('generator-star-spacing')
      expect(config.rules['generator-star-spacing'][0]).to.be('off')

      expect(config.rules).to.have.property('babel/generator-star-spacing')
      expect(config.rules['babel/generator-star-spacing']).to.be('error')
    })
  })
}
