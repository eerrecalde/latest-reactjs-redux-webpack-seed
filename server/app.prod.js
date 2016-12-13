import config from '../config/webpack.config'
import path from '../config/path'
import reactApp from './server'
import Express from 'express'
import compression from 'compression'
import colors from 'colors'

const port = 8080
const app = new Express()

app.use(compression())

app.use(Express.static(config.output.path))

app.use(reactApp)

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`Production ==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})
