import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Grid, Icon, Input, Card } from 'semantic-ui-react'

const productCategory = (category) => {
  return category.map((cat, idx) => {
    return <div key={idx} className='item-category'>
        <img alt="product" src={cat.imageUrl}/>
        {cat.name}
      </div>
  })
}

const productList = (ProductList, props) => {
  
  return ProductList.map((prod, idx) => {
    return <Card fluid key={idx}>
      <Link to={{pathname: `/app/detail/${prod.id}`, state: { prevPath: props.location.pathname }}} >
        <Image src={prod.imageUrl} wrapped ui={false} />
      </Link>
      <Card.Content>
        <Card.Description>
          {prod.title} 
          <div className="favorit" onClick={() => props.addToWishlist(prod)}>
            {prod.loved ? <Icon name="heart"/> : <Icon name="heart outline"/>}
          </div>
        </Card.Description>
      </Card.Content>
    </Card>
  });
}


function Catalog(props) {
  const {getProductList, getCategory} = props

  return (
    <div>
        <Grid className="top-section">
          <Grid.Column width={2} textAlign="center">
            <Icon  style={{'marginTop':'7px', 'display': 'block'}} size="large" name='heart outline' />
          </Grid.Column>
          <Grid.Column width={14}>
            
          <Link to='/app/search'>    
            <Input iconPosition='left' fluid placeholder='Search here'>
              <Icon name='search' />
              <input />
            </Input>
          </Link>
          </Grid.Column>
        </Grid>
        <div className='wrapper-category'>
          {productCategory(getCategory)}
        </div>
        <div className='wrapper-product'>
          {productList(getProductList, props)}
        </div>
      </div>
  );
}

export default Catalog