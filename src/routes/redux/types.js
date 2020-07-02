import MODULE_ID from './config'

const _ = (action) => MODULE_ID + '_' + action

export default {
  RESET: _('RESET'),
  SET_ACCESS_TOKEN: _('SET_ACCESS_TOKEN'),
  SET_BY_KEY: _('SET_BY_KEY'),
}
