import { connect } from 'react-redux'
import Component from './Layout/Component'
import { selectors, actions } from '../../redux'

const mapStateToProps = (state) => ({
    getProductList: selectors.getFilteredListProduct(state),
    getKeyword: selectors.getSearchKeyword(state)
})

const mapDispatchToProps = {
    searchKeyword: actions.searchKeyword
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
