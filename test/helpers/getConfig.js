var CLIEngine = require('eslint').CLIEngine

module.exports = function getConfig(fixture) {
  var cli = new CLIEngine()
  return cli.getConfigForFile(fixture)
}
