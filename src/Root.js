import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import configureStore from './reduxStore/ConfigureStore'
import AppRoute from './app'
import App from './App'
const store = configureStore()

const PrivateRoute = ({ component: Component, isAuthenticated }, ...rest) => {
  return <Route {...rest} render={props => (
    isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
}

const Root = ({isAuthenticated}) => (
  <Provider store={store}>
    <Router>
      <PrivateRoute path='/app' component={AppRoute} isAuthenticated={isAuthenticated} />
      <Route path="/" component={App} />
      <Route path="/login" component={App} />
    </Router>
  </Provider>
)

Root.propTypes = {
  isAuthenticated: PropTypes.bool,
  // isVisible: PropTypes.bool
}

  
  export default Root