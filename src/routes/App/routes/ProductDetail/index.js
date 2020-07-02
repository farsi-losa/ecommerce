import { connect } from 'react-redux'
import Component from './Layout/Component'
import { selectors, actions } from '../../redux'

const mapStateToProps = (state) => ({
    getProductList: selectors.getStandardProductList(state),
    getCart: selectors.getCart(state)
})

const mapDispatchToProps = {
    fetchCatalog: actions.fetchCatalog,
    addTocart: actions.addTocart,
    addToWishlist: actions.addToWishlist
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
