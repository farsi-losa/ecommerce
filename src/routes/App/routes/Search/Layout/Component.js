import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Image, Grid, Icon, Input } from 'semantic-ui-react'

const productList = (ProductList, props) => {
  return ProductList.map((prod, idx) => {
    return <Link className="item" key={idx} to={{pathname: `/app/detail/${prod.id}`, state: { prevPath: props.location.pathname }}}>
      <span className="wrap-image"><Image avatar src={prod.imageUrl} /></span>
        <span>{prod.title}<br/>{prod.price}</span>
    </Link>
  });
}

function Search(props) {
  const { getProductList, searchKeyword, getKeyword } = props
  const inputSearch = useRef(null);
  useEffect(() => {
    inputSearch.current.focus();
    return () => {
      // unmount here
    }
  }, [])
  return (
    <div>
      <div className="top-section">
          <Grid className="top-section">
          <Grid.Column width={2} textAlign="center">
            <Link to='/app/catalog' style={{'marginTop':'7px', 'display': 'block'}}>    
              <Icon size="large" name='arrow left' />
            </Link>
          </Grid.Column>
          <Grid.Column width={14}>
            
          <Link to='/app/search'>    
            <Input iconPosition='left' fluid placeholder='Search here'>
              <Icon name='search' />
              <input ref={inputSearch} value={getKeyword} onChange={(e) => searchKeyword(e.target.value)} />
            </Input>
          </Link>
          </Grid.Column>
        </Grid>
      </div>
      <div className='list-item'>
        {productList(getProductList, props)}
      </div>
    </div>
  )
}

export default Search