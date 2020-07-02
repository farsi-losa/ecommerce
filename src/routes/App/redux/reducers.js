import types from './types'

const initialState = {
  catalog: [],
  selected_product: {},
  cart: [],
  search_keyword: '',
  wishList: []
}

const ACTION_HANDLERS = {

  [types.SET_BY_KEY]: (state, payload) => {
    return {
      ...state,
      [payload.key]: payload.value
    }
  },
  [types.ADD_TO_CART]: (state, payload) => {
    let current_cart = JSON.parse(JSON.stringify(state.cart))
    const find_prod = current_cart.findIndex(id => payload.prod_id === id )
    if ( find_prod === -1 ) {
      current_cart.push(payload.prod_id)
    }
    return {
      ...state,
      cart: current_cart
    }
  },
  [types.ADD_WISHLIST_LIST]: (state, payload) => {
    const wish_list = payload.data.filter(prod => prod.loved)
    return {
      ...state,
      wishList: wish_list
    }
  },
  [types.ADD_TO_WISHLIST]: (state, payload) => {
    let current_wishList = JSON.parse(JSON.stringify(state.wishList))
    const find_prod = current_wishList.findIndex(prod => payload.product.id === prod.id )
    if(find_prod === -1 ){
      current_wishList.push(payload.product)
    } else {
      current_wishList = current_wishList.filter(prod => prod.id !== payload.product.id)
    }
    return {
      ...state,
      wishList: current_wishList
    }
  },
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
