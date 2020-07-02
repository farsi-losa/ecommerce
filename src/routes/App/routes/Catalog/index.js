import { connect } from 'react-redux'
import Component from './Layout/Component'
import { selectors, actions } from '../../redux'

const mapStateToProps = (state) => ({
    getCategory: selectors.getStandardCategory(state),
    getProductList: selectors.getStandardProductList(state)
})

const mapDispatchToProps = {
    fetchCatalog: actions.fetchCatalog,
    addToWishlist: actions.addToWishlist
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
