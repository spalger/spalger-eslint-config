const { fixturePath } = require('./helpers')

// tests
require('./base')(fixturePath('es6/index.js'))
require('./es6')(fixturePath('es6/index.js'))
require('./react')(fixturePath('react/components/Home.js'))
