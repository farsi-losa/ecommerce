import React, { Component } from 'react'
import Routes from './routes'
import { Link } from 'react-router-dom'
import { Container, Grid } from 'semantic-ui-react'

export default class Layout extends Component {

  async componentDidMount () {
    this.props.fetchCatalog()
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (
      JSON.stringify(this.props) !== JSON.stringify(nextProps) ||
      JSON.stringify(this.state) !== JSON.stringify(nextState)
    ) {
      return true
    }

    return false
  }

  render () {
    const {getCart} = this.props
    return <Container fluid>
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <Routes />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid textAlign='center' className="bottom-menu" columns={4}>
        <Grid.Row>
          <Grid.Column>
            <Link to='/'>Home</Link>
          </Grid.Column>
          <Grid.Column>
            Feed
          </Grid.Column>
          <Grid.Column>
            <Link to={{pathname: '/app/cart', state: { prevPath: this.props.location.pathname }}}>Cart <b>{getCart.length > 0 && getCart.length}</b></Link>
          </Grid.Column>
          <Grid.Column>
            <Link to={{pathname: '/app/wishlist', state: { prevPath: this.props.location.pathname }}}>Profile</Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  }
}

Layout.propTypes = {}
