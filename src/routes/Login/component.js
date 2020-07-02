import React, { Component } from 'react'
import { Form, Checkbox, Button, Segment, Header, Container} from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';

export default class Layout extends Component {
    autenticated = () => {
        this.setToken('token-sdasdad')
    }

    async setToken (token) {
        const { setAccessToken, setErrorPage } = this.props
        try {
          setAccessToken(token)
        } catch (err) {
          setErrorPage(err)
        }
    }

    responseGoogle = (response) => {
        if(response){
            this.setToken(response.accessToken)
        }
    }

    loginpage = () => {
        return <Container>
            <Segment textAlign='center'>
                <Header>Login</Header>
                <Form>
                    <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                    </Form.Field>
                    <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button primary onClick={() => this.autenticated()}>Submit</Button>
                </Form>
                <br/>
                <GoogleLogin
                    clientId="251357821374-b8ks6tojoj2cckdr7kp3ka7eu04kejsh.apps.googleusercontent.com"
                    buttonText="Login with google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </Segment>
        </Container>
    }
    render() {
        if (!this.props.isAuthenticated) {
            return this.loginpage()
        } else {
            return <Redirect to={{
                pathname: '/app/catalog',
            }} />
        }
    }
}

