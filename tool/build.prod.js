// More info on Webpack's Node API here: https://webpack.github.io/docs/node.js-api.htmlFor
// Allowing console calls below since this is build file.
/*eslint-disable no-console*/
import fs from 'fs-extra'
import webpack from 'webpack'
import webpackConfig from '../config/webpack.config.prod'
import colors from 'colors'
import path from '../config/path'

const clientInfo = path.asset.client_info

console.log('Generating minified bundle for production via Webpack. This will take a moment...'.blue)

webpack(webpackConfig).run((err, stats) => {
  if (err) { // so a fatal error occurred. Stop here
    console.log(err.bold.red)
    return 1
  }

  const jsonStats = stats.toJson()

  if (jsonStats.hasErrors) {
    return jsonStats.error.map(error => console.log(error.red))
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: '.bold.yellow)
    jsonStats.warning.map(warning => console.log(warning.yellow))
  }

  let {hash, version, assetsByChunkName} = jsonStats

  // Generate JSON file with info about assets.
  writeIntoFile({hash, version, assetsByChunkName}, clientInfo)
    .then(function () {
      console.log('Client info file generated: ', clientInfo)
    },
    function (e) {
      console.log('ERROR: ', e)
    })

  console.log('Webpack generated the following warnings: '.bold.yellow)

  // if we got this far, the build succeded
  console.log('Your app has been compiled in production mode and wittern to: ' + path.output.path + '. It\'s ready to roll!'.green)

  return 0
})

function writeIntoFile (data, file) {
  return new Promise((resolve, reject) => {
    fs.writeJson(file, data, function (err) {
      if (err) {
        reject(err)
      }
      resolve(true)
    })
  })
}
