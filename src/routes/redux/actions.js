import request from 'axios'
import types from './types'
import {
  getAccessToken,
} from './selectors'

export const setErrorPage = (errorPage) => {
  return {
    type: types.SET_ERROR_PAGE,
    errorPage: errorPage
  }
}

const config = (accessToken, contentType = 'application/json') => ({
  headers: {
    Authorization: 'Bearer ' + accessToken,
    'content-type': contentType
  }
})

export const callApi = async (req, dispatch) => {
  try {
    const response = await req
    if (typeof (response.data) === 'string') {
      const convert = JSON.parse(response.data)
      return convert
    } else {
      return response.data
    }
  } catch (err) {
    return err
  }
}

export const callApiWrapper = (req) => async (dispatch) => {

  const response = await callApi(req, dispatch)

  return response
}

export const get = (url, args, processId, isSilent = false) => async (dispatch, getState) => {
  if (args === null) {
    args = ''
  }

  const configGet = config(getAccessToken(getState()))
  configGet.data = {}
  configGet.params = args

  const callApi = await dispatch(callApiWrapper(
    request.get(url, configGet),
    processId,
    isSilent
  ))

  return callApi
}


export const post = (url, args, processId, isSilent = false) => async (dispatch, getState) => {
  const callApi = await dispatch(callApiWrapper(
    request.post(url, args, config(getAccessToken(getState()))),
    processId,
    isSilent
  ))
  return callApi
}


export const setAccessToken = (accessToken) => ({
  type: types.SET_ACCESS_TOKEN,
  accessToken: accessToken
})



export const setByKey = (key, value) => (dispatch) => {
  dispatch({
    type: types.SET_BY_KEY,
    key,
    value
  })
}
