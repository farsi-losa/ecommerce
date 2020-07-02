import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Loader } from 'semantic-ui-react'
import clientStorage from 'services/clientStorage'

export default class Layout extends Component {
  componentWillUnmount () {
    clientStorage.removeItem('fromPath')
  }

  componentDidMount () {
    if (!this.props.isAuthenticated) {
      this.setAccessToken()
    }
  }

  async getAccessToken () {
    // eslint-disable-next-line no-undef
    const formData = new FormData()
    formData.append('client_id', CLIENT_ID)
    formData.append('client_secret', CLIENT_SECRET)
    formData.append('code', queryString.parse(this.props.location.search).code)
    formData.append('redirect_uri', REDIRECT_URI)
    formData.append('grant_type', 'authorization_code')
    const result = await request.post(GET_TOKEN_URI, formData, { headers: { 'content-type': 'multipart/form-data' } })
    return result
  }

  async setAccessToken () {
    const { setAccessToken, setErrorPage } = this.props
    try {
      setAccessToken('sdasdasdadsasd')
    } catch (err) {
      setErrorPage(err)
      history.push('/error-page')
    }
  }

  render () {
    return !this.props.isAuthenticated ? (
      <div>
        <Loader active inline='centered' size='large' color={THEME_COLOR}>
          <p>Fetching authorization code.</p>
          <p>Please wait...</p>
        </Loader>
      </div>
    ) : <Redirect to={clientStorage.getItem('fromPath') || '/'} />
  }
}

Layout.propTypes = {
  setErrorPage: PropTypes.func,
  setAccessToken: PropTypes.func,
  location: PropTypes.object,
  isAuthenticated: PropTypes.bool
}
