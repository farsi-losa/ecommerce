import reducers, { MODULE_ID, actions } from './redux'

import store, { injectAsyncReducer } from 'reduxStore/store'
import { connect } from 'react-redux'
import { selectors } from './redux'
import Component from './Component'

injectAsyncReducer(store, MODULE_ID, reducers)

const mapStateToProps = (state) => ({
    getCart: selectors.getStandardCart(state)
})

const mapDispatchToProps = {
    fetchCatalog: actions.fetchCatalog
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
