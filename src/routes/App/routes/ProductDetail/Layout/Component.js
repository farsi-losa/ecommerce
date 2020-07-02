import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Image, Icon, Card, Header } from 'semantic-ui-react'
import {
  WhatsappShareButton,
  WhatsappIcon
} from "react-share";

const findDetail = (id, productList) => {
  return productList.find( prod => prod.id === id)
}

const shareUrl = window.location.href;
const title = 'Please review this product';

function ProductDetail(props) {
  const { match, getProductList, addTocart } = props;
  const [showShareswrapper, setToggleButton] = useState(false);
  let {id} = match.params;
  
  const prod_detail = getProductList ? findDetail(id, getProductList) : {}
  if (prod_detail) {
    return (
      <Card fluid className='product-detail'>
        <Link className='back-icon' to={props.location.state ? props.location.state.prevPath : '/app/catalog'}><Icon size="large" name="arrow left"/></Link>
        <Image src={prod_detail.imageUrl} wrapped ui={false} />
        <Icon size="large" onClick={() => setToggleButton(!showShareswrapper)} className="share-button" name='share alternate'/>
          <div className={`wrapper-button-shares ${showShareswrapper ? 'display' : 'hide'}`}>
            <WhatsappShareButton
                url={shareUrl}
                title={title}
                separator=":: "
                className="Demo__some-network__share-button"
              >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
        <Card.Content>
          <Card.Header>{prod_detail.title} 
          <div className="favorit" onClick={() => props.addToWishlist(prod_detail)}>
            {prod_detail.loved ? <Icon name="heart"/> : <Icon name="heart outline"/>}
          </div>
          </Card.Header>
          <Card.Description>
            {prod_detail.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Header floated='left' size='medium'>{prod_detail.price}</Header>
          <Button onClick={() => addTocart(prod_detail.id)}>
            <Icon name='shop' />
          </Button>
        </Card.Content>
      </Card>
    )
  } else {
    return 'loader'
  }
}

export default ProductDetail