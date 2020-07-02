import { connect } from 'react-redux'
import Component from './component'
import { selectors, actions } from '../redux'

const mapStateToProps = (state) => ({
  isAuthenticated: selectors.isAuthenticated(state)
})

const mapDispatchToProps = {
  setAccessToken: actions.setAccessToken
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
