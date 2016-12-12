import webpack from 'webpack'
import WebpackDevMiddleware from 'webpack-dev-middleware'
import WebpackHotMiddleware from 'webpack-hot-middleware'
import config from '../config/webpack.config'
import reactAppServer from './server'
import Express from 'express'

const compiler = webpack(config)
const app = new Express()
const port = 8080

// Use this middleware to set up hot module reloading via webpack.
app.use(WebpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(WebpackHotMiddleware(compiler))

// This is fired every time the server side receives a request
app.use(reactAppServer)

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`Development ==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})
