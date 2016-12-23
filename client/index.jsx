import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from '../common/store/configureStore'
import AppContainer from '../common/App'
import routes from '../common/router'

console.log('CLIENT', routes)

const preloadedState = window.__PRELOADED_STATE__
//const store = configureStore(preloadedState)
const rootElement = document.getElementById('app')

const basename = (process.env.NODE_ENV && process.env.NODE_ENV === 'gh') ?
  '/latest-reactjs-redux-webpack-seed' : ''

// ========================================================
// Browser History Setup
// ========================================================
const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: '/'
})

// ========================================================
// Store and History Instantiation
// ========================================================
// Create redux store and sync with react-router-redux. We have installed the
// react-router-redux reducer under the routerKey "router" in src/routes/index.js,
// so we need to provide a custom `selectLocationState` to inform
// react-router-redux of its location.
// const initialState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router
})


render(
  <AppContainer
    store={store}
    routes={routes}
    history={history}
  />,
  rootElement
)
