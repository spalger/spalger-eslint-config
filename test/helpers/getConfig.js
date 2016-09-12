const CLIEngine = require('eslint').CLIEngine

module.exports = fixture => {
  const cli = new CLIEngine()
  return cli.getConfigForFile(fixture)
}
