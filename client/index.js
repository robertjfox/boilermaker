import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root.js'
import '../public/index.css'
import store from './store.js'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <Root />,
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
)
