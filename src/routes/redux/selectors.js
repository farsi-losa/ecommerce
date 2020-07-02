import { createSelector } from 'reselect'
import MODULE_ID from './config'

const getState = (state) => state[MODULE_ID]

export const getCurrentPath = (state) => state.router.location.pathname
export const getAccessToken = (state) => getState(state).accessToken

export const getCurrentModule = createSelector(
  getCurrentPath,
  (path) => {
    return path
  }
)

export const isAuthenticated = createSelector(
  getAccessToken,
  (accessToken) => {
    return !!accessToken
  }
)
