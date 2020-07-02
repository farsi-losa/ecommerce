import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Catalog from './Catalog'
import Detail from './ProductDetail'
import Cart from './Cart'
import WishList from './WishList'
import Search from './Search'

export default class Layout extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loaded: false
    }
  }

  async componentDidMount () {
    this.setState({
      loaded: true
    })
  }

  render () {
    return this.state.loaded ? (
      
      <Switch>
        <Route exact path='/app/catalog' component={Catalog} />
        <Route exact path='/app/cart' component={Cart} />
        <Route exact path='/app/wishlist' component={WishList} />
        <Route path='/app/detail/:id' component={Detail} />
        <Route path='/app/search' component={Search} />
        <Route component={() => <Redirect to={'/app/catalog'}/>} />
      </Switch>
    ) : null
  }
}

Layout.propTypes = {
}
