if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'gh') {
  module.exports = require('./configureStore.prod')
} else {
  module.exports = require('./configureStore.dev')
}
