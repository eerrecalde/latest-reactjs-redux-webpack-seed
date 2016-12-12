import webpack from 'webpack'
import config from '../config/webpack.config'
import path from '../config/path'
import reactApp from './server'
import Express from 'express'
import compression from 'compression'
import fs from 'fs'
import colors from 'colors'

const app = new Express()
const port = 8080

try {
  const bundle = fs.readFileSync(path.output.server);
} catch (err) {
  if (err.code !== 'ENOENT') throw err;
  console.log('File not found. Did you build first?'.bgWhite.underline.red)
  console.log('Please build first: npm run build'.bgWhite.black)
  throw new Error('File not found');
}

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
