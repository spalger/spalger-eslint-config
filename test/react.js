const expect = require('expect.js')

const { getConfig } = require('./helpers')
const baseTests = require('./base')

module.exports = fixture => {
  describe('React rules', () => {
    it('includes filename extension rule', () => {
      const config = getConfig(fixture)
      expect(config.rules).to.have.property('react/jsx-filename-extension')
      const rule = config.rules['react/jsx-filename-extension']
      expect(rule).to.be.an('array')
      expect(rule[0]).to.be('error')
    })

    baseTests(fixture)
  })
}
