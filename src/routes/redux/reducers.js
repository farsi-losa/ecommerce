import clientStorage from '../../clientStorage'
import types from './types'

const initialState = {
  accessToken: clientStorage.getItem('accessToken'),
  // accessToken: 'sdasdasd',
}

const ACTION_HANDLERS = {
  [types.RESET]: () => {
    return JSON.parse(JSON.stringify(initialState))
  },

  [types.SET_ACCESS_TOKEN]: (state, action) => {
    const accessToken = action.accessToken

    if (!accessToken) {
      clientStorage.removeItem('accessToken')
    } else {
      clientStorage.setItem('accessToken', accessToken)
    }

    return {
      ...state,
      accessToken: accessToken || null
    }
  },

  [types.SET_BY_KEY]: (state, payload) => {
    return {
      ...state,
      [payload.key]: payload.value
    }
  }
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
