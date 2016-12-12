/* eslint-disable no-console, no-use-before-define */

import qs from 'qs'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { match } from 'react-router'
import createMemoryHistory from 'history/lib/createMemoryHistory'
import initialState from '../common/reducer/initialState'
import configureStore from '../common/store/configureStore'
import routes from '../common/router'
import AppContainer from '../common/App'
import Meta from '../common/api/meta'
import Helmet from 'react-helmet'

const reactAppServer = (req, res) => {
  // Query our mock API asynchronously
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {

    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (!renderProps) {
      return
    }

    // Read the counter from the request, if provided
    const params = qs.parse(req.query)
    const params2 = renderProps.params

    // Creates an in-memory history object that does not interact with the
    // browser URL (For server side rendering)
    // https://github.com/reactjs/react-router/blob/master/docs/API.md#creatememoryhistoryoptions
    const memoryHistory = createMemoryHistory(req.url)

    // Create a new Redux store instance
    const store = configureStore(initialState, memoryHistory)

    /////////////////////////
    /* Async data fetching */

    // Get the component tree
    const components = renderProps.components

    // Extract our page component
    const Comp = components[components.length - 1].WrappedComponent

    // Extract `fetchData` if exists
    const fetchData = (Comp && Comp.fetchData) || (() => Promise.resolve())
    /////////////////////////

    // Create an enhanced history that syncs navigation events with the store
    // https://github.com/reactjs/react-router-redux#tutorial
    const history = syncHistoryWithStore(memoryHistory, store, {
      selectLocationState: (state) => state.router
    })

    const { location } = renderProps

    fetchData({ store, location, params, history })
      .then(() => {
        let head = Helmet.rewind()
        head.title = Meta.title.get(location.pathname) || ''
        // Render the component to a string
        const html = renderToString(
          <AppContainer
            store={store}
            routes={routes}
            history={history}
          />
        )

        // Grab the initial state from our Redux store
        const finalState = store.getState()

        // Send the rendered page back to the client
        res.send(renderFullPage(html, head, finalState))
      })
      .catch((err) => {
        console.log('ERROR!!', err)
      })
  })
}

function renderFullPage(html, head, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>${head.title.toString()}</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(initialState).replace(/</g, '\\x3c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `
}

export default reactAppServer
