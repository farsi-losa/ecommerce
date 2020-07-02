import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createReducers from './reducers'
import thunk from 'redux-thunk'
import history from './history'

export const configureStore = (initialState) => {
  const enhancers = []
  const middleware = [
    thunk,
    routerMiddleware(history)
  ]


  const composer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false
      }) : compose

  const composedEnhancers = composer(
    applyMiddleware(...middleware),
    ...enhancers
  )

  const store = createStore(
    createReducers(history),
    initialState,
    composedEnhancers
  )

  store.asyncReducers = {}

  if (module.hot && process.env.NODE_ENV !== 'production') {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducers(history, store.asyncReducers))
    })
  }

  return store
}

export const injectAsyncReducer = (store, name, asyncReducer) => {
  store.asyncReducers[name] = asyncReducer
  store.replaceReducer(createReducers(history, store.asyncReducers))
}

export default configureStore()
