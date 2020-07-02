import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Grid, Icon, Header, } from 'semantic-ui-react'


const productList = (ProductList, props) => {
  return ProductList.map((prod, idx) => {
    return <Link className="item" key={idx} to={{pathname: `/app/detail/${prod.id}`, state: { prevPath: props.location.pathname }}}>
      <span className="wrap-image"><Image avatar src={prod.imageUrl} /></span>
        <span>{prod.title}<br/>{prod.price}</span>
    </Link>
  });
}


function Example(props) {
  const {getCart} = props

  return (
    <div className="cart">
        <Grid className="top-section">
          <Grid.Column width={2} textAlign="center">
            <Link to={props.location.state ? props.location.state.prevPath : '/app/catalog'}  style={{'display': 'block'}}>
              <Icon size="large" name="arrow left"/></Link>
          </Grid.Column>
          <Grid.Column width={14}>
            <Header as='h3'>Purchase History</Header>
          </Grid.Column>
        </Grid>
        <div className="list-item">
          
          {getCart && productList(getCart, props)}
        </div>
      </div>
  );
}

export default Example