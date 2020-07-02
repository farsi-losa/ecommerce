import MODULE_ID from './config'

const _ = (action) => MODULE_ID + '_' + action

export default {
  FETCH_CATALOG: _('FETCH_CATALOG'),
  ADD_TO_CART: _('ADD_TO_CART'),
  ADD_WISHLIST_LIST: _('ADD_WISHLIST_LIST'),
  ADD_TO_WISHLIST: _('ADD_TO_WISHLIST'),
  SET_BY_KEY: _('SET_BY_KEY'),
}
