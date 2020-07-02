import { createSelector } from 'reselect'
import MODULE_ID from './config'

const getState = (state) => state[MODULE_ID]

export const getCatalog = (state) => getState(state).catalog
export const getSelectedProduct = (state) => getState(state).selected_product
export const getSearchKeyword = (state) => getState(state).search_keyword
export const getCart = (state) => getState(state).cart
export const getWishList = (state) => getState(state).wishList

export const getStandardCatalog = createSelector(
  getCatalog,
  (catalog) => {
    if(catalog[0]){
      return catalog[0].data
    } else {
      return []
    }
  }
)

export const getStandardCategory = createSelector(
  getStandardCatalog,
  (catalog) => {
    return catalog['category'] || []
  }
)


export const getStandardProductList = createSelector(
  getStandardCatalog,
  getWishList,
  (catalog, wishlist) => {
    if(catalog['productPromo']){
      return catalog['productPromo'].map(prod => {
        const is_loved = wishlist.findIndex(product => product.id === prod.id)
        if(is_loved !== -1){
          prod.loved = true
        } else {
          prod.loved = false
        }
        return prod
      })
    } else {
      return []
    }
  }
)

export const getStandardCart = createSelector(
  getStandardProductList,
  getCart,
  (catalog, cart) => {
    let cart_result = []
    if (catalog) {
      cart.forEach((prod_id, idx) => {
        const is_bought = catalog.findIndex(cat => cat.id === prod_id)
        if(is_bought !== -1 ){
          cart_result.push(catalog[idx])
        }
      });
    }
    return cart_result
  }
)

export const getFilteredListProduct = createSelector(
  getStandardProductList,
  getSearchKeyword,
  (catalog, keyword) => {
    let filtered = catalog.filter(cat => cat.title.toUpperCase().indexOf(keyword.toUpperCase()) > -1)
    return keyword.length === 0 ? [] : filtered
  }
)


export const getWishListProduct = createSelector(
  getStandardProductList,
  (catalog) => {
    let filtered = catalog.filter(cat => cat.loved)
    return filtered
  }
)
