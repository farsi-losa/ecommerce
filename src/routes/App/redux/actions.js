import { get } from 'routes/redux/actions'
import types from './types'


export const fetchCatalog = () => async (dispatch) => {
  const response = await dispatch(
    get('https://private-4639ce-ecommerce56.apiary-mock.com/home', null, types.FETCH_CATALOG)
  )
  dispatch(setByKey(
    'catalog',
    response
  ))
  dispatch({
    type: types.ADD_WISHLIST_LIST,
    data: response[0].data.productPromo
  })
}

export const addTocart = (prod_id) => async (dispatch) => {
  dispatch({
    type: types.ADD_TO_CART,
    prod_id
  })
}

export const addToWishlist = (product) => async (dispatch) => {
  dispatch({
    type: types.ADD_TO_WISHLIST,
    product
  })
}

export const searchKeyword = (keyword) => async (dispatch) => {
  dispatch(setByKey(
    'search_keyword',
    keyword
  ))
}

export const setByKey = (key, value) => (dispatch) => {
  dispatch({
    type: types.SET_BY_KEY,
    key,
    value
  })
}
