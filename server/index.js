require('babel-register')
if(process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
  require('./app.prod.js')
} else {
  require('./app.dev.js')
}
