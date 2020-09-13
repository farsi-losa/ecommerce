import React from 'react'
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import history from 'reduxStore/history'
import LoginRoute from './Login'
import Logout from './Logout'
import AppRoute from './App'

import store, { injectAsyncReducer } from 'reduxStore/store'

import { MODULE_ID, reducers, selectors } from './redux'


import '../styles.scss'

// const PrivateRoute = ({ component: Component, isAuthenticated }, ...rest) => {
//   return <Route {...rest} render={props => (
//     isAuthenticated ? (
//       <Component {...props} />
//     ) : (
//       <Redirect to={{
//         pathname: '/login',
//         state: { from: props.location }
//       }} />
//     )
//   )} />
// }

// PrivateRoute.propTypes = {
//   isAuthenticated: PropTypes.bool,
//   location: PropTypes.object,
//   component: PropTypes.any
// }

const Routes = ({ isAuthenticated = true }) => {

  return (
    <div>
        <Router history={history}>
            <Switch>
            {/* <PrivateRoute path='/app' component={AppRoute} isAuthenticated={isAuthenticated} /> */}
            <AppRoute />
            <Route exact path='/' component={() => <Redirect to={'/app/catalog'} />} />
            <Route exact path='/login' component={LoginRoute} />
            <Route exact path='/logout' component={Logout} />
            </Switch>
        </Router>
    </div>
  )
}

Routes.propTypes = {
  isAuthenticated: PropTypes.bool
}

const createRoutes = () => {
  injectAsyncReducer(store, MODULE_ID, reducers)

  const mapStateToProps = (state) => ({
    isAuthenticated: selectors.isAuthenticated(state),
  })

  const mapDispatchToProps = {}

  return connect(mapStateToProps, mapDispatchToProps)(Routes)
}

export default createRoutes
