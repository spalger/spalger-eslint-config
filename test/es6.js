const expect = require('expect.js')

const { getConfig } = require('./helpers')
const baseTests = require('./base')

module.exports = fixture => {
  describe('ES6 rules', () => {
    it('does not include react rules', () => {
      const config = getConfig(fixture)
      expect(config.rules).to.not.have.property('react/jsx-filename-extension')
    })

    baseTests(fixture)
  })
}
