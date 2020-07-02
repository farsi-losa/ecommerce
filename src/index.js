import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './reduxStore/store'
import App from './App'

const target = document.querySelector('#root')

const renderApp = () => {
  render(
    <Provider store={store}>
      <App store={store} />
    </Provider>,
    target
  )
}

renderApp(App)