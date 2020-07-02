import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import history from 'reduxStore/history'
import createRoutes from './routes'


const App = () => {
  const Routes = createRoutes()

  return (
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  )
}

export default App
