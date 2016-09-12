const expect = require('expect.js')

const { getConfig } = require('./helpers')

module.exports = fixture => {
  describe('Base rules', () => {
    it('includes base rules', () => {
      const config = getConfig(fixture)
      expect(config.rules).to.have.property('max-len')
      expect(config.rules['max-len']).to.have.eql([ 'error', 120 ])
    })

    it('includes babel overrides', () => {
      const config = getConfig(fixture)

      expect(config.rules).to.have.property('generator-star-spacing')
      expect(config.rules['generator-star-spacing'][0]).to.be('off')

      expect(config.rules).to.have.property('babel/generator-star-spacing')
      expect(config.rules['babel/generator-star-spacing']).to.be('error')
    })
  })
}
