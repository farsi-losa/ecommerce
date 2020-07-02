import { connect } from 'react-redux'
import Component from './Layout/Component'
import { selectors } from '../../redux'

const mapStateToProps = (state) => ({
    getCart: selectors.getStandardCart(state)
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
